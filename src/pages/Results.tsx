import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Share2, CheckCircle2, FileVideo } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Results = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Download started",
      description: "Your converted template is being downloaded",
    });
  };

  const handleShare = () => {
    toast({
      title: "Share link copied",
      description: "Share link has been copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-success/10 rounded-2xl flex items-center justify-center mx-auto animate-glow-pulse">
              <CheckCircle2 className="w-10 h-10 text-success" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">Conversion Complete!</h1>
            <p className="text-muted-foreground">Your template has been successfully converted</p>
          </div>

          <Card className="p-6 bg-gradient-card border-border shadow-card">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileVideo className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">product_showcase.cap</h3>
                  <p className="text-sm text-muted-foreground">CapCut Template • 2.4 MB</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-border">
                <h4 className="text-sm font-medium text-foreground">Conversion Quality Report</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-secondary/50 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Layers Mapped</p>
                    <p className="text-xl font-bold text-success">8/8</p>
                  </div>
                  <div className="p-3 bg-secondary/50 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Effects Preserved</p>
                    <p className="text-xl font-bold text-success">12/12</p>
                  </div>
                  <div className="p-3 bg-secondary/50 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Timing Accuracy</p>
                    <p className="text-xl font-bold text-success">100%</p>
                  </div>
                  <div className="p-3 bg-secondary/50 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Quality Score</p>
                    <p className="text-xl font-bold text-success">A+</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button className="flex-1" size="lg" onClick={handleDownload}>
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button variant="secondary" size="lg" onClick={handleShare}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Conversion Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Original Format</span>
                <span className="text-foreground font-medium">Adobe Premiere Pro (.prproj)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Output Format</span>
                <span className="text-foreground font-medium">CapCut Template (.cap)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Processing Time</span>
                <span className="text-foreground font-medium">3.2 seconds</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Completed At</span>
                <span className="text-foreground font-medium">Today, 2:35 PM</span>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Results;
