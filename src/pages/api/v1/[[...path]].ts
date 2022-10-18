import { createProxyMiddleware } from "http-proxy-middleware";

export const config = { api: { bodyParser: false } };

export default createProxyMiddleware({
  timeout: 90000,
  target: "/",
  logLevel: "debug",
  changeOrigin: true,
  pathRewrite: {
    "/api/v1/pokedex": "",
  },
  router: {
    "/api/v1/pokedex": process.env.POKEDEX_API,
  },
});
