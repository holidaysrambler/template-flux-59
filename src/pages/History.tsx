import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileVideo, Clock } from "lucide-react";

const History = () => {
  const mockHistory = [
    {
      id: 1,
      filename: "product_showcase.prproj",
      outputName: "product_showcase.cap",
      status: "completed",
      date: "2024-01-15",
      time: "2:35 PM",
      size: "2.4 MB",
    },
    {
      id: 2,
      filename: "intro_sequence.fcpxml",
      outputName: "intro_sequence.cap",
      status: "completed",
      date: "2024-01-14",
      time: "11:20 AM",
      size: "1.8 MB",
    },
    {
      id: 3,
      filename: "transitions_v2.json",
      outputName: "transitions_v2.cap",
      status: "completed",
      date: "2024-01-13",
      time: "4:45 PM",
      size: "3.1 MB",
    },
    {
      id: 4,
      filename: "wedding_template.prproj",
      outputName: "wedding_template.cap",
      status: "completed",
      date: "2024-01-12",
      time: "9:15 AM",
      size: "4.2 MB",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Conversion History</h1>
            <p className="text-muted-foreground">Access your previously converted templates</p>
          </div>

          <div className="space-y-4">
            {mockHistory.map((item) => (
              <Card key={item.id} className="p-6 bg-gradient-card border-border hover:shadow-glow transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileVideo className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">{item.outputName}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.date} at {item.time}
                      </span>
                      <span>•</span>
                      <span>{item.size}</span>
                    </div>
                  </div>

                  <Button size="sm" variant="secondary">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {mockHistory.length === 0 && (
            <Card className="p-12 bg-card/50 backdrop-blur-sm border-border text-center">
              <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileVideo className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No conversion history</h3>
              <p className="text-muted-foreground mb-6">
                Start converting templates to see your history here
              </p>
              <Button>Start Converting</Button>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default History;
