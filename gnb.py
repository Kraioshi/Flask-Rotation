class Gunbreaker:

    def __init__(self):
        self.potency = 0

        self.combo = 0
        self.cartridge = 0

        self.gnashing_fang_cooldown = 0
        self.bloodfest_cooldown = 0
        self.blasting_zone_cooldown = 0
        self.bow_shock_cooldown = 0
        self.no_mercy_cooldown = 0
        self.sonic_break_cooldown = 0
        self.rough_divide_cooldown = 0
        self.double_down_cooldown = 0

        self.ready_to_blast = False

        self.ready_to_rip = False
        self.ready_to_tear = False
        self.ready_to_gouge = False

    def keen_edge(self):
        self.reduce_gcd()
        self.reduce_ogcd()
        self.combo = 1

    def brutal_shell(self):
        self.reduce_gcd()
        self.reduce_ogcd()
        if self.combo == 1:
            self.combo = 2
        else:
            self.combo = 0

    def solid_barrel(self):
        self.reduce_gcd()
        self.reduce_ogcd()
        if self.combo == 2:
            if self.cartridge < 3:
                self.cartridge += 1
                self.combo = 0
            else:
                self.cartridge = 3
                self.combo = 0

    def burst_strike(self):
        self.reduce_gcd()
        self.reduce_ogcd()
        if self.cartridge > 0:
            self.cartridge -= 1
            self.ready_to_blast = True

    def gnashing_fang(self):
        if self.cartridge > 0:
            self.cartridge -= 1
            self.gnashing_fang_cooldown = 30
            self.ready_to_rip = True

    def jugular_rip(self):
        if self.ready_to_rip:
            self.ready_to_rip = False

    def savage_claw(self):
        self.ready_to_tear = True

    def wicked_talon(self):
        self.ready_to_gouge = True

    def sonic_break(self):
        self.sonic_break_cooldown = 60

    def bow_shock(self):
        self.bow_shock_cooldown = 60

    def blasting_zone(self):
        self.blasting_zone_cooldown = 30

    def no_mercy(self):
        self.no_mercy_cooldown = 60

    def bloodfest(self):
        self.bloodfest_cooldown = 90
        self.cartridge = 3

    def abdomen_tear(self):
        pass

    def eye_gouge(self):
        pass

    def hypervelocity(self):
        pass

    def rough_divide(self):
        self.rough_divide_cooldown = 30

    def reduce_gcd(self):
        pass

    def reduce_ogcd(self):
        if self.gnashing_fang_cooldown > 2.5:
            self.gnashing_fang_cooldown -= 2.5
        else:
            self.gnashing_fang_cooldown = 0


if __name__ == "__main__":
    gnb = Gunbreaker()
    gnb.keen_edge()
    gnb.brutal_shell()
    gnb.solid_barrel()
    print(gnb.cartridge)
    gnb.burst_strike()
    print(gnb.cartridge)
