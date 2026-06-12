export type Locale = "ja" | "zh";

export type LocalizedText = Record<Locale, string>;

export interface ProjectModule {
  id: string;
  icon: "code" | "helm" | "pipeline" | "gitops" | "mesh" | "kubernetes";
  title: LocalizedText;
  description: LocalizedText;
  proof: LocalizedText;
}

export interface CapabilityItem {
  id: string;
  icon: "resource" | "hpa" | "pdb" | "security" | "network";
  title: LocalizedText;
  description: LocalizedText;
}

export interface EvidenceItem {
  id: string;
  image: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface CertificationItem {
  id: string;
  image: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface CodeFile {
  id: string;
  path: string;
  label: string;
  language:
    | "go"
    | "yaml"
    | "groovy"
    | "dockerfile"
    | "properties"
    | "markdown"
    | "shell"
    | "text"
    | "ts"
    | "tsx"
    | "css";
  code: string;
  summary: LocalizedText;
  points: LocalizedText[];
}
