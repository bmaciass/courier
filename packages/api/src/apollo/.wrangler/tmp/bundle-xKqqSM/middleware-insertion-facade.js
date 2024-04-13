				import worker, * as OTHER_EXPORTS from "/home/bmacias/work/projects/courier/packages/api/src/apollo/server.worker.ts";
				import * as __MIDDLEWARE_0__ from "/home/bmacias/work/projects/courier/node_modules/.pnpm/wrangler@3.32.0_@cloudflare+workers-types@4.20240222.0/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts";
import * as __MIDDLEWARE_1__ from "/home/bmacias/work/projects/courier/node_modules/.pnpm/wrangler@3.32.0_@cloudflare+workers-types@4.20240222.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";
				const envWrappers = [__MIDDLEWARE_0__.wrap,__MIDDLEWARE_1__.wrap].filter(Boolean);
				const facade = {
					...worker,
					envWrappers,
					middleware: [
						__MIDDLEWARE_0__.default,__MIDDLEWARE_1__.default,
            ...(worker.middleware ? worker.middleware : []),
					].filter(Boolean)
				}
				export * from "/home/bmacias/work/projects/courier/packages/api/src/apollo/server.worker.ts";

				const maskDurableObjectDefinition = (cls) =>
					class extends cls {
						constructor(state, env) {
							let wrappedEnv = env
							for (const wrapFn of envWrappers) {
								wrappedEnv = wrapFn(wrappedEnv)
							}
							super(state, wrappedEnv);
						}
					};
				

				export default facade;