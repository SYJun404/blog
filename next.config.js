/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export", // 启用静态导出
	trailingSlash: true, // 可选：添加尾部斜杠
	images: {
		unoptimized: true, // 禁用 Next.js 图片优化（静态导出需要）
	},
};

module.exports = nextConfig;
