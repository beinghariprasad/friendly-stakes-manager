import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, TrendingUp, TrendingDown, Download, Calendar, DollarSign, Trophy, Users, Clock } from "lucide-react";

export default function Reports() {
  // Mock data - will be replaced with real data
  const personalStats = {
    lifetimePnL: 1850,
    weeklyPnL: 320,
    avgSessionLength: "4h 12m",
    avgBuyIn: 250,
    sessionsPlayed: 23,
    winRate: 65.2,
    biggestWin: 850,
    biggestLoss: -320
  };

  const leaderboard = [
    { name: "Alex Chen", pnl: 2150, sessions: 25, winRate: 68 },
    { name: "Sam Rodriguez", pnl: 1850, sessions: 23, winRate: 65 },
    { name: "Taylor Kim", pnl: 980, sessions: 18, winRate: 61 },
    { name: "Morgan Lee", pnl: -150, sessions: 15, winRate: 47 },
    { name: "Jordan Smith", pnl: -420, sessions: 12, winRate: 42 }
  ];

  const weeklyData = [
    { week: "Week 1", profit: 450 },
    { week: "Week 2", profit: -120 },
    { week: "Week 3", profit: 680 },
    { week: "Week 4", profit: 320 }
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground mt-1">Track performance and analyze trends</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export Data
        </Button>
      </div>

      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
          <TabsTrigger value="personal">My Stats</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="sessions">Sessions</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-6">
          {/* Personal Performance Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Lifetime P&L</CardTitle>
                {personalStats.lifetimePnL >= 0 ? (
                  <TrendingUp className="h-4 w-4 text-success" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-destructive" />
                )}
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${personalStats.lifetimePnL >= 0 ? 'text-success' : 'text-destructive'}`}>
                  {personalStats.lifetimePnL >= 0 ? '+' : ''}${personalStats.lifetimePnL}
                </div>
                <p className="text-xs text-muted-foreground">
                  Weekly: {personalStats.weeklyPnL >= 0 ? '+' : ''}${personalStats.weeklyPnL}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
                <Trophy className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{personalStats.winRate}%</div>
                <p className="text-xs text-muted-foreground">
                  {personalStats.sessionsPlayed} sessions played
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Session</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{personalStats.avgSessionLength}</div>
                <p className="text-xs text-muted-foreground">
                  Avg buy-in: ${personalStats.avgBuyIn}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Best Session</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">+${personalStats.biggestWin}</div>
                <p className="text-xs text-muted-foreground">
                  Worst: ${personalStats.biggestLoss}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Weekly Performance Chart Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Weekly Performance</CardTitle>
              <CardDescription>Your profit/loss over the last 4 weeks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Weekly performance chart would go here</p>
                  <p className="text-xs text-muted-foreground mt-2">Chart component integration needed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leaderboard" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                Player Leaderboard
              </CardTitle>
              <CardDescription>Ranked by lifetime profit/loss</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaderboard.map((player, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/30 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        index === 0 ? 'bg-primary text-primary-foreground' :
                        index === 1 ? 'bg-accent text-accent-foreground' :
                        index === 2 ? 'bg-warning text-warning-foreground' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{player.name}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{player.sessions} sessions</span>
                          <span>{player.winRate}% win rate</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant={player.pnl >= 0 ? "default" : "destructive"} className={player.pnl >= 0 ? "bg-success hover:bg-success/80" : ""}>
                      {player.pnl >= 0 ? '+' : ''}${player.pnl}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Monthly Trends</CardTitle>
              <CardDescription>Analyze patterns in your poker performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Trend analysis charts would go here</p>
                  <p className="text-xs text-muted-foreground mt-2">Coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sessions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Session Analysis</CardTitle>
              <CardDescription>Detailed breakdown of all sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
                <div className="text-center">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Session data table would go here</p>
                  <p className="text-xs text-muted-foreground mt-2">With export functionality</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}