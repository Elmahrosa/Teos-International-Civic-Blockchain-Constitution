"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet, Award, Vote, TrendingUp, Users, FileText, Shield, Pyramid, ExternalLink, Crown } from "lucide-react";
import { usePi } from "@/components/pi-provider";

// STUB FALLBACKS to prevent build crash
const ConstitutionModal = ({ onSign }: { onSign: () => void }) => null;
const TreasuryDashboard = () => null;
const BadgeGallery = () => null;
const FounderDashboard = () => null;
const StakingPanel = () => null;
const StakingPanelPage = () => null;
const DAppConnector = () => null;

export default function HomePage() {
  const [hasSignedConstitution, setHasSignedConstitution] = useState(false);
  const [showConstitution, setShowConstitution] = useState(true);
  const { user, authenticate, isLoading } = usePi();

  const isFounder = user?.username === "aams1969"; // Your founder ID from code

  const handleConstitutionSigned = () => {
    setHasSignedConstitution(true);
    setShowConstitution(false);
  };

  const handleConnectWallet = async () => {
    if (!user) {
      await authenticate();
    }
  };

  if (!hasSignedConstitution && showConstitution) {
    return <ConstitutionModal onSign={handleConstitutionSigned} />;
  }

  if (isFounder) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b border-border bg-card sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Pyramid className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">CivicChain</h1>
                <p className="text-xs text-muted-foreground">Pi Network Constitution</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary">
                <Crown className="w-3 h-3 mr-1" />
                Founder
              </Badge>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Wallet className="w-4 h-4" />
                <span className="hidden sm:inline">{user?.username}</span>
              </Button>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-6">
          <FounderDashboard />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Pyramid className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">CivicChain</h1>
              <p className="text-xs text-muted-foreground">Pi Network Constitution</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 bg-transparent"
            onClick={handleConnectWallet}
            disabled={isLoading}
          >
            <Wallet className="w-4 h-4" />
            <span className="hidden sm:inline">{user ? user.username : "Connect Pi"}</span>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <Card className="bg-accent/10 border-accent/30">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1">
                <CardTitle className="text-sm">Official Constitution Repository</CardTitle>
                <CardDescription className="text-xs mt-1">
                  View source code, audit logs, and vault registry on GitHub
                </CardDescription>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="gap-2 bg-transparent border-accent text-accent hover:bg-accent/10"
                onClick={() => window.open("https://github.com/Elmahrosa/International-Civic-Blockchain-Constitution")}
              >
                <ExternalLink className="w-3 h-3" />
                <span className="hidden sm:inline">View on GitHub</span>
              </Button>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-card/50 border-primary/20">
            <CardHeader className="pb-3">
              <CardDescription className="text-muted-foreground text-xs">Total Signers</CardDescription>
              <CardTitle className="text-2xl text-primary">124,583</CardTitle>
            </CardHeader>
          </Card>
          <Card className="bg-card/50 border-accent/20">
            <CardHeader className="pb-3">
              <CardDescription className="text-muted-foreground text-xs">Active Petitions</CardDescription>
              <CardTitle className="text-2xl text-accent">1,247</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Tabs defaultValue="governance" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-card">
            <TabsTrigger value="governance" className="text-xs">
              <Vote className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Govern</span>
            </TabsTrigger>
            <TabsTrigger value="treasury" className="text-xs">
              <TrendingUp className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Treasury</span>
            </TabsTrigger>
            <TabsTrigger value="badges" className="text-xs">
              <Award className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Badges</span>
            </TabsTrigger>
            <TabsTrigger value="stake" className="text-xs">
              <Shield className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Stake</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="governance" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Active Petitions
                </CardTitle>
                <CardDescription>Vote on proposals shaping global governance</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>

          <TabsContent value="treasury" className="mt-6">
            <TreasuryDashboard />
          </TabsContent>

          <TabsContent value="badges" className="mt-6">
            <BadgeGallery />
          </TabsContent>

          <TabsContent value="stake" className="mt-6">
            <StakingPanel />
          </TabsContent>
        </Tabs>

        <div className="text-center py-4 text-xs text-muted-foreground">
          <p>Powered by Pi Network • Anchored by Elmahrosa</p>
          <p className="mt-1">Motto: "Sign With It"</p>
        </div>
      </main>
    </div>
  );
}
