import { OrmModule } from "@lib/orm/orm.module";
import { AuthModule } from "@modules/auth/auth.module";
import { JwtTwofaStrategy } from "@modules/auth/strategies";
import { Module } from "@nestjs/common";

import { TwoFactorController } from "./twofa.controller";
import { TwoFactorService } from "./twofa.service";

@Module({
	imports: [OrmModule, AuthModule],
	controllers: [TwoFactorController],
	providers: [TwoFactorService, JwtTwofaStrategy],
})
export class TwoFactorModule {}
