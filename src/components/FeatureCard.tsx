
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl dark:hover:shadow-purple-500/10 transition-all duration-500 rounded-3xl overflow-hidden transform hover:scale-105 hover:-translate-y-2">
      <CardContent className="p-10">
        <div className="mb-8">
          <div className="inline-flex p-5 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-3xl mb-8 group-hover:from-blue-100 group-hover:to-purple-100 dark:group-hover:from-purple-800/40 dark:group-hover:to-pink-800/40 transition-all duration-300 shadow-lg">
            <Icon className="w-10 h-10 text-blue-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 leading-tight group-hover:text-blue-600 dark:group-hover:text-purple-400 transition-colors duration-300">
            {title}
          </h3>
        </div>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-light group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
