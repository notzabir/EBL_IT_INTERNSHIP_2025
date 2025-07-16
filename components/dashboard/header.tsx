"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between flex-1">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Hello Jyoti Pandey, Welcome back!</h1>
        <p className="text-sm text-gray-600">Last 7 days</p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder="Search loan or other..." className="pl-10 w-64" />
        </div>

        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5" />
        </Button>

        <Avatar>
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
