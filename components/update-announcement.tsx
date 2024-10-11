'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function UpdateAnnouncementComponent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasSeenAnnouncement = localStorage.getItem('hasSeenUpdateAnnouncement')
    if (!hasSeenAnnouncement) {
      setIsVisible(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    localStorage.setItem('hasSeenUpdateAnnouncement', 'true')
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-primary/50 bg-opacity-80 flex items-center justify-center z-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">New Features Available!</CardTitle>
          <CardDescription>
            We've made some exciting updates.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Vehicle Search Result UI</li>
            <li>Agents & Admins Can now serach for vehicle using Owners Name, Vehicle Plate, T-Code</li>
            <li>Admins & agents can now see Vehicle Wallet and Transaction History </li>
          </ul>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <Button variant="outline" onClick={handleDismiss}>Dismiss</Button>
          <Button onClick={handleDismiss}>Explore New Features</Button>
        </CardFooter>
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute top-2 right-2" 
          onClick={handleDismiss}
          aria-label="Close announcement"
        >
          <X className="h-4 w-4" />
        </Button>
      </Card>
    </div>
  )
}