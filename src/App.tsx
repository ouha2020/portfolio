import { useEffect, useMemo, useState, type MouseEvent } from "react";
import "./styles.css";

type Locale = "ja" | "zh";
type ArchTab = "01" | "02" | "03";

type ProjectItem = {
  num: "01" | "02" | "03";
  title: string;
  desc: string;
  tags: string;
};

type LearningCategory = {
  no: string;
  title: string;
  count: number;
  items: string[];
};

type CopyBlock = {
  navWork: string;
  navArch: string;
  navCerts: string;
  navStack: string;
  navContact: string;
  bridgeCaption: string;
  heroTitleA: string;
  heroTitleB: string;
  heroTitleC: string;
  heroSub: string;
  chipRole1: string;
  chipRole2: string;
  chipRole3: string;
  secWork: string;
  secArch: string;
  archTab1: string;
  archTab2: string;
  archTab3: string;
  archIntro: string;
  archIntro2: string;
  resultsRunning: string;
  resultsTitle: string;
  resultsIntro: string;
  resultShotLabels: string[];
  resultsTitle1: string;
  resultsIntro1: string;
  resultShotLabels1: string[];
  secCerts: string;
  certLearning: string;
  learnTitle: string;
  learnLead: string;
  learnIntro: string;
  learnUnit: string;
  learnCats: LearningCategory[];
  secStack: string;
  secContact: string;
  contactNote: string;
  projects: ProjectItem[];
};

const storageKey = "andy-personal-site-locale";
const accent = "#0078d4";
const assetBase = "/assets/generated/";

const copy: Record<Locale, CopyBlock> = {
  ja: {
    navWork: "専門領域",
    navArch: "アーキテクチャ",
    navCerts: "資格・認定",
    navStack: "技術スタック",
    navContact: "連絡先",
    bridgeCaption: "ビジネスと技術をつなぐ",
    heroTitleA: "ビジネスと技術を、",
    heroTitleB: "つなぐ",
    heroTitleC: "エンジニア。",
    heroSub:
      "ビジネス価値を起点に、AI・Microsoft Azure・Dynamics 365・クラウドネイティブ技術を融合し、業務分析からAIアプリケーション開発、企業のデジタル変革、クラウドプラットフォーム構築まで一貫して支援。高い信頼性・拡張性を備えた、継続的に価値を生み出すエンタープライズソリューションを提供します。",
    chipRole1: "クラウドネイティブ & Azure",
    chipRole2: "フルスタック開発",
    chipRole3: "Dynamics 365 F&O",
    secWork: "専門領域",
    secArch: "アーキテクチャ",
    archTab1: "端到端 CI/CD",
    archTab2: "AKS + Dify PoC",
    archTab3: "学習中コンテンツ",
    archIntro:
      "専門領域 01「Kubernetes エンドツーエンド CI/CD」の全体構成図。Jira の課題起票から CI/CD パイプライン、AKS でのデプロイ、監視・GitOps まで。",
    archIntro2:
      "専門領域 02「Azure AKS + Dify PoC 基盤」の構成図。ingress-nginx から Dify の各コンポーネント、Redis・Weaviate、Azure マネージドサービスと Key Vault CSI による Secret 同期まで。",
    resultsRunning: "稼働中",
    resultsTitle: "実際の稼働環境",
    resultsIntro:
      "Azure AKS 上に Dify をデプロイし、LLM ワークフローを構築・稼働させた PoC 環境の実画面。",
    resultShotLabels: [
      "AKS ワークロード：Dify 各コンポーネントが全て正常稼働",
      "Dify スタジオ：アプリ作成・チャットフロー",
      "LLM ワークフローのオーケストレーション",
    ],
    resultsTitle1: "パイプラインの実行結果",
    resultsIntro1:
      "Jenkins パイプラインが Checkout から Helm 更新まで全ステージ成功、SonarQube の品質ゲートもパスし、Argo CD で GitOps 同期が完了した実画面。",
    resultShotLabels1: [
      "Jenkins パイプライン：全ステージが正常完了（2m1s）",
      "SonarQube：品質ゲート Passed（バグ・脆弱性 0）",
      "Argo CD：GitOps 同期完了（Synced / Healthy）",
      "Grafana + Loki：ログの集中管理と可視化",
    ],
    secCerts: "資格・認定",
    certLearning: "ビジネスアプリケーション領域へ拡張中",
    learnTitle: "学習中コンテンツ",
    learnLead: "LEARNING IN PROGRESS",
    learnIntro:
      "Dynamics 365 Finance & Operations の業務知識と導入・運用スキルを、実機操作を中心に 9 領域・約 50 テーマで体系的に学習中。",
    learnUnit: "テーマ",
    learnCats: [
      {
        no: "01",
        title: "財務レポート・分析",
        count: 7,
        items: ["財務レポートで損益計算書のトレンド・連結", "Power BI + Entity Store で売上分析を埋め込み", "前払金の開票・決済フロー"],
      },
      {
        no: "02",
        title: "買掛・売掛（AP / AR）",
        count: 8,
        items: ["仕入発注の登録・プール・承認フロー", "発注照合（総額 / 2-way / 3-way）", "受注から回収（O2C）端末フロー"],
      },
      {
        no: "03",
        title: "購買〜支払（P2P）・SCM",
        count: 5,
        items: ["P2P 端末フローの実演", "承認済みベンダーのみ許可", "Min/Max でのマスタープラン実行"],
      },
      {
        no: "04",
        title: "固定資産（FA）",
        count: 8,
        items: ["購入・在庫からの取得", "日割・提案による減価償却", "売却・廃棄・振替処理"],
      },
      {
        no: "05",
        title: "総勘定元帳（GL）・会計統制",
        count: 3,
        items: ["仕訳の逆仕訳（冲消）", "担当者ごとの転記制限", "取引先・資産番号の採番規則"],
      },
      {
        no: "06",
        title: "プロジェクト管理・会計（PM）",
        count: 2,
        items: ["モジュールの前提条件設定", "見積から開票までのフロー"],
      },
      {
        no: "07",
        title: "システム設定・データ・効率化",
        count: 8,
        items: ["DMF + Excel アドインでデータ管理", "標準ワークフロー設定", "法人ごとの SSRS レポート書式"],
      },
      {
        no: "08",
        title: "会社間会計・配賦・経費",
        count: 2,
        items: ["配賦条件の定義と利用", "会社間経費会計の設定・処理"],
      },
      {
        no: "09",
        title: "SAP S/4HANA vs D365 比較",
        count: 4,
        items: ["発注作成・入荷フローの比較", "仕入発注処理の比較", "発注冲消（クレジット）の比較"],
      },
    ],
    secStack: "技術スタック",
    secContact: "連絡先",
    contactNote: "プロジェクトのご相談、技術交流など、お気軽にご連絡ください。",
    projects: [
      {
        num: "01",
        title: "Kubernetes エンドツーエンド CI/CD",
        desc:
          "CI/CD ツールチェーン全体を AKS 上に構築。Jira 連携によるブランチ作成・マージの自動化、弾性ビルドノードによる動的スケール、Docker in Docker を実践。",
        tags: "AKS · Jenkins · GitLab · Jira · Terraform",
      },
      {
        num: "02",
        title: "Azure AKS + Dify PoC 基盤",
        desc:
          "Dify を生成 AI アプリケーション開発基盤として活用し、LLM ワークフロー、プロンプト管理、AI エージェント機能を提供。Azure AKS とマネージドサービスを組み合わせ、安全性・拡張性・運用性を備えた PoC 環境を実現。",
        tags: "Azure · AKS · Dify · LLM · Terraform",
      },
      {
        num: "03",
        title: "Dynamics 365 F&O 導入・運用",
        desc:
          "財務会計、購買・在庫管理、固定資産、プロジェクト管理、会社間取引、システム設定など、Dynamics 365 Finance & Operations の業務知識と導入・運用スキルを体系的に学習中。",
        tags: "X++ · SSRS Report · Batch",
      },
    ],
  },
  zh: {
    navWork: "专业领域",
    navArch: "系统架构",
    navCerts: "资质认证",
    navStack: "技术栈",
    navContact: "联系方式",
    bridgeCaption: "连接业务与技术",
    heroTitleA: "连接业务与技术的",
    heroTitleB: "工程师",
    heroTitleC: "。",
    heroSub:
      "以业务价值为导向，融合 AI、Azure、Dynamics 365 与云原生技术，从业务分析到 AI 应用开发、企业数字化和云平台建设，打造高可靠、可扩展、持续创造价值的现代企业级解决方案。",
    chipRole1: "云原生 & Azure",
    chipRole2: "全栈开发",
    chipRole3: "Dynamics 365 F&O",
    secWork: "专业领域",
    secArch: "系统架构",
    archTab1: "端到端 CI/CD",
    archTab2: "AKS + Dify PoC",
    archTab3: "学习中内容",
    archIntro:
      "专业领域 01「基于 Kubernetes 的端到端 CI/CD」的整体架构图。从 Jira 需求创建到 CI/CD 流水线、AKS 部署、监控与 GitOps 全流程。",
    archIntro2:
      "专业领域 02「Azure AKS + Dify PoC 平台」的架构图。从 ingress-nginx 到 Dify 各组件、Redis 与 Weaviate、Azure 托管服务，以及 Key Vault CSI 驱动的 Secret 同步。",
    resultsRunning: "运行中",
    resultsTitle: "实际运行环境",
    resultsIntro: "在 Azure AKS 上部署 Dify、构建并运行 LLM 工作流的 PoC 环境实际界面。",
    resultShotLabels: ["AKS 工作负载：Dify 各组件均正常运行", "Dify 工作台：应用创建与对话流", "LLM 工作流的编排编辑"],
    resultsTitle1: "流水线运行结果",
    resultsIntro1:
      "Jenkins 流水线从 Checkout 到 Helm 更新全阶段成功，SonarQube 质量门禁通过，Argo CD 完成 GitOps 同步的实际界面。",
    resultShotLabels1: [
      "Jenkins 流水线：全阶段正常完成（2m1s）",
      "SonarQube：质量门禁 Passed（Bug・漏洞 0）",
      "Argo CD：GitOps 同步完成（Synced / Healthy）",
      "Grafana + Loki：日志集中管理与可视化",
    ],
    secCerts: "资质认证",
    certLearning: "正在向业务应用领域扩展",
    learnTitle: "学习中内容",
    learnLead: "LEARNING IN PROGRESS",
    learnIntro:
      "系统学习 Dynamics 365 Finance & Operations 的业务知识与实施运维技能，以实机操作为中心，覆盖 9 大领域、约 50 个专题。",
    learnUnit: "个专题",
    learnCats: [
      {
        no: "01",
        title: "财务报表与分析",
        count: 7,
        items: ["财务报表配置利润表趋势与合并", "Power BI + Entity Store 嵌入销售分析", "预付款开票与结算流程"],
      },
      {
        no: "02",
        title: "应付应收（AP / AR）",
        count: 8,
        items: ["发票登记・池・审批流程", "发票匹配（总额 / 两方 / 三方）", "订单到回款（O2C）端到端"],
      },
      {
        no: "03",
        title: "采购到付款（P2P）・SCM",
        count: 5,
        items: ["P2P 端到端流程演示", "仅允许从已批准供应商订货", "Min/Max 下运行主计划"],
      },
      {
        no: "04",
        title: "固定资产（FA）",
        count: 8,
        items: ["通过采购・库存取得资产", "按日与折旧建议折旧", "出售・报废・金额转移处理"],
      },
      {
        no: "05",
        title: "总账（GL）・会计控制",
        count: 3,
        items: ["总账凭证冲销", "限制过账到指定科目", "供应商・资产编号规则"],
      },
      {
        no: "06",
        title: "项目管理与会计（PM）",
        count: 2,
        items: ["模块前置条件设置", "报价到开票流程"],
      },
      {
        no: "07",
        title: "系统配置・数据・效率工具",
        count: 8,
        items: ["DMF + Excel 插件管理数据", "标准工作流配置", "按法人配置 SSRS 报表格式"],
      },
      {
        no: "08",
        title: "公司间会计・分摊・费用",
        count: 2,
        items: ["分摊条款的定义与使用", "公司间费用会计设置与处理"],
      },
      {
        no: "09",
        title: "SAP S/4HANA vs D365 对比",
        count: 4,
        items: ["创建采购订单・收货对比", "供应商发票处理对比", "采购发票冲销对比"],
      },
    ],
    secStack: "技术栈",
    secContact: "联系方式",
    contactNote: "项目合作、技术交流，欢迎随时联系。",
    projects: [
      {
        num: "01",
        title: "基于 Kubernetes 的端到端 CI/CD",
        desc:
          "CI/CD 工具链完全部署在 AKS 中。Jira 需求管理驱动分支创建与合并自动化，弹性构建动态节点，Docker in Docker 实践。",
        tags: "AKS · Jenkins · GitLab · Jira · Terraform",
      },
      {
        num: "02",
        title: "Azure AKS + Dify PoC 平台",
        desc:
          "以 Dify 作为生成式 AI 应用开发平台，提供 LLM 工作流、提示词管理与 AI Agent 能力。结合 Azure AKS 与托管服务，构建兼具安全性、可扩展性与可运维性的云原生 PoC 环境。",
        tags: "Azure · AKS · Dify · LLM · Terraform",
      },
      {
        num: "03",
        title: "Dynamics 365 F&O 实施与运维",
        desc:
          "系统学习财务会计、采购与库存管理、固定资产、项目管理、公司间交易、系统配置等 Dynamics 365 Finance & Operations 的业务知识与实施运维技能。",
        tags: "X++ · SSRS Report · Batch",
      },
    ],
  },
};

const stackItems = [
  { name: "Jira", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
  { name: "GitLab", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
  { name: "Jenkins", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Helm", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg" },
  { name: "ArgoCD", img: "https://cdn.simpleicons.org/argo/EF7B4D" },
  { name: "Terraform", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { name: "Kubernetes", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
  { name: "Azure", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "AWS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Grafana", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
  { name: "Dynamics 365", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "Claude Code", img: "https://cdn.simpleicons.org/anthropic/D97757" },
  { name: "Codex", img: `${assetBase}openai.svg` },
];

const certificationItems = [
  {
    image: `${assetBase}image42.png`,
    title: "Certified Kubernetes Administrator",
    meta: "CKA · CNCF · 2022",
  },
  {
    image: `${assetBase}image43.png`,
    title: "Certified Kubernetes Security Specialist",
    meta: "CKS · CNCF · 2023",
  },
  {
    image: `${assetBase}cert-d365-erp.png`,
    title: "Microsoft Certified: Dynamics 365 Fundamentals (ERP)",
    meta: "MB-920 · Microsoft · 2025",
  },
];

function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return "ja";
  }
  const stored = window.localStorage.getItem(storageKey);
  return stored === "zh" || stored === "ja" ? stored : "ja";
}

function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) {
    return;
  }
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function App() {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);
  const [arch, setArch] = useState<ArchTab>("01");
  const t = copy[locale];

  useEffect(() => {
    document.documentElement.lang = locale === "ja" ? "ja" : "zh-CN";
    document.title = locale === "ja" ? "Andy | Cloud Native x Business" : "Andy | 云原生与业务技术作品集";
    window.localStorage.setItem(storageKey, locale);
  }, [locale]);

  const resultShots = useMemo(() => {
    if (arch === "01") {
      return [
        { img: `${assetBase}cicd-shot-1-jenkins.png`, host: "jenkins · pipeline", label: t.resultShotLabels1[0] },
        { img: `${assetBase}cicd-shot-2-sonarqube.png`, host: "sonarqube", label: t.resultShotLabels1[1] },
        { img: `${assetBase}cicd-shot-3-argocd.png`, host: "argo-cd", label: t.resultShotLabels1[2] },
        { img: `${assetBase}cicd-shot-4-loki.png`, host: "grafana · explore", label: t.resultShotLabels1[3] },
      ];
    }

    return [
      { img: `${assetBase}dify-shot-1-workload.png`, host: "portal.azure.com", label: t.resultShotLabels[0] },
      { img: `${assetBase}dify-shot-2-create.png`, host: "dify · apps", label: t.resultShotLabels[1] },
      { img: `${assetBase}dify-shot-3-flow.png`, host: "dify · studio", label: t.resultShotLabels[2] },
    ];
  }, [arch, t]);

  const learnTotal = useMemo(() => t.learnCats.reduce((sum, item) => sum + item.count, 0), [t.learnCats]);

  const onNavClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    window.history.pushState(null, "", `#${id}`);
    scrollToSection(id);
  };

  const showArchitecture = arch === "01" || arch === "02";
  const archImage = arch === "01" ? `${assetBase}architecture.png` : `${assetBase}architecture-02-dify.png`;
  const archIntro = arch === "01" ? t.archIntro : t.archIntro2;
  const resultsTitle = arch === "01" ? t.resultsTitle1 : t.resultsTitle;
  const resultsIntro = arch === "01" ? t.resultsIntro1 : t.resultsIntro;

  const activateArch = (next: ArchTab) => {
    setArch(next);
    window.history.pushState(null, "", "#arch");
    window.setTimeout(() => scrollToSection("arch"), 0);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={(event) => onNavClick(event, "top")}>
          <LogoMark />
          <span className="brand-copy">
            <strong>Andy</strong>
            <em>CLOUD NATIVE × BUSINESS</em>
          </span>
        </a>

        <nav className="main-nav" aria-label="Primary navigation">
          <a href="#work" onClick={(event) => onNavClick(event, "work")}>
            {t.navWork}
          </a>
          <a href="#arch" onClick={(event) => onNavClick(event, "arch")}>
            {t.navArch}
          </a>
          <a href="#certs" onClick={(event) => onNavClick(event, "certs")}>
            {t.navCerts}
          </a>
          <a href="#stack" onClick={(event) => onNavClick(event, "stack")}>
            {t.navStack}
          </a>
          <a className="nav-contact" href="#contact" onClick={(event) => onNavClick(event, "contact")}>
            {t.navContact}
          </a>
          <div className="language-toggle" aria-label="Language selector">
            <button className={locale === "ja" ? "active" : ""} type="button" onClick={() => setLocale("ja")}>
              日本語
            </button>
            <button className={locale === "zh" ? "active" : ""} type="button" onClick={() => setLocale("zh")}>
              中文
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="top" className="hero-section">
          <div className="hero-gradient" aria-hidden="true" />
          <div className="hero-bridge" aria-label={t.bridgeCaption}>
            <div>
              <span>BUSINESS</span>
              <i />
              <strong>TECHNOLOGY</strong>
            </div>
            <p>{t.bridgeCaption}</p>
          </div>

          <div className="hero-inner">
            <div className="hero-badge">
              <span />
              CLOUD NATIVE · AZURE · FULL-STACK
            </div>
            <h1>
              {t.heroTitleA}
              <span>{t.heroTitleB}</span>
              {t.heroTitleC}
            </h1>
            <p>{t.heroSub}</p>
            <div className="hero-chips">
              <span>{t.chipRole1}</span>
              <span>{t.chipRole2}</span>
              <strong>{t.chipRole3}</strong>
            </div>
          </div>
        </section>

        <section id="work" className="section-block focus-block">
          <SectionTitle lead="FOCUS AREAS" title={t.secWork} />
          <div className="project-grid">
            {t.projects.map((project) => (
              <button
                className="project-card"
                key={project.num}
                type="button"
                onClick={() => activateArch(project.num)}
              >
                <span className="project-number">{project.num}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <small>{project.tags}</small>
                <b>{project.num === "03" ? t.archTab3 : t.navArch} →</b>
              </button>
            ))}
          </div>
        </section>

        <section id="arch" className="section-block architecture-block">
          <SectionTitle lead={arch === "03" ? t.learnLead : "ARCHITECTURE"} title={arch === "03" ? t.learnTitle : t.secArch} />
          <div className="arch-tabs" role="tablist" aria-label="Architecture views">
            <button className={arch === "01" ? "active" : ""} type="button" onClick={() => setArch("01")}>
              <span>01</span>
              {t.archTab1}
            </button>
            <button className={arch === "02" ? "active" : ""} type="button" onClick={() => setArch("02")}>
              <span>02</span>
              {t.archTab2}
            </button>
            <button className={arch === "03" ? "active" : ""} type="button" onClick={() => setArch("03")}>
              <span>03</span>
              {t.archTab3}
            </button>
          </div>

          {showArchitecture ? (
            <>
              <p className="section-intro">{archIntro}</p>
              <a className="architecture-image" href={archImage} target="_blank" rel="noreferrer">
                <img src={archImage} alt={arch === "01" ? "End-to-end CI/CD architecture on AKS" : "AKS + Dify PoC architecture"} />
              </a>

              <div className="results-header">
                <div>
                  <span>RESULTS</span>
                  <i>{t.resultsRunning}</i>
                </div>
                <h3>{resultsTitle}</h3>
                <p>{resultsIntro}</p>
              </div>

              <div className="result-shot-list">
                {resultShots.map((shot) => (
                  <figure className="result-shot" key={shot.img}>
                    <div className="window-bar">
                      <span />
                      <span />
                      <span />
                      <small>{shot.host}</small>
                    </div>
                    <a href={shot.img} target="_blank" rel="noreferrer">
                      <img src={shot.img} alt={shot.label} />
                    </a>
                    <figcaption>{shot.label}</figcaption>
                  </figure>
                ))}
              </div>
            </>
          ) : (
            <div className="learning-panel">
              <div className="learning-summary">
                <p>{t.learnIntro}</p>
                <strong>
                  {learnTotal}
                  <span>{t.learnUnit}</span>
                </strong>
              </div>
              <div className="learning-grid">
                {t.learnCats.map((category) => (
                  <article className="learning-card" key={category.no}>
                    <div>
                      <span>{category.no}</span>
                      <small>
                        {category.count} {t.learnUnit}
                      </small>
                    </div>
                    <h3>{category.title}</h3>
                    <ul>
                      {category.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          )}
        </section>

        <section id="certs" className="certificate-section">
          <div className="section-block cert-inner">
            <SectionTitle lead="CERTIFICATIONS" title={t.secCerts} dark />
            <div className="cert-grid">
              {certificationItems.map((cert) => (
                <figure className="cert-card" key={cert.title}>
                  <img src={cert.image} alt={cert.title} />
                  <figcaption>
                    <strong>{cert.title}</strong>
                    <span>{cert.meta}</span>
                  </figcaption>
                </figure>
              ))}
              <article className="next-cert">
                <span>NEXT</span>
                <strong>
                  MB-310
                  <br />
                  Dynamics 365 Finance
                </strong>
                <p>{t.certLearning}</p>
              </article>
            </div>
          </div>
        </section>

        <section id="stack" className="section-block stack-block">
          <SectionTitle lead="TECH STACK" title={t.secStack} />
          <div className="stack-grid">
            {stackItems.map((item) => (
              <div className="stack-card" key={item.name}>
                <img src={item.img} alt="" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="contact-footer">
        <div className="contact-card">
          <div>
            <h2>{t.secContact}</h2>
            <p>{t.contactNote}</p>
          </div>
          <div className="contact-links">
            <a className="primary" href="mailto:email@example.com">
              email@example.com
            </a>
            <a href="https://github.com/ouha2020" target="_blank" rel="noreferrer">
              github.com/ouha2020
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              linkedin.com/in/username
            </a>
          </div>
        </div>
        <div className="footer-line">
          <span>© 2026 Andy</span>
          <span>{t.bridgeCaption}</span>
        </div>
      </footer>
    </div>
  );
}

function LogoMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M6.2 18.5c-2.3 0-4.2-1.85-4.2-4.15 0-2.02 1.46-3.72 3.4-4.08.28-2.52 2.44-4.47 5.06-4.47 2.02 0 3.78 1.16 4.6 2.85.35-.1.72-.15 1.1-.15 2.1 0 3.84 1.66 3.84 3.75 0 .2-.02.4-.05.6C21.2 13.3 22 14.55 22 15.98c0 1.4-1.14 2.52-2.55 2.52H6.2Z"
          fill="#fff"
          fillOpacity=".92"
        />
        <path
          d="M12 9.5 8.7 16h1.9l.7-1.5h3.4l.7 1.5h1.9L14 9.5h-2Zm-.05 3.6L12.98 11l1.03 2.1h-2.06Z"
          fill="#123a6d"
        />
      </svg>
    </span>
  );
}

function SectionTitle({ lead, title, dark = false }: { lead: string; title: string; dark?: boolean }) {
  return (
    <div className={`section-title ${dark ? "dark" : ""}`}>
      <span>{lead}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default App;
