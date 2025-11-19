/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class WildfireEffect extends Internal.MobEffect {
        constructor(statusEffectCategory: Internal.MobEffectCategory_, color: number)
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type WildfireEffect_ = WildfireEffect;
    class SimpleParticleType extends Internal.ParticleType<Internal.SimpleParticleType> implements Internal.ParticleOptions {
        constructor(arg0: boolean)
        writeToString(): string;
        getType(): this;
        writeToNetwork(arg0: Internal.FriendlyByteBuf_): void;
        codec(): Internal.Codec<Internal.SimpleParticleType>;
        get type(): Internal.SimpleParticleType
    }
    type SimpleParticleType_ = SimpleParticleType;
    class UnderwaterMagmaFeature extends Internal.Feature<Internal.UnderwaterMagmaConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.UnderwaterMagmaConfiguration>)
    }
    type UnderwaterMagmaFeature_ = UnderwaterMagmaFeature;
    interface ScreenMouseEvents$BeforeMouseRelease {
        abstract beforeMouseRelease(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number): void;
        (arg0: Internal.Screen, arg1: number, arg2: number, arg3: number): void;
    }
    type ScreenMouseEvents$BeforeMouseRelease_ = ScreenMouseEvents$BeforeMouseRelease;
    class DataGenerator$PackGenerator {
        constructor(arg0: Internal.DataGenerator_, arg1: boolean, arg2: string, arg3: Internal.PackOutput_)
        addProvider<T extends Internal.DataProvider>(arg0: Internal.DataProvider$Factory_<T>): T;
        readonly f_252527_: Internal.DataGenerator;
    }
    type DataGenerator$PackGenerator_ = DataGenerator$PackGenerator;
    class EarthdiveSpear extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        handler$cbo000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vector3f;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        arch$registryName(): ResourceLocation;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        setArmorToughness(armorToughness: number): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get creativeTab(): string
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type EarthdiveSpear_ = EarthdiveSpear;
    class BaleenBoneBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
        constructor()
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly X: Internal.BooleanProperty;
    }
    type BaleenBoneBlock_ = BaleenBoneBlock;
    interface NeutralMob {
        abstract getTarget(): Internal.LivingEntity;
        playerDied(arg0: Player_): void;
        abstract getPersistentAngerTarget(): Internal.UUID;
        isAngry(): boolean;
        abstract setLastHurtByMob(arg0: Internal.LivingEntity_): void;
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        readPersistentAngerSaveData(arg0: Internal.Level_, arg1: Internal.CompoundTag_): void;
        abstract startPersistentAngerTimer(): void;
        abstract canAttack(arg0: Internal.LivingEntity_): boolean;
        stopBeingAngry(): void;
        abstract setLastHurtByPlayer(arg0: Player_): void;
        abstract setTarget(arg0: Internal.LivingEntity_): void;
        addPersistentAngerSaveData(arg0: Internal.CompoundTag_): void;
        abstract setPersistentAngerTarget(arg0: Internal.UUID_): void;
        abstract setRemainingPersistentAngerTime(arg0: number): void;
        abstract getLastHurtByMob(): Internal.LivingEntity;
        isAngryAtAllPlayers(arg0: Internal.Level_): boolean;
        updatePersistentAnger(arg0: Internal.ServerLevel_, arg1: boolean): void;
        isAngryAt(arg0: Internal.LivingEntity_): boolean;
        abstract getRemainingPersistentAngerTime(): number;
        get target(): Internal.LivingEntity
        get persistentAngerTarget(): Internal.UUID
        get angry(): boolean
        set lastHurtByMob(arg0: Internal.LivingEntity_)
        set lastHurtByPlayer(arg0: Player_)
        set target(arg0: Internal.LivingEntity_)
        set persistentAngerTarget(arg0: Internal.UUID_)
        set remainingPersistentAngerTime(arg0: number)
        get lastHurtByMob(): Internal.LivingEntity
        get remainingPersistentAngerTime(): number
        readonly TAG_ANGER_TIME: "AngerTime";
        readonly TAG_ANGRY_AT: "AngryAt";
    }
    type NeutralMob_ = NeutralMob;
    class ModifyDeathTicksAction extends Internal.EntityAction<Internal.FieldConfiguration<Internal.Holder<Internal.ConfiguredModifier<any>>>> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        execute(arg0: Internal.FieldConfiguration_<Internal.Holder<Internal.ConfiguredModifier<any>>>, arg1: Internal.Entity_): void;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type ModifyDeathTicksAction_ = ModifyDeathTicksAction;
    interface IForgeDispensibleContainerItem {
        emptyContents(arg0: Player_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.BlockHitResult_, arg4: Internal.ItemStack_): boolean;
    }
    type IForgeDispensibleContainerItem_ = IForgeDispensibleContainerItem;
    interface ArgumentTypeInfo <A extends Internal.ArgumentType<any>, T extends Internal.ArgumentTypeInfo$Template<A>> {
        abstract serializeToJson(arg0: T, arg1: Internal.JsonObject_): void;
        abstract deserializeFromNetwork(arg0: Internal.FriendlyByteBuf_): T;
        abstract serializeToNetwork(arg0: T, arg1: Internal.FriendlyByteBuf_): void;
        abstract unpack(arg0: A): T;
    }
    type ArgumentTypeInfo_<A extends Internal.ArgumentType<any>, T extends Internal.ArgumentTypeInfo$Template<A>> = ArgumentTypeInfo<A, T> | Special.CommandArgumentType;
    class DragonLandingApproachPhase extends Internal.AbstractDragonPhaseInstance {
        constructor(arg0: Internal.EnderDragon_)
        getPhase(): Internal.EnderDragonPhase<Internal.DragonLandingApproachPhase>;
        get phase(): Internal.EnderDragonPhase<Internal.DragonLandingApproachPhase>
    }
    type DragonLandingApproachPhase_ = DragonLandingApproachPhase;
    interface Matrix3fc {
        abstract m00(): number;
        abstract rotateLocalY(arg0: number, arg1: Matrix3f_): Matrix3f;
        abstract mapYnZX(arg0: Matrix3f_): Matrix3f;
        abstract get3x4(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract rotate(arg0: Internal.Quaternionfc_, arg1: Matrix3f_): Matrix3f;
        abstract getEulerAnglesXYZ(arg0: Vector3f_): Vector3f;
        abstract get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract mapYXnZ(arg0: Matrix3f_): Matrix3f;
        abstract get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract mapnYnXZ(arg0: Matrix3f_): Matrix3f;
        abstract mulLocal(arg0: Internal.Matrix3fc_, arg1: Matrix3f_): Matrix3f;
        abstract lookAlong(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Matrix3f_): Matrix3f;
        abstract mapYnXnZ(arg0: Matrix3f_): Matrix3f;
        abstract getUnnormalizedRotation(arg0: Quaternionf_): Quaternionf;
        abstract negateZ(arg0: Matrix3f_): Matrix3f;
        abstract m12(): number;
        abstract get3x4(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract mapnZYnX(arg0: Matrix3f_): Matrix3f;
        abstract mapZYnX(arg0: Matrix3f_): Matrix3f;
        abstract mapnYnXnZ(arg0: Matrix3f_): Matrix3f;
        abstract normalizedPositiveX(arg0: Vector3f_): Vector3f;
        abstract transformTranspose(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        abstract get(arg0: number[]): number[];
        abstract getColumn(arg0: number, arg1: Vector3f_): Vector3f;
        abstract getNormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract mapnXYnZ(arg0: Matrix3f_): Matrix3f;
        abstract get(arg0: number[], arg1: number): number[];
        abstract getRowColumn(arg0: number, arg1: number): number;
        abstract rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix3f_): Matrix3f;
        abstract positiveZ(arg0: Vector3f_): Vector3f;
        abstract mapnYZX(arg0: Matrix3f_): Matrix3f;
        abstract mapnXnZY(arg0: Matrix3f_): Matrix3f;
        abstract rotateZ(arg0: number, arg1: Matrix3f_): Matrix3f;
        abstract mapXZY(arg0: Matrix3f_): Matrix3f;
        abstract mapnXnYnZ(arg0: Matrix3f_): Matrix3f;
        abstract mapnZnYX(arg0: Matrix3f_): Matrix3f;
        abstract rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Matrix3f_): Matrix3f;
        abstract mapZYX(arg0: Matrix3f_): Matrix3f;
        abstract m01(): number;
        abstract rotateLocalZ(arg0: number, arg1: Matrix3f_): Matrix3f;
        abstract mapnYnZX(arg0: Matrix3f_): Matrix3f;
        abstract quadraticFormProduct(arg0: Internal.Vector3fc_): number;
        abstract rotateLocal(arg0: Internal.Quaternionfc_, arg1: Matrix3f_): Matrix3f;
        abstract getRotation(arg0: Internal.AxisAngle4f_): Internal.AxisAngle4f;
        abstract mapnYnZnX(arg0: Matrix3f_): Matrix3f;
        abstract transformTranspose(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        abstract obliqueZ(arg0: number, arg1: number, arg2: Matrix3f_): Matrix3f;
        abstract m20(): number;
        abstract reflect(arg0: number, arg1: number, arg2: number, arg3: Matrix3f_): Matrix3f;
        abstract getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract transform(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        abstract mapnZnXY(arg0: Matrix3f_): Matrix3f;
        abstract get(arg0: Matrix4f_): Matrix4f;
        abstract scale(arg0: Internal.Vector3fc_, arg1: Matrix3f_): Matrix3f;
        abstract mul(arg0: Internal.Matrix3fc_, arg1: Matrix3f_): Matrix3f;
        abstract mulComponentWise(arg0: Internal.Matrix3fc_, arg1: Matrix3f_): Matrix3f;
        abstract mapZXnY(arg0: Matrix3f_): Matrix3f;
        abstract rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Matrix3f_): Matrix3f;
        abstract mapnZYX(arg0: Matrix3f_): Matrix3f;
        abstract normalizedPositiveY(arg0: Vector3f_): Vector3f;
        abstract mapYZnX(arg0: Matrix3f_): Matrix3f;
        abstract getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract cofactor(arg0: Matrix3f_): Matrix3f;
        abstract mapnYZnX(arg0: Matrix3f_): Matrix3f;
        abstract getRow(arg0: number, arg1: Vector3f_): Vector3f;
        abstract getScale(arg0: Vector3f_): Vector3f;
        abstract mapXnZY(arg0: Matrix3f_): Matrix3f;
        abstract rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix3f_): Matrix3f;
        abstract mapnZXnY(arg0: Matrix3f_): Matrix3f;
        abstract rotateY(arg0: number, arg1: Matrix3f_): Matrix3f;
        abstract transform(arg0: Vector3f_): Vector3f;
        abstract mapZnXY(arg0: Matrix3f_): Matrix3f;
        abstract mapnXZY(arg0: Matrix3f_): Matrix3f;
        abstract normal(arg0: Matrix3f_): Matrix3f;
        abstract rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Matrix3f_): Matrix3f;
        abstract mapnXZnY(arg0: Matrix3f_): Matrix3f;
        abstract m21(): number;
        abstract m02(): number;
        abstract sub(arg0: Internal.Matrix3fc_, arg1: Matrix3f_): Matrix3f;
        abstract get3x4(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract isFinite(): boolean;
        abstract mapZnYX(arg0: Matrix3f_): Matrix3f;
        abstract negateX(arg0: Matrix3f_): Matrix3f;
        abstract transpose(arg0: Matrix3f_): Matrix3f;
        abstract mapnXnYZ(arg0: Matrix3f_): Matrix3f;
        abstract m10(): number;
        abstract mapZXY(arg0: Matrix3f_): Matrix3f;
        abstract invert(arg0: Matrix3f_): Matrix3f;
        abstract normalizedPositiveZ(arg0: Vector3f_): Vector3f;
        abstract reflect(arg0: Internal.Quaternionfc_, arg1: Matrix3f_): Matrix3f;
        abstract rotate(arg0: Internal.AxisAngle4f_, arg1: Matrix3f_): Matrix3f;
        abstract scaleLocal(arg0: number, arg1: number, arg2: number, arg3: Matrix3f_): Matrix3f;
        abstract getEulerAnglesZYX(arg0: Vector3f_): Vector3f;
        abstract reflect(arg0: Internal.Vector3fc_, arg1: Matrix3f_): Matrix3f;
        abstract get(arg0: Matrix3f_): Matrix3f;
        abstract getToAddress(arg0: number): this;
        abstract rotateX(arg0: number, arg1: Matrix3f_): Matrix3f;
        abstract positiveX(arg0: Vector3f_): Vector3f;
        abstract get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract get(arg0: number, arg1: number): number;
        abstract get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract determinant(): number;
        abstract add(arg0: Internal.Matrix3fc_, arg1: Matrix3f_): Matrix3f;
        abstract get3x4(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract mapYnZnX(arg0: Matrix3f_): Matrix3f;
        abstract mapnZnXnY(arg0: Matrix3f_): Matrix3f;
        abstract mapXZnY(arg0: Matrix3f_): Matrix3f;
        abstract scale(arg0: number, arg1: Matrix3f_): Matrix3f;
        abstract rotateLocalX(arg0: number, arg1: Matrix3f_): Matrix3f;
        abstract rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Matrix3f_): Matrix3f;
        abstract mapYnXZ(arg0: Matrix3f_): Matrix3f;
        abstract mapnZXY(arg0: Matrix3f_): Matrix3f;
        abstract transform(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        abstract mapnYXnZ(arg0: Matrix3f_): Matrix3f;
        abstract transformTranspose(arg0: Vector3f_): Vector3f;
        abstract scale(arg0: number, arg1: number, arg2: number, arg3: Matrix3f_): Matrix3f;
        abstract m22(): number;
        abstract lerp(arg0: Internal.Matrix3fc_, arg1: number, arg2: Matrix3f_): Matrix3f;
        abstract quadraticFormProduct(arg0: number, arg1: number, arg2: number): number;
        abstract mapZnYnX(arg0: Matrix3f_): Matrix3f;
        abstract lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Matrix3f_): Matrix3f;
        abstract mapYXZ(arg0: Matrix3f_): Matrix3f;
        abstract mapXnZnY(arg0: Matrix3f_): Matrix3f;
        abstract negateY(arg0: Matrix3f_): Matrix3f;
        abstract getUnnormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract rotate(arg0: number, arg1: Internal.Vector3fc_, arg2: Matrix3f_): Matrix3f;
        abstract getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract mapXnYnZ(arg0: Matrix3f_): Matrix3f;
        abstract m11(): number;
        abstract getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract mapZnXnY(arg0: Matrix3f_): Matrix3f;
        abstract mapYZX(arg0: Matrix3f_): Matrix3f;
        abstract equals(arg0: Internal.Matrix3fc_, arg1: number): boolean;
        abstract getNormalizedRotation(arg0: Quaternionf_): Quaternionf;
        abstract mapnXnZnY(arg0: Matrix3f_): Matrix3f;
        abstract mapnZnYnX(arg0: Matrix3f_): Matrix3f;
        abstract positiveY(arg0: Vector3f_): Vector3f;
        abstract mapnYXZ(arg0: Matrix3f_): Matrix3f;
        abstract rotateTowards(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Matrix3f_): Matrix3f;
        get finite(): boolean
    }
    type Matrix3fc_ = Matrix3fc;
    interface IEntityJS {
        abstract isMoving(): boolean;
        get moving(): boolean
        (): boolean;
    }
    type IEntityJS_ = IEntityJS;
    class PropertyMap extends Internal.ForwardingMultimap<string, com.mojang.authlib.properties.Property> {
        constructor()
        forEach(arg0: Internal.BiConsumer_<string, com.mojang.authlib.properties.Property>): void;
    }
    type PropertyMap_ = PropertyMap;
    interface ItemEntityAccess {
        abstract setHealth(arg0: number): void;
        set health(arg0: number)
        (arg0: number): void;
    }
    type ItemEntityAccess_ = ItemEntityAccess;
    class CaveWorldCarver extends Internal.WorldCarver<Internal.CaveCarverConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.CaveCarverConfiguration>)
        getThickness(arg0: Internal.RandomSource_): number;
        createRoom(arg0: Internal.CarvingContext_, arg1: Internal.CaveCarverConfiguration_, arg2: Internal.ChunkAccess_, arg3: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg4: Internal.Aquifer_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: Internal.CarvingMask_, arg11: Internal.WorldCarver$CarveSkipChecker_): void;
        carve(arg0: Internal.CarvingContext_, arg1: Internal.CaveCarverConfiguration_, arg2: Internal.ChunkAccess_, arg3: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg4: Internal.RandomSource_, arg5: Internal.Aquifer_, arg6: Internal.ChunkPos_, arg7: Internal.CarvingMask_): boolean;
        getYScale(): number;
        isStartChunk(arg0: Internal.CaveCarverConfiguration_, arg1: Internal.RandomSource_): boolean;
        getCaveBound(): number;
        createTunnel(arg0: Internal.CarvingContext_, arg1: Internal.CaveCarverConfiguration_, arg2: Internal.ChunkAccess_, arg3: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg4: number, arg5: Internal.Aquifer_, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: number, arg17: Internal.CarvingMask_, arg18: Internal.WorldCarver$CarveSkipChecker_): void;
        get YScale(): number
        get caveBound(): number
    }
    type CaveWorldCarver_ = CaveWorldCarver;
    class WeightedListHeight extends Internal.HeightProvider {
        constructor(arg0: Internal.SimpleWeightedRandomList_<Internal.HeightProvider>)
        static readonly CODEC: Internal.Codec<Internal.WeightedListHeight>;
    }
    type WeightedListHeight_ = WeightedListHeight;
    abstract class AbstractFurnaceBlock extends Internal.BaseEntityBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        abstract openContainer(arg0: Internal.Level_, arg1: BlockPos_, arg2: Player_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        static createFurnaceTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockEntityType_<T>, arg2: Internal.BlockEntityType_<Internal.AbstractFurnaceBlockEntity>): Internal.BlockEntityTicker<T>;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly FACING: Internal.DirectionProperty;
        static readonly LIT: Internal.BooleanProperty;
    }
    type AbstractFurnaceBlock_ = AbstractFurnaceBlock;
    class RealmsServerPlayerLists extends Internal.ValueObject {
        constructor()
        static parse(arg0: string): Internal.RealmsServerPlayerLists;
        servers: Internal.List<Internal.RealmsServerPlayerList>;
    }
    type RealmsServerPlayerLists_ = RealmsServerPlayerLists;
    class Thread$State extends Internal.Enum<Internal.Thread$State> {
        static values(): Internal.Thread$State[];
        static valueOf(arg0: string): Internal.Thread$State;
        static readonly WAITING: Internal.Thread$State;
        static readonly BLOCKED: Internal.Thread$State;
        static readonly NEW: Internal.Thread$State;
        static readonly TIMED_WAITING: Internal.Thread$State;
        static readonly RUNNABLE: Internal.Thread$State;
        static readonly TERMINATED: Internal.Thread$State;
    }
    type Thread$State_ = "terminated" | "blocked" | "timed_waiting" | "new" | "runnable" | "waiting" | Thread$State;
    class DrinkableBottledItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        handler$cbo000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vector3f;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        arch$registryName(): ResourceLocation;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        setArmorToughness(armorToughness: number): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get creativeTab(): string
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type DrinkableBottledItem_ = DrinkableBottledItem;
    class RewriteResult <A, B> extends Internal.Record {
        constructor(view: Internal.View_<A, B>, recData: Internal.BitSet_)
        recData(): Internal.BitSet;
        static nop<A>(arg0: com.mojang.datafixers.types.Type_<A>): Internal.RewriteResult<A, A>;
        static create<A, B>(arg0: Internal.View_<A, B>, arg1: Internal.BitSet_): Internal.RewriteResult<A, B>;
        view(): Internal.View<A, B>;
        compose<C>(arg0: Internal.RewriteResult_<C, A>): Internal.RewriteResult<C, B>;
    }
    type RewriteResult_<A, B> = RewriteResult<A, B>;
    class PyromancerArmorItem extends Internal.ImbuableChestplateArmorItem {
        constructor(arg0: Internal.ArmorItem$Type_, arg1: Internal.Item$Properties_)
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        getTick(arg0: any): number;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        isPerspectiveAware(): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        setAnimData<D>(arg0: Internal.Entity_, arg1: number, arg2: Internal.SerializableDataTicket_<D>, arg3: D): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        handler$cbo000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>): D;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        shouldPlayAnimsWhileGamePaused(): boolean;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        static getId(arg0: Internal.ItemStack_): number;
        setArmorToughness(armorToughness: number): void;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        stopTriggeredArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        setAttackSpeed(attackSpeed: number): void;
        triggerAnim<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        triggerAnim<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        static registerSyncedAnimatable(arg0: Internal.GeoAnimatable_): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        getBoneResetTime(): number;
        getDamage(arg0: Internal.ItemStack_): number;
        triggerArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vector3f;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string, arg4: Internal.PacketDistributor$PacketTarget_): void;
        arch$registryName(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        syncAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>, arg2: D, arg3: Internal.PacketDistributor$PacketTarget_): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        static getOrAssignId(arg0: Internal.ItemStack_, arg1: Internal.ServerLevel_): number;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        get perspectiveAware(): boolean
        get creativeTab(): string
        set attackDamage(attackDamage: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set armorKnockbackResistance(knockbackResistance: number)
        get boneResetTime(): number
        get mod(): string
        set armorProtection(armorProtection: number)
    }
    type PyromancerArmorItem_ = PyromancerArmorItem;
    interface Multiset$Entry <E> {
        abstract hashCode(): number;
        abstract getCount(): number;
        abstract toString(): string;
        abstract equals(arg0: any): boolean;
        abstract getElement(): E;
        get count(): number
        get element(): E
    }
    type Multiset$Entry_<E> = Multiset$Entry<E>;
    class Format$Field extends Internal.AttributedCharacterIterator$Attribute {
    }
    type Format$Field_ = Format$Field;
    interface LootPoolAccessor {
        abstract fabric_getFunctions(): Internal.LootItemFunction[];
        abstract fabric_getEntries(): Internal.LootPoolEntryContainer[];
        abstract fabric_getBonusRolls(): Internal.NumberProvider;
        abstract fabric_getConditions(): Internal.LootItemCondition[];
        abstract fabric_getRolls(): Internal.NumberProvider;
    }
    type LootPoolAccessor_ = LootPoolAccessor;
    interface Display$IntInterpolator {
        constant(arg0: number): this;
        abstract get(arg0: number): number;
        (arg0: number): number;
    }
    type Display$IntInterpolator_ = Display$IntInterpolator;
    class Display$TextDisplay$CachedInfo extends Internal.Record {
        constructor(arg0: Internal.List_<Internal.Display$TextDisplay$CachedLine>, arg1: number)
        lines(): Internal.List<Internal.Display$TextDisplay$CachedLine>;
        width(): number;
    }
    type Display$TextDisplay$CachedInfo_ = Display$TextDisplay$CachedInfo;
    interface List <E> extends Internal.Collection<E> {
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): this;
        abstract get(arg0: number): E;
        copyOf<E>(arg0: Internal.Collection_<E>): this;
        abstract add(arg0: E): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): this;
        abstract listIterator(): Internal.ListIterator<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): this;
        parallelStream(): Internal.Stream<E>;
        abstract isEmpty(): boolean;
        sort(arg0: Internal.Comparator_<E>): void;
        of<E>(arg0: E): this;
        abstract set(arg0: number, arg1: E): E;
        of<E>(): this;
        of<E>(...arg0: E[]): this;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        abstract addAll(arg0: number, arg1: Internal.Collection_<E>): boolean;
        abstract remove(arg0: number): E;
        abstract contains(arg0: any): boolean;
        abstract addAll(arg0: Internal.Collection_<E>): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): this;
        of<E>(arg0: E, arg1: E, arg2: E): this;
        replaceAll(arg0: Internal.UnaryOperator_<E>): void;
        abstract subList(arg0: number, arg1: number): this;
        abstract indexOf(arg0: any): number;
        abstract add(arg0: number, arg1: E): void;
        forEach(arg0: Internal.Consumer_<E>): void;
        abstract toArray<T>(arg0: T[]): T[];
        abstract remove(arg0: any): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): this;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): this;
        abstract toArray(): any[];
        abstract listIterator(arg0: number): Internal.ListIterator<E>;
        abstract iterator(): Internal.Iterator<E>;
        abstract hashCode(): number;
        abstract size(): number;
        of<E>(arg0: E, arg1: E): this;
        stream(): Internal.Stream<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        abstract clear(): void;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E): this;
        spliterator(): Internal.Spliterator<E>;
        abstract equals(arg0: any): boolean;
        abstract lastIndexOf(arg0: any): number;
        get empty(): boolean
    }
    type List_<E> = List<E>;
    class CommandStorage {
        constructor(arg0: Internal.DimensionDataStorage_)
        get(arg0: ResourceLocation_): Internal.CompoundTag;
        keys(): Internal.Stream<ResourceLocation>;
        set(arg0: ResourceLocation_, arg1: Internal.CompoundTag_): void;
    }
    type CommandStorage_ = CommandStorage;
    interface DoubleBlockCombiner$Combiner <S, T> {
        abstract acceptDouble(arg0: S, arg1: S): T;
        abstract acceptNone(): T;
        abstract acceptSingle(arg0: S): T;
    }
    type DoubleBlockCombiner$Combiner_<S, T> = DoubleBlockCombiner$Combiner<S, T>;
    class ContextUtils$VanillaArmorRenderContext <T extends Internal.LivingEntity & Internal.IAnimatableJS> {
        constructor(renderer: Internal.ItemArmorGeoLayer_<T>, poseStack: Internal.PoseStack_, animatable: T, bone: Internal.GeoBone_, slot: Internal.EquipmentSlot_, armorStack: Internal.ItemStack_, modelPart: Internal.ModelPart_, bufferSource: Internal.MultiBufferSource_, partialTick: number, packedLight: number, packedOverlay: number)
        readonly packedLight: number;
        readonly slot: Internal.EquipmentSlot;
        readonly renderer: Internal.ItemArmorGeoLayer<T>;
        readonly armorStack: Internal.ItemStack;
        readonly poseStack: Internal.PoseStack;
        readonly bufferSource: Internal.MultiBufferSource;
        readonly partialTick: number;
        readonly bone: Internal.GeoBone;
        readonly modelPart: Internal.ModelPart;
        readonly packedOverlay: number;
        readonly entity: T;
    }
    type ContextUtils$VanillaArmorRenderContext_<T extends Internal.LivingEntity & Internal.IAnimatableJS> = ContextUtils$VanillaArmorRenderContext<T>;
    interface BlockApiCache <A, C> {
        abstract getPos(): BlockPos;
        find(context: C): A;
        abstract getBlockEntity(): Internal.BlockEntity;
        abstract find(arg0: Internal.BlockState_, arg1: C): A;
        abstract getLookup(): Internal.BlockApiLookup<A, C>;
        abstract getWorld(): Internal.ServerLevel;
        create<A, C>(lookup: Internal.BlockApiLookup_<A, C>, world: Internal.ServerLevel_, pos: BlockPos_): this;
        get pos(): BlockPos
        get blockEntity(): Internal.BlockEntity
        get lookup(): Internal.BlockApiLookup<A, C>
        get world(): Internal.ServerLevel
    }
    type BlockApiCache_<A, C> = BlockApiCache<A, C>;
    class LookControl implements Internal.Control {
        constructor(arg0: Internal.Mob_)
        setLookAt(arg0: Internal.Entity_, arg1: number, arg2: number): void;
        getWantedX(): number;
        clampHeadRotationToBody(): void;
        getWantedY(): number;
        setLookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getWantedZ(): number;
        setLookAt(arg0: Vec3d_): void;
        getXRotD(): Internal.Optional<number>;
        isLookingAtTarget(): boolean;
        tick(): void;
        resetXRotOnTick(): boolean;
        setLookAt(arg0: Internal.Entity_): void;
        rotateTowards(arg0: number, arg1: number, arg2: number): number;
        getYRotD(): Internal.Optional<number>;
        setLookAt(arg0: number, arg1: number, arg2: number): void;
        get wantedX(): number
        get wantedY(): number
        get wantedZ(): number
        set lookAt(arg0: Vec3d_)
        get XRotD(): Internal.Optional<number>
        get lookingAtTarget(): boolean
        set lookAt(arg0: Internal.Entity_)
        get YRotD(): Internal.Optional<number>
        readonly mob: Internal.Mob;
        wantedZ: number;
        wantedY: number;
        lookAtCooldown: number;
        xMaxRotAngle: number;
        wantedX: number;
        yMaxRotSpeed: number;
    }
    type LookControl_ = LookControl;
    class LayeredCauldronBlock extends Internal.AbstractCauldronBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.Predicate_<Internal.Biome$Precipitation>, arg2: Internal.Map_<Internal.Item, Internal.CauldronInteraction>)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        handleEntityOnFireInside(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        static lowerFillLevel(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): void;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly SNOW: Internal.Predicate<Internal.Biome$Precipitation>;
        static readonly RAIN: Internal.Predicate<Internal.Biome$Precipitation>;
        static readonly MIN_FILL_LEVEL: 1;
        static readonly MAX_FILL_LEVEL: 3;
        static readonly LEVEL: Internal.IntegerProperty;
    }
    type LayeredCauldronBlock_ = LayeredCauldronBlock;
    interface FoliagePlacer$FoliageSetter {
        abstract isSet(arg0: BlockPos_): boolean;
        abstract set(arg0: BlockPos_, arg1: Internal.BlockState_): void;
    }
    type FoliagePlacer$FoliageSetter_ = FoliagePlacer$FoliageSetter;
    class ItemHasPowerCondition extends Internal.ItemCondition<any> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type ItemHasPowerCondition_ = ItemHasPowerCondition;
    class ContextUtils$BreedableEntityContext {
        constructor(entity: Internal.AgeableMob_, mate: Internal.AgeableMob_, level: Internal.ServerLevel_)
        /**
         * The other parent the entity mated with.
        */
        readonly mate: Internal.AgeableMob;
        /**
         * The entity who mated.
        */
        readonly entity: Internal.AgeableMob;
        /**
         * The Server Level
        */
        readonly level: Internal.ServerLevel;
    }
    type ContextUtils$BreedableEntityContext_ = ContextUtils$BreedableEntityContext;
    class DoubleArgumentInfo$Template implements Internal.ArgumentTypeInfo$Template<Internal.DoubleArgumentType> {
        constructor(arg0: Internal.DoubleArgumentInfo_, arg1: number, arg2: number)
        instantiate(arg0: Internal.CommandBuildContext_): Internal.ArgumentType<any>;
        type(): Internal.ArgumentTypeInfo<Internal.DoubleArgumentType, any>;
        readonly min: number;
        readonly max: number;
        readonly f_235491_: Internal.DoubleArgumentInfo;
    }
    type DoubleArgumentInfo$Template_ = DoubleArgumentInfo$Template;
    class DispenserMenu extends Internal.AbstractContainerMenu {
        constructor(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Container_)
        constructor(arg0: number, arg1: Internal.Inventory_)
    }
    type DispenserMenu_ = DispenserMenu;
    class GameEvent implements Internal.InjectedGameEventExtension {
        constructor(arg0: string, arg1: number)
        is(arg0: Internal.TagKey_<Internal.GameEvent>): boolean;
        getName(): string;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.GameEvent>;
        arch$registryName(): ResourceLocation;
        getNotificationRadius(): number;
        arch$holder(): Internal.Holder<Internal.GameEvent>;
        get name(): string
        get notificationRadius(): number
        static readonly RESONATE_14: Internal.GameEvent;
        static readonly ITEM_INTERACT_START: Internal.GameEvent;
        static readonly RESONATE_10: Internal.GameEvent;
        static readonly LIGHTNING_STRIKE: Internal.GameEvent;
        static readonly JUKEBOX_PLAY: Internal.GameEvent;
        static readonly RESONATE_4: Internal.GameEvent;
        static readonly DEFAULT_NOTIFICATION_RADIUS: 16;
        static readonly PROJECTILE_LAND: Internal.GameEvent;
        static readonly BLOCK_OPEN: Internal.GameEvent;
        static readonly ENTITY_PLACE: Internal.GameEvent;
        static readonly TELEPORT: Internal.GameEvent;
        static readonly RESONATE_9: Internal.GameEvent;
        static readonly BLOCK_DEACTIVATE: Internal.GameEvent;
        static readonly SWIM: Internal.GameEvent;
        static readonly INSTRUMENT_PLAY: Internal.GameEvent;
        static readonly BLOCK_ACTIVATE: Internal.GameEvent;
        static readonly DRINK: Internal.GameEvent;
        static readonly FLUID_PICKUP: Internal.GameEvent;
        static readonly CONTAINER_CLOSE: Internal.GameEvent;
        static readonly RESONATE_15: Internal.GameEvent;
        static readonly EXPLODE: Internal.GameEvent;
        static readonly HIT_GROUND: Internal.GameEvent;
        static readonly RESONATE_11: Internal.GameEvent;
        static readonly ENTITY_DAMAGE: Internal.GameEvent;
        static readonly ENTITY_DISMOUNT: Internal.GameEvent;
        static readonly RESONATE_5: Internal.GameEvent;
        static readonly FLAP: Internal.GameEvent;
        static readonly ENTITY_MOUNT: Internal.GameEvent;
        static readonly RESONATE_1: Internal.GameEvent;
        static readonly SHEAR: Internal.GameEvent;
        static readonly BLOCK_CLOSE: Internal.GameEvent;
        static readonly ENTITY_SHAKE: Internal.GameEvent;
        static readonly BLOCK_DETACH: Internal.GameEvent;
        static readonly FLUID_PLACE: Internal.GameEvent;
        static readonly ELYTRA_GLIDE: Internal.GameEvent;
        static readonly PROJECTILE_SHOOT: Internal.GameEvent;
        static readonly CONTAINER_OPEN: Internal.GameEvent;
        static readonly ENTITY_INTERACT: Internal.GameEvent;
        static readonly ENTITY_ROAR: Internal.GameEvent;
        static readonly EQUIP: Internal.GameEvent;
        static readonly NOTE_BLOCK_PLAY: Internal.GameEvent;
        static readonly SCULK_SENSOR_TENDRILS_CLICKING: Internal.GameEvent;
        static readonly BLOCK_ATTACH: Internal.GameEvent;
        static readonly RESONATE_12: Internal.GameEvent;
        static readonly BLOCK_PLACE: Internal.GameEvent;
        static readonly RESONATE_6: Internal.GameEvent;
        static readonly RESONATE_2: Internal.GameEvent;
        static readonly SHRIEK: Internal.GameEvent;
        static readonly BLOCK_DESTROY: Internal.GameEvent;
        static readonly EAT: Internal.GameEvent;
        static readonly ENTITY_DIE: Internal.GameEvent;
        static readonly RESONATE_7: Internal.GameEvent;
        static readonly SPLASH: Internal.GameEvent;
        static readonly ITEM_INTERACT_FINISH: Internal.GameEvent;
        static readonly PRIME_FUSE: Internal.GameEvent;
        static readonly RESONATE_13: Internal.GameEvent;
        static readonly STEP: Internal.GameEvent;
        static readonly RESONATE_3: Internal.GameEvent;
        static readonly JUKEBOX_STOP_PLAY: Internal.GameEvent;
        static readonly BLOCK_CHANGE: Internal.GameEvent;
        static readonly RESONATE_8: Internal.GameEvent;
    }
    type GameEvent_ = Special.GameEvent | GameEvent;
    class RenderStateShard$ShaderStateShard extends Internal.RenderStateShard {
        constructor()
        constructor(arg0: Internal.Supplier_<Internal.ShaderInstance>)
        static getTranslucentTransparency(): Internal.RenderStateShard$TransparencyStateShard;
        static getGLINT_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        static getCRUMBLING_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        static getNO_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        get translucentTransparency(): Internal.RenderStateShard$TransparencyStateShard
        get GLINT_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
        get CRUMBLING_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
        get NO_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
    }
    type RenderStateShard$ShaderStateShard_ = RenderStateShard$ShaderStateShard;
    interface KeybindUsingArmor {
        abstract onKeyPacket(arg0: Player_, arg1: Internal.ItemStack_, arg2: number): void;
        (arg0: Player, arg1: Internal.ItemStack, arg2: number): void;
    }
    type KeybindUsingArmor_ = KeybindUsingArmor;
    interface Iterable <T> {
        forEach(arg0: Internal.Consumer_<T>): void;
        spliterator(): Internal.Spliterator<T>;
        abstract iterator(): Internal.Iterator<T>;
        (): Internal.Iterator_<T>;
    }
    type Iterable_<T> = Iterable<T>;
    class LongArgumentInfo implements Internal.ArgumentTypeInfo<Internal.LongArgumentType, Internal.LongArgumentInfo$Template> {
        constructor()
        serializeToNetwork(arg0: Internal.LongArgumentInfo$Template_, arg1: Internal.FriendlyByteBuf_): void;
        deserializeFromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.ArgumentTypeInfo$Template<any>;
        unpack(arg0: Internal.ArgumentType_<any>): Internal.ArgumentTypeInfo$Template<any>;
        unpack(arg0: Internal.LongArgumentType_): Internal.LongArgumentInfo$Template;
        serializeToNetwork(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.FriendlyByteBuf_): void;
        serializeToJson(arg0: Internal.LongArgumentInfo$Template_, arg1: Internal.JsonObject_): void;
        serializeToJson(arg0: Internal.ArgumentTypeInfo$Template_<any>, arg1: Internal.JsonObject_): void;
    }
    type LongArgumentInfo_ = LongArgumentInfo;
    class FoodConfiguration extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(food: number, saturation: number)
        isConfigurationValid(): boolean;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        saturation(): number;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        food(): number;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        getMissingBinds(): Internal.List<string>;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        static CODEC: Internal.Codec<Internal.FoodConfiguration>;
    }
    type FoodConfiguration_ = FoodConfiguration;
    class ChestMenuClickEvent {
        constructor(slot: Internal.ChestMenuSlot_, type: Internal.ClickType_, button: number)
        setHandled(): void;
        readonly slot: Internal.ChestMenuSlot;
        readonly button: number;
        readonly type: Internal.ClickType;
    }
    type ChestMenuClickEvent_ = ChestMenuClickEvent;
    class StructureTemplate$StructureBlockInfo extends Internal.Record {
        constructor(pos: BlockPos_, state: Internal.BlockState_, nbt: Internal.CompoundTag_)
        nbt(): Internal.CompoundTag;
        pos(): BlockPos;
        state(): Internal.BlockState;
    }
    type StructureTemplate$StructureBlockInfo_ = StructureTemplate$StructureBlockInfo;
    class ServerData$ServerPackStatus extends Internal.Enum<Internal.ServerData$ServerPackStatus> {
        getName(): Internal.Component;
        static values(): Internal.ServerData$ServerPackStatus[];
        static valueOf(arg0: string): Internal.ServerData$ServerPackStatus;
        get name(): Internal.Component
        static readonly ENABLED: Internal.ServerData$ServerPackStatus;
        static readonly DISABLED: Internal.ServerData$ServerPackStatus;
        static readonly PROMPT: Internal.ServerData$ServerPackStatus;
    }
    type ServerData$ServerPackStatus_ = ServerData$ServerPackStatus | "prompt" | "disabled" | "enabled";
    class AbyssmarineWallBlock extends Internal.WallBlock implements Internal.ActivatedByAltar {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        placeLiquid(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.FluidState_): boolean;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        updateDistanceShape(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_): void;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        static getDistanceAt(arg0: Internal.BlockState_): number;
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        canPlaceLiquid(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.Fluid_): boolean;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        updateDistance(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_): Internal.BlockState;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        activeDistance(arg0: Internal.BlockState_): boolean;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        activeDistance(arg0: number): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type AbyssmarineWallBlock_ = AbyssmarineWallBlock;
    class EquipmentSlot$Type extends Internal.Enum<Internal.EquipmentSlot$Type> {
        static values(): Internal.EquipmentSlot$Type[];
        static invokeNew$accessories_$md$2a2e30$0(arg0: string, arg1: number): Internal.EquipmentSlot$Type;
        static valueOf(arg0: string): Internal.EquipmentSlot$Type;
        static readonly ARMOR: Internal.EquipmentSlot$Type;
        static readonly HAND: Internal.EquipmentSlot$Type;
    }
    type EquipmentSlot$Type_ = EquipmentSlot$Type | "armor" | "hand";
    class ItemModelGenerator {
        constructor()
        processFrames(arg0: number, arg1: string, arg2: Internal.SpriteContents_): Internal.List<Internal.BlockElement>;
        generateBlockModel(arg0: Internal.Function_<Internal.Material, Internal.TextureAtlasSprite>, arg1: Internal.BlockModel_): Internal.BlockModel;
        static readonly LAYERS: ["layer0", "layer1", "layer2", "layer3", "layer4"];
    }
    type ItemModelGenerator_ = ItemModelGenerator;
    class GoldCrownArmorItem extends Internal.ExtendedArmorItem {
        constructor(arg0: Internal.ArmorItem$Type_, arg1: Internal.Item$Properties_)
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        getTick(arg0: any): number;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        isPerspectiveAware(): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        setAnimData<D>(arg0: Internal.Entity_, arg1: number, arg2: Internal.SerializableDataTicket_<D>, arg3: D): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        handler$cbo000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>): D;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        shouldPlayAnimsWhileGamePaused(): boolean;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        static getId(arg0: Internal.ItemStack_): number;
        setArmorToughness(armorToughness: number): void;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        stopTriggeredArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        setDigSpeed(speed: number): void;
        setAttackSpeed(attackSpeed: number): void;
        triggerAnim<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        triggerAnim<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        static registerSyncedAnimatable(arg0: Internal.GeoAnimatable_): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        getBoneResetTime(): number;
        getDamage(arg0: Internal.ItemStack_): number;
        triggerArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vector3f;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string, arg4: Internal.PacketDistributor$PacketTarget_): void;
        arch$registryName(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        syncAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>, arg2: D, arg3: Internal.PacketDistributor$PacketTarget_): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        static getOrAssignId(arg0: Internal.ItemStack_, arg1: Internal.ServerLevel_): number;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        get perspectiveAware(): boolean
        get creativeTab(): string
        set attackDamage(attackDamage: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set armorKnockbackResistance(knockbackResistance: number)
        get boneResetTime(): number
        get mod(): string
        set armorProtection(armorProtection: number)
    }
    type GoldCrownArmorItem_ = GoldCrownArmorItem;
    class JigsawBlockEntity$JointType extends Internal.Enum<Internal.JigsawBlockEntity$JointType> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        static valueOf(arg0: string): Internal.JigsawBlockEntity$JointType;
        getSerializedName(): string;
        getTranslatedName(): Internal.Component;
        static values(): Internal.JigsawBlockEntity$JointType[];
        static byName(string: string): Internal.Optional<any>;
        get serializedName(): string
        get translatedName(): Internal.Component
        static readonly ROLLABLE: Internal.JigsawBlockEntity$JointType;
        static readonly ALIGNED: Internal.JigsawBlockEntity$JointType;
    }
    type JigsawBlockEntity$JointType_ = "aligned" | "rollable" | JigsawBlockEntity$JointType;
    class OreConfiguration$TargetBlockState {
        constructor(arg0: Internal.RuleTest_, arg1: Internal.BlockState_)
        static readonly CODEC: Internal.Codec<Internal.OreConfiguration$TargetBlockState>;
        readonly state: Internal.BlockState;
        readonly target: Internal.RuleTest;
    }
    type OreConfiguration$TargetBlockState_ = OreConfiguration$TargetBlockState;
    interface OpenOption {
    }
    type OpenOption_ = OpenOption;
    class VertexFormatElement$Usage extends Internal.Enum<Internal.VertexFormatElement$Usage> {
        getName(): string;
        clearBufferState(arg0: number, arg1: number): void;
        static values(): Internal.VertexFormatElement$Usage[];
        static valueOf(arg0: string): Internal.VertexFormatElement$Usage;
        get name(): string
        static readonly GENERIC: Internal.VertexFormatElement$Usage;
        static readonly COLOR: Internal.VertexFormatElement$Usage;
        static readonly NORMAL: Internal.VertexFormatElement$Usage;
        static readonly UV: Internal.VertexFormatElement$Usage;
        static readonly POSITION: Internal.VertexFormatElement$Usage;
        static readonly PADDING: Internal.VertexFormatElement$Usage;
    }
    type VertexFormatElement$Usage_ = VertexFormatElement$Usage | "normal" | "color" | "generic" | "position" | "padding" | "uv";
    class Collections$UnmodifiableMap <K, V> implements Internal.Map<K, V>, Internal.Serializable {
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, V>): V;
        replace(arg0: K, arg1: V): V;
        containsValue(arg0: any): boolean;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        static of<K, V>(): Internal.Map<K, V>;
        getOrDefault(arg0: any, arg1: V): V;
        isEmpty(): boolean;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        containsKey(arg0: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        put(arg0: K, arg1: V): V;
        get(arg0: any): V;
        remove(arg0: any): V;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        merge(arg0: K, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        putIfAbsent(arg0: K, arg1: V): V;
        keySet(): Internal.Set<K>;
        forEach(arg0: Internal.BiConsumer_<K, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        values(): Internal.Collection<V>;
        entrySet(): Internal.Set<Internal.Map$Entry<K, V>>;
        compute(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        remove(arg0: any, arg1: any): boolean;
        putAll(arg0: Internal.Map_<K, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        size(): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        replaceAll(arg0: Internal.BiFunction_<K, V, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        get empty(): boolean
    }
    type Collections$UnmodifiableMap_<K, V> = Collections$UnmodifiableMap<K, V>;
    class AnvilMenu extends Internal.ItemCombinerMenu {
        constructor(arg0: number, arg1: Internal.Inventory_, arg2: Internal.ContainerLevelAccess_)
        constructor(arg0: number, arg1: Internal.Inventory_)
        handler$dpb000$unionlib$iMayPickup(player: Player_, hasStack: boolean, cir: Internal.CallbackInfoReturnable_<any>): void;
        handler$dpb000$unionlib$iCreateResult(ci: Internal.CallbackInfo_, itemStack: Internal.ItemStack_, i: number, j: number, k: number, itemStack2: Internal.ItemStack_, itemStack3: Internal.ItemStack_, map: Internal.Map_<any, any>): void;
        static calculateIncreasedRepairCost(arg0: number): number;
        getCost(): number;
        setMaximumCost(arg0: number): void;
        setItemName(arg0: string): boolean;
        get cost(): number
        set maximumCost(arg0: number)
        set itemName(arg0: string)
        static readonly INPUT_SLOT: 0;
        static readonly MAX_NAME_LENGTH: 50;
        reforgedAttribute: ResourceLocation;
        static readonly RESULT_SLOT: 2;
        repairItemCountCost: number;
        static readonly ADDITIONAL_SLOT: 1;
    }
    type AnvilMenu_ = AnvilMenu;
    class BaseEntityJSBuilder extends Internal.BaseEntityBuilder<any> {
        constructor(i: ResourceLocation_)
        createObject(): any;
    }
    type BaseEntityJSBuilder_ = BaseEntityJSBuilder;
    abstract class AbstractInt2ObjectFunction <V> implements Internal.Int2ObjectFunction<V>, Internal.Serializable {
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        composeLong(arg0: Internal.Long2IntFunction_): Internal.Long2ObjectFunction<V>;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Int2CharFunction;
        put(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        containsKey(arg0: number): boolean;
        composeReference<T>(arg0: Internal.Reference2IntFunction_<T>): Internal.Reference2ObjectFunction<T, V>;
        abstract get(arg0: number): V;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Int2ReferenceFunction<T>;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Int2ByteFunction;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        apply(arg0: number): V;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        apply(arg0: number): V;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        composeInt(arg0: Internal.Int2IntFunction_): Internal.Int2ObjectFunction<V>;
        composeByte(arg0: Internal.Byte2IntFunction_): Internal.Byte2ObjectFunction<V>;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Int2DoubleFunction;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Int2IntFunction;
        composeObject<T>(arg0: Internal.Object2IntFunction_<T>): Internal.Object2ObjectFunction<T, V>;
        remove(arg0: number): V;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Int2ShortFunction;
        getOrDefault(arg0: number, arg1: V): V;
        composeShort(arg0: Internal.Short2IntFunction_): Internal.Short2ObjectFunction<V>;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Int2FloatFunction;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Int2ObjectFunction<T>;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Int2LongFunction;
        composeDouble(arg0: Internal.Double2IntFunction_): Internal.Double2ObjectFunction<V>;
        size(): number;
        composeChar(arg0: Internal.Char2IntFunction_): Internal.Char2ObjectFunction<V>;
        clear(): void;
        defaultReturnValue(): V;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        static identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        composeFloat(arg0: Internal.Float2IntFunction_): Internal.Float2ObjectFunction<V>;
    }
    type AbstractInt2ObjectFunction_<V> = AbstractInt2ObjectFunction<V>;
    class BlockPattern {
        constructor(arg0: Internal.Predicate_<Internal.BlockInWorld>[][][])
        getDepth(): number;
        getPattern(): Internal.Predicate<Internal.BlockInWorld>[][][];
        matches(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.Direction_): Internal.BlockPattern$BlockPatternMatch;
        getWidth(): number;
        static createLevelCache(arg0: Internal.LevelReader_, arg1: boolean): Internal.LoadingCache<BlockPos, Internal.BlockInWorld>;
        static translateAndRotate(arg0: BlockPos_, arg1: Internal.Direction_, arg2: Internal.Direction_, arg3: number, arg4: number, arg5: number): BlockPos;
        getHeight(): number;
        find(arg0: Internal.LevelReader_, arg1: BlockPos_): Internal.BlockPattern$BlockPatternMatch;
        get depth(): number
        get pattern(): Internal.Predicate<Internal.BlockInWorld>[][][]
        get width(): number
        get height(): number
    }
    type BlockPattern_ = BlockPattern;
    class PewenPinesBlock extends Internal.BushBlock {
        constructor()
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly SHAPE: Internal.ArrayVoxelShape;
    }
    type PewenPinesBlock_ = PewenPinesBlock;
    interface CollisionGetter extends Internal.BlockGetter {
        noCollision(arg0: Internal.Entity_): boolean;
        getMinSection(): number;
        findFreePosition(arg0: Internal.Entity_, arg1: Internal.VoxelShape_, arg2: Vec3d_, arg3: number, arg4: number, arg5: number): Internal.Optional<Vec3d>;
        abstract getBlockState(arg0: BlockPos_): Internal.BlockState;
        isUnobstructed(arg0: Internal.Entity_, arg1: Internal.VoxelShape_): boolean;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        getSectionIndex(arg0: number): number;
        getMaxSection(): number;
        getMaxBuildHeight(): number;
        getBlockEntityRenderData(pos: BlockPos_): any;
        getBiomeFabric(pos: BlockPos_): Internal.Holder<Internal.Biome>;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        getSectionYFromSectionIndex(arg0: number): number;
        noCollision(arg0: Internal.AABB_): boolean;
        create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        getCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        abstract getEntityCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.VoxelShape>;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        collidesWithSuffocatingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        getBlockCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        abstract getBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        abstract getHeight(): number;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        getModelDataManager(): Internal.ModelDataManager;
        noCollision(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        abstract getWorldBorder(): Internal.WorldBorder;
        isOutsideBuildHeight(arg0: number): boolean;
        isUnobstructed(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.CollisionContext_): boolean;
        isUnobstructed(arg0: Internal.Entity_): boolean;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        abstract getFluidState(arg0: BlockPos_): Internal.FluidState;
        findSupportingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Optional<BlockPos>;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        abstract getMinBuildHeight(): number;
        getSectionsCount(): number;
        abstract getChunkForCollisions(arg0: number, arg1: number): Internal.BlockGetter;
        hasBiomes(): boolean;
        getMaxLightLevel(): number;
        getSectionIndexFromSectionY(arg0: number): number;
        traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        get minSection(): number
        get maxSection(): number
        get maxBuildHeight(): number
        get height(): number
        get modelDataManager(): Internal.ModelDataManager
        get worldBorder(): Internal.WorldBorder
        get minBuildHeight(): number
        get sectionsCount(): number
        get maxLightLevel(): number
    }
    type CollisionGetter_ = CollisionGetter;
    abstract class AbstractVillager extends Internal.AgeableMob implements Internal.InventoryCarrier, Internal.Npc, Internal.Merchant {
        constructor(arg0: Internal.EntityType_<Internal.AbstractVillager>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        setTradingPlayer(arg0: Player_): void;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getInventory(): Internal.SimpleContainer;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        abstract rewardTradeXp(arg0: Internal.MerchantOffer_): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        addParticlesAroundSelf(arg0: Internal.ParticleOptions_): void;
        swing(): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        isClientSide(): boolean;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        abstract updateTrades(): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        overrideOffers(arg0: Internal.MerchantOffers_): void;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        isInFluid(fluidState: Internal.FluidState_): boolean;
        damageHeldItem(): void;
        getDisplayName(): Internal.Component;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        stopTrading(): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAnimation(): Internal.AnimationApplier;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        canRiderInteract(): boolean;
        bettermobcombat$startUpswing(arg0: Internal.WeaponAttributes_): void;
        shouldRiderSit(): boolean;
        getVillagerXp(): number;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        static pickUpItem(arg0: Internal.Mob_, arg1: Internal.InventoryCarrier_, arg2: Internal.ItemEntity_): void;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getReachDistance(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        isFrame(): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        overrideXp(arg0: number): void;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        readInventoryFromTag(arg0: Internal.CompoundTag_): void;
        self(): Internal.LivingEntity;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        writeInventoryToTag(arg0: Internal.CompoundTag_): void;
        getDefaultMovementSpeed(): number;
        swing(hand: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        getTradeUpdatedSound(arg0: boolean): Internal.SoundEvent;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        isWeaponSwingInProgress(): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        self(): Internal.Entity;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        isTrading(): boolean;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getOffers(): Internal.MerchantOffers;
        openTradingScreen(arg0: Player_, arg1: Internal.Component_, arg2: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        isInFluid(fluidProp: Internal.FluidProperties_): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        playCelebrateSound(): void;
        setOffHandItem(item: Internal.ItemStack_): void;
        setDefaultMovementSpeed(speed: number): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        notifyTradeUpdated(arg0: Internal.ItemStack_): void;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        getUnhappyCounter(): number;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getTradingPlayer(): Player;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        getNotifyTradeSound(): Internal.SoundEvent;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        setMovementSpeedAddition(speed: number): void;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        showProgressBar(): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        notifyTrade(arg0: Internal.MerchantOffer_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        setUnhappyCounter(arg0: number): void;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        canRestock(): boolean;
        tell(message: Internal.Component_): void;
        bettermobcombat$isCombatAnimationActive(): boolean;
        setZ(z: number): void;
        addOffersFromItemListings(arg0: Internal.MerchantOffers_, arg1: Internal.VillagerTrades$ItemListing_[], arg2: number): void;
        setStatusMessage(message: Internal.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getProfile(): Internal.GameProfile;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        gatherDamagePowers(arg0: Internal.Entity_, arg1: DamageSource_, arg2: number): void;
        set tradingPlayer(arg0: Player_)
        get inventory(): Internal.SimpleContainer
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get clientSide(): boolean
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get totalMovementSpeed(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get animation(): Internal.AnimationApplier
        get teamId(): string
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        get villagerXp(): number
        set mainHandItem(item: Internal.ItemStack_)
        get legsArmorItem(): Internal.ItemStack
        get reachDistance(): number
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get potionEffects(): Internal.EntityPotionEffectsJS
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        get undead(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get weaponSwingInProgress(): boolean
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get trading(): boolean
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        get offers(): Internal.MerchantOffers
        get feetArmorItem(): Internal.ItemStack
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        get unhappyCounter(): number
        get tradingPlayer(): Player
        get notifyTradeSound(): Internal.SoundEvent
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        set movementSpeedAddition(speed: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get parts(): Internal.PartEntity<any>[]
        set unhappyCounter(arg0: number)
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        static readonly VILLAGER_SLOT_OFFSET: 300;
        offers: Internal.MerchantOffers;
    }
    type AbstractVillager_ = AbstractVillager;
    interface WatchEvent$Kind <T> {
        abstract name(): string;
        abstract type(): T;
    }
    type WatchEvent$Kind_<T> = WatchEvent$Kind<T>;
    class ClientEventJS extends Internal.PlayerEventJS {
        constructor()
        getEntity(): Internal.LivingEntity;
        getPlayer(): Internal.LocalPlayer;
        get entity(): Internal.LivingEntity
        get player(): Internal.LocalPlayer
    }
    type ClientEventJS_ = ClientEventJS;
    class PaintingVariantBuilder extends Internal.BuilderBase<Internal.PaintingVariant> {
        constructor(i: ResourceLocation_)
        createObject(): Internal.PaintingVariant;
        height(height: number): this;
        width(width: number): this;
    }
    type PaintingVariantBuilder_ = PaintingVariantBuilder;
    class BlockItemWithSupplier extends Internal.BlockItem {
        constructor(arg0: Internal.RegistryObject_<Internal.Block>, arg1: Internal.Item$Properties_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        handler$cbo000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vector3f;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        arch$registryName(): ResourceLocation;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        setArmorToughness(armorToughness: number): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get creativeTab(): string
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type BlockItemWithSupplier_ = BlockItemWithSupplier;
    class BurningDashEffect extends Internal.MobEffect {
        constructor(arg0: Internal.MobEffectCategory_, arg1: number)
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type BurningDashEffect_ = BurningDashEffect;
    class CameraTransform {
        constructor(arg0: number, arg1: number, arg2: number)
        readonly fracX: number;
        readonly z: number;
        readonly fracZ: number;
        readonly fracY: number;
        readonly intZ: number;
        readonly intY: number;
        readonly intX: number;
        readonly x: number;
        readonly y: number;
    }
    type CameraTransform_ = CameraTransform;
    class TagEventJS extends Internal.EventJS {
        constructor(ri: Internal.RegistryInfo_<any>, vr: Internal.Registry_<any>)
        removeAll(tag: ResourceLocation_): Internal.TagWrapper;
        get(id: ResourceLocation_): Internal.TagWrapper;
        remove(tag: ResourceLocation_, ...filters: any[]): Internal.TagWrapper;
        getElementIds(): Internal.Set<ResourceLocation>;
        removeAllTagsFrom(...ids: any[]): void;
        add(tag: ResourceLocation_, ...filters: any[]): Internal.TagWrapper;
        getType(): ResourceLocation;
        get elementIds(): Internal.Set<ResourceLocation>
        get type(): ResourceLocation
        readonly registry: Internal.RegistryInfo<any>;
        static readonly TAG_EVENT_HANDLER: Internal.EventExceptionHandler;
        readonly vanillaRegistry: Internal.Registry<any>;
        totalRemoved: number;
        totalAdded: number;
        static readonly SOURCE: "KubeJS Custom Tags";
        readonly tags: Internal.Map<ResourceLocation, Internal.TagWrapper>;
    }
    type TagEventJS_ = TagEventJS;
    class BuildBrainEventJS <T extends Internal.LivingEntity> extends Internal.EventJS {
        constructor(base: Internal.Brain_<T>)
        addActivity(activity: Internal.Activity_, i: number, behaviors: Internal.List_<Internal.Behavior<Internal.LivingEntity>>): void;
        coreActivity(i: number, behaviors: Internal.List_<Internal.Behavior<Internal.LivingEntity>>): void;
        idleActivity(i: number, behaviors: Internal.List_<Internal.Behavior<Internal.LivingEntity>>): void;
        readonly behaviors: Internal.Behaviors;
    }
    type BuildBrainEventJS_<T extends Internal.LivingEntity> = BuildBrainEventJS<T>;
    class Instrument extends Internal.Record {
        constructor(arg0: Internal.Holder_<Internal.SoundEvent>, arg1: number, arg2: number)
        useDuration(): number;
        soundEvent(): Internal.Holder<Internal.SoundEvent>;
        range(): number;
        static readonly CODEC: Internal.Codec<Internal.Instrument>;
    }
    type Instrument_ = Special.Instrument | Instrument;
    class DamageAction extends Internal.BiEntityAction<Internal.DamageConfiguration> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        execute(arg0: Internal.DamageConfiguration_, arg1: Internal.Entity_, arg2: Internal.Entity_): void;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type DamageAction_ = DamageAction;
    class BurnPower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<any> {
        constructor()
    }
    type BurnPower_ = BurnPower;
    class BedPart extends Internal.Enum<Internal.BedPart> implements Internal.StringRepresentable {
        static valueOf(arg0: string): Internal.BedPart;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static values(): Internal.BedPart[];
        get serializedName(): string
        static readonly HEAD: Internal.BedPart;
        static readonly FOOT: Internal.BedPart;
    }
    type BedPart_ = "foot" | "head" | BedPart;
    interface FluidVariantCache {
        abstract fabric_getCachedFluidVariant(): Internal.FluidVariant;
        (): Internal.FluidVariant_;
    }
    type FluidVariantCache_ = FluidVariantCache;
    class IllusionerJSBuilder extends Internal.PathfinderMobBuilder<any> {
        constructor(i: ResourceLocation_)
        createObject(): any;
        /**
         * @param defaultGoals Sets whether the mob should inherit it's goals from it's superclass
         * Defaults to true.
         * 
         * Example usage:
         * ```javascript
         * builder.defaultGoals(false);
         * ```
        */
        defaultGoals(defaultGoals: boolean): this;
        /**
         * Sets the sound to play when the entity is celebrating using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.setCelebrateSound("minecraft:entity.zombie.ambient");
         * ```
        */
        setCelebrateSound(ambientSound: any): this;
        /**
         * Sets the sound to play when the entity is celebrating using either a string representation or a ResourceLocation object.
         * 
         * Example usage:
         * ```javascript
         * mobBuilder.setCelebrateSound("minecraft:entity.zombie.ambient");
         * ```
        */
        set celebrateSound(ambientSound: any)
    }
    type IllusionerJSBuilder_ = IllusionerJSBuilder;
    abstract class ImmutableMap$IteratorBasedImmutableMap <K, V> extends Internal.ImmutableMap<K, V> {
        entrySet(): Internal.Set<any>;
        keySet(): Internal.Set<any>;
        forEach(arg0: Internal.BiConsumer_<K, V>): void;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        values(): Internal.Collection<any>;
    }
    type ImmutableMap$IteratorBasedImmutableMap_<K, V> = ImmutableMap$IteratorBasedImmutableMap<K, V>;
    class Witch extends Internal.Raider implements Internal.RangedAttackMob {
        constructor(arg0: Internal.EntityType_<Internal.Witch>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        swing(): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        isInFluid(fluidState: Internal.FluidState_): boolean;
        damageHeldItem(): void;
        getDisplayName(): Internal.Component;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setUsingItem(arg0: boolean): void;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAnimation(): Internal.AnimationApplier;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        canRiderInteract(): boolean;
        bettermobcombat$startUpswing(arg0: Internal.WeaponAttributes_): void;
        shouldRiderSit(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getReachDistance(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        isFrame(): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        self(): Internal.LivingEntity;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getDefaultMovementSpeed(): number;
        swing(hand: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        isWeaponSwingInProgress(): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        self(): Internal.Entity;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        isDrinkingPotion(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        isInFluid(fluidProp: Internal.FluidProperties_): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        setOffHandItem(item: Internal.ItemStack_): void;
        setDefaultMovementSpeed(speed: number): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        performRangedAttack(arg0: Internal.LivingEntity_, arg1: number): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        setMovementSpeedAddition(speed: number): void;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        tell(message: Internal.Component_): void;
        bettermobcombat$isCombatAnimationActive(): boolean;
        setZ(z: number): void;
        setStatusMessage(message: Internal.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getProfile(): Internal.GameProfile;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        gatherDamagePowers(arg0: Internal.Entity_, arg1: DamageSource_, arg2: number): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get totalMovementSpeed(): number
        get displayName(): Internal.Component
        set usingItem(arg0: boolean)
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get animation(): Internal.AnimationApplier
        get teamId(): string
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        set mainHandItem(item: Internal.ItemStack_)
        get legsArmorItem(): Internal.ItemStack
        get reachDistance(): number
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get potionEffects(): Internal.EntityPotionEffectsJS
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        get undead(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get weaponSwingInProgress(): boolean
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        get drinkingPotion(): boolean
        get feetArmorItem(): Internal.ItemStack
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        set movementSpeedAddition(speed: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get parts(): Internal.PartEntity<any>[]
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
    }
    type Witch_ = Witch;
    interface IIngredientFilter {
        getFilteredItemStacks(): Internal.List<Internal.ItemStack>;
        abstract getFilteredIngredients<T>(arg0: Internal.IIngredientType_<T>): Internal.List<T>;
        abstract setFilterText(arg0: string): void;
        abstract getFilterText(): string;
        get filteredItemStacks(): Internal.List<Internal.ItemStack>
        set filterText(arg0: string)
        get filterText(): string
    }
    type IIngredientFilter_ = IIngredientFilter;
    interface ReferenceCollection <K> extends Internal.Collection<K>, Internal.ObjectIterable<K> {
        abstract addAll(arg0: Internal.Collection_<K>): boolean;
        iterator(): Internal.Iterator<any>;
        abstract toArray<T>(arg0: T[]): T[];
        forEach(arg0: Internal.Consumer_<K>): void;
        spliterator(): Internal.ObjectSpliterator<K>;
        abstract remove(arg0: any): boolean;
        abstract isEmpty(): boolean;
        abstract toArray(): any[];
        removeIf(arg0: Internal.Predicate_<K>): boolean;
        parallelStream(): Internal.Stream<K>;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract hashCode(): number;
        abstract size(): number;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        abstract clear(): void;
        abstract equals(arg0: any): boolean;
        abstract add(arg0: K): boolean;
        stream(): Internal.Stream<K>;
        abstract contains(arg0: any): boolean;
        get empty(): boolean
    }
    type ReferenceCollection_<K> = ReferenceCollection<K>;
    class ProtectionEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, arg1: Internal.ProtectionEnchantment$Type_, ...arg2: Internal.EquipmentSlot_[])
        static getExplosionKnockbackAfterDampener(arg0: Internal.LivingEntity_, arg1: number): number;
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
        static getFireAfterDampener(arg0: Internal.LivingEntity_, arg1: number): number;
        readonly type: Internal.ProtectionEnchantment$Type;
    }
    type ProtectionEnchantment_ = ProtectionEnchantment;
    interface ScreenKeyboardEvents$BeforeKeyRelease {
        abstract beforeKeyRelease(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number): void;
        (arg0: Internal.Screen, arg1: number, arg2: number, arg3: number): void;
    }
    type ScreenKeyboardEvents$BeforeKeyRelease_ = ScreenKeyboardEvents$BeforeKeyRelease;
    class StandingAndWallBlockItem extends Internal.BlockItem {
        constructor(arg0: Internal.Block_, arg1: Internal.Block_, arg2: Internal.Item$Properties_, arg3: Internal.Direction_)
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        handler$cbo000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vector3f;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        arch$registryName(): ResourceLocation;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getMod(): string;
        canPlace(arg0: Internal.LevelReader_, arg1: Internal.BlockState_, arg2: BlockPos_): boolean;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        setArmorToughness(armorToughness: number): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get creativeTab(): string
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        readonly wallBlock: Internal.Block;
    }
    type StandingAndWallBlockItem_ = StandingAndWallBlockItem;
    interface Long2ShortFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.LongToIntFunction {
        andThenInt(arg0: Internal.Short2IntFunction_): Internal.Long2IntFunction;
        composeFloat(arg0: Internal.Float2LongFunction_): Internal.Float2ShortFunction;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        composeLong(arg0: Internal.Long2LongFunction_): this;
        composeReference<T>(arg0: Internal.Reference2LongFunction_<T>): Internal.Reference2ShortFunction<T>;
        andThenFloat(arg0: Internal.Short2FloatFunction_): Internal.Long2FloatFunction;
        abstract get(arg0: number): number;
        andThenShort(arg0: Internal.Short2ShortFunction_): this;
        apply(arg0: number): number;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        composeDouble(arg0: Internal.Double2LongFunction_): Internal.Double2ShortFunction;
        defaultReturnValue(): number;
        andThenLong(arg0: Internal.Short2LongFunction_): Internal.Long2LongFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        applyAsInt(arg0: number): number;
        composeInt(arg0: Internal.Int2LongFunction_): Internal.Int2ShortFunction;
        remove(arg0: number): number;
        composeByte(arg0: Internal.Byte2LongFunction_): Internal.Byte2ShortFunction;
        andThenReference<T>(arg0: Internal.Short2ReferenceFunction_<T>): Internal.Long2ReferenceFunction<T>;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        getOrDefault(arg0: number, arg1: number): number;
        andThenByte(arg0: Internal.Short2ByteFunction_): Internal.Long2ByteFunction;
        andThenObject<T>(arg0: Internal.Short2ObjectFunction_<T>): Internal.Long2ObjectFunction<T>;
        composeChar(arg0: Internal.Char2LongFunction_): Internal.Char2ShortFunction;
        composeObject<T>(arg0: Internal.Object2LongFunction_<T>): Internal.Object2ShortFunction<T>;
        size(): number;
        defaultReturnValue(arg0: number): void;
        andThenDouble(arg0: Internal.Short2DoubleFunction_): Internal.Long2DoubleFunction;
        clear(): void;
        composeShort(arg0: Internal.Short2LongFunction_): Internal.Short2ShortFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        andThenChar(arg0: Internal.Short2CharFunction_): Internal.Long2CharFunction;
        identity<T>(): Internal.Function<T, T>;
        (arg0: number): number;
    }
    type Long2ShortFunction_ = Long2ShortFunction;
    class DyeColor extends Internal.Enum<Internal.DyeColor> implements Internal.StringRepresentable, Internal.Color {
        static valueOf(arg0: string): Internal.DyeColor;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        getSerializedName(): string;
        getRgbJS(): number;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static byFireworkColor(arg0: number): Internal.DyeColor;
        getName(): string;
        getHexJS(): string;
        getFireworkColorJS(): number;
        getMapColor(): Internal.MapColor;
        getId(): number;
        getArgbJS(): number;
        specialEquals(o: any, shallow: boolean): boolean;
        static values(): Internal.DyeColor[];
        getTextColor(): number;
        static byName(arg0: string, arg1: Internal.DyeColor_): Internal.DyeColor;
        getSerializeJS(): string;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getFireworkColor(): number;
        createTextColorJS(): Internal.TextColor;
        getTag(): Internal.TagKey<Internal.Item>;
        getTextureDiffuseColors(): number[];
        static byId(arg0: number): Internal.DyeColor;
        static getColor(arg0: Internal.ItemStack_): Internal.DyeColor;
        get serializedName(): string
        get rgbJS(): number
        get name(): string
        get hexJS(): string
        get fireworkColorJS(): number
        get mapColor(): Internal.MapColor
        get id(): number
        get argbJS(): number
        get textColor(): number
        get serializeJS(): string
        get fireworkColor(): number
        get tag(): Internal.TagKey<Internal.Item>
        get textureDiffuseColors(): number[]
        static readonly BROWN: Internal.DyeColor;
        static readonly PINK: Internal.DyeColor;
        static readonly BLUE: Internal.DyeColor;
        static readonly ORANGE: Internal.DyeColor;
        static readonly CYAN: Internal.DyeColor;
        static readonly WHITE: Internal.DyeColor;
        static readonly RED: Internal.DyeColor;
        static readonly LIGHT_BLUE: Internal.DyeColor;
        static readonly CODEC: Internal.StringRepresentable$EnumCodec<Internal.DyeColor>;
        static readonly LIGHT_GRAY: Internal.DyeColor;
        static readonly GRAY: Internal.DyeColor;
        static readonly PURPLE: Internal.DyeColor;
        static readonly BLACK: Internal.DyeColor;
        static readonly YELLOW: Internal.DyeColor;
        static readonly GREEN: Internal.DyeColor;
        static readonly LIME: Internal.DyeColor;
        static readonly MAGENTA: Internal.DyeColor;
    }
    type DyeColor_ = "light_blue" | "magenta" | "lime" | "brown" | "red" | "purple" | "pink" | "black" | DyeColor | "green" | "cyan" | "light_gray" | "yellow" | "white" | "gray" | "blue" | "orange";
    interface IForgeBakedModel {
        getRenderPasses(arg0: Internal.ItemStack_, arg1: boolean): Internal.List<Internal.BakedModel>;
        getModelData(arg0: Internal.BlockAndTintGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.ModelData_): Internal.ModelData;
        getRenderTypes(arg0: Internal.BlockState_, arg1: Internal.RandomSource_, arg2: Internal.ModelData_): Internal.ChunkRenderTypeSet;
        applyTransform(arg0: Internal.ItemDisplayContext_, arg1: Internal.PoseStack_, arg2: boolean): Internal.BakedModel;
        getParticleIcon(arg0: Internal.ModelData_): Internal.TextureAtlasSprite;
        useAmbientOcclusion(arg0: Internal.BlockState_): boolean;
        useAmbientOcclusion(arg0: Internal.BlockState_, arg1: Internal.RenderType_): boolean;
        getRenderTypes(arg0: Internal.ItemStack_, arg1: boolean): Internal.List<Internal.RenderType>;
        getQuads(arg0: Internal.BlockState_, arg1: Internal.Direction_, arg2: Internal.RandomSource_, arg3: Internal.ModelData_, arg4: Internal.RenderType_): Internal.List<Internal.BakedQuad>;
    }
    type IForgeBakedModel_ = IForgeBakedModel;
    class ServerboundUseItemOnPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.InteractionHand_, arg1: Internal.BlockHitResult_, arg2: number)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getSequence(): number;
        getHand(): Internal.InteractionHand;
        getHitResult(): Internal.BlockHitResult;
        isSkippable(): boolean;
        get sequence(): number
        get hand(): Internal.InteractionHand
        get hitResult(): Internal.BlockHitResult
        get skippable(): boolean
    }
    type ServerboundUseItemOnPacket_ = ServerboundUseItemOnPacket;
    interface OptionInstance$CycleableValueSet <T> extends Internal.OptionInstance$ValueSet<T> {
        abstract validateValue(arg0: T): Internal.Optional<T>;
        abstract codec(): Internal.Codec<T>;
        createButton(arg0: Internal.OptionInstance$TooltipSupplier_<T>, arg1: Internal.Options_, arg2: number, arg3: number, arg4: number, arg5: Internal.Consumer_<T>): Internal.Function<Internal.OptionInstance<T>, Internal.AbstractWidget>;
        valueSetter(): Internal.OptionInstance$CycleableValueSet$ValueSetter<T>;
        abstract valueListSupplier(): Internal.CycleButton$ValueListSupplier<T>;
    }
    type OptionInstance$CycleableValueSet_<T> = OptionInstance$CycleableValueSet<T>;
    class HangingAzuroLeavesBlock extends Internal.GrowingPlantBodyBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type HangingAzuroLeavesBlock_ = HangingAzuroLeavesBlock;
    abstract class AbstractSkullBlock extends Internal.BaseEntityBlock implements Internal.Equipable {
        constructor(arg0: Internal.SkullBlock$Type_, arg1: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getTicker<T extends Internal.BlockEntity>(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: Internal.BlockEntityType_<T>): Internal.BlockEntityTicker<T>;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        getBeaconColorMultiplier(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): number[];
        getEquipSound(): Internal.SoundEvent;
        onBlockExploded(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Explosion_): void;
        getPistonPushReaction(arg0: Internal.BlockState_): Internal.PushReaction;
        isSlimeBlock(arg0: Internal.BlockState_): boolean;
        getAppearance(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.BlockState_, arg5: BlockPos_): Internal.BlockState;
        getExpDrop(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: number, arg5: number): number;
        setDestroySpeed(v: number): void;
        canEntityDestroy(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        shouldDisplayFluidOverlay(arg0: Internal.BlockState_, arg1: Internal.BlockAndTintGetter_, arg2: BlockPos_, arg3: Internal.FluidState_): boolean;
        rotate(arg0: Internal.BlockState_, arg1: Internal.LevelAccessor_, arg2: BlockPos_, arg3: Internal.Rotation_): Internal.BlockState;
        getType(): Internal.SkullBlock$Type;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getListener<T extends Internal.BlockEntity>(arg0: Internal.ServerLevel_, arg1: T): Internal.GameEventListener;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        getMapColor(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.MapColor_): Internal.MapColor;
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        getEquipmentSlot(): Internal.EquipmentSlot;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        get equipSound(): Internal.SoundEvent
        set destroySpeed(v: number)
        get type(): Internal.SkullBlock$Type
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get equipmentSlot(): Internal.EquipmentSlot
    }
    type AbstractSkullBlock_ = AbstractSkullBlock;
    class DefaultDispenseItemBehavior implements Internal.DispenseItemBehavior {
        constructor()
        static bootStrap(): void;
        playSound(arg0: Internal.BlockSource_): void;
        dispense(arg0: Internal.BlockSource_, arg1: Internal.ItemStack_): Internal.ItemStack;
        static setEntityPokingOutOfBlock(arg0: Internal.BlockSource_, arg1: Internal.Entity_, arg2: Internal.Direction_): void;
        static spawnItem(arg0: Internal.Level_, arg1: Internal.ItemStack_, arg2: number, arg3: Internal.Direction_, arg4: Internal.Position_): void;
        playAnimation(arg0: Internal.BlockSource_, arg1: Internal.Direction_): void;
        execute(arg0: Internal.BlockSource_, arg1: Internal.ItemStack_): Internal.ItemStack;
    }
    type DefaultDispenseItemBehavior_ = DefaultDispenseItemBehavior;
    class UseOnContext {
        constructor(arg0: Player_, arg1: Internal.InteractionHand_, arg2: Internal.BlockHitResult_)
        constructor(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_, arg3: Internal.ItemStack_, arg4: Internal.BlockHitResult_)
        getLevel(): Internal.Level;
        getClickedFace(): Internal.Direction;
        getClickLocation(): Vec3d;
        isSecondaryUseActive(): boolean;
        getHand(): Internal.InteractionHand;
        getClickedPos(): BlockPos;
        getHorizontalDirection(): Internal.Direction;
        getItemInHand(): Internal.ItemStack;
        getRotation(): number;
        getPlayer(): Player;
        getHitResult(): Internal.BlockHitResult;
        isInside(): boolean;
        get level(): Internal.Level
        get clickedFace(): Internal.Direction
        get clickLocation(): Vec3d
        get secondaryUseActive(): boolean
        get hand(): Internal.InteractionHand
        get clickedPos(): BlockPos
        get horizontalDirection(): Internal.Direction
        get itemInHand(): Internal.ItemStack
        get rotation(): number
        get player(): Player
        get hitResult(): Internal.BlockHitResult
        get inside(): boolean
    }
    type UseOnContext_ = UseOnContext;
    interface Long2FloatFunction extends it.unimi.dsi.fastutil.Function<number, number>, Internal.LongToDoubleFunction {
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        remove(arg0: number): number;
        composeByte(arg0: Internal.Byte2LongFunction_): Internal.Byte2FloatFunction;
        /**
         * @deprecated
        */
        get(arg0: any): number;
        apply(arg0: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        andThenShort(arg0: Internal.Float2ShortFunction_): Internal.Long2ShortFunction;
        defaultReturnValue(arg0: number): void;
        composeChar(arg0: Internal.Char2LongFunction_): Internal.Char2FloatFunction;
        andThenByte(arg0: Internal.Float2ByteFunction_): Internal.Long2ByteFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        composeShort(arg0: Internal.Short2LongFunction_): Internal.Short2FloatFunction;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        andThenChar(arg0: Internal.Float2CharFunction_): Internal.Long2CharFunction;
        defaultReturnValue(): number;
        andThenInt(arg0: Internal.Float2IntFunction_): Internal.Long2IntFunction;
        composeFloat(arg0: Internal.Float2LongFunction_): Internal.Float2FloatFunction;
        abstract get(arg0: number): number;
        containsKey(arg0: number): boolean;
        andThenDouble(arg0: Internal.Float2DoubleFunction_): Internal.Long2DoubleFunction;
        composeReference<T>(arg0: Internal.Reference2LongFunction_<T>): Internal.Reference2FloatFunction<T>;
        composeLong(arg0: Internal.Long2LongFunction_): this;
        andThenObject<T>(arg0: Internal.Float2ObjectFunction_<T>): Internal.Long2ObjectFunction<T>;
        put(arg0: number, arg1: number): number;
        applyAsDouble(arg0: number): number;
        andThenReference<T>(arg0: Internal.Float2ReferenceFunction_<T>): Internal.Long2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        composeObject<T>(arg0: Internal.Object2LongFunction_<T>): Internal.Object2FloatFunction<T>;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        size(): number;
        composeDouble(arg0: Internal.Double2LongFunction_): Internal.Double2FloatFunction;
        andThenLong(arg0: Internal.Float2LongFunction_): Internal.Long2LongFunction;
        clear(): void;
        andThenFloat(arg0: Internal.Float2FloatFunction_): this;
        composeInt(arg0: Internal.Int2LongFunction_): Internal.Int2FloatFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        identity<T>(): Internal.Function<T, T>;
        getOrDefault(arg0: number, arg1: number): number;
        (arg0: number): number;
    }
    type Long2FloatFunction_ = Long2FloatFunction;
    class ContextUtils$HurtContext {
        constructor(entity: Internal.LivingEntity_, damageSource: DamageSource_)
        /**
         * The source of the damage
        */
        readonly damageSource: DamageSource;
        /**
         * The living entity that was hurt
        */
        readonly entity: Internal.LivingEntity;
    }
    type ContextUtils$HurtContext_ = ContextUtils$HurtContext;
    class AlwaysTrueTest extends Internal.RuleTest {
        static readonly CODEC: Internal.Codec<Internal.AlwaysTrueTest>;
        static readonly INSTANCE: Internal.AlwaysTrueTest;
    }
    type AlwaysTrueTest_ = AlwaysTrueTest;
    interface Ingredient$Value {
        abstract serialize(): Internal.JsonObject;
        abstract getItems(): Internal.Collection<Internal.ItemStack>;
        get items(): Internal.Collection<Internal.ItemStack>
    }
    type Ingredient$Value_ = Ingredient$Value;
    class SlabBlockBuilder extends Internal.ShapedBlockBuilder {
        constructor(i: ResourceLocation_)
        /**
         * Tags both the block and the item with the given tag.
        */
        tag(arg0: ResourceLocation_): Internal.BuilderBase<any>;
        createObject(): Internal.Block;
    }
    type SlabBlockBuilder_ = SlabBlockBuilder;
    interface SpectatorMenuCategory {
        abstract getPrompt(): Internal.Component;
        abstract getItems(): Internal.List<Internal.SpectatorMenuItem>;
        get prompt(): Internal.Component
        get items(): Internal.List<Internal.SpectatorMenuItem>
    }
    type SpectatorMenuCategory_ = SpectatorMenuCategory;
    class TwistingVinesConfig extends Internal.Record implements Internal.FeatureConfiguration {
        constructor(arg0: number, arg1: number, arg2: number)
        spreadWidth(): number;
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        spreadHeight(): number;
        maxHeight(): number;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        static readonly CODEC: Internal.Codec<Internal.TwistingVinesConfig>;
    }
    type TwistingVinesConfig_ = TwistingVinesConfig;
    class SculkSpreader {
        constructor(arg0: boolean, arg1: Internal.TagKey_<Internal.Block>, arg2: number, arg3: number, arg4: number, arg5: number)
        static createWorldGenSpreader(): Internal.SculkSpreader;
        growthSpawnCost(): number;
        replaceableBlocks(): Internal.TagKey<Internal.Block>;
        chargeDecayRate(): number;
        additionalDecayRate(): number;
        getCursors(): Internal.List<Internal.SculkSpreader$ChargeCursor>;
        updateCursors(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.RandomSource_, arg3: boolean): void;
        save(arg0: Internal.CompoundTag_): void;
        addCursors(arg0: BlockPos_, arg1: number): void;
        load(arg0: Internal.CompoundTag_): void;
        isWorldGeneration(): boolean;
        clear(): void;
        noGrowthRadius(): number;
        static createLevelSpreader(): Internal.SculkSpreader;
        get cursors(): Internal.List<Internal.SculkSpreader$ChargeCursor>
        get worldGeneration(): boolean
        static readonly MAX_GROWTH_RATE_RADIUS: 24;
        static readonly MAX_DECAY_FACTOR: 0.5;
        readonly isWorldGeneration: boolean;
        static readonly SHRIEKER_PLACEMENT_RATE: 11;
        static readonly MAX_CHARGE: 1000;
    }
    type SculkSpreader_ = SculkSpreader;
    class CataclysmJigsawStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_, arg1: Internal.Holder_<Internal.StructureTemplatePool>, arg2: Internal.Optional_<ResourceLocation>, arg3: number, arg4: Internal.HeightProvider_, arg5: Internal.IntProvider_, arg6: Internal.IntProvider_, arg7: boolean, arg8: Internal.Optional_<Internal.Heightmap$Types>, arg9: number, arg10: Internal.Optional_<number>, arg11: Internal.Optional_<number>, arg12: Internal.EnhancedTerrainAdaptation_)
        readonly maxDepth: number;
        readonly minY: Internal.Optional<number>;
        readonly zOffsetInChunk: Internal.IntProvider;
        static readonly MAX_TOTAL_STRUCTURE_RADIUS: 192;
        readonly startPool: Internal.Holder<Internal.StructureTemplatePool>;
        readonly maxDistanceFromCenter: number;
        readonly maxY: Internal.Optional<number>;
        readonly projectStartToHeightmap: Internal.Optional<Internal.Heightmap$Types>;
        readonly startHeight: Internal.HeightProvider;
        readonly xOffsetInChunk: Internal.IntProvider;
        readonly useExpansionHack: boolean;
        readonly enhancedTerrainAdaptation: Internal.EnhancedTerrainAdaptation;
        static readonly CODEC: Internal.Codec<Internal.CataclysmJigsawStructure>;
    }
    type CataclysmJigsawStructure_ = CataclysmJigsawStructure;
    interface Remapper {
        getMappedClass(from: typeof any): string;
        getUnmappedClass(from: string): string;
        getMappedField(from: typeof any, field: Internal.Field_): string;
        getTypeName(type: string): string;
        getMappedMethod(from: typeof any, method: Internal.Method_): string;
    }
    type Remapper_ = Remapper;
    class Climate$Sampler extends Internal.Record implements Internal.MultiNoiseSamplerHooks {
        constructor(arg0: Internal.DensityFunction_, arg1: Internal.DensityFunction_, arg2: Internal.DensityFunction_, arg3: Internal.DensityFunction_, arg4: Internal.DensityFunction_, arg5: Internal.DensityFunction_, arg6: Internal.List_<Internal.Climate$ParameterPoint>)
        spawnTarget(): Internal.List<Internal.Climate$ParameterPoint>;
        fabric_getSeed(): number;
        fabric_getEndBiomesSampler(): Internal.ImprovedNoise;
        findSpawnPosition(): BlockPos;
        fabric_setSeed(seed: number): void;
        temperature(): Internal.DensityFunction;
        sample(arg0: number, arg1: number, arg2: number): Internal.Climate$TargetPoint;
        humidity(): Internal.DensityFunction;
        weirdness(): Internal.DensityFunction;
        continentalness(): Internal.DensityFunction;
        depth(): Internal.DensityFunction;
        erosion(): Internal.DensityFunction;
    }
    type Climate$Sampler_ = Climate$Sampler;
    class PackRepository {
        constructor(...arg0: Internal.RepositorySource_[])
        isAvailable(arg0: string): boolean;
        reload(): void;
        openAllSelected(): Internal.List<Internal.PackResources>;
        getSelectedPacks(): Internal.Collection<Internal.Pack>;
        getAvailableIds(): Internal.Collection<string>;
        addPackFinder(arg0: Internal.RepositorySource_): void;
        setSelected(arg0: Internal.Collection_<string>): void;
        removePack(arg0: string): boolean;
        getSelectedIds(): Internal.Collection<string>;
        getPack(arg0: string): Internal.Pack;
        addPack(arg0: string): boolean;
        getAvailablePacks(): Internal.Collection<Internal.Pack>;
        getRequestedFeatureFlags(): Internal.FeatureFlagSet;
        get selectedPacks(): Internal.Collection<Internal.Pack>
        get availableIds(): Internal.Collection<string>
        set selected(arg0: Internal.Collection_<string>)
        get selectedIds(): Internal.Collection<string>
        get availablePacks(): Internal.Collection<Internal.Pack>
        get requestedFeatureFlags(): Internal.FeatureFlagSet
        sources: Internal.Set<Internal.RepositorySource>;
    }
    type PackRepository_ = PackRepository;
    class SnowGolem extends Internal.AbstractGolem implements Internal.Shearable, Internal.IForgeShearable, Internal.RangedAttackMob {
        constructor(arg0: Internal.EntityType_<Internal.SnowGolem>, arg1: Internal.Level_)
        isShearable(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        swing(): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        readyForShearing(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        onSheared(arg0: Player_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: number): Internal.List<Internal.ItemStack>;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        isInFluid(fluidState: Internal.FluidState_): boolean;
        damageHeldItem(): void;
        getDisplayName(): Internal.Component;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAnimation(): Internal.AnimationApplier;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        canRiderInteract(): boolean;
        bettermobcombat$startUpswing(arg0: Internal.WeaponAttributes_): void;
        shouldRiderSit(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getReachDistance(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        isFrame(): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        self(): Internal.LivingEntity;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getDefaultMovementSpeed(): number;
        swing(hand: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        getDistance(x: number, y: number, z: number): number;
        hasPumpkin(): boolean;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        isWeaponSwingInProgress(): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        self(): Internal.Entity;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        isInFluid(fluidProp: Internal.FluidProperties_): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        setOffHandItem(item: Internal.ItemStack_): void;
        setDefaultMovementSpeed(speed: number): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        shear(arg0: Internal.SoundSource_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        performRangedAttack(arg0: Internal.LivingEntity_, arg1: number): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        setMovementSpeedAddition(speed: number): void;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        tell(message: Internal.Component_): void;
        bettermobcombat$isCombatAnimationActive(): boolean;
        setZ(z: number): void;
        setStatusMessage(message: Internal.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        setPumpkin(arg0: boolean): void;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getProfile(): Internal.GameProfile;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        gatherDamagePowers(arg0: Internal.Entity_, arg1: DamageSource_, arg2: number): void;
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get totalMovementSpeed(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get animation(): Internal.AnimationApplier
        get teamId(): string
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        set mainHandItem(item: Internal.ItemStack_)
        get legsArmorItem(): Internal.ItemStack
        get reachDistance(): number
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get potionEffects(): Internal.EntityPotionEffectsJS
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        get undead(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get weaponSwingInProgress(): boolean
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        get feetArmorItem(): Internal.ItemStack
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
        get mainHandItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        set movementSpeedAddition(speed: number)
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get parts(): Internal.PartEntity<any>[]
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        set pumpkin(arg0: boolean)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
    }
    type SnowGolem_ = SnowGolem;
    class DensityFunctions$TwoArgumentSimpleFunction$Type extends Internal.Enum<Internal.DensityFunctions$TwoArgumentSimpleFunction$Type> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.DensityFunctions$TwoArgumentSimpleFunction$Type;
        static values(): Internal.DensityFunctions$TwoArgumentSimpleFunction$Type[];
        get serializedName(): string
        static readonly MUL: Internal.DensityFunctions$TwoArgumentSimpleFunction$Type;
        static readonly MAX: Internal.DensityFunctions$TwoArgumentSimpleFunction$Type;
        static readonly ADD: Internal.DensityFunctions$TwoArgumentSimpleFunction$Type;
        readonly codec: Internal.KeyDispatchDataCodec<Internal.DensityFunctions$TwoArgumentSimpleFunction>;
        static readonly MIN: Internal.DensityFunctions$TwoArgumentSimpleFunction$Type;
    }
    type DensityFunctions$TwoArgumentSimpleFunction$Type_ = "min" | "mul" | "max" | DensityFunctions$TwoArgumentSimpleFunction$Type | "add";
    class DeltaFeature extends Internal.Feature<Internal.DeltaFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.DeltaFeatureConfiguration>)
    }
    type DeltaFeature_ = DeltaFeature;
    interface Float2ReferenceFunction <V> extends Internal.DoubleFunction<V>, it.unimi.dsi.fastutil.Function<number, V> {
        composeByte(arg0: Internal.Byte2FloatFunction_): Internal.Byte2ReferenceFunction<V>;
        andThenReference<T>(arg0: Internal.Reference2ReferenceFunction_<V, T>): Internal.Float2ReferenceFunction<T>;
        composeObject<T>(arg0: Internal.Object2FloatFunction_<T>): Internal.Object2ReferenceFunction<T, V>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        getOrDefault(arg0: number, arg1: V): V;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        composeShort(arg0: Internal.Short2FloatFunction_): Internal.Short2ReferenceFunction<V>;
        composeFloat(arg0: Internal.Float2FloatFunction_): this;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        composeInt(arg0: Internal.Int2FloatFunction_): Internal.Int2ReferenceFunction<V>;
        remove(arg0: number): V;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        andThenFloat(arg0: Internal.Reference2FloatFunction_<V>): Internal.Float2FloatFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        abstract get(arg0: number): V;
        containsKey(arg0: number): boolean;
        andThenLong(arg0: Internal.Reference2LongFunction_<V>): Internal.Float2LongFunction;
        /**
         * @deprecated
        */
        apply(arg0: number): V;
        andThenInt(arg0: Internal.Reference2IntFunction_<V>): Internal.Float2IntFunction;
        andThenByte(arg0: Internal.Reference2ByteFunction_<V>): Internal.Float2ByteFunction;
        apply(arg0: number): V;
        composeChar(arg0: Internal.Char2FloatFunction_): Internal.Char2ReferenceFunction<V>;
        andThenShort(arg0: Internal.Reference2ShortFunction_<V>): Internal.Float2ShortFunction;
        composeDouble(arg0: Internal.Double2FloatFunction_): Internal.Double2ReferenceFunction<V>;
        composeLong(arg0: Internal.Long2FloatFunction_): Internal.Long2ReferenceFunction<V>;
        size(): number;
        andThenObject<T>(arg0: Internal.Reference2ObjectFunction_<V, T>): Internal.Float2ObjectFunction<T>;
        clear(): void;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        defaultReturnValue(): V;
        andThenDouble(arg0: Internal.Reference2DoubleFunction_<V>): Internal.Float2DoubleFunction;
        andThenChar(arg0: Internal.Reference2CharFunction_<V>): Internal.Float2CharFunction;
        put(arg0: number, arg1: V): V;
        composeReference<T>(arg0: Internal.Reference2FloatFunction_<T>): Internal.Reference2ReferenceFunction<T, V>;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        (arg0: number): V;
    }
    type Float2ReferenceFunction_<V> = Float2ReferenceFunction<V>;
    class ClientboundSetTimePacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number, arg1: number, arg2: boolean)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getGameTime(): number;
        getDayTime(): number;
        isSkippable(): boolean;
        get gameTime(): number
        get dayTime(): number
        get skippable(): boolean
    }
    type ClientboundSetTimePacket_ = ClientboundSetTimePacket;
    class DetectorBlock$Builder extends Internal.BlockBuilder {
        constructor(i: ResourceLocation_)
        /**
         * Tags both the block and the item with the given tag.
        */
        tag(arg0: ResourceLocation_): Internal.BuilderBase<any>;
        detectorId(id: string): this;
        createObject(): any;
    }
    type DetectorBlock$Builder_ = DetectorBlock$Builder;
    class IdMappingEvent$ModRemapping {
        readonly oldId: number;
        readonly registry: ResourceLocation;
        readonly newId: number;
        readonly key: ResourceLocation;
    }
    type IdMappingEvent$ModRemapping_ = IdMappingEvent$ModRemapping;
    class DefaultConfig {
        constructor(arg0: Internal.Consumer_<Internal.DefaultConfig>)
        constructor()
        setDeprecated(arg0: boolean): this;
        setMaxLevel(arg0: number): this;
        setSchoolResource(arg0: ResourceLocation_): this;
        setAllowCrafting(arg0: boolean): this;
        build(): this;
        setMinRarity(arg0: SpellRarity_): this;
        setCooldownSeconds(arg0: number): this;
        set deprecated(arg0: boolean)
        set maxLevel(arg0: number)
        set schoolResource(arg0: ResourceLocation_)
        set allowCrafting(arg0: boolean)
        set minRarity(arg0: SpellRarity_)
        set cooldownSeconds(arg0: number)
        cooldownInSeconds: number;
        schoolResource: ResourceLocation;
        allowCrafting: boolean;
        maxLevel: number;
        enabled: boolean;
        minRarity: SpellRarity;
    }
    type DefaultConfig_ = DefaultConfig;
    class UIEvents$ItemUIEventJS extends Internal.EventJS {
        constructor(player: Player_, hand: Internal.InteractionHand_, held: Internal.ItemStack_)
        getHeld(): Internal.ItemStack;
        getHand(): Internal.InteractionHand;
        getPlayer(): Player;
        get held(): Internal.ItemStack
        get hand(): Internal.InteractionHand
        get player(): Player
        player: Player;
        hand: Internal.InteractionHand;
        held: Internal.ItemStack;
    }
    type UIEvents$ItemUIEventJS_ = UIEvents$ItemUIEventJS;
    interface SpriteContentsFrameInfoAccessor {
        abstract getTime(): number;
        abstract getIndex(): number;
        get time(): number
        get index(): number
    }
    type SpriteContentsFrameInfoAccessor_ = SpriteContentsFrameInfoAccessor;
    interface IForgePlayer {
        canReach(arg0: Vec3d_, arg1: number): boolean;
        canReach(arg0: Internal.Entity_, arg1: number): boolean;
        isCloseEnough(arg0: Internal.Entity_, arg1: number): boolean;
        canReachRaw(arg0: Internal.Entity_, arg1: number): boolean;
        getEntityReach(): number;
        canReachRaw(arg0: BlockPos_, arg1: number): boolean;
        canReach(arg0: BlockPos_, arg1: number): boolean;
        getBlockReach(): number;
        get entityReach(): number
        get blockReach(): number
    }
    type IForgePlayer_ = IForgePlayer;
    class Date implements Internal.Cloneable, Internal.Comparable<Internal.Date>, Internal.Serializable {
        constructor()
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number)
        constructor(arg0: number, arg1: number, arg2: number)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
        constructor(arg0: number)
        constructor(arg0: string)
        clone(): any;
        /**
         * @deprecated
        */
        getHours(): number;
        toInstant(): Internal.Instant;
        compareTo(arg0: any): number;
        /**
         * @deprecated
        */
        setDate(arg0: number): void;
        /**
         * @deprecated
        */
        getMonth(): number;
        /**
         * @deprecated
        */
        getTimezoneOffset(): number;
        /**
         * @deprecated
        */
        static parse(arg0: string): number;
        before(arg0: Internal.Date_): boolean;
        /**
         * @deprecated
        */
        setMonth(arg0: number): void;
        compareTo(arg0: Internal.Date_): number;
        /**
         * @deprecated
        */
        getSeconds(): number;
        /**
         * @deprecated
        */
        getMinutes(): number;
        /**
         * @deprecated
        */
        setYear(arg0: number): void;
        getTime(): number;
        /**
         * @deprecated
        */
        setHours(arg0: number): void;
        /**
         * @deprecated
        */
        setMinutes(arg0: number): void;
        /**
         * @deprecated
        */
        setSeconds(arg0: number): void;
        /**
         * @deprecated
        */
        getYear(): number;
        static from(arg0: Internal.Instant_): Internal.Date;
        /**
         * @deprecated
        */
        toGMTString(): string;
        after(arg0: Internal.Date_): boolean;
        /**
         * @deprecated
        */
        toLocaleString(): string;
        /**
         * @deprecated
        */
        getDate(): number;
        /**
         * @deprecated
        */
        getDay(): number;
        /**
         * @deprecated
        */
        static UTC(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
        setTime(arg0: number): void;
        /**
         * @deprecated
        */
        get hours(): number
        /**
         * @deprecated
        */
        set date(arg0: number)
        /**
         * @deprecated
        */
        get month(): number
        /**
         * @deprecated
        */
        get timezoneOffset(): number
        /**
         * @deprecated
        */
        set month(arg0: number)
        /**
         * @deprecated
        */
        get seconds(): number
        /**
         * @deprecated
        */
        get minutes(): number
        /**
         * @deprecated
        */
        set year(arg0: number)
        get time(): number
        /**
         * @deprecated
        */
        set hours(arg0: number)
        /**
         * @deprecated
        */
        set minutes(arg0: number)
        /**
         * @deprecated
        */
        set seconds(arg0: number)
        /**
         * @deprecated
        */
        get year(): number
        /**
         * @deprecated
        */
        get date(): number
        /**
         * @deprecated
        */
        get day(): number
        set time(arg0: number)
    }
    type Date_ = Date;
    class BarrierEdges extends Internal.Enum<Internal.BarrierEdges> implements Internal.StringRepresentable {
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static valueOf(arg0: string): Internal.BarrierEdges;
        static values(): Internal.BarrierEdges[];
        get serializedName(): string
        static readonly BOTTOM: Internal.BarrierEdges;
        static readonly UP: Internal.BarrierEdges;
        static readonly LEFT: Internal.BarrierEdges;
        static readonly RIGHT: Internal.BarrierEdges;
        static readonly DOWN: Internal.BarrierEdges;
        static readonly TOP: Internal.BarrierEdges;
    }
    type BarrierEdges_ = "up" | "down" | "bottom" | BarrierEdges | "top" | "right" | "left";
    class Random implements Internal.RandomGenerator, Internal.Serializable {
        constructor()
        constructor(arg0: number)
        ints(arg0: number, arg1: number): Internal.IntStream;
        nextFloat(arg0: number): number;
        static getDefault(): Internal.RandomGenerator;
        nextLong(): number;
        nextDouble(): number;
        nextLong(arg0: number, arg1: number): number;
        nextGaussian(): number;
        doubles(arg0: number, arg1: number, arg2: number): Internal.DoubleStream;
        nextDouble(arg0: number): number;
        nextInt(arg0: number): number;
        nextFloat(): number;
        nextLong(arg0: number): number;
        ints(arg0: number, arg1: number, arg2: number): Internal.IntStream;
        nextFloat(arg0: number, arg1: number): number;
        static of(arg0: string): Internal.RandomGenerator;
        doubles(): Internal.DoubleStream;
        nextBytes(arg0: number[]): void;
        nextInt(): number;
        longs(arg0: number): Internal.LongStream;
        longs(arg0: number, arg1: number, arg2: number): Internal.LongStream;
        nextBoolean(): boolean;
        nextDouble(arg0: number, arg1: number): number;
        setSeed(arg0: number): void;
        nextExponential(): number;
        longs(arg0: number, arg1: number): Internal.LongStream;
        nextInt(arg0: number, arg1: number): number;
        longs(): Internal.LongStream;
        isDeprecated(): boolean;
        doubles(arg0: number): Internal.DoubleStream;
        nextGaussian(arg0: number, arg1: number): number;
        ints(): Internal.IntStream;
        ints(arg0: number): Internal.IntStream;
        doubles(arg0: number, arg1: number): Internal.DoubleStream;
        get "default"(): Internal.RandomGenerator
        set seed(arg0: number)
        get deprecated(): boolean
    }
    type Random_ = Random;
    class ScrapEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, ...arg1: Internal.EquipmentSlot_[])
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
    }
    type ScrapEnchantment_ = ScrapEnchantment;
    interface ServerPlayerAccessor {
        abstract callInitMenu(arg0: Internal.AbstractContainerMenu_): void;
        abstract getContainerCounter(): number;
        abstract callNextContainerCounter(): void;
        get containerCounter(): number
    }
    type ServerPlayerAccessor_ = ServerPlayerAccessor;
    interface IIngredientRenderer <T> {
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        abstract getTooltip(arg0: T, arg1: Internal.TooltipFlag_): Internal.List<Internal.Component>;
        getFontRenderer(arg0: Internal.Minecraft_, arg1: T): Internal.Font;
        renderBatch(arg0: Internal.GuiGraphics_, arg1: Internal.List_<Internal.BatchRenderElement<T>>): void;
        getWidth(): number;
        abstract render(arg0: Internal.GuiGraphics_, arg1: T): void;
        getTooltip(arg0: Internal.ITooltipBuilder_, arg1: T, arg2: Internal.TooltipFlag_): void;
        getHeight(): number;
        render(arg0: Internal.GuiGraphics_, arg1: T, arg2: number, arg3: number): void;
        get width(): number
        get height(): number
    }
    type IIngredientRenderer_<T> = IIngredientRenderer<T>;
    interface FloatSpliterator extends Internal.Spliterator$OfPrimitive<number, Internal.FloatConsumer, Internal.FloatSpliterator> {
        abstract trySplit(): this;
        /**
         * @deprecated
        */
        tryAdvance(arg0: Internal.Consumer_<number>): boolean;
        getComparator(): Internal.Comparator<any>;
        forEachRemaining(arg0: Internal.FloatConsumer_): void;
        getExactSizeIfKnown(): number;
        hasCharacteristics(arg0: number): boolean;
        /**
         * @deprecated
        */
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        skip(arg0: number): number;
        abstract tryAdvance(arg0: Internal.FloatConsumer_): boolean;
        abstract estimateSize(): number;
        abstract characteristics(): number;
        get comparator(): Internal.Comparator<any>
        get exactSizeIfKnown(): number
    }
    type FloatSpliterator_ = FloatSpliterator;
    class SoundEventBuilder extends Internal.BuilderBase<Internal.SoundEvent> {
        constructor(i: ResourceLocation_)
        createObject(): any;
    }
    type SoundEventBuilder_ = SoundEventBuilder;
}
declare namespace io.github.edwinmindcraft.apoli.common.action.configuration {
    class EquippedItemConfiguration extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(slot: Internal.EquipmentSlot_, action: Internal.Holder_<Internal.ConfiguredItemAction<any, any>>)
        isConfigurationValid(): boolean;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        slot(): Internal.EquipmentSlot;
        getMissingBinds(): Internal.List<string>;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        action(): Internal.Holder<Internal.ConfiguredItemAction<any, any>>;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        static readonly CODEC: Internal.Codec<io.github.edwinmindcraft.apoli.common.action.configuration.EquippedItemConfiguration>;
    }
    type EquippedItemConfiguration_ = EquippedItemConfiguration;
}
