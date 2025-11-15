"use client";

import { EmptyState } from "@/components/EmptyState";
import { FilterChip } from "@/components/FilterChip";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { Header } from "@/components/Header";
import { SubscriptionListItem } from "@/components/SubscriptionListItem";
import { subscriptions } from "@/lib/data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SubscriptionsList() {
  const [activeFilter, setActiveFilter] = useState("All");
  const router = useRouter();

  const categories = ["All", "Streaming", "Fitness", "Utilities", "Work", "Music"];

  const filteredSubscriptions =
    activeFilter === "All"
      ? subscriptions
      : subscriptions.filter(
          (sub) => sub.category.toLowerCase() === activeFilter.toLowerCase()
        );

  const handleAddSubscription = () => {
    router.push("/add");
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col">
        <Header
          title="My Subscriptions"
          leftAction={
            <Link href="/" className="material-symbols-outlined text-gray-800 dark:text-white">
              menu
            </Link>
          }
          rightAction={
            <Link
              href="/settings"
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-gray-800 dark:text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
            >
              <span className="material-symbols-outlined">settings</span>
            </Link>
          }
        />

        <div className="flex gap-3 px-4 py-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {categories.map((category) => (
            <FilterChip
              key={category}
              label={category}
              isActive={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            />
          ))}
        </div>

        <main className="flex flex-col gap-3 p-4 pb-24">
          {filteredSubscriptions.length > 0 ? (
            filteredSubscriptions.map((sub) => (
              <Link key={sub.id} href={`/subscriptions/${sub.id}`}>
                <SubscriptionListItem subscription={sub} />
              </Link>
            ))
          ) : (
            <EmptyState onAddSubscription={handleAddSubscription} />
          )}
        </main>

        <FloatingActionButton onClick={handleAddSubscription} />
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
