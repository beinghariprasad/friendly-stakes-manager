import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Crown, TrendingUp, TrendingDown, Mail, Phone } from "lucide-react";

export default function Players() {
  const [isAddPlayerOpen, setIsAddPlayerOpen] = useState(false);

  // Mock data - will be replaced with real data
  const players = [
    {
      id: 1,
      name: "Alex Chen",
      email: "alex@email.com",
      phone: "+1 555-0123",
      role: "admin",
      avatar: null,
      lifetimeBuyIn: 5400,
      lifetimeCashOut: 6200,
      lifetimePnL: 800,
      weeklyPnL: 250,
      sessionsPlayed: 12,
      isSettled: true
    },
    {
      id: 2,
      name: "Jordan Smith",
      email: "jordan@email.com",
      phone: "+1 555-0124",
      role: "player",
      avatar: null,
      lifetimeBuyIn: 3200,
      lifetimeCashOut: 2950,
      lifetimePnL: -250,
      weeklyPnL: -80,
      sessionsPlayed: 8,
      isSettled: false
    },
    {
      id: 3,
      name: "Sam Rodriguez",
      email: "sam@email.com",
      phone: "+1 555-0125",
      role: "player",
      avatar: null,
      lifetimeBuyIn: 4100,
      lifetimeCashOut: 4650,
      lifetimePnL: 550,
      weeklyPnL: 180,
      sessionsPlayed: 15,
      isSettled: true
    }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Players</h1>
          <p className="text-muted-foreground mt-1">Manage your poker group members</p>
        </div>
        <Dialog open={isAddPlayerOpen} onOpenChange={setIsAddPlayerOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
              <Plus className="mr-2 h-4 w-4" />
              Add Player
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle className="text-foreground">Add New Player</DialogTitle>
              <DialogDescription>
                Add a new member to your poker group.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Player name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="player@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="+1 555-0123" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border-border">
                    <SelectItem value="player">Player</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsAddPlayerOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsAddPlayerOpen(false)}>
                  Add Player
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player) => (
          <Card key={player.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={player.avatar || undefined} />
                    <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                      {getInitials(player.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-foreground flex items-center gap-2">
                      {player.name}
                      {player.role === 'admin' && (
                        <Crown className="h-4 w-4 text-primary" />
                      )}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {player.sessionsPlayed} sessions played
                    </CardDescription>
                  </div>
                </div>
                {!player.isSettled && (
                  <Badge variant="destructive" className="text-xs">
                    Unsettled
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Mail className="h-3 w-3 mr-2" />
                  {player.email}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="h-3 w-3 mr-2" />
                  {player.phone}
                </div>
              </div>

              {/* P&L Stats */}
              <div className="space-y-3 pt-2 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Lifetime P&L</span>
                  <div className="flex items-center">
                    {player.lifetimePnL >= 0 ? (
                      <TrendingUp className="h-3 w-3 text-success mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-destructive mr-1" />
                    )}
                    <span className={`font-semibold ${player.lifetimePnL >= 0 ? 'text-success' : 'text-destructive'}`}>
                      {player.lifetimePnL >= 0 ? '+' : ''}${player.lifetimePnL}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Weekly P&L</span>
                  <span className={`font-semibold ${player.weeklyPnL >= 0 ? 'text-success' : 'text-destructive'}`}>
                    {player.weeklyPnL >= 0 ? '+' : ''}${player.weeklyPnL}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>Total Buy-ins: ${player.lifetimeBuyIn}</span>
                  <span>Total Cash-outs: ${player.lifetimeCashOut}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2">
                <Button variant="outline" size="sm" className="w-full">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}