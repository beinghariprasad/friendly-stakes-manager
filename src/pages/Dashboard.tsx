import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Users, TrendingUp, TrendingDown, Clock, Trophy } from "lucide-react";

export default function Dashboard() {
  // Mock data - will be replaced with real data
  const currentSession = null; // No active session
  const stats = {
    totalPlayers: 8,
    activePlayers: 0,
    weeklyProfit: 2450,
    totalSessions: 23
  };

  const recentSessions = [
    { id: 1, date: "2024-01-15", players: 6, duration: "4h 30m", profit: 450 },
    { id: 2, date: "2024-01-12", players: 5, duration: "3h 15m", profit: -120 },
    { id: 3, date: "2024-01-10", players: 7, duration: "5h 45m", profit: 680 }
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage your poker home games</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
          <Play className="mr-2 h-4 w-4" />
          Start New Session
        </Button>
      </div>

      {/* Active Session Alert */}
      {!currentSession && (
        <Card className="border-2 border-dashed border-muted bg-gradient-to-r from-muted/20 to-secondary/20">
          <CardContent className="flex items-center justify-center py-8">
            <div className="text-center">
              <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No Active Session</h3>
              <p className="text-muted-foreground mb-4">Ready to start a new poker session?</p>
              <Button variant="outline" size="lg">
                <Play className="mr-2 h-4 w-4" />
                Start Session
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Players</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.totalPlayers}</div>
            <p className="text-xs text-muted-foreground">
              {stats.activePlayers} active this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weekly P&L</CardTitle>
            {stats.weeklyProfit >= 0 ? (
              <TrendingUp className="h-4 w-4 text-success" />
            ) : (
              <TrendingDown className="h-4 w-4 text-destructive" />
            )}
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${stats.weeklyProfit >= 0 ? 'text-success' : 'text-destructive'}`}>
              {stats.weeklyProfit >= 0 ? '+' : ''}${stats.weeklyProfit}
            </div>
            <p className="text-xs text-muted-foreground">
              This week's net result
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stats.totalSessions}</div>
            <p className="text-xs text-muted-foreground">
              All time sessions played
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Session</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">4h 12m</div>
            <p className="text-xs text-muted-foreground">
              Average session length
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Sessions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Recent Sessions</CardTitle>
          <CardDescription>Your latest poker sessions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentSessions.map((session) => (
              <div key={session.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/30 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <Trophy className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{session.date}</p>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {session.players} players
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {session.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <Badge variant={session.profit >= 0 ? "default" : "destructive"} className={session.profit >= 0 ? "bg-success hover:bg-success/80" : ""}>
                  {session.profit >= 0 ? '+' : ''}${session.profit}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}