import type {
  CapabilityItem,
  CertificationItem,
  EvidenceItem,
  JiraDeliveryStep,
  Locale,
  PresentationItem,
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
      "Jira 起点のブランチ作成、CI/CD、AKS リリース、MR マージまでを一気通貫で示すクラウドネイティブ実践",
    primaryCta: "アーキテクチャを見る",
    secondaryCta: "技術ハイライトを見る",
    contactCta: "連絡する",
    architectureTitle: "AKS を中心にしたデリバリー構成",
    architectureSubtitle:
      "Jira Issue を起点に GitLab Branch/MR を作成し、Jenkins Kubernetes Agent、Helm/GitOps を通して AKS へ反映します。",
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
      "PPT の証跡画像を使い、リリース後のログ確認、GitOps/Canary、Istio ルーティングまで確認できる形で整理しています。",
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
    heroSubtitle: "以 Jira 为入口，展示分支新建、CI/CD、AKS 发布、MR 合并的一站式云原生交付实践",
    primaryCta: "查看项目架构",
    secondaryCta: "浏览技术亮点",
    contactCta: "联系我",
    architectureTitle: "以 AKS 为中心的交付架构",
    architectureSubtitle:
      "从 Jira Issue 创建 GitLab Branch/MR，再通过 Jenkins Kubernetes Agent、Helm/GitOps 发布到 AKS。",
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
      "用 PPT 中的证据图补充发布后的日志验证、GitOps/金丝雀、Istio 路由治理和平台能力说明。",
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
      ja: "Jira Issue からブランチ作成、MR、CI/CD、リリース、マージまで一連で管理。",
      zh: "从 Jira Issue 到分支、MR、CI/CD、发布、合并的一体化管理。",
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

export const jiraDeliverySteps: JiraDeliveryStep[] = [
  {
    id: "jira-issue",
    icon: "jira",
    title: { ja: "Jira Issue 起票", zh: "Jira Issue 起票" },
    description: {
      ja: "要件、担当者、対象環境、リリース条件を Issue に集約します。",
      zh: "把需求、负责人、目标环境和发布条件集中到 Jira Issue。",
    },
    automation: {
      ja: "Issue key をブランチ名、MR、イメージタグ、リリース履歴へ引き継ぎます。",
      zh: "Issue key 会贯穿分支名、MR、镜像标签和发布记录。",
    },
  },
  {
    id: "branch-create",
    icon: "branch",
    title: { ja: "ブランチ自動作成", zh: "自动创建分支" },
    description: {
      ja: "Jira から feature/DEVOPS-128-* のような作業ブランチを作成します。",
      zh: "从 Jira 创建类似 feature/DEVOPS-128-* 的开发分支。",
    },
    automation: {
      ja: "GitLab branch と Merge Request の初期情報を同じキーで関連付けます。",
      zh: "GitLab branch 与 Merge Request 初始信息使用同一个需求键关联。",
    },
  },
  {
    id: "merge-request",
    icon: "gitlab",
    title: { ja: "実装 Push / MR", zh: "提交实现 / MR" },
    description: {
      ja: "Push 後に MR を作成し、レビュー状態と差分リンクを Jira に同期します。",
      zh: "Push 后创建 MR，并把评审状态与变更链接同步回 Jira。",
    },
    automation: {
      ja: "コミット、MR、レビューコメント、ビルド番号を Issue コメントに残します。",
      zh: "提交、MR、评审评论、构建编号都会写回 Issue 评论。",
    },
  },
  {
    id: "pipeline",
    icon: "pipeline",
    title: { ja: "CI/CD 実行", zh: "执行 CI/CD" },
    description: {
      ja: "Jenkins が単体テスト、品質チェック、セキュリティスキャン、イメージ作成を実行します。",
      zh: "Jenkins 执行单元测试、质量检查、安全扫描和镜像构建。",
    },
    automation: {
      ja: "失敗時はログ URL と失敗ステージを Jira に通知し、修正対象を明確にします。",
      zh: "失败时把日志 URL 与失败阶段通知到 Jira，便于定位修复。",
    },
  },
  {
    id: "release",
    icon: "deploy",
    title: { ja: "AKS へリリース", zh: "发布到 AKS" },
    description: {
      ja: "Helm/GitOps で staging/prod に反映し、リリース結果を Issue に添付します。",
      zh: "通过 Helm/GitOps 发布到 staging/prod，并把发布结果附加到 Issue。",
    },
    automation: {
      ja: "デプロイ成功、GitOps 同期、監視確認のリンクを Jira から追跡できます。",
      zh: "部署成功、GitOps 同步、监控验证链接都可以从 Jira 追踪。",
    },
  },
  {
    id: "merge-done",
    icon: "merge",
    title: { ja: "マージ / Done", zh: "合并 / Done" },
    description: {
      ja: "検証後に MR を main へマージし、Jira ステータスを Done に更新します。",
      zh: "验证完成后把 MR 合并到 main，并把 Jira 状态更新为 Done。",
    },
    automation: {
      ja: "リリース済み commit、tag、担当者、完了時刻を一つの履歴として残します。",
      zh: "已发布 commit、tag、负责人、完成时间会形成一条完整历史。",
    },
  },
];

export const presentationItems: PresentationItem[] = [
  {
    id: "ppt-logs",
    image: "/assets/ppt-media/image35.png",
    tag: { ja: "リリース後確認", zh: "发布后验证" },
    title: { ja: "Grafana / Loki ログ確認", zh: "Grafana / Loki 日志验证" },
    description: {
      ja: "Jira でリリース完了に進める前に、対象 namespace のアプリログを確認する証跡です。",
      zh: "在 Jira 中推进发布完成前，用目标 namespace 的应用日志做验证证据。",
    },
    points: [
      {
        ja: "namespace=appk8sgo のログをリリース結果確認に利用",
        zh: "使用 namespace=appk8sgo 的日志确认发布结果",
      },
      {
        ja: "Jenkins build / GitOps sync 後の実行状態を説明可能",
        zh: "可说明 Jenkins build / GitOps sync 后的运行状态",
      },
    ],
  },
  {
    id: "ppt-canary",
    image: "/assets/ppt-media/image37.png",
    tag: { ja: "GitOps / Canary", zh: "GitOps / 金丝雀" },
    title: { ja: "Argo CD による段階的リリース", zh: "Argo CD 渐进式发布" },
    description: {
      ja: "Jira のリリース操作から GitOps 側で段階的に流量を切り替える説明資料です。",
      zh: "说明从 Jira 的发布动作延伸到 GitOps 侧逐步切换流量的过程。",
    },
    points: [
      {
        ja: "100/0、75/25、50/50 のような段階的切替を可視化",
        zh: "可视化 100/0、75/25、50/50 等阶段切流",
      },
      {
        ja: "MR merge 前後のリリース検証として使える",
        zh: "可作为 MR 合并前后的发布验证材料",
      },
    ],
  },
  {
    id: "ppt-mesh",
    image: "/assets/ppt-media/image41.png",
    tag: { ja: "サービスメッシュ", zh: "服务网格" },
    title: { ja: "Bookinfo 依存関係と Istio 導入前後", zh: "Bookinfo 依赖与 Istio 导入" },
    description: {
      ja: "複数言語サービスの依存関係を起点に、ルーティングやトラフィック制御の必要性を説明します。",
      zh: "从多语言服务依赖关系出发，说明路由与流量治理的必要性。",
    },
    points: [
      {
        ja: "Product / Reviews / Ratings / Details の呼び出し関係を整理",
        zh: "梳理 Product / Reviews / Ratings / Details 的调用关系",
      },
      {
        ja: "Istio の VirtualService、Fault Injection、Mirroring 説明につなげる",
        zh: "可衔接 Istio VirtualService、故障注入、流量镜像说明",
      },
    ],
  },
  {
    id: "ppt-platform",
    image: "/assets/ppt-media/image44.jpeg",
    tag: { ja: "プラットフォーム全体像", zh: "平台全景" },
    title: { ja: "CI/CD・監視・標準運用の統合図", zh: "CI/CD、监控、标准运维集成图" },
    description: {
      ja: "Jira を入口にした自動化を、PaaS/運用/監視/データ/第三者連携の文脈へ広げて説明できます。",
      zh: "把 Jira 入口的自动化扩展到 PaaS、运维、监控、数据和第三方集成的整体语境。",
    },
    points: [
      {
        ja: "CI/CD、監視、標準運用、補助運営を同じ図で説明",
        zh: "在同一张图里说明 CI/CD、监控、标准运维和辅助运营",
      },
      {
        ja: "面接で作品の範囲と実務背景を補足する資料",
        zh: "面试时用于补充作品范围与实际业务背景",
      },
    ],
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
