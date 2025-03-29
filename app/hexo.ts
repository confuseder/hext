import { cache } from "react";
import Hexo from "hexo";
import { join } from "path";

let __SECRET_HEXO_INSTANCE__: Hexo | null = null;

export const initHexo = cache(async (): Promise<Hexo> => {
  if (__SECRET_HEXO_INSTANCE__) {
    return __SECRET_HEXO_INSTANCE__;
  }

  console.log("----Build Hexo----");

  const hexo = new Hexo(join(process.cwd(), 'Hexo'), {
    silent: true
  });

  await hexo.init();
  await hexo.load();
  await hexo.database.save();

  __SECRET_HEXO_INSTANCE__ = hexo;
  return hexo;
});
