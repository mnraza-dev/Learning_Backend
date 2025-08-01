import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";

const JokesItemCard = ({ joke }) => {
  return (
    <Card className="group relative overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500 to-purple-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
      
      <CardHeader className="relative pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <span className="text-2xl">😄</span>
            <span>Joke #{joke?.id || "N/A"}</span>
          </CardTitle>
          <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
            #{joke?.id || "N/A"}
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative pb-6">
        <div className="space-y-3">
          {joke?.content && (
            <div className="relative">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base font-medium">
                "{joke.content}"
              </p>
              <div className="absolute -bottom-2 right-0 text-4xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                😂
              </div>
            </div>
          )}
          
          {!joke?.content && (
            <div className="text-center py-8">
              <div className="text-4xl mb-2">🤔</div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                No content available
              </p>
            </div>
          )}
        </div>
      </CardContent>

      {/* Hover effect border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </Card>
  );
};

export default JokesItemCard;
