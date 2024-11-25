import { cache } from "react";
import Hexo from "hexo";
import { join } from "path";

let __SECRET_HEXO_INSTANCE__: Hexo | null = null;

export const initHexo = cache(async (): Promise<Hexo> => {
  if (__SECRET_HEXO_INSTANCE__) {
    return __SECRET_HEXO_INSTANCE__;
  }

  const hexo = new Hexo(join(process.cwd(), 'Hexo'), {
    silent: true,
    drafts: process.env.NODE_ENV !== "production",
  });

  await hexo.init();
  await hexo.load();
  // 在生产环境中，将 Hexo 的 warehouse 中的数据写入文件系统
  if (hexo.env.init && hexo._dbLoaded) {
    await hexo.database.save();
  }
  __SECRET_HEXO_INSTANCE__ = hexo;
  return hexo;
});
