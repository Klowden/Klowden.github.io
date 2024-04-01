/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	appDirectory: "app",
	ignoredRouteFiles: ["**/.*"],
	watchPaths: ["./public", "./.env"],
	publicPath:
		process.env.NODE_ENV === "production" ? "/<repository-name>/" : "/",
}
