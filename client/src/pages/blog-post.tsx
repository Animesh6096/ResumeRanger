import { useParams, Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { getBlogPostBySlug } from "@/lib/blog-data";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug || "");

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Post Not Found
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Header Image */}
        <div className={`w-full h-64 bg-gradient-to-br ${post.image.gradient} rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-20">
            {post.image.animation === "grid-pulse" && (
              <div className="grid grid-cols-8 gap-1 h-full">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-white animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <Card className="border-none shadow-lg">
          <CardContent className="p-8 lg:p-12">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime} min read
              </div>
              <Badge variant="secondary">{post.category}</Badge>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center mb-8 pb-8 border-b border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mr-4">
                AB
              </div>
              <div>
                <p className="font-semibold text-slate-800 dark:text-slate-100">
                  Animesh Bhattacharjee
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  AI Researcher & Full-Stack Developer
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {post.content ? (
                <div
                  className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{
                    __html: post.content
                      .split('\n')
                      .map(line => {
                        if (line.startsWith('# ')) {
                          return `<h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100 mt-8 mb-4">${line.slice(2)}</h1>`;
                        }
                        if (line.startsWith('## ')) {
                          return `<h2 class="text-xl font-semibold text-slate-800 dark:text-slate-100 mt-6 mb-3">${line.slice(3)}</h2>`;
                        }
                        if (line.startsWith('- ')) {
                          return `<li class="ml-4">${line.slice(2)}</li>`;
                        }
                        if (line.trim() === '') {
                          return '';
                        }
                        return `<p class="mb-4">${line}</p>`;
                      })
                      .join('')
                  }}
                />
              ) : (
                <p className="text-slate-600 dark:text-slate-400">
                  {post.excerpt}
                </p>
              )}
            </div>

            {/* Tags */}
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center flex-wrap gap-2">
                <Tag className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation to other posts */}
        <div className="mt-12 text-center">
          <Link href="/#blog">
            <Button size="lg" className="rounded-full">
              Read More Articles
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
