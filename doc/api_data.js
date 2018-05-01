define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/local",
    "title": "Local signup and login",
    "name": "Local_auth",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "signup",
            "description": "<p>Use this as hidden field for signing up</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Signup",
          "content": "{\n  \"username\": \"smitray1\",\n  \"password\": \"hello\",\n  \"email\": \"so11eme@somew.com\",\n  \"signup\": true\n}",
          "type": "json"
        },
        {
          "title": "Login",
          "content": "{\n  \"username\": \"smitray1\", // Or email address but field name remains 'username'\n  \"password\": \"hello\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.data.token",
            "description": "<p>JWT token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.message",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"token\": \"Bearer [JWT TOKEN]\"\n  },\n  \"message\": \"Loggedin successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Server error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "Email or Username exists",
          "content": "HTTP/1.1 409 Record conflict",
          "type": "json"
        },
        {
          "title": "Wrong credentials",
          "content": "HTTP/1.1 401 Not authorized",
          "type": "json"
        },
        {
          "title": "Wrong form key",
          "content": "HTTP/1.1 422 Unprocessable entity",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/app/modules/auth/controller.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/api/auth/social",
    "title": "Signup or login using facebook, google and twitter",
    "name": "Social_auth",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username from social network</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scId",
            "description": "<p>Social network's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scToken",
            "description": "<p>Social network's token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scType",
            "description": "<p>Social network type. E.g. facebook, twitter, google</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"username\": \"smitray1\",\n  \"email\": \"so11eme@somew.com\",\n  \"scId\": \"12345\",\n  \"scToken\": \"12345\",\n  \"scType\": \"facebook\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "auth",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.data.token",
            "description": "<p>JWT token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.message",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"token\": \"Bearer [JWT TOKEN]\"\n  },\n  \"message\": \"Loggedin successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Server error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        },
        {
          "title": "Email or Username exists",
          "content": "HTTP/1.1 409 Record conflict",
          "type": "json"
        },
        {
          "title": "Wrong credentials",
          "content": "HTTP/1.1 401 Not authorized",
          "type": "json"
        },
        {
          "title": "Wrong form key",
          "content": "HTTP/1.1 422 Unprocessable entity",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server/app/modules/auth/controller.js",
    "groupTitle": "Authentication"
  }
] });
