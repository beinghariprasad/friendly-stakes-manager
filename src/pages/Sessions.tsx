import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Users, TrendingUp, TrendingDown, Calendar, Trophy } from "lucide-react";

export default function Sessions() {
  // Mock data - will be replaced with real data
  const sessions = [
    {
      id: 1,
      date: "2024-01-15",
      startTime: "7:30 PM",
      endTime: "12:00 AM",
      duration: "4h 30m",
      status: "completed",
      players: ["Alex Chen", "Jordan Smith", "Sam Rodriguez", "Taylor Kim", "Morgan Lee", "Casey Park"],
      totalChips: 3200,
      adminName: "Alex Chen",
      yourPnL: 450
    },
    {
      id: 2,
      date: "2024-01-12",
      startTime: "8:00 PM",
      endTime: "11:15 PM",
      duration: "3h 15m",
      status: "completed",
      players: ["Alex Chen", "Jordan Smith", "Sam Rodriguez", "Taylor Kim", "Morgan Lee"],
      totalChips: 2500,
      adminName: "Alex Chen",
      yourPnL: -120
    },
    {
      id: 3,
      date: "2024-01-10",
      startTime: "6:45 PM",
      endTime: "12:30 AM",
      duration: "5h 45m",
      status: "completed",
      players: ["Alex Chen", "Jordan Smith", "Sam Rodriguez", "Taylor Kim", "Morgan Lee", "Casey Park", "Riley Chen"],
      totalChips: 4100,
      adminName: "Sam Rodriguez",
      yourPnL: 680
    },
    {
      id: 4,
      date: "2024-01-08",
      startTime: "7:15 PM",
      endTime: "10:45 PM",
      duration: "3h 30m",
      status: "completed",
      players: ["Alex Chen", "Jordan Smith", "Taylor Kim", "Morgan Lee"],
      totalChips: 2000,
      adminName: "Alex Chen",
      yourPnL: -200
    }
  ];

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Sessions</h1>
          <p className="text-muted-foreground mt-1">View and manage poker sessions</p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
          <Play className="mr-2 h-4 w-4" />
          Start New Session
        </Button>
      </div>

      {/* Active Session Alert (if any) */}
      <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
        <CardContent className="flex items-center justify-center py-8">
          <div className="text-center">
            <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No Active Session</h3>
            <p className="text-muted-foreground mb-4">Ready to deal the cards?</p>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
              <Play className="mr-2 h-4 w-4" />
              Start Session
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Sessions List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Session History</h2>
        {sessions.map((session) => (
          <Card key={session.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-foreground flex items-center gap-3">
                      {formatDate(session.date)}
                      <Badge variant="outline" className="text-xs">
                        {session.status}
                      </Badge>
                    </CardTitle>
                    <CardDescription className="mt-1">
                      Admin: {session.adminName}
                    </CardDescription>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={session.yourPnL >= 0 ? "default" : "destructive"} 
                    className={`text-sm ${session.yourPnL >= 0 ? "bg-success hover:bg-success/80" : ""}`}
                  >
                    {session.yourPnL >= 0 ? '+' : ''}${session.yourPnL}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">Your P&L</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{session.duration}</p>
                    <p className="text-xs text-muted-foreground">Duration</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{session.players.length} players</p>
                    <p className="text-xs text-muted-foreground">Participants</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">${session.totalChips}</p>
                    <p className="text-xs text-muted-foreground">Total chips</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{session.startTime} - {session.endTime}</p>
                    <p className="text-xs text-muted-foreground">Time range</p>
                  </div>
                </div>
              </div>
              
              {/* Players list */}
              <div className="border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground mb-2">Players:</p>
                <div className="flex flex-wrap gap-2">
                  {session.players.map((player, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {player}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}