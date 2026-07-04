// i18n 工具：管理中英文 URL 前缀与导航结构

export type Lang = 'zh' | 'en';

export const defaultLang: Lang = 'zh';

// URL 前缀：英文有 /en 前缀，中文无前缀
export function getLangFromUrl(url: URL): Lang {
  const { pathname } = url;
  if (pathname.startsWith('/en/') || pathname === '/en') return 'en';
  return 'zh';
}

// 根据当前语言生成教程链接路径
export function tutorialPath(slug: string, lang: Lang): string {
  return lang === 'en' ? `/en/tutorial/${slug}` : `/tutorial/${slug}`;
}

// 根据当前语言生成首页路径
export function homePath(lang: Lang): string {
  return lang === 'en' ? '/en' : '/';
}

// 获取另一种语言的对应路径（用于语言切换按钮）
export function getAlternateLangPath(currentUrl: URL): string {
  const lang = getLangFromUrl(currentUrl);
  const { pathname, search, hash } = currentUrl;

  if (lang === 'zh') {
    // 中文 → 英文：在路径前加 /en
    return `/en${pathname}${search}${hash}`;
  } else {
    // 英文 → 中文：去掉 /en 前缀
    const newPath = pathname.replace(/^\/en/, '') || '/';
    return `${newPath}${search}${hash}`;
  }
}

// 教程目录结构（双语）
export interface ChapterInfo {
  slug: string;
  titleZh: string;
  titleEn: string;
  num: number;
}

export interface StageInfo {
  stageZh: string;
  stageEn: string;
  stageNameZh: string;
  stageNameEn: string;
  chapters: ChapterInfo[];
}

export const tutorialStructure: StageInfo[] = [
  {
    stageZh: '第一阶段',
    stageEn: 'Stage 1',
    stageNameZh: 'Java 基础入门',
    stageNameEn: 'Java Fundamentals',
    chapters: [
      { slug: 'stage-01/01-introduction', titleZh: '走进 Java 的世界', titleEn: 'Welcome to the World of Java', num: 1 },
      { slug: 'stage-01/02-syntax', titleZh: '基础语法', titleEn: 'Basic Syntax', num: 2 },
      { slug: 'stage-01/03-operators', titleZh: '运算符', titleEn: 'Operators', num: 3 },
      { slug: 'stage-01/04-control-flow', titleZh: '控制流程', titleEn: 'Control Flow', num: 4 },
      { slug: 'stage-01/05-arrays', titleZh: '数组', titleEn: 'Arrays', num: 5 },
    ],
  },
  {
    stageZh: '第二阶段',
    stageEn: 'Stage 2',
    stageNameZh: '面向对象编程',
    stageNameEn: 'Object-Oriented Programming',
    chapters: [
      { slug: 'stage-02/06-class-object', titleZh: '类与对象', titleEn: 'Classes and Objects', num: 6 },
      { slug: 'stage-02/07-encapsulation', titleZh: '封装', titleEn: 'Encapsulation', num: 7 },
      { slug: 'stage-02/08-inheritance', titleZh: '继承', titleEn: 'Inheritance', num: 8 },
      { slug: 'stage-02/09-polymorphism', titleZh: '多态', titleEn: 'Polymorphism', num: 9 },
      { slug: 'stage-02/10-abstract-interface', titleZh: '抽象类与接口', titleEn: 'Abstract Classes and Interfaces', num: 10 },
      { slug: 'stage-02/11-inner-class', titleZh: '内部类', titleEn: 'Inner Classes', num: 11 },
      { slug: 'stage-02/12-enum-annotation', titleZh: '枚举与注解初识', titleEn: 'Enums and Annotations: An Introduction', num: 12 },
    ],
  },
  {
    stageZh: '第三阶段',
    stageEn: 'Stage 3',
    stageNameZh: 'Java 核心类库',
    stageNameEn: 'Java Core Libraries',
    chapters: [
      { slug: 'stage-03/13-string', titleZh: '字符串', titleEn: 'Strings', num: 13 },
      { slug: 'stage-03/14-wrapper-math', titleZh: '包装类与数学工具', titleEn: 'Wrapper Classes and Math Utilities', num: 14 },
      { slug: 'stage-03/15-datetime', titleZh: '日期时间 API', titleEn: 'Date and Time API', num: 15 },
      { slug: 'stage-03/16-exception', titleZh: '异常处理', titleEn: 'Exception Handling', num: 16 },
      { slug: 'stage-03/17-generics', titleZh: '泛型', titleEn: 'Generics', num: 17 },
    ],
  },
  {
    stageZh: '第四阶段',
    stageEn: 'Stage 4',
    stageNameZh: '集合框架',
    stageNameEn: 'Collections Framework',
    chapters: [
      { slug: 'stage-04/18-collections-overview', titleZh: '集合体系总览', titleEn: 'Collections Framework Overview', num: 18 },
      { slug: 'stage-04/19-list', titleZh: 'List', titleEn: 'List', num: 19 },
      { slug: 'stage-04/20-set', titleZh: 'Set', titleEn: 'Set', num: 20 },
      { slug: 'stage-04/21-map', titleZh: 'Map', titleEn: 'Map', num: 21 },
      { slug: 'stage-04/22-queue-deque', titleZh: 'Queue 与 Deque', titleEn: 'Queue and Deque', num: 22 },
      { slug: 'stage-04/23-collections-utils', titleZh: 'Collections 工具类', titleEn: 'Collections Utility Class', num: 23 },
      { slug: 'stage-04/24-stream-api', titleZh: 'Stream API', titleEn: 'Stream API', num: 24 },
    ],
  },
  {
    stageZh: '第五阶段',
    stageEn: 'Stage 5',
    stageNameZh: '函数式编程',
    stageNameEn: 'Functional Programming',
    chapters: [
      { slug: 'stage-05/25-lambda', titleZh: 'Lambda 表达式', titleEn: 'Lambda Expressions', num: 25 },
      { slug: 'stage-05/26-functional-interfaces', titleZh: '内置函数式接口', titleEn: 'Built-in Functional Interfaces', num: 26 },
      { slug: 'stage-05/27-method-reference', titleZh: '方法引用与构造器引用', titleEn: 'Method and Constructor References', num: 27 },
    ],
  },
  {
    stageZh: '第六阶段',
    stageEn: 'Stage 6',
    stageNameZh: 'I/O 与 NIO',
    stageNameEn: 'I/O and NIO',
    chapters: [
      { slug: 'stage-06/28-file-path', titleZh: 'File 与 Path', titleEn: 'File and Path', num: 28 },
      { slug: 'stage-06/29-byte-stream', titleZh: '字节流', titleEn: 'Byte Streams', num: 29 },
      { slug: 'stage-06/30-char-stream', titleZh: '字符流', titleEn: 'Character Streams', num: 30 },
      { slug: 'stage-06/31-serialization', titleZh: '序列化', titleEn: 'Serialization', num: 31 },
      { slug: 'stage-06/32-nio', titleZh: 'NIO', titleEn: 'NIO', num: 32 },
      { slug: 'stage-06/33-files-advanced', titleZh: 'Files 工具类进阶', titleEn: 'Files Utility: Advanced', num: 33 },
    ],
  },
  {
    stageZh: '第七阶段',
    stageEn: 'Stage 7',
    stageNameZh: '并发编程',
    stageNameEn: 'Concurrent Programming',
    chapters: [
      { slug: 'stage-07/34-concurrency-basics', titleZh: '并发基础', titleEn: 'Concurrency Fundamentals', num: 34 },
      { slug: 'stage-07/35-thread-basics', titleZh: '线程基础', titleEn: 'Thread Basics', num: 35 },
      { slug: 'stage-07/36-thread-safety', titleZh: '线程安全', titleEn: 'Thread Safety', num: 36 },
      { slug: 'stage-07/37-jmm', titleZh: 'Java 内存模型', titleEn: 'Java Memory Model', num: 37 },
      { slug: 'stage-07/38-synchronization', titleZh: '同步机制', titleEn: 'Synchronization Mechanisms', num: 38 },
      { slug: 'stage-07/39-concurrency-problems', titleZh: '并发典型问题', titleEn: 'Common Concurrency Problems', num: 39 },
      { slug: 'stage-07/40-locks', titleZh: '锁与同步器', titleEn: 'Locks and Synchronizers', num: 40 },
      { slug: 'stage-07/41-atomic-cas', titleZh: '原子类与 CAS', titleEn: 'Atomic Classes and CAS', num: 41 },
      { slug: 'stage-07/42-concurrent-collections', titleZh: '并发集合', titleEn: 'Concurrent Collections', num: 42 },
      { slug: 'stage-07/43-thread-pool', titleZh: '线程池', titleEn: 'Thread Pools', num: 43 },
      { slug: 'stage-07/44-completable-future', titleZh: 'CompletableFuture', titleEn: 'CompletableFuture', num: 44 },
      { slug: 'stage-07/45-virtual-threads', titleZh: '虚拟线程与结构化并发', titleEn: 'Virtual Threads and Structured Concurrency', num: 45 },
    ],
  },
  {
    stageZh: '第八阶段',
    stageEn: 'Stage 8',
    stageNameZh: '现代 Java 特性',
    stageNameEn: 'Modern Java Features',
    chapters: [
      { slug: 'stage-08/46-jpms', titleZh: '模块系统', titleEn: 'Module System (JPMS)', num: 46 },
      { slug: 'stage-08/47-records', titleZh: 'Records 记录类', titleEn: 'Records', num: 47 },
      { slug: 'stage-08/48-sealed-classes', titleZh: 'Sealed Classes 密封类', titleEn: 'Sealed Classes', num: 48 },
      { slug: 'stage-08/49-pattern-matching', titleZh: 'Pattern Matching 模式匹配', titleEn: 'Pattern Matching', num: 49 },
      { slug: 'stage-08/50-modern-features', titleZh: '其他现代特性速览', titleEn: 'Other Modern Features at a Glance', num: 50 },
    ],
  },
  {
    stageZh: '第九阶段',
    stageEn: 'Stage 9',
    stageNameZh: 'JVM 深度',
    stageNameEn: 'JVM Deep Dive',
    chapters: [
      { slug: 'stage-09/51-jvm-memory', titleZh: 'JVM 内存模型', titleEn: 'JVM Memory Model', num: 51 },
      { slug: 'stage-09/52-garbage-collection', titleZh: '垃圾回收', titleEn: 'Garbage Collection', num: 52 },
      { slug: 'stage-09/53-class-loading', titleZh: '类加载机制', titleEn: 'Class Loading Mechanism', num: 53 },
      { slug: 'stage-09/54-performance-tuning', titleZh: '性能监控与调优', titleEn: 'Performance Monitoring and Tuning', num: 54 },
      { slug: 'stage-09/55-bytecode', titleZh: '字节码基础', titleEn: 'Bytecode Fundamentals', num: 55 },
    ],
  },
  {
    stageZh: '第十阶段',
    stageEn: 'Stage 10',
    stageNameZh: '反射与注解进阶',
    stageNameEn: 'Reflection and Annotations: Advanced',
    chapters: [
      { slug: 'stage-10/56-reflection', titleZh: '反射机制', titleEn: 'Reflection', num: 56 },
      { slug: 'stage-10/57-dynamic-proxy', titleZh: '动态代理', titleEn: 'Dynamic Proxy', num: 57 },
      { slug: 'stage-10/58-annotation-advanced', titleZh: '注解进阶', titleEn: 'Annotations: Advanced', num: 58 },
    ],
  },
  {
    stageZh: '第十一阶段',
    stageEn: 'Stage 11',
    stageNameZh: '数据库与网络',
    stageNameEn: 'Database and Networking',
    chapters: [
      { slug: 'stage-11/59-jdbc', titleZh: 'JDBC 详解', titleEn: 'JDBC in Depth', num: 59 },
      { slug: 'stage-11/60-connection-pool', titleZh: '连接池', titleEn: 'Connection Pools', num: 60 },
      { slug: 'stage-11/61-network-programming', titleZh: '网络编程', titleEn: 'Network Programming', num: 61 },
      { slug: 'stage-11/62-httpclient', titleZh: 'HttpClient', titleEn: 'HttpClient', num: 62 },
    ],
  },
  {
    stageZh: '第十二阶段',
    stageEn: 'Stage 12',
    stageNameZh: '工程化与生态',
    stageNameEn: 'Engineering and Ecosystem',
    chapters: [
      { slug: 'stage-12/63-maven-gradle', titleZh: '构建工具 Maven / Gradle', titleEn: 'Build Tools: Maven and Gradle', num: 63 },
      { slug: 'stage-12/64-git', titleZh: 'Git 版本控制', titleEn: 'Git Version Control', num: 64 },
      { slug: 'stage-12/65-testing', titleZh: '测试', titleEn: 'Testing', num: 65 },
      { slug: 'stage-12/66-logging', titleZh: '日志框架', titleEn: 'Logging Frameworks', num: 66 },
      { slug: 'stage-12/67-lombok-utils', titleZh: 'Lombok 与常用工具库', titleEn: 'Lombok and Common Utility Libraries', num: 67 },
    ],
  },
  {
    stageZh: '第十三阶段',
    stageEn: 'Stage 13',
    stageNameZh: 'Java Web 与 Spring 生态',
    stageNameEn: 'Java Web and the Spring Ecosystem',
    chapters: [
      { slug: 'stage-13/68-web-basics', titleZh: 'Java Web 基础', titleEn: 'Java Web Fundamentals', num: 68 },
      { slug: 'stage-13/69-spring-core', titleZh: 'Spring 核心', titleEn: 'Spring Core', num: 69 },
      { slug: 'stage-13/70-spring-boot', titleZh: 'Spring Boot', titleEn: 'Spring Boot', num: 70 },
      { slug: 'stage-13/71-data-access', titleZh: '数据访问层', titleEn: 'Data Access Layer', num: 71 },
      { slug: 'stage-13/72-security', titleZh: '安全与认证', titleEn: 'Security and Authentication', num: 72 },
    ],
  },
  {
    stageZh: '第十四阶段',
    stageEn: 'Stage 14',
    stageNameZh: '高级专题与分布式',
    stageNameEn: 'Advanced Topics and Distributed Systems',
    chapters: [
      { slug: 'stage-14/73-design-patterns', titleZh: '设计模式', titleEn: 'Design Patterns', num: 73 },
      { slug: 'stage-14/74-data-structures-algorithms', titleZh: '数据结构与算法', titleEn: 'Data Structures and Algorithms', num: 74 },
      { slug: 'stage-14/75-redis', titleZh: 'Redis', titleEn: 'Redis', num: 75 },
      { slug: 'stage-14/76-message-queue', titleZh: '消息队列', titleEn: 'Message Queues', num: 76 },
      { slug: 'stage-14/77-microservices', titleZh: '微服务', titleEn: 'Microservices', num: 77 },
      { slug: 'stage-14/78-docker-deploy', titleZh: 'Docker 与部署', titleEn: 'Docker and Deployment', num: 78 },
    ],
  },
  {
    stageZh: '第十五阶段',
    stageEn: 'Stage 15',
    stageNameZh: '综合实战项目',
    stageNameEn: 'Comprehensive Project',
    chapters: [
      { slug: 'stage-15/79-project-todo-cli', titleZh: '实战：待办事项 CLI', titleEn: 'Project: Todo CLI', num: 79 },
    ],
  },
  {
    stageZh: '第十六阶段',
    stageEn: 'Stage 16',
    stageNameZh: '面试与进阶',
    stageNameEn: 'Interviews and Advanced Topics',
    chapters: [
      { slug: 'stage-16/80-interview-guide', titleZh: 'Java 面试题精讲', titleEn: 'Java Interview Questions', num: 80 },
    ],
  },
];

// UI 字符串双语
export const uiStrings = {
  zh: {
    siteTitle: 'Java 教程',
    siteSubtitle: '从入门到架构师 · Java 21 LTS',
    searchPlaceholder: '搜索教程...',
    themeToggle: '🌙',
    themeToggleDark: '☀️',
    homeHeroTitle: 'Java 教程',
    homeHeroTagline: '一份优雅、深度、有趣的 Java 21 LTS 中文教程。<br />从零基础到架构师，每一步都有代码可运行、有原理可深究。',
    badgeJava21: 'Java 21 LTS',
    badgeChapters: '80+ 章节',
    badgeOnline: '在线运行',
    badgeOpenSource: '开源免费',
    stageCardPrefix: '从',
    stageCardSuffix: '开始，逐步深入',
    stageCardCount: '章 →',
    prevChapter: '← 上一章',
    nextChapter: '下一章 →',
    chapterPrefix: '第',
    chapterSuffix: '章',
    codeRunnerLabel: 'Java · 在线运行',
    copyBtn: '📋 复制',
    runBtn: '▶ 运行',
    outputHeader: '运行结果',
    running: '运行中...',
    runError: '运行失败',
    copySuccess: '已复制',
    langToggle: 'EN',
    langToggleTitle: 'Switch to English',
  },
  en: {
    siteTitle: 'Java Tutorial',
    siteSubtitle: 'From Beginner to Architect · Java 21 LTS',
    searchPlaceholder: 'Search tutorials...',
    themeToggle: '🌙',
    themeToggleDark: '☀️',
    homeHeroTitle: 'Java Tutorial',
    homeHeroTagline: 'An elegant, in-depth, and engaging Java 21 LTS tutorial.<br />From absolute beginner to architect, with runnable code and deep principles at every step.',
    badgeJava21: 'Java 21 LTS',
    badgeChapters: '80+ Chapters',
    badgeOnline: 'Run Online',
    badgeOpenSource: 'Open Source',
    stageCardPrefix: 'Starting from',
    stageCardSuffix: ', diving deep into',
    stageCardCount: 'chapters →',
    prevChapter: '← Previous',
    nextChapter: 'Next →',
    chapterPrefix: 'Chapter',
    chapterSuffix: '',
    codeRunnerLabel: 'Java · Run Online',
    copyBtn: '📋 Copy',
    runBtn: '▶ Run',
    outputHeader: 'Output',
    running: 'Running...',
    runError: 'Execution failed',
    copySuccess: 'Copied',
    langToggle: '中',
    langToggleTitle: '切换到中文',
  },
};

export function getUiStrings(lang: Lang) {
  return uiStrings[lang];
}
