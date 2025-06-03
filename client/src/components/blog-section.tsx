import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowRight, Bot, Lock, Code, BarChart3, GraduationCap, Lightbulb } from "lucide-react";
import { blogPosts, getBlogPostsByCategory, getBlogCategories } from "@/lib/blog-data";
import { Link } from "wouter";

const iconMap = {
  robot: Bot,
  lock: Lock,
  code: Code,
  chart: BarChart3,
  teacher: GraduationCap,
  lightbulb: Lightbulb,
};

export function BlogSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  
  const categories = getBlogCategories();
  const filteredPosts = getBlogPostsByCategory(selectedCategory).filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getBlogIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || Bot;
    return <IconComponent className="h-8 w-8 text-white" />;
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">
            Blog
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
            Insights on AI, machine learning, secure development, and technical innovations
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-80 bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48 bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Card
              key={post.id}
              className="bg-slate-50 dark:bg-slate-700 border-none shadow-lg hover-lift animate-scale-in overflow-hidden group cursor-pointer relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className={`w-full h-48 bg-gradient-to-br ${post.image.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    {post.image.animation === "grid-pulse" && (
                      <div className="grid grid-cols-6 gap-1 h-full">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div
                            key={i}
                            className="bg-white animate-pulse"
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>
                    )}
                    {post.image.animation === "border-pulse" && (
                      <div className="w-full h-full border-2 border-white border-dashed animate-pulse" />
                    )}
                    {post.image.animation === "grid-fade" && (
                      <div className="grid grid-cols-3 gap-2 h-full p-4">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <div key={i} className="bg-white rounded" />
                        ))}
                      </div>
                    )}
                    {post.image.animation === "bar-chart" && (
                      <div className="grid grid-cols-4 gap-1 h-full">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div
                            key={i}
                            className="bg-white self-end animate-pulse"
                            style={{ 
                              height: `${25 + i * 25}%`,
                              animationDelay: `${i * 200}ms` 
                            }}
                          />
                        ))}
                      </div>
                    )}
                    {post.image.animation === "classroom" && (
                      <>
                        <div className="absolute top-8 left-8 w-16 h-8 bg-white rounded animate-pulse" />
                        <div className="absolute bottom-8 right-8 w-12 h-12 bg-white rounded-full animate-pulse animation-delay-300" />
                      </>
                    )}
                    {post.image.animation === "idea-spark" && (
                      <div className="w-20 h-20 bg-white rounded-full mx-auto mt-8 animate-pulse" />
                    )}
                  </div>
                  {getBlogIcon(post.image.icon)}
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-slate-500 dark:text-slate-500">
                      {post.readTime} min read
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 dark:text-slate-500">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="text-primary hover:text-primary/80 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform">
                      Read More <ArrowRight className="h-4 w-4 ml-1" />
                    </span>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="px-8 py-4 rounded-full shadow-lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
