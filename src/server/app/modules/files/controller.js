import { generate } from 'shortid';
import { join } from 'path';
import fs from 'fs-extra';
import config from 'config';

import { filesCrud, filesModel } from './files.model';


let filesNew;

const fileUpload = async (file) => {
  const ext = (file.name).split('.');
  const newFilename = `${Date.now()}-${generate()}.${ext[1]}`;
  const filePath = join(config.get('paths.static'), newFilename);
  try {
    await fs.copy(file.path, filePath);
  } catch (e) {
    console.log(e); //eslint-disable-line
  }
  return newFilename;
};

const bulkUpdate = options => new Promise((resolve, reject) => {
  filesModel.insertMany(options).then((result) => {
    resolve(result);
  }).catch((err) => {
    reject(err);
  });
});


const filesCreate = async (ctx) => {
  const rawFiles = ctx.request.body.files.docs;
  const fileNames = [];
  let filename;
  if (rawFiles instanceof Array) {
    await Promise.all(rawFiles.map(async (file) => {
      filename = await fileUpload(file);
      fileNames.push({
        filename,
        permalink: `/public/${filename}`
      });
    }));

    try {
      filesNew = await bulkUpdate(fileNames);
    } catch (e) {
      ctx.throw(422, {
        success: 0,
        message: e.message
      });
    } finally {
      ctx.body = {
        success: 1,
        data: {
          files: filesNew
        },
        message: 'All files uploaded'
      };
    }
  } else {
    filename = await fileUpload(rawFiles);
    try {
      filesNew = await filesCrud.create({
        filename,
        permalink: `/public/${filename}`
      });
    } catch (e) {
      ctx.throw(422, e.message);
    } finally {
      ctx.body = {
        success: 1,
        data: {
          files: filesNew
        },
        message: 'File uploaded'
      };
    }
  }
};

export default filesCreate;
