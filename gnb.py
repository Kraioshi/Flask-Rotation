class Gunbreaker:

    def __init__(self):
        self.combo = 0
        self.cartridge = 0

        self.gnashing_fang_cooldown = 0

        self.ready_to_blast = False

        self.ready_to_rip = False
        self.ready_to_tear = False
        self.ready_to_gouge = False

        self.jugular_rip_ready = False
        self.abdomen_tear_ready = False
        self.eye_gouge_ready = False

    def keen_edge(self):
        self.combo = 1

    def brutal_shell(self):
        if self.combo == 1:
            self.combo = 2
        else:
            self.combo = 0

    def solid_barrel(self):
        if self.combo == 2:
            if self.cartridge < 3:
                self.cartridge += 1
                self.combo = 0
            else:
                self.cartridge = 3
                self.combo = 0

    def burst_strike(self):
        if self.cartridge:
            self.cartridge -= 1
            self.ready_to_blast = True

    def gnashing_fang(self):
        if self.cartridge:
            self.cartridge -= 1
            self.gnashing_fang_cooldown = 30
            self.ready_to_rip = True
            self.jugular_rip_ready = True

    def savage_claw(self):
        self.ready_to_tear = True
        self.abdomen_tear_ready = True

    def wicked_talon(self):
        self.ready_to_gouge = True
        self.eye_gouge_ready = True

    def sonic_break(self):
        pass

    def bow_shock(self):
        pass

    def blasting_zone(self):
        pass

    def no_mercy(self):
        pass

    def bloodfest(self):
        pass

    def jugular_rip(self):
        pass

    def abdomen_tear(self):
        pass

    def eye_gouge(self):
        pass

    def hypervelocity(self):
        pass

    def rough_divide(self):
        pass


if __name__ == "__main__":
    gnb = Gunbreaker()
    gnb.keen_edge()
    gnb.brutal_shell()
    gnb.solid_barrel()
    print(gnb.cartridge)
    gnb.burst_strike()
    print(gnb.cartridge)
