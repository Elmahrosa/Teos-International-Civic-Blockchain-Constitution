"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Crown,
  Users,
  TrendingUp,
  FileText,
  Shield,
  Database,
  Activity,
  CheckCircle,
  AlertCircle,
  Settings,
  BarChart3,
} from "lucide-react"
import { useState } from "react"

export function FounderDashboard() {
  const [newPetitionTitle, setNewPetitionTitle] = useState("")

  return (
    <div className="space-y-6">
      {/* Founder Header */}
      <Card className="bg-gradient-to-br from-primary/20 to-accent/20 border-primary/50">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Crown className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-xl">Founder Control Panel</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary">
                  @aams1969
                </Badge>
                <span className="text-xs">Elmahrosa Coordinating Authority</span>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* System Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-card/50">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <Users className="w-5 h-5 text-primary" />
              <Badge variant="outline" className="text-xs">
                +12%
              </Badge>
            </div>
            <CardTitle className="text-2xl mt-2">124.6K</CardTitle>
            <CardDescription className="text-xs">Total Members</CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-card/50">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <FileText className="w-5 h-5 text-accent" />
              <Badge variant="outline" className="text-xs">
                +8
              </Badge>
            </div>
            <CardTitle className="text-2xl mt-2">1,247</CardTitle>
            <CardDescription className="text-xs">Active Petitions</CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-card/50">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <Badge variant="outline" className="text-xs">
                +24%
              </Badge>
            </div>
            <CardTitle className="text-2xl mt-2">842K π</CardTitle>
            <CardDescription className="text-xs">Treasury Value</CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-card/50">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <Activity className="w-5 h-5 text-blue-500" />
              <Badge variant="outline" className="text-xs text-green-500">
                Online
              </Badge>
            </div>
            <CardTitle className="text-2xl mt-2">98.7%</CardTitle>
            <CardDescription className="text-xs">System Health</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Main Founder Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-card">
          <TabsTrigger value="overview">
            <BarChart3 className="w-4 h-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="petitions">
            <FileText className="w-4 h-4 mr-2" />
            Petitions
          </TabsTrigger>
          <TabsTrigger value="treasury">
            <Database className="w-4 h-4 mr-2" />
            Treasury
          </TabsTrigger>
          <TabsTrigger value="settings">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                {
                  icon: CheckCircle,
                  color: "text-green-500",
                  action: "New member joined",
                  detail: "User @sarah_civic signed constitution",
                  time: "2 min ago",
                },
                {
                  icon: FileText,
                  color: "text-blue-500",
                  action: "Petition created",
                  detail: "Climate Action Protocol 2025",
                  time: "15 min ago",
                },
                {
                  icon: TrendingUp,
                  color: "text-accent",
                  action: "Treasury milestone",
                  detail: "Reached 800K π in vault",
                  time: "1 hour ago",
                },
                {
                  icon: AlertCircle,
                  color: "text-yellow-500",
                  action: "Petition threshold",
                  detail: "Universal Basic Income Framework needs review",
                  time: "3 hours ago",
                },
              ].map((activity, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <activity.icon className={`w-5 h-5 ${activity.color} flex-shrink-0 mt-0.5`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground truncate">{activity.detail}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { service: "Pi Network Integration", status: "Operational", uptime: "99.8%" },
                { service: "Constitution Repository", status: "Operational", uptime: "100%" },
                { service: "Badge System", status: "Operational", uptime: "99.9%" },
                { service: "Treasury Tracking", status: "Operational", uptime: "99.7%" },
              ].map((system, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium">{system.service}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-xs text-green-500 border-green-500/30">
                      {system.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{system.uptime}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="petitions" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Create New Petition</CardTitle>
              <CardDescription>Launch a new governance proposal for community voting</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Petition title..."
                value={newPetitionTitle}
                onChange={(e) => setNewPetitionTitle(e.target.value)}
                className="bg-background"
              />
              <div className="flex gap-2">
                <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                  Create Petition
                </Button>
                <Button variant="outline">Draft</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Petition Management</CardTitle>
              <CardDescription>Review and moderate active petitions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { title: "Universal Basic Income Framework", status: "Under Review", votes: 45230, flagged: true },
                { title: "Climate Action Protocol 2025", status: "Approved", votes: 38741, flagged: false },
                { title: "Digital Rights Amendment", status: "Active", votes: 32156, flagged: false },
              ].map((petition, idx) => (
                <Card key={idx} className="bg-secondary/30">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <CardTitle className="text-base">{petition.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge
                            variant="outline"
                            className={`text-xs ${
                              petition.status === "Approved"
                                ? "border-green-500 text-green-500"
                                : petition.status === "Under Review"
                                  ? "border-yellow-500 text-yellow-500"
                                  : "border-primary text-primary"
                            }`}
                          >
                            {petition.status}
                          </Badge>
                          {petition.flagged && (
                            <Badge variant="outline" className="text-xs border-red-500 text-red-500">
                              Flagged
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">{petition.votes.toLocaleString()} votes</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Review
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="treasury" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                Treasury Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                  <p className="text-sm text-muted-foreground">Total Vault</p>
                  <p className="text-2xl font-bold text-primary mt-1">842,156 π</p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                  <p className="text-sm text-muted-foreground">Contributors</p>
                  <p className="text-2xl font-bold text-accent mt-1">23,847</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Top Contributors</h4>
                {[
                  { name: "aams1969", amount: 50000, badge: "Founder" },
                  { name: "civic_dao", amount: 35000, badge: "Gold" },
                  { name: "blockchain_phil", amount: 28000, badge: "Gold" },
                ].map((contributor, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="text-sm font-medium">@{contributor.name}</p>
                        <Badge variant="outline" className="text-xs mt-1">
                          {contributor.badge}
                        </Badge>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-primary">{contributor.amount.toLocaleString()} π</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Founder Settings</CardTitle>
              <CardDescription>System configuration and governance parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Petition Approval Threshold</label>
                <Input type="number" placeholder="50000" className="bg-background" />
                <p className="text-xs text-muted-foreground">Minimum votes required for petition approval</p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Badge Distribution Rules</label>
                <Input placeholder="Auto-distribute badges..." className="bg-background" />
                <p className="text-xs text-muted-foreground">Configure automated badge assignment logic</p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Treasury Lock Period</label>
                <Input type="number" placeholder="30" className="bg-background" />
                <p className="text-xs text-muted-foreground">Days before staked tokens can be withdrawn</p>
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Save Settings</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Security & Access
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                <div>
                  <p className="text-sm font-medium">Two-Factor Authentication</p>
                  <p className="text-xs text-muted-foreground">Pi Network wallet verification</p>
                </div>
                <Badge variant="outline" className="text-xs text-green-500 border-green-500/30">
                  Enabled
                </Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                <div>
                  <p className="text-sm font-medium">Audit Logging</p>
                  <p className="text-xs text-muted-foreground">All actions recorded on blockchain</p>
                </div>
                <Badge variant="outline" className="text-xs text-green-500 border-green-500/30">
                  Active
                </Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
