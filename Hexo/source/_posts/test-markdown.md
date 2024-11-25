---
layout: post
title: Test Markdown
excerpt: 测试 Markdown 和 Latex 渲染器
date: 2024-11-25 11:46:59
---

## 标题

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

---

## 文本样式

- **加粗**: **这是加粗文本**
- *斜体*: *这是斜体文本*
- ~~删除线~~: ~~这是删除线文本~~
- **_组合样式_**: **_这是加粗和斜体组合_**
- 普通文字包含 `行内代码`

---

## 引用

> 这是一个引用段落。
> 
> 你可以在引用中嵌套：
> 
> > 子引用。

---

## 列表

### 无序列表
- 项目 1
  - 子项目 1.1
  - 子项目 1.2
    - 子子项目 1.2.1
- 项目 2

### 有序列表
1. 第一项
2. 第二项
   1. 第二项的子项 1
   2. 第二项的子项 2
3. 第三项

---

## 链接和图片

### 链接
这是一个 [普通链接](https://www.example.com)。

这是一个引用式链接 [Google][1]。

[1]: https://www.google.com "Google's Homepage"

### 图片
![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)

---

## 表格

| 列1       | 列2       | 列3       |
|-----------|-----------|-----------|
| 单元格1   | 单元格2   | 单元格3   |
| **加粗**  | *斜体*    | `代码块`  |
| 超链接    | ![图片][2]| 数学公式 |

[2]: https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg

---

## 任务列表

- [x] 已完成任务
- [ ] 未完成任务
- [ ] 子任务：
  - [x] 子任务 1
  - [ ] 子任务 2

---

## 分隔线

三个或更多的 `-`、`*` 或 `_` 都可以创建分隔线：

---
***
___

---

## 数学公式

### 行内公式
这是行内公式示例：$E=mc^2$。

### 块状公式
$$
\sum_{i=1}^n i = \frac{n(n+1)}{2}
$$

---

## HTML 支持

<p>这是一个段落，包含 <strong>加粗</strong> 和 <em>斜体</em>。</p>

---

## 代码块 支持


```cpp
#include <bits/stdc++.h>
using namespace std;

struct task {
    long long s, t, id;
};

int  n, m;
task tasks[200005];

priority_queue<int, vector<int>, greater<int>>                                  q1;
priority_queue<pair<long long, int>, vector<pair<long long, int>>, greater<pair<long long, int>>> q2;

vector<int> ans[200005];

int main() {

    // freopen("P11289.in", "r", stdin);
    // freopen("P11289.out", "w", stdout);

    cin >> n >> m;

    for (int i = 1; i <= n; i++) {
        cin >> tasks[i].s >> tasks[i].t;
        tasks[i].id = i;
    }

    sort(tasks + 1, tasks + n + 1, [](task a, task b) {
        return a.t < b.t;
    });

    for (int i = 1; i <= m; i++) {
        q1.push(i);
    }

    for (int i = 1; i <= n; i++) {
        auto now = tasks[i];

        while (!q2.empty() && q2.top().first <= now.t) {
            q1.push(q2.top().second);
            q2.pop();
        }

        if (!q1.empty()) {
            ans[q1.top()].push_back(now.id);
            q2.push({now.s + now.t, q1.top()});
            q1.pop();
        } else {
            auto j = q2.top();
            ans[q2.top().second].push_back(now.id);
            q2.pop();
            q2.push({j.first + now.s, j.second});
        }
    }

    for (int i = 1; i <= m; i++) {
        sort(ans[i].begin(), ans[i].end());

        cout << ans[i].size() << ' ';

        for (auto j : ans[i]) {
            cout << j << ' ';
        }
        cout << endl;
    }

    // fclose(stdin);
    // fclose(stdout);

    // system("pause");

    return 0;
}
```

---

## 自动链接

邮箱地址：example@example.com
网址：https://www.example.com

---

## 自动换行

默认情况下，GFM 支持自动换行：
第一行内容  
第二行内容

# LaTeX 渲染测试

这是一个普通的 Markdown 文本，用于测试 LaTeX 的行内和块状渲染。

## 行内公式

以下是一个简单的行内公式：$E=mc^2$，这是著名的爱因斯坦质能方程。

你还可以尝试一些复杂的公式，比如：$a^2 + b^2 = c^2$，这就是勾股定理。

## 块状公式

下面是一个块状公式，用于展示更复杂的数学表达式：

$$
\int_{a}^{b} x^2 \, dx = \frac{1}{3}b^3 - \frac{1}{3}a^3
$$

另一个块状公式示例：

$$
\begin{aligned}
f(x) &= ax^2 + bx + c \\
f'(x) &= 2ax + b \\
f''(x) &= 2a
\end{aligned}
$$

## 列表中的公式

- 行内公式示例：$F=ma$
- 块状公式示例：

  $$
  \sum_{i=1}^{n} i = \frac{n(n+1)}{2}
  $$