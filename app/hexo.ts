import { cache } from "react";
import Hexo from "hexo";
import { join } from "path";
import { access } from "fs/promises";

const fileExists = async (path: string): Promise<boolean> => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

let __SECRET_HEXO_INSTANCE__: Hexo | null = null;

// export const initHexo = cache(async (): Promise<Hexo> => {
//   if (__SECRET_HEXO_INSTANCE__) {
//     return __SECRET_HEXO_INSTANCE__;
//   }

//   const hexo = new Hexo(join(process.cwd(), 'Hexo'), {
//     silent: true
//   });

//   await hexo.init();
//   await hexo.load();
//   await hexo.database.save();

//   __SECRET_HEXO_INSTANCE__ = hexo;
//   return hexo;
// });

export const initHexo = cache(async (): Promise<Hexo> => {
  if (__SECRET_HEXO_INSTANCE__) {
    return __SECRET_HEXO_INSTANCE__;
  }
  const hexo = new Hexo(join(process.cwd(), "Hexo"), {
    // silent: true,
  });

  // Hexo 的 warehouse 的 JSON 写入文件系统的路径
  const dbPath = join(process.cwd(), "Hexo", "db.json");

  await hexo.init();
  await hexo.load();

  if (hexo.env.init && hexo._dbLoaded) {
    if (!(await fileExists(dbPath))) {
      await hexo.database.save();
    }
  }
  
  __SECRET_HEXO_INSTANCE__ = hexo;
  return hexo;
});
