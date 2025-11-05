import { CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { Progress } from "./ui/progress";
import { Card } from "./ui/card";

interface ConversionCardProps {
  filename: string;
  status: "pending" | "processing" | "completed" | "failed";
  progress: number;
  format: string;
}

const ConversionCard = ({ filename, status, progress, format }: ConversionCardProps) => {
  const statusConfig = {
    pending: {
      icon: Clock,
      color: "text-muted-foreground",
      bg: "bg-muted",
      label: "Pending",
    },
    processing: {
      icon: Clock,
      color: "text-info",
      bg: "bg-info/20",
      label: "Processing",
    },
    completed: {
      icon: CheckCircle2,
      color: "text-success",
      bg: "bg-success/20",
      label: "Completed",
    },
    failed: {
      icon: AlertCircle,
      color: "text-destructive",
      bg: "bg-destructive/20",
      label: "Failed",
    },
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <Card className="p-4 bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in">
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-foreground truncate">{filename}</h4>
            <p className="text-sm text-muted-foreground">{format}</p>
          </div>
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${config.bg}`}>
            <StatusIcon className={`w-4 h-4 ${config.color}`} />
            <span className={`text-xs font-medium ${config.color}`}>{config.label}</span>
          </div>
        </div>

        {status === "processing" && (
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Converting...</span>
              <span>{progress}%</span>
            </div>
          </div>
        )}

        {status === "completed" && (
          <div className="text-sm text-success">
            ✓ Converted successfully to .cap format
          </div>
        )}
      </div>
    </Card>
  );
};

export default ConversionCard;
