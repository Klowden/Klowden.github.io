/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	appDirectory: "app",
	watchPaths: ["./public", "./.env"],
	publicPath:
		process.env.NODE_ENV === "production" ? "/<klowden.github.io>/" : "/",
}
