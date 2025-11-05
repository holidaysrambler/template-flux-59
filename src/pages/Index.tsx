import { useState } from "react";
import Navigation from "@/components/Navigation";
import FileUploadZone from "@/components/FileUploadZone";
import { Sparkles } from "lucide-react";

const Index = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileSelect = (files: File[]) => {
    setSelectedFiles(files);
  };

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Professional Template Converter</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Convert Templates
              <span className="block mt-2 bg-gradient-primary bg-clip-text text-transparent">
                Seamlessly
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your Premiere Pro, Final Cut Pro, and other video editing templates
              into CapCut format with precision and ease
            </p>
          </div>

          <FileUploadZone onFileSelect={handleFileSelect} />

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Advanced conversion engine processes templates in seconds
              </p>
            </div>

            <div className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Precise Mapping</h3>
              <p className="text-sm text-muted-foreground">
                Maintains layer structure, effects, and timing accuracy
              </p>
            </div>

            <div className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Secure & Private</h3>
              <p className="text-sm text-muted-foreground">
                Your templates are processed securely and never stored
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
