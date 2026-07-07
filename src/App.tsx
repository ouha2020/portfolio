import {
  useEffect,
  useMemo,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";
import {
  Activity,
  ArrowRight,
  Bell,
  Boxes,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileCode2,
  FlaskConical,
  Folder,
  Gauge,
  GitBranch,
  Layers3,
  Lock,
  Network,
  PackageCheck,
  PanelTop,
  Rocket,
  Server,
  ShieldCheck,
  TerminalSquare,
  UploadCloud,
  UsersRound,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import {
  SiArgo,
  SiGitlab,
  SiGrafana,
  SiHelm,
  SiJenkins,
  SiJira,
  SiKubernetes,
  SiPrometheus,
} from "react-icons/si";
import {
  capabilityItems,
  certificationItems,
  copy,
  jiraDeliverySteps,
  presentationItems,
  projectModules,
} from "./content";
import { codeFiles } from "./codeFiles";
import type { CapabilityItem, CodeFile, JiraDeliveryStep, Locale, ProjectModule } from "./types";

const navItems = [
  { id: "focus", label: { ja: "専門領域", zh: "专业领域" } },
  { id: "architecture", label: { ja: "アーキテクチャ", zh: "系统架构" } },
  { id: "code", label: { ja: "コード", zh: "代码" } },
  { id: "certificates", label: { ja: "資格・認定", zh: "资质认证" } },
  { id: "stack", label: { ja: "技術スタック", zh: "技术栈" } },
] as const;

const personalCopy = {
  ja: {
    brand: "Andy",
    brandSub: "CLOUD NATIVE x BUSINESS",
    contact: "連絡先",
    heroBadge: "CLOUD NATIVE · AZURE · FULL-STACK",
    bridgeCaption: "ビジネスと技術をつなぐ",
    heroTitleA: "ビジネスと技術を、",
    heroTitleB: "つなぐ",
    heroTitleC: "エンジニア。",
    heroBody:
      "ビジネス価値を起点に、AI・Microsoft Azure・Dynamics 365・クラウドネイティブ技術を融合し、業務分析から AI アプリケーション開発、企業のデジタル変革、クラウドプラットフォーム構築まで一貫して支援します。",
    chips: ["クラウドネイティブ & Azure", "フルスタック開発", "Dynamics 365 F&O"],
    focusLead: "FOCUS AREAS",
    focusTitle: "専門領域",
    architectureLead: "ARCHITECTURE",
    architectureTitle: "アーキテクチャ",
    architectureIntro:
      "Jira の課題起票からブランチ作成、CI/CD パイプライン、AKS へのデプロイ、監視確認までを一つの流れとして説明します。",
    codeLead: "SOURCE CODE",
    certificatesLead: "CERTIFICATIONS",
    stackLead: "TECH STACK",
    contactLead: "CONTACT",
    contactTitle: "連絡先",
    contactBody: "プロジェクトのご相談、技術交流など、お気軽にご連絡ください。",
    focusCards: [
      {
        no: "01",
        title: "Kubernetes エンドツーエンド CI/CD",
        desc:
          "CI/CD ツールチェーン全体を AKS 上に構築。Jira 連携によるブランチ作成・マージの自動化、Jenkins Pipeline、Helm、GitOps を組み合わせています。",
        tags: "AKS · Jenkins · GitLab · Jira · Helm",
      },
      {
        no: "02",
        title: "Azure AKS + AI PoC 基盤",
        desc:
          "Azure AKS とマネージドサービスを組み合わせ、AI アプリケーションや LLM ワークフローを動かすための PoC 基盤へ拡張できる構成です。",
        tags: "Azure · AKS · LLM · Terraform",
      },
      {
        no: "03",
        title: "Dynamics 365 F&O 導入・運用",
        desc:
          "財務会計、購買・在庫管理、固定資産、プロジェクト管理、会社間取引、システム設定などの業務知識を体系的に学習中です。",
        tags: "Dynamics 365 · X++ · SSRS · Batch",
      },
    ],
  },
  zh: {
    brand: "Andy",
    brandSub: "CLOUD NATIVE x BUSINESS",
    contact: "联系方式",
    heroBadge: "CLOUD NATIVE · AZURE · FULL-STACK",
    bridgeCaption: "连接业务与技术",
    heroTitleA: "连接业务与技术的",
    heroTitleB: "工程师",
    heroTitleC: "。",
    heroBody:
      "以业务价值为导向，融合 AI、Microsoft Azure、Dynamics 365 与云原生技术，从业务分析到 AI 应用开发、企业数字化和云平台建设，打造高可靠、可扩展、持续创造价值的企业级解决方案。",
    chips: ["云原生 & Azure", "全栈开发", "Dynamics 365 F&O"],
    focusLead: "FOCUS AREAS",
    focusTitle: "专业领域",
    architectureLead: "ARCHITECTURE",
    architectureTitle: "系统架构",
    architectureIntro:
      "从 Jira 需求创建、分支生成、CI/CD 流水线、AKS 部署到监控验证，把端到端交付链路作为一个整体说明。",
    codeLead: "SOURCE CODE",
    certificatesLead: "CERTIFICATIONS",
    stackLead: "TECH STACK",
    contactLead: "CONTACT",
    contactTitle: "联系方式",
    contactBody: "项目合作、技术交流，欢迎随时联系。",
    focusCards: [
      {
        no: "01",
        title: "基于 Kubernetes 的端到端 CI/CD",
        desc:
          "CI/CD 工具链部署在 AKS 上。通过 Jira 联动分支创建与合并，结合 Jenkins Pipeline、Helm 和 GitOps 完成交付闭环。",
        tags: "AKS · Jenkins · GitLab · Jira · Helm",
      },
      {
        no: "02",
        title: "Azure AKS + AI PoC 平台",
        desc:
          "结合 Azure AKS 与托管服务，扩展为支持 AI 应用和 LLM 工作流的 PoC 基础平台，兼顾安全性、扩展性和运维性。",
        tags: "Azure · AKS · LLM · Terraform",
      },
      {
        no: "03",
        title: "Dynamics 365 F&O 实施与运维",
        desc:
          "系统学习财务会计、采购与库存、固定资产、项目管理、公司间交易和系统配置等 Dynamics 365 F&O 业务知识。",
        tags: "Dynamics 365 · X++ · SSRS · Batch",
      },
    ],
  },
} as const;

const storageKey = "cloud-native-portfolio-locale-v2";

const showcaseRoots = [
  {
    root: "app-k8s-helm-go",
    description: {
      ja: "アプリ配布 Chart",
      zh: "应用发布 Chart",
    },
  },
  {
    root: "app-k8s-jenkinslib",
    description: {
      ja: "Pipeline 共有化",
      zh: "Pipeline 共享库",
    },
  },
  {
    root: "JenkinsOnAKS",
    description: {
      ja: "Jenkins on AKS",
      zh: "Jenkins on AKS",
    },
  },
  {
    root: "portfolio-site",
    description: {
      ja: "この展示サイト",
      zh: "本演示网站",
    },
  },
] as const;

const showcaseCodeFileIds = [
  "helm-values",
  "helm-deployment",
  "helm-networkpolicy",
  "helm-pdb",
  "jenkins-k8s",
  "jenkins-ci",
  "jenkins-cd",
  "jenkins-gitlab-groovy",
  "aks-readme",
  "aks-deployment",
  "aks-pvc",
  "aks-route",
  "aks-role",
  "aks-get-config",
  "portfolio-app",
  "portfolio-code-data",
  "portfolio-styles",
] as const;

const showcaseCodeFiles = showcaseCodeFileIds
  .map((id) => codeFiles.find((file) => file.id === id))
  .filter((file): file is CodeFile => Boolean(file));

function scrollToSection(id: string, behavior: ScrollBehavior = "smooth") {
  const target = document.getElementById(id);
  if (!target) {
    return;
  }
  const header = document.querySelector<HTMLElement>(".site-header");
  const headerOffset = header ? header.getBoundingClientRect().height + 12 : 74;
  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top: Math.max(top, 0), behavior });
}

function App() {
  const [locale, setLocale] = useState<Locale>(() => {
    const stored = window.localStorage.getItem(storageKey);
    return stored === "zh" || stored === "ja" ? stored : "ja";
  });
  const t = copy[locale];
  const pc = personalCopy[locale];

  const handleAnchorClick = (event: ReactMouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    if (window.location.hash !== `#${id}`) {
      window.history.pushState(null, "", `#${id}`);
    }
    scrollToSection(id);
  };

  useEffect(() => {
    window.localStorage.setItem(storageKey, locale);
    document.documentElement.lang = locale === "ja" ? "ja" : "zh-CN";
    document.title =
      locale === "ja"
        ? "Andy | Cloud Native x Business"
        : "Andy | 云原生与业务技术作品集";
  }, [locale]);

  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) {
        return;
      }
      [0, 180, 650].forEach((delay) => {
        window.setTimeout(() => {
          scrollToSection(id, "auto");
        }, delay);
      });
    };

    scrollToHash();
    window.addEventListener("load", scrollToHash);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.removeEventListener("load", scrollToHash);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <div className="app-shell">
      <header className="site-header">
        <a
          className="brand"
          href="#top"
          aria-label={pc.brand}
          onClick={(event) => handleAnchorClick(event, "top")}
        >
          <span className="brand-mark">
            <Cloud aria-hidden="true" />
          </span>
          <span className="brand-copy">
            <strong>{pc.brand}</strong>
            <em>{pc.brandSub}</em>
          </span>
        </a>
        <nav className="main-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => handleAnchorClick(event, item.id)}
            >
              {item.label[locale]}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="language-toggle"
            type="button"
            onClick={() => setLocale(locale === "zh" ? "ja" : "zh")}
            aria-label={locale === "zh" ? "日本語に切り替え" : "切换到中文"}
            title={locale === "zh" ? "日本語" : "中文"}
          >
            {locale === "zh" ? "日本語" : "中文"}
          </button>
          <a className="social-link" href="https://github.com/" aria-label="GitHub">
            <FaGithub aria-hidden="true" />
          </a>
          <a className="social-link" href="https://www.linkedin.com/" aria-label="LinkedIn">
            <FaLinkedinIn aria-hidden="true" />
          </a>
          <a className="contact-button" href="#contact" onClick={(event) => handleAnchorClick(event, "contact")}>
            {pc.contact}
          </a>
        </div>
      </header>

      <main id="top">
        <section className="personal-hero">
          <div className="personal-hero-inner">
            <div className="hero-copy">
              <span className="hero-badge">{pc.heroBadge}</span>
              <h1>
                {pc.heroTitleA}
                <span>{pc.heroTitleB}</span>
                {pc.heroTitleC}
              </h1>
              <p>{pc.heroBody}</p>
              <div className="hero-chip-row">
                {pc.chips.map((chip) => (
                  <span key={chip}>{chip}</span>
                ))}
              </div>
            </div>
            <div className="bridge-panel" aria-label={pc.bridgeCaption}>
              <div className="bridge-line">
                <span>BUSINESS</span>
                <i />
                <strong>TECHNOLOGY</strong>
              </div>
              <p>{pc.bridgeCaption}</p>
            </div>
          </div>
        </section>

        <section id="focus" className="portfolio-section focus-section">
          <PersonalSectionHeader lead={pc.focusLead} title={pc.focusTitle} />
          <div className="focus-card-grid">
            {pc.focusCards.map((card) => (
              <article className="focus-card" key={card.no}>
                <span>{card.no}</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <em>{card.tags}</em>
              </article>
            ))}
          </div>
        </section>

        <section id="architecture" className="portfolio-section architecture-showcase">
          <PersonalSectionHeader lead={pc.architectureLead} title={pc.architectureTitle} subtitle={pc.architectureIntro} />
          <div className="architecture-stage">
            <ArchitecturePanel locale={locale} />
          </div>
          <JiraDeliverySection locale={locale} />
          <div className="operations-grid">
            <div>
              <SectionHeader title={t.kubernetesTitle} subtitle={t.kubernetesSubtitle} />
              <div className="capability-grid">
                {capabilityItems.map((item) => (
                  <CapabilityCard key={item.id} item={item} locale={locale} />
                ))}
              </div>
            </div>
            <KubernetesDetail locale={locale} />
          </div>
          <PresentationEvidenceDeck locale={locale} />
        </section>

        <section id="code" className="portfolio-section code-band">
          <PersonalSectionHeader lead={pc.codeLead} title={t.codeTitle} subtitle={t.codeSubtitle} />
          <CodeBrowser locale={locale} />
        </section>

        <section id="certificates" className="portfolio-section certificate-band">
          <PersonalSectionHeader lead={pc.certificatesLead} title={t.certificatesTitle} subtitle={t.certificatesSubtitle} />
          <div className="certificate-grid">
            {certificationItems.map((item) => (
              <figure className="certificate-card" key={item.id}>
                <img src={item.image} alt={item.title[locale]} loading="lazy" />
                <figcaption>
                  <strong>{item.title[locale]}</strong>
                  <span>{item.description[locale]}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="stack" className="portfolio-section stack-band">
          <PersonalSectionHeader lead={pc.stackLead} title={locale === "ja" ? "技術スタック" : "技术栈"} />
          <TechStackSection locale={locale} />
        </section>

        <section id="contact" className="portfolio-section contact-band">
          <PersonalSectionHeader lead={pc.contactLead} title={pc.contactTitle} subtitle={pc.contactBody} />
          <div className="contact-grid">
            <a href="mailto:email@example.com">email@example.com</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">github.com/username</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">linkedin.com/in/username</a>
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}

function PersonalSectionHeader({
  lead,
  title,
  subtitle,
}: {
  lead: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="personal-section-header">
      <span>{lead}</span>
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}

function TechStackSection({ locale }: { locale: Locale }) {
  const items = [
    { name: "Jira", icon: <SiJira /> },
    { name: "GitLab", icon: <SiGitlab /> },
    { name: "Jenkins", icon: <SiJenkins /> },
    { name: "Helm", icon: <SiHelm /> },
    { name: "Argo CD", icon: <SiArgo /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "AKS", icon: <Cloud /> },
    { name: "Grafana", icon: <SiGrafana /> },
    { name: "Prometheus", icon: <SiPrometheus /> },
    { name: "Dynamics 365", icon: <Database /> },
    { name: "Terraform", icon: <Server /> },
    { name: "Codex", icon: <Code2 /> },
  ];

  return (
    <div className="stack-grid" aria-label={locale === "ja" ? "技術スタック" : "技术栈"}>
      {items.map((item) => (
        <span className="stack-item" key={item.name}>
          {item.icon}
          <strong>{item.name}</strong>
        </span>
      ))}
    </div>
  );
}

function TechLogoStrip({ locale }: { locale: Locale }) {
  const tools = [
    { name: "AKS", src: "/assets/logos/aks.svg", tone: "azure" },
    { name: "Kubernetes", src: "/assets/logos/kubernetes.svg", tone: "kubernetes" },
    { name: "Helm", src: "/assets/logos/helm.svg", tone: "helm" },
    { name: "Jenkins", src: "/assets/logos/jenkins.svg", tone: "jenkins" },
    { name: "GitLab", src: "/assets/logos/gitlab.svg", tone: "gitlab" },
    { name: "Argo CD", src: "/assets/logos/argo.svg", tone: "argo" },
    { name: "Prometheus", src: "/assets/logos/prometheus.svg", tone: "prometheus" },
    { name: "Grafana", src: "/assets/logos/grafana.svg", tone: "grafana" },
  ] satisfies Array<{ name: string; src: string; tone: string }>;

  return (
    <div className="tech-logo-strip" aria-label={locale === "ja" ? "利用技術" : "使用技术"}>
      {tools.map((tool) => (
        <span className="tech-logo-item" key={tool.name}>
          <span className={`tech-logo-icon ${tool.tone}`}>
            <img src={tool.src} alt="" aria-hidden="true" decoding="async" />
          </span>
          <span>{tool.name}</span>
        </span>
      ))}
    </div>
  );
}

function ArchitecturePanel({ locale }: { locale: Locale }) {
  const labels =
    locale === "ja"
      ? {
          developer: "開発者",
          issue: "Issue / 操作",
          branchMr: "Branch / MR",
          trigger: "Jenkins trigger",
          dev: "開発",
          build: "ビルド",
          check: "コード検査",
          unit: "単元テスト",
          scan: "スキャン",
          security: "安全スキャン",
          image: "イメージ",
          deploy: "デプロイ",
          runtime: "実行環境",
          metrics: "指標収集",
          dashboard: "可視化/告警",
          alarm: "告警",
          storage: "保存",
          sideHelm: "Helm Charts",
          sideGitops: "Argo CD / Flux",
          ingress: "Ingress",
          namespace: "Namespace: app",
        }
      : {
          developer: "开发者",
          issue: "Issue / 操作",
          branchMr: "Branch / MR",
          trigger: "Jenkins 触发",
          dev: "开发",
          build: "构建",
          check: "代码检查",
          unit: "单元测试",
          scan: "扫描",
          security: "安全扫描",
          image: "镜像",
          deploy: "部署",
          runtime: "运行环境",
          metrics: "指标采集",
          dashboard: "可视化告警",
          alarm: "告警",
          storage: "存储",
          sideHelm: "Helm Charts",
          sideGitops: "Argo CD / Flux",
          ingress: "Ingress",
          namespace: "Namespace: app",
        };

  const t = copy[locale];

  return (
    <div className="architecture-panel detailed-architecture" aria-label={t.architectureTitle}>
      <div className="arch-flow-line">
        <TechNode icon={<UsersRound />} name={labels.developer} caption="" tone="neutral" />
        <span className="arch-arrow" />
        <TechNode icon={<SiJira />} name="Jira" caption={labels.issue} tone="jira" />
        <span className="arch-arrow" />
        <TechNode icon={<SiGitlab />} name="GitLab" caption={labels.branchMr} tone="gitlab" />
        <span className="arch-arrow" />
        <TechNode icon={<Network />} name="Webhook" caption={labels.trigger} tone="slate" />
      </div>

      <div className="arch-layout">
        <div className="arch-main">
          <div className="arch-group pipeline-group">
            <div className="arch-group-title">CI/CD Pipelines</div>
            <div className="arch-steps">
              <MiniNode icon={<Code2 />} title={labels.check} detail="" tone="blue" />
              <span className="arch-arrow" />
              <MiniNode icon={<FlaskConical />} title={labels.unit} detail="" tone="green" />
              <span className="arch-arrow" />
              <MiniNode icon={<Boxes />} title={labels.image} detail="" tone="blue" />
              <span className="arch-arrow" />
              <MiniNode icon={<ShieldCheck />} title={labels.security} detail="" tone="green" />
              <span className="arch-arrow" />
              <MiniNode icon={<UploadCloud />} title={labels.deploy} detail="" tone="blue" />
            </div>
          </div>

          <div className="arch-group aks-group">
            <div className="cluster-title">
              <SiKubernetes aria-hidden="true" />
              Azure Kubernetes Service (AKS)
            </div>
            <div className="cluster-grid">
              <MiniNode icon={<Network />} title={labels.ingress} detail="" tone="blue" />
              <span className="arch-arrow" />
              <MiniNode icon={<Activity />} title="Service" detail="" tone="blue" />
              <span className="arch-arrow" />
              <MiniNode icon={<Boxes />} title="Pods" detail="" tone="blue" />
              <span className="arch-arrow" />
              <MiniNode icon={<Lock />} title="ConfigMap" detail="Secret" tone="blue" />
            </div>
          </div>

          <div className="arch-group monitor-group">
            <div className="arch-steps monitor-steps">
              <MiniNode icon={<SiPrometheus />} title="Prometheus" detail={labels.metrics} tone="prometheus" />
              <span className="arch-arrow" />
              <MiniNode icon={<SiGrafana />} title="Grafana" detail={labels.dashboard} tone="grafana" />
              <span className="arch-arrow" />
              <MiniNode icon={<Bell />} title="Alertmanager" detail={labels.alarm} tone="blue" />
              <span className="arch-arrow" />
              <MiniNode icon={<Database />} title={labels.storage} detail="Azure Disk / File" tone="slate" />
            </div>
          </div>
        </div>

        <div className="arch-side">
          <MiniNode icon={<SiHelm />} title={labels.sideHelm} detail="" tone="helm" />
          <MiniNode icon={<SiArgo />} title={labels.sideGitops} detail="GitOps" tone="argo" />
        </div>
      </div>
    </div>
  );
}

function DeliveryMap({ locale }: { locale: Locale }) {
  const steps =
    locale === "ja"
      ? [
          ["GitLab", "変更と Merge Request"],
          ["Jenkins", "Kubernetes Agent"],
          ["SonarQube", "品質スキャン"],
          ["Kaniko", "Daemonless build"],
          ["Helm", "Chart と values 更新"],
          ["Flux", "宣言的同期"],
          ["AKS", "安全な実行環境"],
        ]
      : [
          ["GitLab", "变更与 Merge Request"],
          ["Jenkins", "Kubernetes Agent"],
          ["SonarQube", "质量扫描"],
          ["Kaniko", "无 Docker daemon 构建"],
          ["Helm", "Chart 与 values 更新"],
          ["Flux", "声明式同步"],
          ["AKS", "安全运行环境"],
        ];

  return (
    <div className="delivery-map">
      {steps.map(([title, detail], index) => (
        <div className="delivery-step" key={title}>
          <span className="step-index">{String(index + 1).padStart(2, "0")}</span>
          <strong>{title}</strong>
          <span>{detail}</span>
          {index < steps.length - 1 ? <ChevronRight className="step-arrow" size={18} /> : null}
        </div>
      ))}
    </div>
  );
}

function ProjectModuleCard({ module, locale }: { module: ProjectModule; locale: Locale }) {
  return (
    <article className="module-card">
        <IconBadge type={module.icon} />
        <div>
          <h3>{module.title[locale]}</h3>
          <p>{module.description[locale]}</p>
          <span>{module.proof[locale]}</span>
        </div>
      </article>
  );
}

function JiraDeliverySection({ locale }: { locale: Locale }) {
  const labels =
    locale === "ja"
      ? {
          kicker: "Jira 起点の E2E デリバリー",
          title: "Jira からブランチ作成、リリース、コードマージまで",
          body: "Jira の Issue ステータスを操作点にし、GitLab Branch/MR、Jenkins Pipeline、Helm/GitOps、AKS リリース、MR マージまでを一つの流れで追跡できる構成です。",
          ticketStatus: "Ready for Release",
          ticketTitle: "Go demo service release",
          triggerLabel: "Jira 操作",
          triggerValue: "ステータス更新 / リリース実行",
          traceLabel: "追跡キー",
          traceValue: "DEVOPS-128 / MR / Build / Image tag",
          actionLabel: "Jira から実行",
          actions: ["ブランチ作成", "CI 実行", "AKS 反映", "MR マージ"],
          automationLabel: "自動化",
        }
      : {
          kicker: "Jira 驱动的端到端交付",
          title: "从 Jira 到分支新建、发布、代码合并",
          body: "以 Jira Issue 状态作为操作入口，把 GitLab Branch/MR、Jenkins Pipeline、Helm/GitOps、AKS 发布、MR 合并串成一条可追踪链路。",
          ticketStatus: "Ready for Release",
          ticketTitle: "Go demo service release",
          triggerLabel: "Jira 操作",
          triggerValue: "状态更新 / 执行发布",
          traceLabel: "追踪键",
          traceValue: "DEVOPS-128 / MR / Build / Image tag",
          actionLabel: "从 Jira 执行",
          actions: ["创建分支", "执行 CI", "发布 AKS", "合并 MR"],
          automationLabel: "自动化",
        };

  return (
    <div className="jira-delivery-layout" aria-label={labels.title}>
      <div className="jira-delivery-copy">
        <span className="section-kicker">
          <SiJira aria-hidden="true" />
          {labels.kicker}
        </span>
        <h2>{labels.title}</h2>
        <p>{labels.body}</p>
        <article className="jira-ticket-card">
          <div className="jira-ticket-head">
            <span>DEVOPS-128</span>
            <strong>{labels.ticketStatus}</strong>
          </div>
          <h3>{labels.ticketTitle}</h3>
          <dl>
            <div>
              <dt>{labels.triggerLabel}</dt>
              <dd>{labels.triggerValue}</dd>
            </div>
            <div>
              <dt>{labels.traceLabel}</dt>
              <dd>{labels.traceValue}</dd>
            </div>
          </dl>
          <div className="jira-ticket-actions" aria-label={labels.actionLabel}>
            {labels.actions.map((action) => (
              <span key={action}>
                <CheckCircle2 size={14} />
                {action}
              </span>
            ))}
          </div>
        </article>
      </div>

      <div className="jira-flow-grid">
        {jiraDeliverySteps.map((step, index) => (
          <article className="jira-flow-step" key={step.id}>
            <div className="jira-step-top">
              <span className={`jira-step-icon ${step.icon}`}>
                <JiraStepIcon icon={step.icon} />
              </span>
              <span className="jira-step-index">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h3>{step.title[locale]}</h3>
            <p>{step.description[locale]}</p>
            <strong>{labels.automationLabel}</strong>
            <span>{step.automation[locale]}</span>
          </article>
        ))}
      </div>
    </div>
  );
}

function CapabilityCard({ item, locale }: { item: CapabilityItem; locale: Locale }) {
  const iconMap = {
    resource: <Cpu />,
    hpa: <Activity />,
    pdb: <Layers3 />,
    security: <ShieldCheck />,
    network: <Network />,
  };

  return (
    <article className="capability-card">
      <span className="capability-icon">{iconMap[item.icon]}</span>
      <h3>{item.title[locale]}</h3>
      <p>{item.description[locale]}</p>
    </article>
  );
}

function KubernetesDetail({ locale }: { locale: Locale }) {
  const rows =
    locale === "ja"
      ? [
          ["replicaCount", "5 pods"],
          ["autoscaling", "min 2 / max 20 / CPU 50%"],
          ["securityContext", "runAsUser 10001 / readOnlyRootFilesystem"],
          ["networkPolicy", "Ingress policy enabled"],
          ["podAnnotations", "prometheus.io/scrape: true"],
        ]
      : [
          ["replicaCount", "5 pods"],
          ["autoscaling", "最小 2 / 最大 20 / CPU 50%"],
          ["securityContext", "runAsUser 10001 / 只读根文件系统"],
          ["networkPolicy", "开启 Ingress 策略"],
          ["podAnnotations", "prometheus.io/scrape: true"],
        ];

  return (
    <aside className="config-panel" aria-label="Kubernetes values">
      <div className="config-panel-head">
        <TerminalSquare size={18} />
        <span>values.yaml</span>
      </div>
      <dl>
        {rows.map(([key, value]) => (
          <div key={key}>
            <dt>{key}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

function PresentationEvidenceDeck({ locale }: { locale: Locale }) {
  const labels =
    locale === "ja"
      ? {
          kicker: "PPT 証跡スライド",
          title: "エンドツーエンドデリバリーを補足する資料抜粋",
          body: "面接で説明しやすいように、リリース後の Grafana / Loki ログ確認を大きく表示します。",
          open: "原寸で開く",
        }
      : {
          kicker: "PPT 证据页",
          title: "补充端到端交付说明的资料摘录",
          body: "为了面试讲解更完整，仅保留发布后的 Grafana / Loki 日志验证证据。",
          open: "原图打开",
        };

  return (
    <div className="ppt-evidence">
      <div className="ppt-evidence-intro">
        <span className="section-kicker">
          <PanelTop aria-hidden="true" />
          {labels.kicker}
        </span>
        <h3>{labels.title}</h3>
        <p>{labels.body}</p>
      </div>
      <div className="ppt-evidence-grid">
        {presentationItems.map((item, index) => (
          <article className={index === 0 ? "ppt-card featured" : "ppt-card"} key={item.id}>
            <a className="ppt-image" href={item.image} target="_blank" rel="noreferrer">
              <img src={item.image} alt={item.title[locale]} loading="lazy" />
              <span>{labels.open}</span>
            </a>
            <div className="ppt-card-body">
              <span className="ppt-tag">{item.tag[locale]}</span>
              <h3>{item.title[locale]}</h3>
              <p>{item.description[locale]}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point[locale]}>
                    <CheckCircle2 size={15} />
                    {point[locale]}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function JiraStepIcon({ icon }: { icon: JiraDeliveryStep["icon"] }) {
  const iconMap = {
    jira: <SiJira />,
    branch: <GitBranch />,
    gitlab: <SiGitlab />,
    pipeline: <SiJenkins />,
    deploy: <Rocket />,
    merge: <PackageCheck />,
  };

  return iconMap[icon];
}

function CodeBrowser({ locale }: { locale: Locale }) {
  const [activeId, setActiveId] = useState(showcaseCodeFiles[0].id);
  const activeFile = useMemo(
    () => showcaseCodeFiles.find((file) => file.id === activeId) ?? showcaseCodeFiles[0],
    [activeId],
  );
  const groupedFiles = useMemo(() => groupFilesByFolder(showcaseCodeFiles), []);
  const activeRoot = activeFile.path.split("/")[0];
  const activeRootFiles =
    groupedFiles.find((group) => group.folder === activeRoot)?.files ?? showcaseCodeFiles;
  const t = copy[locale];

  return (
    <div className="code-browser-wrap">
      <div className="code-scope-strip" aria-label={locale === "ja" ? "表示範囲" : "展示范围"}>
        <span className="code-scope-label">{locale === "ja" ? "表示範囲" : "展示范围"}</span>
        <div className="code-scope-actions">
          {showcaseRoots.map((root) => {
            const firstFile = groupedFiles.find((group) => group.folder === root.root)?.files[0];
            return (
              <button
                key={root.root}
                type="button"
                className={activeRoot === root.root ? "code-scope-button active" : "code-scope-button"}
                onClick={() => firstFile && setActiveId(firstFile.id)}
                data-root={root.root}
              >
                <Folder size={16} />
                <strong>{root.root}</strong>
                <span>{root.description[locale]}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="code-browser">
        <aside className="file-tree" aria-label={t.fileTree}>
          <div className="file-tree-title">
            <Folder size={16} />
            {t.fileTree}
          </div>
          {groupedFiles.map((group) => (
            <div className="file-group" key={group.folder}>
              <div className="folder-row">
                <Folder size={15} />
                <span>{group.folder}</span>
              </div>
              {group.files.map((file) => (
                <button
                  key={file.id}
                  type="button"
                  className={activeFile.id === file.id ? "file-row active" : "file-row"}
                  onClick={() => setActiveId(file.id)}
                  data-path={file.path}
                  title={file.path}
                >
                  <FileCode2 size={14} />
                  <span>{file.path.replace(`${group.folder}/`, "")}</span>
                </button>
              ))}
            </div>
          ))}
        </aside>

        <div className="code-main">
          <div className="code-tabs" role="tablist" aria-label={t.codeTitle}>
            {activeRootFiles.map((file) => (
              <button
                key={file.id}
                type="button"
                role="tab"
                aria-selected={activeFile.id === file.id}
                className={activeFile.id === file.id ? "active" : ""}
                onClick={() => setActiveId(file.id)}
                data-path={file.path}
                title={file.path}
              >
                {file.label}
              </button>
            ))}
          </div>
          <div className="code-window">
            <div className="code-window-head">
              <span>{activeFile.path}</span>
              <span>{activeFile.language}</span>
            </div>
            <CodeBlock file={activeFile} />
          </div>
        </div>

        <aside className="implementation-panel">
          <h3>{t.implementationPoints}</h3>
          <p>{activeFile.summary[locale]}</p>
          <ul>
            {activeFile.points.map((point) => (
              <li key={point[locale]}>
                <CheckCircle2 size={16} />
                <span>{point[locale]}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}

function CodeBlock({ file }: { file: CodeFile }) {
  return (
    <pre className={`code-block language-${file.language}`} aria-label={file.path}>
      {file.code.split("\n").map((line, index) => (
        <span className="code-line" key={`${file.id}-${index}`}>
          <span className="line-number">{index + 1}</span>
          <code>{renderCodeLine(line, file.language)}</code>
        </span>
      ))}
    </pre>
  );
}

function groupFilesByFolder(files: CodeFile[]) {
  const groups = new Map<string, CodeFile[]>();
  files.forEach((file) => {
    const folder = file.path.split("/")[0];
    const existing = groups.get(folder) ?? [];
    existing.push(file);
    groups.set(folder, existing);
  });
  return Array.from(groups.entries()).map(([folder, grouped]) => ({ folder, files: grouped }));
}

function renderCodeLine(line: string, language: CodeFile["language"]): ReactNode[] {
  const commentToken = getCommentToken(language);
  const commentIndex = commentToken ? line.indexOf(commentToken) : -1;
  if (commentIndex >= 0) {
    return [
      ...renderInlineTokens(line.slice(0, commentIndex), language, "code"),
      <span className="token-comment" key="comment">
        {line.slice(commentIndex)}
      </span>,
    ];
  }
  return renderInlineTokens(line, language, "code");
}

function renderInlineTokens(
  text: string,
  language: CodeFile["language"],
  prefix: string,
): ReactNode[] {
  const stringRegex = /(".*?"|'.*?'|`.*?`)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = stringRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(...renderKeywords(text.slice(lastIndex, match.index), language, `${prefix}-${lastIndex}`));
    }
    nodes.push(
      <span className="token-string" key={`${prefix}-str-${match.index}`}>
        {match[0]}
      </span>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(...renderKeywords(text.slice(lastIndex), language, `${prefix}-${lastIndex}`));
  }

  return nodes.length ? nodes : [text];
}

function renderKeywords(text: string, language: CodeFile["language"], prefix: string): ReactNode[] {
  const keywordGroups: Record<CodeFile["language"], string[]> = {
    go: [
      "func",
      "return",
      "defer",
      "if",
      "err",
      "nil",
      "var",
      "const",
      "type",
      "struct",
      "package",
      "import",
    ],
    dockerfile: [
      "FROM",
      "ENV",
      "WORKDIR",
      "COPY",
      "RUN",
      "EXPOSE",
      "USER",
      "ENTRYPOINT",
      "CMD",
      "ARG",
    ],
    yaml: [
      "apiVersion",
      "kind",
      "metadata",
      "name",
      "namespace",
      "spec",
      "selector",
      "servers",
      "hosts",
      "route",
      "destination",
      "port",
      "interval",
      "path",
      "prune",
      "sourceRef",
      "containers",
      "securityContext",
      "livenessProbe",
      "readinessProbe",
      "lifecycle",
    ],
    groovy: [
      "pipeline",
      "agent",
      "kubernetes",
      "stages",
      "stage",
      "steps",
      "container",
      "environment",
      "def",
      "import",
      "withCredentials",
      "script",
    ],
    properties: [
      "sonar",
      "projectKey",
      "projectName",
      "sources",
      "host",
      "url",
    ],
    markdown: [],
    shell: [
      "read",
      "set",
      "kubectl",
      "echo",
      "base64",
      "namespace",
      "serviceAccount",
      "token",
    ],
    ts: [
      "const",
      "let",
      "type",
      "interface",
      "export",
      "import",
      "return",
      "map",
      "filter",
    ],
    tsx: [
      "function",
      "const",
      "return",
      "import",
      "export",
      "useMemo",
      "useState",
      "map",
      "className",
    ],
    css: [
      "display",
      "grid",
      "gap",
      "padding",
      "border",
      "background",
      "color",
      "overflow",
      "min-height",
    ],
    text: [],
  };
  const keywords = keywordGroups[language] ?? [];

  const keywordPart = keywords.length
    ? `\\b(${keywords.map(escapeRegExp).join("|")})\\b|`
    : "";
  const keywordPattern = new RegExp(`${keywordPart}(\\b\\d+(?:\\.\\d+)?\\b)`, "g");
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = keywordPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(
      <span
        className={keywords.length && match[1] ? "token-keyword" : "token-number"}
        key={`${prefix}-${match.index}`}
      >
        {match[0]}
      </span>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function getCommentToken(language: CodeFile["language"]) {
  if (language === "yaml" || language === "dockerfile" || language === "properties" || language === "shell") {
    return "#";
  }
  if (language === "go" || language === "groovy" || language === "ts" || language === "tsx") {
    return "//";
  }
  return "";
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function TechNode({
  icon,
  name,
  caption,
  tone,
}: {
  icon: ReactNode;
  name: string;
  caption: string;
  tone: "orange" | "neutral" | "cyan" | "slate" | "green" | "blue" | "gitlab" | "jira";
}) {
  return (
    <div className={`tech-node ${tone}`}>
      <span>{icon}</span>
      <div>
        <strong>{name}</strong>
        <em>{caption}</em>
      </div>
    </div>
  );
}

function MiniNode({
  icon,
  title,
  detail,
  tone = "blue",
}: {
  icon: ReactNode;
  title: string;
  detail: string;
  tone?: string;
}) {
  return (
    <div className={`mini-node ${tone}`}>
      <span>{icon}</span>
      <strong>{title}</strong>
      <em>{detail}</em>
    </div>
  );
}

function FlowArrow() {
  return <span className="flow-arrow" aria-hidden="true" />;
}

function IconBadge({ type }: { type: ProjectModule["icon"] }) {
  const iconMap = {
    code: <Code2 />,
    helm: <SiHelm />,
    pipeline: <SiJenkins />,
    gitops: <SiGitlab />,
    mesh: <SiArgo />,
    kubernetes: <SiKubernetes />,
  };

  return <span className={`icon-badge ${type}`}>{iconMap[type]}</span>;
}

export default App;
