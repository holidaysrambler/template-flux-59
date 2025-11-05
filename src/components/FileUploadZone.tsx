import { useState, useCallback } from "react";
import { Upload, FileType, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

interface FileUploadZoneProps {
  onFileSelect: (files: File[]) => void;
}

const FileUploadZone = ({ onFileSelect }: FileUploadZoneProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { toast } = useToast();

  const supportedFormats = [".prproj", ".fcpxml", ".json"];

  const validateFile = (file: File): boolean => {
    const extension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
    return supportedFormats.includes(extension);
  };

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);

      const files = Array.from(e.dataTransfer.files);
      const validFiles = files.filter(validateFile);

      if (validFiles.length !== files.length) {
        toast({
          title: "Invalid file format",
          description: `Only ${supportedFormats.join(", ")} files are supported`,
          variant: "destructive",
        });
      }

      if (validFiles.length > 0) {
        setSelectedFiles(validFiles);
        onFileSelect(validFiles);
      }
    },
    [onFileSelect, toast]
  );

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    const validFiles = files.filter(validateFile);

    if (validFiles.length > 0) {
      setSelectedFiles(validFiles);
      onFileSelect(validFiles);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
          relative border-2 border-dashed rounded-xl p-12 transition-all duration-300
          ${
            isDragging
              ? "border-primary bg-primary/10 shadow-glow"
              : "border-border bg-card/50 backdrop-blur-sm hover:border-primary/50"
          }
        `}
      >
        <input
          type="file"
          id="file-upload"
          multiple
          accept={supportedFormats.join(",")}
          onChange={handleFileInput}
          className="hidden"
        />

        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center animate-glow-pulse">
            <Upload className="w-8 h-8 text-primary-foreground" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">
              {selectedFiles.length > 0 ? "Files Selected" : "Drop your templates here"}
            </h3>
            <p className="text-muted-foreground">
              {selectedFiles.length > 0
                ? `${selectedFiles.length} file(s) ready to convert`
                : "or click to browse"}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {supportedFormats.map((format) => (
              <span
                key={format}
                className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-muted-foreground"
              >
                {format}
              </span>
            ))}
          </div>

          {selectedFiles.length === 0 ? (
            <Button asChild className="mt-4">
              <label htmlFor="file-upload" className="cursor-pointer">
                <FileType className="w-4 h-4 mr-2" />
                Select Files
              </label>
            </Button>
          ) : (
            <div className="w-full space-y-2 mt-4">
              {selectedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-secondary rounded-lg animate-fade-in"
                >
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <span className="text-sm font-medium text-foreground flex-1 text-left truncate">
                    {file.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {(file.size / 1024).toFixed(1)} KB
                  </span>
                </div>
              ))}
              <Button className="w-full mt-4" size="lg">
                Start Conversion
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploadZone;
