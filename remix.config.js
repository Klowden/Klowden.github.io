/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	appDirectory: "app",
	ignoredRouteFiles: ["**/.*"],
	watchPaths: ["./public", "./.env"],
	serverBuildTarget: "netlify",
	server: "./server.js",
	publicPath:
		process.env.NODE_ENV === "production" ? "/<klowden.github.io>/" : "/",
}
