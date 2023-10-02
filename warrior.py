class Warrior:

    def __init__(self):
        self.beast_gauge = 0
        self.surging_tempest = 0
        self.combo_status = 0
        self.gcd = 2.5
        self.nascent_chaos_ready = False
        self.infuriate_cooldown = 0
        self.inner_release_cooldown = 0
        self.upheaval_cooldown = 0
        self.onslaught_cooldown = 0

    def use_gcd(self):
        if self.surging_tempest > 2.5:
            self.surging_tempest -= 2.5
        else:
            self.surging_tempest = 0

    def heavy_swing(self):
        self.use_gcd()
        self.combo_status = 1

    def maim(self):
        self.use_gcd()
        if self.combo_status == 1:
            self.combo_status = 2
            if self.beast_gauge < 90:
                self.beast_gauge += 10
            else:
                self.beast_gauge = 100
        else:
            self.combo_status = 0

    def storms_path(self):
        self.use_gcd()

        if self.combo_status == 2:
            self.combo_status = 0
            if self.beast_gauge < 80:
                self.beast_gauge += 20
            else:
                self.beast_gauge = 100

        else:
            self.combo_status = 0

    def storms_eye(self):
        self.use_gcd()

        if self.combo_status == 2:
            self.combo_status = 0
            if self.beast_gauge < 90:
                self.beast_gauge += 10
            else:
                self.beast_gauge = 100

            if self.surging_tempest < 30:
                self.surging_tempest += 30
            else:
                self.surging_tempest = 60
        else:
            self.combo_status = 0

    def fell_cleave(self):
        self.use_gcd()
        if self.beast_gauge >= 50:
            self.beast_gauge -= 50
        else:
            print("Not enough Beast Gauge")

    def inner_chaos(self):
        self.use_gcd()
        self.beast_gauge -= 50
        self.nascent_chaos_ready = False

    def infuriate(self):
        self.nascent_chaos_ready = True
        self.infuriate_cooldown = 60
        if self.beast_gauge < 50:
            self.beast_gauge += 50
        else:
            self.beast_gauge = 100

    def upheaval(self):
        self.upheaval_cooldown = 30

    def inner_release(self):
        self.inner_release_cooldown = 60

    def onslaught(self):
        self.onslaught_cooldown = 60

    def primal_rend(self):
        pass


if __name__ == '__main__':
    w = Warrior()
    w.heavy_swing()
    w.maim()
    w.storms_eye()
    w.storms_eye()
    w.storms_eye()
    w.storms_path()
    w.storms_path()

    print('combo status', w.combo_status)
    print('gauge', w.beast_gauge)
    print('buff', w.surging_tempest, 's')
