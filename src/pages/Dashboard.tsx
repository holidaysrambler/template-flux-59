import Navigation from "@/components/Navigation";
import ConversionCard from "@/components/ConversionCard";
import { Card } from "@/components/ui/card";
import { Activity, FileVideo, Layers } from "lucide-react";

const Dashboard = () => {
  const mockConversions = [
    { id: 1, filename: "product_showcase.prproj", status: "completed" as const, progress: 100, format: "Premiere Pro" },
    { id: 2, filename: "intro_animation.fcpxml", status: "processing" as const, progress: 67, format: "Final Cut Pro" },
    { id: 3, filename: "transitions_pack.json", status: "pending" as const, progress: 0, format: "JSON Template" },
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Conversion Dashboard</h1>
            <p className="text-muted-foreground">Monitor your template conversions in real-time</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-card border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active</p>
                  <p className="text-2xl font-bold text-foreground">1</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                  <FileVideo className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold text-foreground">1</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted/50 rounded-xl flex items-center justify-center">
                  <Layers className="w-6 h-6 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Queued</p>
                  <p className="text-2xl font-bold text-foreground">1</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Current Conversions</h2>
            <div className="space-y-4">
              {mockConversions.map((conversion) => (
                <ConversionCard key={conversion.id} {...conversion} />
              ))}
            </div>
          </div>

          <Card className="p-8 bg-gradient-card border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Template Structure Preview</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
                <span className="text-sm text-foreground">Video Layer 1</span>
                <span className="ml-auto text-xs text-muted-foreground">0:00 - 0:15</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg ml-6">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm text-foreground">Effect: Fade In</span>
                <span className="ml-auto text-xs text-muted-foreground">Duration: 2s</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-foreground">Audio Layer 1</span>
                <span className="ml-auto text-xs text-muted-foreground">0:00 - 0:15</span>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
