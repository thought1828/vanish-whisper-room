
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="group bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden">
      <CardContent className="p-8">
        <div className="mb-6">
          <div className="inline-flex p-4 bg-slate-50 rounded-2xl mb-6 group-hover:bg-slate-100 transition-colors">
            <Icon className="w-8 h-8 text-slate-700" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">{title}</h3>
        </div>
        <p className="text-slate-600 leading-relaxed text-lg font-light">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
