import type {
  CapabilityItem,
  CertificationItem,
  EvidenceItem,
  Locale,
  ProjectModule,
} from "./types";

export const localeNames: Record<Locale, string> = {
  ja: "日本語",
  zh: "中文",
};

export const copy = {
  ja: {
    brand: "クラウドネイティブ作品デモ",
    nav: {
      cicd: "CI/CD",
      kubernetes: "Kubernetes",
      observability: "監視",
      serviceMesh: "サービスメッシュ",
      code: "コード",
      certificates: "資格",
    },
    heroTitle: "クラウドネイティブ DevOps ポートフォリオ",
    heroSubtitle:
      "AKS 上のエンドツーエンド CI/CD、Kubernetes アプリケーション運用、監視アラートとサービスメッシュの実践",
    primaryCta: "アーキテクチャを見る",
    secondaryCta: "技術ハイライトを見る",
    contactCta: "連絡する",
    architectureTitle: "AKS を中心にしたデリバリー構成",
    architectureSubtitle:
      "GitLab の変更を Jenkins Kubernetes Agent でビルドし、SonarQube と Kaniko を通して Helm/GitOps で AKS に反映します。",
    modulesTitle: "プロジェクトモジュール / ケース展示",
    modulesSubtitle: "",
    codeTitle: "コードブラウザ",
    codeSubtitle: "主要なコードと設定の一部を、実装ポイントと合わせて確認できます。",
    implementationPoints: "実装ポイント",
    fileTree: "repo-root",
    kubernetesTitle: "Kubernetes 最適化とセキュリティ",
    kubernetesSubtitle:
      "本番運用を意識したヘルスチェック、リソース制御、分散配置、セキュリティコンテキストを Helm Chart に整理しています。",
    observabilityTitle: "監視・GitOps・サービスメッシュ",
    observabilitySubtitle:
      "Prometheus/Grafana による可視化、Flux による宣言的デプロイ、Istio による入口制御とルーティングを組み合わせています。",
    certificatesTitle: "資格・補足資料",
    certificatesSubtitle: "プレゼン資料から抽出した証跡を、面接時に参照しやすい形で配置します。",
    openEvidence: "資料を確認",
    status: {
      ha: "高可用性",
      scale: "スケーラビリティ",
      security: "セキュリティ強化",
      observable: "可観測性",
      automation: "GitOps 自動化",
    },
  },
  zh: {
    brand: "云原生作品演示",
    nav: {
      cicd: "CI/CD",
      kubernetes: "Kubernetes",
      observability: "监控",
      serviceMesh: "服务网格",
      code: "代码",
      certificates: "证书",
    },
    heroTitle: "云原生 DevOps 作品演示",
    heroSubtitle: "AKS 上的端到端 CI/CD、Kubernetes 应用治理、监控告警与服务网格实践",
    primaryCta: "查看项目架构",
    secondaryCta: "浏览技术亮点",
    contactCta: "联系我",
    architectureTitle: "以 AKS 为中心的交付架构",
    architectureSubtitle:
      "GitLab 变更触发 Jenkins Kubernetes Agent，通过 SonarQube、Kaniko、Helm/GitOps 发布到 AKS。",
    modulesTitle: "项目模块 / 案例展示",
    modulesSubtitle: "",
    codeTitle: "代码浏览器",
    codeSubtitle: "展示关键代码和配置片段，并说明背后的实现要点。",
    implementationPoints: "实现要点",
    fileTree: "repo-root",
    kubernetesTitle: "Kubernetes 优化与安全",
    kubernetesSubtitle:
      "在 Helm Chart 中整理健康检查、资源控制、调度分布、安全上下文等面向生产的实践。",
    observabilityTitle: "监控 · GitOps · 服务网格",
    observabilitySubtitle:
      "结合 Prometheus/Grafana 可观测性、Flux 声明式部署和 Istio 流量入口/路由治理。",
    certificatesTitle: "证书与补充材料",
    certificatesSubtitle: "从演示材料中抽取证据图，便于面试时快速说明项目背景和资质。",
    openEvidence: "查看资料",
    status: {
      ha: "高可用",
      scale: "可扩展",
      security: "安全加固",
      observable: "可观测",
      automation: "GitOps 自动化",
    },
  },
} as const;

export const projectModules: ProjectModule[] = [
  {
    id: "go-service",
    icon: "code",
    title: { ja: "Go K8s Demo アプリ", zh: "Go K8s Demo 应用" },
    description: {
      ja: "Golang 開発のデモアプリ。ヘルスチェック、/metrics 公開と多副本デプロイ。",
      zh: "Golang 开发的微服务应用，支持健康检查、/metrics 暴露与多副本部署。",
    },
    proof: {
      ja: "詳細を見る →",
      zh: "查看详情 →",
    },
  },
  {
    id: "helm-chart",
    icon: "helm",
    title: { ja: "Helm Chart 管理", zh: "Helm Chart 管理" },
    description: {
      ja: "標準化した Helm Chart 打包とバージョン管理、複数環境の値上書きと依存管理。",
      zh: "标准化 Helm Chart 打包与版本管理，支持多环境值覆盖与依赖管理。",
    },
    proof: {
      ja: "詳細を見る →",
      zh: "查看详情 →",
    },
  },
  {
    id: "pipeline",
    icon: "pipeline",
    title: { ja: "Jenkins Pipelines", zh: "Jenkins Pipelines" },
    description: {
      ja: "多ブランチ流水線、並行構築、イメージ push、自動テストと成果物スキャン。",
      zh: "多分支流水线、并行构建、镜像推送、自动化测试与制品扫描。",
    },
    proof: {
      ja: "詳細を見る →",
      zh: "查看详情 →",
    },
  },
  {
    id: "gitops",
    icon: "gitops",
    title: { ja: "GitLab + Jira 自動化", zh: "GitLab + Jira 自动化" },
    description: {
      ja: "Issue 駆動の開発、MR トリガー CI/CD、状態同期とコメント通知。",
      zh: "Issue 驱动开发、MR 触发 CI/CD、状态回写与评论通知。",
    },
    proof: {
      ja: "詳細を見る →",
      zh: "查看详情 →",
    },
  },
  {
    id: "mesh",
    icon: "mesh",
    title: { ja: "GitOps (Argo CD/Flux)", zh: "GitOps (Argo CD/Flux)" },
    description: {
      ja: "宣言式記録、自動同期、ロールバックとマルチクラスタ環境管理。",
      zh: "声明式部署、自动同步、回滚与多集群环境管理。",
    },
    proof: {
      ja: "詳細を見る →",
      zh: "查看详情 →",
    },
  },
  {
    id: "kubernetes-practice",
    icon: "kubernetes",
    title: { ja: "Kubernetes 実践", zh: "Kubernetes 实践" },
    description: {
      ja: "リソース制御、探針、Secret/ConfigMap、永続化、セキュリティを整理。",
      zh: "资源编排、探针配置、配置与密钥管理、持久化存储实践。",
    },
    proof: {
      ja: "詳細を見る →",
      zh: "查看详情 →",
    },
  },
];

export const capabilityItems: CapabilityItem[] = [
  {
    id: "resources",
    icon: "resource",
    title: { ja: "リソース管理", zh: "资源管理" },
    description: {
      ja: "Requests/Limits を明示し、安定した QoS とスケジューリングを支えます。",
      zh: "显式配置 Requests/Limits，支撑稳定 QoS 与调度行为。",
    },
  },
  {
    id: "hpa",
    icon: "hpa",
    title: { ja: "HPA 自動スケーリング", zh: "HPA 自动扩缩容" },
    description: {
      ja: "CPU 負荷に応じて Pod 数を 2 から 20 まで自動調整します。",
      zh: "根据 CPU 负载在 2 到 20 个 Pod 之间自动调整。",
    },
  },
  {
    id: "pdb",
    icon: "pdb",
    title: { ja: "PodDisruptionBudget", zh: "PodDisruptionBudget" },
    description: {
      ja: "ノードメンテナンス時にもサービスの可用性を維持します。",
      zh: "在节点维护期间保持服务可用性。",
    },
  },
  {
    id: "security",
    icon: "security",
    title: { ja: "セキュリティ強化", zh: "安全加固" },
    description: {
      ja: "非特権ユーザー、読み取り専用 rootfs、seccomp を組み合わせます。",
      zh: "组合非特权用户、只读根文件系统与 seccomp 配置。",
    },
  },
  {
    id: "network",
    icon: "network",
    title: { ja: "NetworkPolicy", zh: "NetworkPolicy" },
    description: {
      ja: "必要なポートと Pod 間通信に絞り、クラスタ内の境界を明確にします。",
      zh: "限制必要端口和 Pod 间通信，明确集群内边界。",
    },
  },
];

export const evidenceItems: EvidenceItem[] = [
  {
    id: "monitoring",
    image: "/assets/ppt-media/image35.png",
    title: { ja: "監視とアラート", zh: "监控与告警" },
    description: {
      ja: "Prometheus/Grafana の可視化とアプリメトリクスの確認資料。",
      zh: "Prometheus/Grafana 可视化与应用指标验证材料。",
    },
  },
  {
    id: "argocd",
    image: "/assets/ppt-media/image37.png",
    title: { ja: "GitOps と継続的デプロイ", zh: "GitOps 与持续部署" },
    description: {
      ja: "Argo CD/Flux を含む多環境デリバリー改善の説明資料。",
      zh: "包含 Argo CD/Flux 的多环境交付优化说明资料。",
    },
  },
  {
    id: "mesh-routing",
    image: "/assets/ppt-media/image41.png",
    title: { ja: "サービスメッシュの導入", zh: "服务网格导入" },
    description: {
      ja: "Istio のルーティング、リトライ、故障注入、ミラーリングの検討資料。",
      zh: "Istio 路由、重试、故障注入与流量镜像的实践材料。",
    },
  },
];

export const certificationItems: CertificationItem[] = [
  {
    id: "cert-a",
    image: "/assets/ppt-media/image42.png",
    title: { ja: "資格証跡 01", zh: "资质证书 01" },
    description: {
      ja: "プレゼン資料に含まれる個人資格の証跡画像。",
      zh: "演示资料中的个人资质证书图片。",
    },
  },
  {
    id: "cert-b",
    image: "/assets/ppt-media/image43.png",
    title: { ja: "資格証跡 02", zh: "资质证书 02" },
    description: {
      ja: "面接時にクラウドネイティブ学習背景を補足する資料。",
      zh: "面试时用于补充云原生学习背景的材料。",
    },
  },
  {
    id: "cert-c",
    image: "/assets/ppt-media/image44.jpeg",
    title: { ja: "補足資料", zh: "补充材料" },
    description: {
      ja: "作品演示の末尾に含まれる追加の証跡画像。",
      zh: "作品演示末尾包含的补充证据图。",
    },
  },
];
