module.exports = plop => {
  plop.setGenerator("route", {
    description: "protected server route",
    prompts: [
      {
        type: "list",
        choices: ["protected", "public"],
        name: "protected_or_public",
        message: "public or protected ?",
        default: "public"
      },
      {
        type: "input",
        name: "route_path",
        message: "route path",
        default: "/"
      },
      {
        type: "input",
        name: "route_name",
        message: "Route name"
      },
      {
        type: "list",
        choices: ["post", "get", "delete", "put"],
        name: "http_method",
        message: "HTTP Methods ?",
        default: "get"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/routes/{{protected_or_public}}/{{route_name}}.ts",
        templateFile:
          "plop-templates/register-{{protected_or_public}}-route.hbs.ts"
      },
      {
        type: "append",
        path: "src/index.ts",
        pattern: /\<RouteImports\>/gi,
        template: `import { handleRequest as handle{{pascalCase route_name }}Request, routePath as {{route_name}}Path, middlewares as {{route_name}}Middlewares } from "./routes/{{protected_or_public}}/{{route_name}}"`
      },
      {
        type: "append",
        path: "src/index.ts",
        pattern: /\<ServerRoutes\>/gi,
        template: `server.{{http_method}}({{route_name}}Path,{{route_name}}Middlewares, handle{{pascalCase route_name }}Request);`
      }
    ]
  });
};
