class Gunbreaker:

    def __init__(self):

        self.combo = 0
        self.cartridge = 0

        self.rough_divide_stacks = 2
        self.rough_divide_cooldown = 0

        self.gnashing_fang_cooldown = 0
        self.bloodfest_cooldown = 0
        self.blasting_zone_cooldown = 0
        self.bow_shock_cooldown = 0
        self.no_mercy_cooldown = 0
        self.sonic_break_cooldown = 0
        self.double_down_cooldown = 0

        self.ready_to_blast = False

        self.ready_to_rip = False
        self.ready_to_tear = False
        self.ready_to_gouge = False

        self.savage_claw_ready = True
        self.wicked_talon_ready = False

        self.no_mercy_buff = 0
        self.brutal_shell_buff = 0
        self.hypervelocity_buff = 0

        self.bow_shock_debuff = 0
        self.sonic_break_debuff = 15

    def keen_edge(self):
        self.reduce_gcd()
        self.reduce_ogcd()
        self.reduce_buffs()
        self.break_continuation()

        self.combo = 1

    def brutal_shell(self):
        self.reduce_gcd()
        self.reduce_ogcd()
        self.reduce_buffs()
        self.break_continuation()

        if self.combo == 1:
            self.combo = 2
            self.brutal_shell_buff = 30
        else:
            self.combo = 0

    def solid_barrel(self):
        self.reduce_gcd()
        self.reduce_ogcd()
        self.reduce_buffs()
        self.break_continuation()

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
        self.reduce_buffs()
        self.break_gnashing_fang()

        if self.cartridge > 0:

            self.ready_to_blast = True
            self.cartridge -= 1

            self.hypervelocity_buff = 10

    def gnashing_fang(self):
        self.reduce_gcd()
        self.reduce_ogcd()
        self.reduce_buffs()

        if self.cartridge > 0:
            self.cartridge -= 1
            self.gnashing_fang_cooldown = 30
            self.ready_to_rip = True
            self.savage_claw_ready = True

            if self.ready_to_blast:
                self.ready_to_blast = False
                self.hypervelocity_buff = 0

    def double_down(self):
        self.reduce_gcd()
        self.reduce_ogcd()
        self.reduce_buffs()

        if self.cartridge > 1:
            self.cartridge -= 2
            self.double_down_cooldown = 60

    def jugular_rip(self):
        if self.ready_to_rip:
            self.ready_to_rip = False

    def savage_claw(self):
        self.ready_to_blast = False
        self.hypervelocity_buff = 0

        self.reduce_gcd()
        self.reduce_ogcd()
        self.reduce_buffs()

        if self.savage_claw_ready:
            self.savage_claw_ready = False
            self.wicked_talon_ready = True
            self.ready_to_rip = False
            self.ready_to_tear = True

    def abdomen_tear(self):
        if self.ready_to_tear:
            self.ready_to_tear = False

    def wicked_talon(self):
        self.ready_to_blast = False
        self.hypervelocity_buff = 0

        self.reduce_gcd()
        self.reduce_ogcd()
        self.reduce_buffs()

        if self.wicked_talon_ready:
            self.wicked_talon_ready = False
            self.ready_to_tear = False
            self.ready_to_gouge = True

    def eye_gouge(self):
        if self.ready_to_gouge:
            self.ready_to_gouge = False

    def sonic_break(self):
        self.reduce_gcd()
        self.reduce_ogcd()
        self.reduce_buffs()
        self.break_gnashing_fang()

        self.sonic_break_cooldown = 60

    def bow_shock(self):
        self.bow_shock_cooldown = 60

    def blasting_zone(self):
        self.blasting_zone_cooldown = 30

    def no_mercy(self):
        self.no_mercy_buff = 20
        self.no_mercy_cooldown = 60

    def bloodfest(self):
        self.bloodfest_cooldown = 120
        self.cartridge = 3

    def hypervelocity(self):
        if self.ready_to_blast:
            self.ready_to_blast = False
            self.hypervelocity_buff = 0

    def rough_divide(self):
        if self.rough_divide_stacks > 0:
            self.rough_divide_stacks -= 1
            self.rough_divide_cooldown = 30

    def reduce_gcd(self):
        if self.gnashing_fang_cooldown > 2.5:
            self.gnashing_fang_cooldown -= 2.5
        else:
            self.gnashing_fang_cooldown = 0

        if self.double_down_cooldown > 2.5:
            self.double_down_cooldown -= 2.5
        else:
            self.double_down_cooldown = 0

        if self.sonic_break_cooldown > 2.5:
            self.sonic_break_cooldown -= 2.5
        else:
            self.sonic_break_cooldown = 0

    def reduce_ogcd(self):
        if self.bloodfest_cooldown > 2.5:
            self.bloodfest_cooldown -= 2.5
        else:
            self.bloodfest_cooldown = 0

        if self.bow_shock_cooldown > 2.5:
            self.bow_shock_cooldown -= 2.5
        else:
            self.bow_shock_cooldown = 0

        if self.blasting_zone_cooldown > 2.5:
            self.blasting_zone_cooldown -= 2.5
        else:
            self.blasting_zone_cooldown = 0

        if self.rough_divide_cooldown > 2.5:
            self.rough_divide_cooldown -= 2.5
        else:
            if self.rough_divide_stacks == 0:
                self.rough_divide_stacks += 1
                self.rough_divide_cooldown = 30
            elif self.rough_divide_stacks == 1:
                self.rough_divide_stacks += 1
                self.rough_divide_cooldown = 0

        if self.no_mercy_cooldown > 2.5:
            self.no_mercy_cooldown -= 2.5
        else:
            self.no_mercy_cooldown = 0

    def reduce_buffs(self):
        if self.no_mercy_buff > 2.5:
            self.no_mercy_buff -= 2.5
        else:
            self.no_mercy_buff = 0

        if self.brutal_shell_buff > 2.5:
            self.brutal_shell_buff -= 2.5
        else:
            self.brutal_shell_buff = 0

        if self.hypervelocity_buff > 2.5:
            self.hypervelocity_buff -= 2.5
        else:
            self.hypervelocity_buff = 0

    def break_continuation(self):
        self.ready_to_blast = False
        self.hypervelocity_buff = 0
        self.ready_to_rip = False
        self.ready_to_tear = False
        self.ready_to_gouge = False
        self.savage_claw_ready = False
        self.wicked_talon_ready = False

    def break_gnashing_fang(self):
        self.ready_to_rip = False
        self.ready_to_tear = False
        self.ready_to_gouge = False


if __name__ == "__main__":
    gnb = Gunbreaker()
    gnb.bloodfest()
    print(gnb.ready_to_rip)
    gnb.gnashing_fang()
    print(gnb.ready_to_rip)
