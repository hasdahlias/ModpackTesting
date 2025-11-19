/// <reference path="./internal_*.d.ts" />
declare namespace it.unimi.dsi.fastutil {
    interface Pair <L, R> {
        right(arg0: R): this;
        lexComparator<L, R>(): Internal.Comparator<it.unimi.dsi.fastutil.Pair<L, R>>;
        key(arg0: L): this;
        of<L, R>(arg0: L, arg1: R): this;
        second(arg0: R): this;
        value(): R;
        left(arg0: L): this;
        abstract left(): L;
        abstract right(): R;
        key(): L;
        first(): L;
        first(arg0: L): this;
        value(arg0: R): this;
        second(): R;
    }
    type Pair_<L, R> = Pair<L, R>;
}
declare namespace Internal {
    class GameRules implements Internal.GameRulesAccessor, Internal.GameRulesKJS {
        constructor()
        constructor(arg0: Internal.DynamicLike_<any>)
        set(rule: string, value: string): void;
        static callRegister<T extends Internal.GameRules$Value<T>>(name: string, category: Internal.GameRules$Category_, type: Internal.GameRules$Type_<T>): Internal.GameRules$Key<T>;
        kjs$getBoolean(rule: string): boolean;
        createTag(): Internal.CompoundTag;
        kjs$getInt(rule: string): number;
        getRule<T extends Internal.GameRules$Value<T>>(arg0: Internal.GameRules$Key_<T>): T;
        static callRegister$fabric_game_rule_api_v1_$md$2a2e30$0(arg0: string, arg1: Internal.GameRules$Category_, arg2: Internal.GameRules$Type_<any>): Internal.GameRules$Key<any>;
        get(rule: string): Internal.GameRules$Value<any>;
        static register<T extends Internal.GameRules$Value<T>>(arg0: string, arg1: Internal.GameRules$Category_, arg2: Internal.GameRules$Type_<T>): Internal.GameRules$Key<T>;
        getBoolean(arg0: Internal.GameRules$Key_<Internal.GameRules$BooleanValue>): boolean;
        static visitGameRuleTypes(arg0: Internal.GameRules$GameRuleTypeVisitor_): void;
        assignFrom(arg0: Internal.GameRules_, arg1: Internal.MinecraftServer_): void;
        static getRuleTypes(): Internal.Map<Internal.GameRules$Key<any>, Internal.GameRules$Type<any>>;
        kjs$getString(rule: string): string;
        copy(): this;
        getInt(arg0: Internal.GameRules$Key_<Internal.GameRules$IntegerValue>): number;
        static getRuleTypes$fabric_game_rule_api_v1_$md$2a2e30$1(): Internal.Map<any, any>;
        get ruleTypes(): Internal.Map<Internal.GameRules$Key<any>, Internal.GameRules$Type<any>>
        get ruleTypes$fabric_game_rule_api_v1_$md$2a2e30$1(): Internal.Map<any, any>
        static readonly RULE_DO_WARDEN_SPAWNING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_MAX_COMMAND_CHAIN_LENGTH: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_MOBGRIEFING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DISABLE_ELYTRA_MOVEMENT_CHECK: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_FREEZE_DAMAGE: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DOINSOMNIA: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_COMMAND_MODIFICATION_BLOCK_LIMIT: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_DAYLIGHT: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DO_TRADER_SPAWNING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_REDUCEDDEBUGINFO: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DO_IMMEDIATE_RESPAWN: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly LOGGER: Internal.Log4jLogger;
        static readonly RULE_DOMOBSPAWNING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DOBLOCKDROPS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_COMMANDBLOCKOUTPUT: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_TNT_EXPLOSION_DROP_DECAY: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_WEATHER_CYCLE: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_NATURAL_REGENERATION: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_FIRE_DAMAGE: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_FORGIVE_DEAD_PLAYERS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_SHOWDEATHMESSAGES: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_PLAYERS_SLEEPING_PERCENTAGE: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_WATER_SOURCE_CONVERSION: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_FALL_DAMAGE: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_MOB_EXPLOSION_DROP_DECAY: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DISABLE_RAIDS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_BLOCK_EXPLOSION_DROP_DECAY: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_LOGADMINCOMMANDS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_SPAWN_RADIUS: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_SENDCOMMANDFEEDBACK: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_SNOW_ACCUMULATION_HEIGHT: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_ANNOUNCE_ADVANCEMENTS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DOENTITYDROPS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_LAVA_SOURCE_CONVERSION: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DO_PATROL_SPAWNING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DO_VINES_SPREAD: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly DEFAULT_RANDOM_TICK_SPEED: 3;
        static readonly RULE_DOFIRETICK: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_LIMITED_CRAFTING: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_SPECTATORSGENERATECHUNKS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_MAX_ENTITY_CRAMMING: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
        static readonly RULE_DROWNING_DAMAGE: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_UNIVERSAL_ANGER: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_GLOBAL_SOUND_EVENTS: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_KEEPINVENTORY: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_DOMOBLOOT: Internal.GameRules$Key<Internal.GameRules$BooleanValue>;
        static readonly RULE_RANDOMTICKING: Internal.GameRules$Key<Internal.GameRules$IntegerValue>;
    }
    type GameRules_ = GameRules;
    class PlayerInteractTrigger$TriggerInstance extends Internal.AbstractCriterionTriggerInstance {
        constructor(arg0: Internal.ContextAwarePredicate_, arg1: Internal.ItemPredicate_, arg2: Internal.ContextAwarePredicate_)
        static itemUsedOnEntity(arg0: Internal.ContextAwarePredicate_, arg1: Internal.ItemPredicate$Builder_, arg2: Internal.ContextAwarePredicate_): Internal.PlayerInteractTrigger$TriggerInstance;
        matches(arg0: Internal.ItemStack_, arg1: Internal.LootContext_): boolean;
        static itemUsedOnEntity(arg0: Internal.ItemPredicate$Builder_, arg1: Internal.ContextAwarePredicate_): Internal.PlayerInteractTrigger$TriggerInstance;
    }
    type PlayerInteractTrigger$TriggerInstance_ = PlayerInteractTrigger$TriggerInstance;
    interface CraftingContainerKJS {
        getMenu(): Internal.AbstractContainerMenu;
        get menu(): Internal.AbstractContainerMenu
    }
    type CraftingContainerKJS_ = CraftingContainerKJS;
    class Instant implements Internal.Comparable<Internal.Instant>, Internal.Temporal, Internal.TemporalAdjuster, Internal.Serializable {
        minusSeconds(arg0: number): this;
        plus(arg0: number, arg1: Internal.TemporalUnit_): this;
        static parse(arg0: Internal.CharSequence_): Internal.Instant;
        isBefore(arg0: Internal.Instant_): boolean;
        static ofEpochSecond(arg0: number, arg1: number): Internal.Instant;
        compareTo(arg0: any): number;
        static ofEpochSecond(arg0: number): Internal.Instant;
        plusSeconds(arg0: number): this;
        minus(arg0: Internal.TemporalAmount_): this;
        "with"(arg0: Internal.TemporalAdjuster_): Internal.Temporal;
        getLong(arg0: Internal.TemporalField_): number;
        plus(arg0: Internal.TemporalAmount_): this;
        static now(): Internal.Instant;
        isSupported(arg0: Internal.TemporalField_): boolean;
        static from(arg0: Internal.TemporalAccessor_): Internal.Instant;
        minusNanos(arg0: number): this;
        "with"(arg0: Internal.TemporalField_, arg1: number): this;
        truncatedTo(arg0: Internal.TemporalUnit_): this;
        static now(arg0: Internal.Clock_): Internal.Instant;
        adjustInto(arg0: Internal.Temporal_): Internal.Temporal;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        minus(arg0: number, arg1: Internal.TemporalUnit_): this;
        until(arg0: Internal.Temporal_, arg1: Internal.TemporalUnit_): number;
        atOffset(arg0: Internal.ZoneOffset_): Internal.OffsetDateTime;
        isSupported(arg0: Internal.TemporalUnit_): boolean;
        getNano(): number;
        getEpochSecond(): number;
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        plusMillis(arg0: number): this;
        isAfter(arg0: Internal.Instant_): boolean;
        toEpochMilli(): number;
        get(arg0: Internal.TemporalField_): number;
        atZone(arg0: Internal.ZoneId_): Internal.ZonedDateTime;
        plusNanos(arg0: number): this;
        compareTo(arg0: Internal.Instant_): number;
        static ofEpochMilli(arg0: number): Internal.Instant;
        minusMillis(arg0: number): this;
        get nano(): number
        get epochSecond(): number
        static readonly EPOCH: Internal.Instant;
        static readonly MAX: Internal.Instant;
        static readonly MIN: Internal.Instant;
    }
    type Instant_ = Instant;
    interface ImmutableStringReader {
        abstract getTotalLength(): number;
        abstract getCursor(): number;
        abstract peek(): string;
        abstract getRead(): string;
        abstract canRead(): boolean;
        abstract getRemainingLength(): number;
        abstract getRemaining(): string;
        abstract canRead(arg0: number): boolean;
        abstract peek(arg0: number): string;
        abstract getString(): string;
        get totalLength(): number
        get cursor(): number
        get read(): string
        get remainingLength(): number
        get remaining(): string
        get string(): string
    }
    type ImmutableStringReader_ = ImmutableStringReader;
    class ContextUtils$PassengerEntityContext {
        constructor(passenger: Internal.Entity_, entity: Internal.LivingEntity_)
        readonly passenger: Internal.Entity;
        readonly entity: Internal.LivingEntity;
    }
    type ContextUtils$PassengerEntityContext_ = ContextUtils$PassengerEntityContext;
    abstract class AbstractTexture implements Internal.AutoCloseable {
        constructor()
        setBlurMipmap(arg0: boolean, arg1: boolean): void;
        bind(): void;
        restoreLastBlurMipmap(): void;
        abstract load(arg0: Internal.ResourceManager_): void;
        close(): void;
        setFilter(arg0: boolean, arg1: boolean): void;
        releaseId(): void;
        reset(arg0: Internal.TextureManager_, arg1: Internal.ResourceManager_, arg2: ResourceLocation_, arg3: Internal.Executor_): void;
        getId(): number;
        get id(): number
        blur: boolean;
        static readonly NOT_ASSIGNED: -1;
        id: number;
        mipmap: boolean;
    }
    type AbstractTexture_ = AbstractTexture;
    abstract class GrowingPlantHeadBlock extends Internal.GrowingPlantBlock implements Internal.BonemealableBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.Direction_, arg2: Internal.VoxelShape_, arg3: boolean, arg4: number)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
        getMaxAgeState(arg0: Internal.BlockState_): Internal.BlockState;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        abstract getBlocksToGrowWhenBonemealed(arg0: Internal.RandomSource_): number;
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
        updateBodyAfterConvertedFromHead(arg0: Internal.BlockState_, arg1: Internal.BlockState_): Internal.BlockState;
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
        abstract canGrowInto(arg0: Internal.BlockState_): boolean;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
        isMaxAge(arg0: Internal.BlockState_): boolean;
        getMod(): string;
        addLandingEffects(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.BlockState_, arg4: Internal.LivingEntity_, arg5: number): boolean;
        getAdjacentBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_, arg4: Internal.BlockPathTypes_): Internal.BlockPathTypes;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        getGrowIntoState(arg0: Internal.BlockState_, arg1: Internal.RandomSource_): Internal.BlockState;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly AGE: Internal.IntegerProperty;
        static readonly MAX_AGE: 25;
    }
    type GrowingPlantHeadBlock_ = GrowingPlantHeadBlock;
    class ModifiableBiomeInfo$BiomeInfo$Builder {
        getClimateSettings(): Internal.ClimateSettingsBuilder;
        getMobSpawnSettings(): Internal.MobSpawnSettingsBuilder;
        static copyOf(arg0: Internal.ModifiableBiomeInfo$BiomeInfo_): Internal.ModifiableBiomeInfo$BiomeInfo$Builder;
        getGenerationSettings(): Internal.BiomeGenerationSettingsBuilder;
        getSpecialEffects(): Internal.BiomeSpecialEffectsBuilder;
        build(): Internal.ModifiableBiomeInfo$BiomeInfo;
        get climateSettings(): Internal.ClimateSettingsBuilder
        get mobSpawnSettings(): Internal.MobSpawnSettingsBuilder
        get generationSettings(): Internal.BiomeGenerationSettingsBuilder
        get specialEffects(): Internal.BiomeSpecialEffectsBuilder
    }
    type ModifiableBiomeInfo$BiomeInfo$Builder_ = ModifiableBiomeInfo$BiomeInfo$Builder;
    class EntitySpellCastEventJS extends Internal.EntityEventJS {
        constructor(entity: Internal.LivingEntity_, spell: Internal.AbstractSpell_, spellLevel: number, playerMagicData: Internal.MagicData_)
        getMagicData(): Internal.MagicData;
        getSpell(): Internal.AbstractSpell;
        getSpellLevel(): number;
        get magicData(): Internal.MagicData
        get spell(): Internal.AbstractSpell
        get spellLevel(): number
    }
    type EntitySpellCastEventJS_ = EntitySpellCastEventJS;
    class StarsEdgeSwordItem extends Internal.UniqueSwordItem {
        constructor(toolMaterial: Internal.Tier_, attackDamage: number, attackSpeed: number, settings: Internal.Item$Properties_)
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
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        getDamage(arg0: Internal.ItemStack_): number;
        kjs$getMutableAttributeMap(): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
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
    type StarsEdgeSwordItem_ = StarsEdgeSwordItem;
    class IRecipeTransferError$Type extends Internal.Enum<Internal.IRecipeTransferError$Type> {
        static valueOf(arg0: string): Internal.IRecipeTransferError$Type;
        static values(): Internal.IRecipeTransferError$Type[];
        static readonly INTERNAL: Internal.IRecipeTransferError$Type;
        static readonly COSMETIC: Internal.IRecipeTransferError$Type;
        static readonly USER_FACING: Internal.IRecipeTransferError$Type;
        readonly allowsTransfer: boolean;
    }
    type IRecipeTransferError$Type_ = IRecipeTransferError$Type | "internal" | "user_facing" | "cosmetic";
    class RealmsNotification {
        static parseList(arg0: string): Internal.List<Internal.RealmsNotification>;
        dismissable(): boolean;
        seen(): boolean;
        uuid(): Internal.UUID;
    }
    type RealmsNotification_ = RealmsNotification;
    interface BaseLivingEntityBuilder$IParticleListenerJS <E extends Internal.LivingEntity & Internal.IAnimatableJS> {
        abstract summonParticle(event: Internal.BaseLivingEntityBuilder$ParticleKeyFrameEventJS_<E>): void;
        (event: Internal.BaseLivingEntityBuilder$ParticleKeyFrameEventJS<E>): void;
    }
    type BaseLivingEntityBuilder$IParticleListenerJS_<E extends Internal.LivingEntity & Internal.IAnimatableJS> = BaseLivingEntityBuilder$IParticleListenerJS<E>;
    interface IDrawable {
        abstract draw(arg0: Internal.GuiGraphics_, arg1: number, arg2: number): void;
        abstract getWidth(): number;
        abstract getHeight(): number;
        draw(arg0: Internal.GuiGraphics_): void;
        get width(): number
        get height(): number
    }
    type IDrawable_ = IDrawable;
    class AbyssalShroudEffect extends Internal.MagicMobEffect {
        constructor(arg0: Internal.MobEffectCategory_, arg1: number)
        static doEffect(arg0: Internal.LivingEntity_, arg1: DamageSource_): boolean;
        static ambientParticles(arg0: Internal.ClientLevel_, arg1: Internal.LivingEntity_): void;
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type AbyssalShroudEffect_ = AbyssalShroudEffect;
    interface BucketPickup extends Internal.IForgeBucketPickup {
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
        abstract pickupBlock(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.ItemStack;
        /**
         * @deprecated
        */
        abstract getPickupSound(): Internal.Optional<Internal.SoundEvent>;
        /**
         * @deprecated
        */
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
    }
    type BucketPickup_ = BucketPickup;
    class DrinkableItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_, arg1: Internal.BiConsumer_<Internal.ItemStack, Internal.LivingEntity>)
        constructor(arg0: Internal.Item$Properties_, arg1: Internal.BiConsumer_<Internal.ItemStack, Internal.LivingEntity>, arg2: Internal.Item_, arg3: boolean)
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
    type DrinkableItem_ = DrinkableItem;
    class EnumGetMethod extends Internal.Enum<Internal.EnumGetMethod> {
        static values(): Internal.EnumGetMethod[];
        isCaseSensitive(): boolean;
        isOrdinalOk(): boolean;
        static valueOf(arg0: string): Internal.EnumGetMethod;
        validate<T extends Internal.Enum<T>>(arg0: any, arg1: T): boolean;
        get<T extends Internal.Enum<T>>(arg0: any, arg1: T): T;
        get caseSensitive(): boolean
        get ordinalOk(): boolean
        static readonly ORDINAL_OR_NAME: Internal.EnumGetMethod;
        static readonly NAME: Internal.EnumGetMethod;
        static readonly NAME_IGNORECASE: Internal.EnumGetMethod;
        static readonly ORDINAL_OR_NAME_IGNORECASE: Internal.EnumGetMethod;
    }
    type EnumGetMethod_ = "name" | "ordinal_or_name" | EnumGetMethod | "ordinal_or_name_ignorecase" | "name_ignorecase";
    interface IEventBus {
        abstract unregister(arg0: any): void;
        abstract addListener<T extends Internal.Event>(arg0: Internal.EventPriority_, arg1: boolean, arg2: Internal.Consumer_<T>): void;
        abstract addGenericListener<T extends Internal.GenericEvent<any>, F>(arg0: F, arg1: Internal.EventPriority_, arg2: Internal.Consumer_<T>): void;
        abstract addGenericListener<T extends Internal.GenericEvent<any>, F>(arg0: F, arg1: Internal.Consumer_<T>): void;
        abstract post(arg0: Internal.Event_): boolean;
        abstract post(arg0: Internal.Event_, arg1: Internal.IEventBusInvokeDispatcher_): boolean;
        abstract addGenericListener<T extends Internal.GenericEvent<any>, F>(arg0: F, arg1: Internal.EventPriority_, arg2: boolean, arg3: Internal.Consumer_<T>): void;
        abstract register(arg0: any): void;
        abstract addGenericListener<T extends Internal.GenericEvent<any>, F>(arg0: F, arg1: Internal.EventPriority_, arg2: boolean, arg3: T, arg4: Internal.Consumer_<T>): void;
        abstract shutdown(): void;
        abstract start(): void;
        abstract addListener<T extends Internal.Event>(arg0: Internal.EventPriority_, arg1: Internal.Consumer_<T>): void;
        abstract addListener<T extends Internal.Event>(arg0: Internal.EventPriority_, arg1: boolean, arg2: T, arg3: Internal.Consumer_<T>): void;
        abstract addListener<T extends Internal.Event>(arg0: Internal.Consumer_<T>): void;
    }
    type IEventBus_ = IEventBus;
    class ObsidianExplosionTrapBricks extends Internal.BaseEntityBlock {
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
        static shouldTrigger(arg0: Internal.Entity_): boolean;
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
        static readonly LIT: Internal.BooleanProperty;
    }
    type ObsidianExplosionTrapBricks_ = ObsidianExplosionTrapBricks;
    interface IRecipeIngredientSlot extends Internal.IIngredientSlot {
        getXEIChance(): number;
        getXEIIngredientOverMouse(mouseX: number, mouseY: number): any;
        getFullTooltipTexts(): Internal.List<Internal.Component>;
        self(): Widget;
        getXEICurrentIngredient(): any;
        getIngredientIO(): Internal.IngredientIO;
        abstract getXEIIngredients(): Internal.List<any>;
        get XEIChance(): number
        get fullTooltipTexts(): Internal.List<Internal.Component>
        get XEICurrentIngredient(): any
        get ingredientIO(): Internal.IngredientIO
        get XEIIngredients(): Internal.List<any>
        (): Internal.List_<any>;
    }
    type IRecipeIngredientSlot_ = IRecipeIngredientSlot;
    class Proxy$Type extends Internal.Enum<Internal.Proxy$Type> {
        static valueOf(arg0: string): Internal.Proxy$Type;
        static values(): Internal.Proxy$Type[];
        static readonly SOCKS: Internal.Proxy$Type;
        static readonly HTTP: Internal.Proxy$Type;
        static readonly DIRECT: Internal.Proxy$Type;
    }
    type Proxy$Type_ = Proxy$Type | "http" | "socks" | "direct";
    class EntityAttributeCreationEvent extends Internal.Event implements Internal.EACAccess, Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.Map_<Internal.EntityType<Internal.LivingEntity>, Internal.AttributeSupplier>)
        getMap(): Internal.Map<any, any>;
        put(arg0: Internal.EntityType_<Internal.LivingEntity>, arg1: Internal.AttributeSupplier_): void;
        get map(): Internal.Map<any, any>
    }
    type EntityAttributeCreationEvent_ = EntityAttributeCreationEvent;
    class BaseFunction extends Internal.IdScriptableObject implements dev.latvian.mods.rhino.Function {
        constructor()
        constructor(scope: Internal.Scriptable_, prototype: Internal.Scriptable_)
        constructor(isGenerator: boolean)
        enumerationIteratorNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        getArity(): number;
        getFunctionName(): string;
        setImmunePrototypeProperty(value: any): void;
        call(cx: Internal.Context_, scope: Internal.Scriptable_, thisObj: Internal.Scriptable_, args: any[]): any;
        createObject(cx: Internal.Context_, scope: Internal.Scriptable_): Internal.Scriptable;
        getAllIds(cx: Internal.Context_): any[];
        enumerationIteratorHasNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        construct(cx: Internal.Context_, scope: Internal.Scriptable_, args: any[]): Internal.Scriptable;
        getLength(): number;
        get arity(): number
        get functionName(): string
        set immunePrototypeProperty(value: any)
        get length(): number
    }
    type BaseFunction_ = BaseFunction;
    interface Appendable {
        abstract append(arg0: Internal.CharSequence_): this;
        abstract append(arg0: Internal.CharSequence_, arg1: number, arg2: number): this;
        abstract append(arg0: string): this;
    }
    type Appendable_ = Appendable;
    class FrostmintBlock extends Internal.SlabBlock implements Internal.Fallable {
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
        onLand(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.FallingBlockEntity_): void;
        onBrokenAfterFall(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.FallingBlockEntity_): void;
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
        getPickupSound(arg0: Internal.BlockState_): Internal.Optional<Internal.SoundEvent>;
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
        static isFree(arg0: Internal.BlockState_): boolean;
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
        getFallDamageSource(arg0: Internal.Entity_): DamageSource;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        get pickupSound(): Internal.Optional<Internal.SoundEvent>
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type FrostmintBlock_ = FrostmintBlock;
    class PlayerEvent$ItemCraftedEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Player_, arg1: Internal.ItemStack_, arg2: Internal.Container_)
        getInventory(): Internal.Container;
        getCrafting(): Internal.ItemStack;
        getEntity(): Internal.LivingEntity;
        get inventory(): Internal.Container
        get crafting(): Internal.ItemStack
        get entity(): Internal.LivingEntity
    }
    type PlayerEvent$ItemCraftedEvent_ = PlayerEvent$ItemCraftedEvent;
    class StreamTagVisitor$EntryResult extends Internal.Enum<Internal.StreamTagVisitor$EntryResult> {
        static valueOf(arg0: string): Internal.StreamTagVisitor$EntryResult;
        static values(): Internal.StreamTagVisitor$EntryResult[];
        static readonly BREAK: Internal.StreamTagVisitor$EntryResult;
        static readonly SKIP: Internal.StreamTagVisitor$EntryResult;
        static readonly ENTER: Internal.StreamTagVisitor$EntryResult;
        static readonly HALT: Internal.StreamTagVisitor$EntryResult;
    }
    type StreamTagVisitor$EntryResult_ = StreamTagVisitor$EntryResult | "break" | "halt" | "skip" | "enter";
    class FogShape extends Internal.Enum<Internal.FogShape> {
        static valueOf(arg0: string): Internal.FogShape;
        static values(): Internal.FogShape[];
        getIndex(): number;
        get index(): number
        static readonly CYLINDER: Internal.FogShape;
        static readonly SPHERE: Internal.FogShape;
    }
    type FogShape_ = FogShape | "cylinder" | "sphere";
    class DispenserBlock extends Internal.BaseEntityBlock implements Internal.DispenserBlockAccessor {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        static registerBehavior(arg0: Internal.ItemLike_, arg1: Internal.DispenseItemBehavior_): void;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        getDispenseMethod(arg0: Internal.ItemStack_): Internal.DispenseItemBehavior;
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
        static getDispenserRegistry$moonlight_$md$2a2e30$0(): Internal.Map<any, any>;
        static getDispensePosition(arg0: Internal.BlockSource_): Internal.Position;
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
        dispenseFrom(arg0: Internal.ServerLevel_, arg1: BlockPos_): void;
        static getDispenserRegistry(): Internal.Map<Internal.Item, Internal.DispenseItemBehavior>;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get dispenserRegistry$moonlight_$md$2a2e30$0(): Internal.Map<any, any>
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get dispenserRegistry(): Internal.Map<Internal.Item, Internal.DispenseItemBehavior>
        static readonly DISPENSER_REGISTRY: {[key: Internal.ArmorItem]: any, [key: Internal.SpectralArrowItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.Cursium_Armor]: any, [key: Internal.ArmorItem]: any, [key: Internal.ShieldItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.DyeableArmorItem]: any, [key: Internal.WanderingMagicianArmorItem]: any, [key: Internal.DivingArmorItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.PlaguedArmorItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.HoneycombItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.InkItem]: any, [key: Internal.ModFishBucketItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.CultistArmorItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SweetishFishBucketItem]: any, [key: Internal.InkItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.MinecartItem]: any, [key: Internal.SimpleElixir]: any, [key: Internal.BlockItem]: any, [key: Internal.BoatItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.InkBombItem]: any, [key: Internal.TippedArrowItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.Ignitium_Armor]: any, [key: Internal.RainbounceBootsItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnerArmorItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.InkBombItem]: any, [key: Internal.NetheriteMageArmorItem]: any, [key: Internal.Item]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.MinecartItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.NetheriteMageArmorItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.SeekingArrowItem]: any, [key: Internal.ModFishBucketItem]: any, [key: Internal.BlockItem]: any, [key: Internal.MobBucketItem]: any, [key: Internal.ElectromancerArmorItem]: any, [key: Internal.BucketItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BoatItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ShearsItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.PrimordialArmorItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.TargetDummyItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SaddleItem]: any, [key: Internal.CultistArmorItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.Item]: any, [key: Internal.DivingArmorItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.Item]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.Item]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BoatItem]: any, [key: Internal.SolidBucketItem]: any, [key: Internal.Ignitium_Armor]: any, [key: Internal.BottleItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.Cursium_Armor]: any, [key: Internal.MobBucketItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.WanderingMagicianArmorItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.Item]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SimpleElixir]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.Ignitium_Armor]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.MilkBucketItem]: any, [key: Internal.ArchevokerArmorItem]: any, [key: Internal.ShieldItem]: any, [key: Internal.BucketItem]: any, [key: Internal.ModernRemantBucket]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.DyeableArmorItem]: any, [key: Internal.BoatItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.BoatItem]: any, [key: Internal.ElectromancerArmorItem]: any, [key: Internal.SpawnerArmorItem]: any, [key: Internal.ModFishBucket]: any, [key: Internal.PlaguedArmorItem]: any, [key: Internal.MinecartItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.PriestArmorItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.HorseArmorItem]: any, [key: Internal.Item]: any, [key: Internal.ArmorItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.MobBucketItem]: any, [key: Internal.BoatItem]: any, [key: Internal.TarnishedCrownArmorItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.PumpkinArmorItem]: any, [key: Internal.BlockItemWithSupplier]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.Bloom_Stone_Pauldrons]: any, [key: Internal.SweetishFishBucketItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.BoatItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.BoatItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.GoldCrownArmorItem]: any, [key: Internal.PumpkinArmorItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.BoneMealItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleElixir]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.SimpleElixir]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.PrimordialArmorItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.CryomancerArmorItem]: any, [key: Internal.PotionItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.DarknessArmorItem]: any, [key: Internal.BucketItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.SnowballItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.ShadowwalkerArmorItem]: any, [key: Internal.BoatItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.PriestArmorItem]: any, [key: Internal.SpawnerArmorItem]: any, [key: Internal.NetheriteMageArmorItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ShieldItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.HazmatArmorItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.PyromancerArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.PyromancerArmorItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.BucketItem]: any, [key: Internal.ElytraItem]: any, [key: Internal.ArchevokerArmorItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.DivingArmorItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.ElectromancerArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.DivingArmorItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.PumpkinArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BoatItem]: any, [key: Internal.BoatItem]: any, [key: Internal.HoneyBottleItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.CryomancerArmorItem]: any, [key: Internal.ThrownProjectileItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.WanderingMagicianArmorItem]: any, [key: Internal.GingerbreadArmorItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.PumpkinArmorItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.Void_Scatter_Arrow_Item]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.ArrowItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.BucketItem]: any, [key: Internal.BoatItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.MinecartItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.ShadowwalkerArmorItem]: any, [key: Internal.FireChargeItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.InkItem]: any, [key: Internal.ExperienceBottleItem]: any, [key: Internal.HazmatArmorItem]: any, [key: Internal.FlintAndSteelItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.MinecartItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BowlFoodItem]: any, [key: Internal.DyeableHorseArmorItem]: any, [key: Internal.ArmorStandItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.WanderingMagicianArmorItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.GingerbreadArmorItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.GingerbreadArmorItem]: any, [key: Internal.BowlFoodItem]: any, [key: Internal.PlaguedArmorItem]: any, [key: Internal.BoatItem]: any, [key: Internal.Azure_Sea_Shield]: any, [key: Internal.PlayerHeadItem]: any, [key: Internal.CultistArmorItem]: any, [key: Internal.ModFishBucketItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnerArmorItem]: any, [key: Internal.CryomancerArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.PyromancerArmorItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.EggItem]: any, [key: Internal.BoatItem]: any, [key: Internal.StandingAndWallBlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.HorseArmorItem]: any, [key: Internal.Ignitium_Armor]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.HazmatArmorItem]: any, [key: Internal.ShieldItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.HorseArmorItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SimpleElixir]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.Bone_Reptile_Armor]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ResistorShieldItem]: any, [key: Internal.MobBucketItem]: any, [key: Internal.ModFishBucketItem]: any, [key: Internal.SweetishFishBucketItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.ModFishBucketItem]: any, [key: Internal.ShadowwalkerArmorItem]: any, [key: Internal.Black_Steel_Targe]: any, [key: Internal.BlockItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.CryomancerArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.ArchevokerArmorItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.GalenaGauntletItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.MobBucketItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.PrimordialArmorItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.NetheriteMageArmorItem]: any, [key: Internal.BurrowingArrowItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.Monstrous_Helm]: any, [key: Internal.PlaguedArmorItem]: any, [key: Internal.PyromancerArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SplashPotionItem]: any, [key: Internal.MinecartItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ShieldItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BowlFoodItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BoatItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.ArchevokerArmorItem]: any, [key: Internal.FireworkRocketItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.PriestArmorItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ElectromancerArmorItem]: any, [key: Internal.SuspiciousStewItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BoatItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.DyeableArmorItem]: any, [key: Internal.ShadowwalkerArmorItem]: any, [key: Internal.SweetishFishBucketItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.GingerbreadArmorItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.LingeringPotionItem]: any, [key: Internal.BoatItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.Cursium_Armor]: any, [key: Internal.ModFishBucketItem]: any, [key: Internal.DyeableArmorItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.SweetishFishBucketItem]: any, [key: Internal.MobBucketItem]: any, [key: Internal.PriestArmorItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BoatItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.HazmatArmorItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.Bone_Reptile_Armor]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.DarknessArmorItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.CultistArmorItem]: any, [key: Internal.Ignitium_Elytra_ChestPlate]: any, [key: Internal.ArmorItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ArmorItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.BlockItem]: any, [key: Internal.BlockItem]: any, [key: Internal.ThrownProjectileItem]: any, [key: Internal.InkItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SimpleElixir]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.Cursium_Armor]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.SpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.ForgeSpawnEggItem]: any, [key: Internal.ShieldItem]: any, [key: Internal.SimpleElixir]: any, [key: Internal.InkItem]: any, [key: Internal.BlockItem]: any};
        static readonly TRIGGERED: Internal.BooleanProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type DispenserBlock_ = DispenserBlock;
    class Bidi {
        constructor()
        constructor(arg0: string, arg1: number)
        constructor(arg0: number, arg1: number)
        constructor(arg0: string[], arg1: number, arg2: number[], arg3: number, arg4: number, arg5: number)
        constructor(arg0: Internal.AttributedCharacterIterator_)
        getResultLength(): number;
        getCustomizedClass(arg0: number): number;
        getRunLevel(arg0: number): number;
        getTextAsString(): string;
        getRunCount(): number;
        setCustomClassifier(arg0: Internal.BidiClassifier_): void;
        getText(): string[];
        isInverse(): boolean;
        getLogicalRun(arg0: number): Internal.BidiRun;
        getVisualMap(): number[];
        static reorderVisually(arg0: number[], arg1: number, arg2: any[], arg3: number, arg4: number): void;
        createLineBidi(arg0: number, arg1: number): this;
        getLevels(): number[];
        getLevelAt(arg0: number): number;
        getReorderingMode(): number;
        static reorderVisual(arg0: number[]): number[];
        getParagraphIndex(arg0: number): number;
        isLeftToRight(): boolean;
        setReorderingMode(arg0: number): void;
        baseIsLeftToRight(): boolean;
        getLength(): number;
        getProcessedLength(): number;
        getParagraphByIndex(arg0: number): Internal.BidiRun;
        getRunStart(arg0: number): number;
        isOrderParagraphsLTR(): boolean;
        setPara(arg0: string, arg1: number, arg2: number[]): void;
        isMixed(): boolean;
        getLogicalMap(): number[];
        static writeReverse(arg0: string, arg1: number): string;
        getParagraph(arg0: number): Internal.BidiRun;
        getVisualIndex(arg0: number): number;
        getReorderingOptions(): number;
        setPara(arg0: Internal.AttributedCharacterIterator_): void;
        setPara(arg0: string[], arg1: number, arg2: number[]): void;
        setInverse(arg0: boolean): void;
        static reorderLogical(arg0: number[]): number[];
        isRightToLeft(): boolean;
        getCustomClassifier(): Internal.BidiClassifier;
        setReorderingOptions(arg0: number): void;
        writeReordered(arg0: number): string;
        getParaLevel(): number;
        setLine(arg0: number, arg1: number): this;
        static getBaseDirection(arg0: Internal.CharSequence_): number;
        getBaseLevel(): number;
        static requiresBidi(arg0: string[], arg1: number, arg2: number): boolean;
        getRunLimit(arg0: number): number;
        getVisualRun(arg0: number): Internal.BidiRun;
        getDirection(): number;
        orderParagraphsLTR(arg0: boolean): void;
        countParagraphs(): number;
        getLogicalIndex(arg0: number): number;
        setContext(arg0: string, arg1: string): void;
        static invertMap(arg0: number[]): number[];
        countRuns(): number;
        get resultLength(): number
        get textAsString(): string
        get runCount(): number
        set customClassifier(arg0: Internal.BidiClassifier_)
        get text(): string[]
        get inverse(): boolean
        get visualMap(): number[]
        get levels(): number[]
        get reorderingMode(): number
        get leftToRight(): boolean
        set reorderingMode(arg0: number)
        get length(): number
        get processedLength(): number
        get orderParagraphsLTR(): boolean
        get mixed(): boolean
        get logicalMap(): number[]
        get reorderingOptions(): number
        set para(arg0: Internal.AttributedCharacterIterator_)
        set inverse(arg0: boolean)
        get rightToLeft(): boolean
        get customClassifier(): Internal.BidiClassifier
        set reorderingOptions(arg0: number)
        get paraLevel(): number
        get baseLevel(): number
        get direction(): number
        static readonly MAP_NOWHERE: -1;
        static readonly REORDER_NUMBERS_SPECIAL: 1;
        static readonly LEVEL_OVERRIDE: -128;
        static readonly NEUTRAL: 3;
        static readonly LEVEL_DEFAULT_LTR: 126;
        static readonly OPTION_REMOVE_CONTROLS: 2;
        static readonly RTL: 1;
        static readonly OPTION_DEFAULT: 0;
        static readonly MAX_EXPLICIT_LEVEL: 125;
        static readonly LTR: 0;
        static readonly REORDER_GROUP_NUMBERS_WITH_R: 2;
        static readonly OPTION_INSERT_MARKS: 1;
        static readonly KEEP_BASE_COMBINING: 1;
        static readonly DIRECTION_DEFAULT_RIGHT_TO_LEFT: 127;
        static readonly INSERT_LRM_FOR_NUMERIC: 4;
        static readonly DIRECTION_DEFAULT_LEFT_TO_RIGHT: 126;
        /**
         * @deprecated
        */
        static readonly CLASS_DEFAULT: 23;
        static readonly OUTPUT_REVERSE: 16;
        static readonly REORDER_DEFAULT: 0;
        static readonly MIXED: 2;
        static readonly REORDER_INVERSE_LIKE_DIRECT: 5;
        static readonly REORDER_RUNS_ONLY: 3;
        static readonly REORDER_INVERSE_FOR_NUMBERS_SPECIAL: 6;
        static readonly LEVEL_DEFAULT_RTL: 127;
        static readonly DIRECTION_RIGHT_TO_LEFT: 1;
        static readonly REORDER_INVERSE_NUMBERS_AS_L: 4;
        static readonly REMOVE_BIDI_CONTROLS: 8;
        static readonly OPTION_STREAMING: 4;
        static readonly DIRECTION_LEFT_TO_RIGHT: 0;
        static readonly DO_MIRRORING: 2;
    }
    type Bidi_ = Bidi;
    interface MinMaxBounds$BoundsFromReaderFactory <T extends number, R extends Internal.MinMaxBounds<T>> {
        abstract create(arg0: Internal.StringReader_, arg1: T, arg2: T): R;
        (arg0: Internal.StringReader, arg1: T, arg2: T): R;
    }
    type MinMaxBounds$BoundsFromReaderFactory_<T extends number, R extends Internal.MinMaxBounds<T>> = MinMaxBounds$BoundsFromReaderFactory<T, R>;
    class GeodeLayerSettings {
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        readonly innerLayer: number;
        readonly middleLayer: number;
        static readonly CODEC: Internal.Codec<Internal.GeodeLayerSettings>;
        readonly outerLayer: number;
        readonly filling: number;
    }
    type GeodeLayerSettings_ = GeodeLayerSettings;
    interface RegistrySupplier <T> extends Internal.DeferredSupplier<T> {
        abstract getRegistrarManager(): Internal.RegistrarManager;
        getKey(): Internal.ResourceKey<T>;
        stream(): Internal.Stream<T>;
        ifPresent(action: Internal.Consumer_<T>): void;
        orElseGet(supplier: Internal.Supplier_<T>): T;
        ifPresentOrElse(action: Internal.Consumer_<T>, emptyAction: Internal.Runnable_): void;
        getRegistryKey(): Internal.ResourceKey<Internal.Registry<T>>;
        abstract getRegistrar(): Internal.Registrar<T>;
        getOrNull(): T;
        orElse(other: T): T;
        abstract getId(): ResourceLocation;
        abstract isPresent(): boolean;
        abstract getRegistryId(): ResourceLocation;
        abstract get(): T;
        listen(callback: Internal.Consumer_<T>): void;
        toOptional(): Internal.Optional<T>;
        get registrarManager(): Internal.RegistrarManager
        get key(): Internal.ResourceKey<T>
        get registryKey(): Internal.ResourceKey<Internal.Registry<T>>
        get registrar(): Internal.Registrar<T>
        get orNull(): T
        get id(): ResourceLocation
        get present(): boolean
        get registryId(): ResourceLocation
    }
    type RegistrySupplier_<T> = RegistrySupplier<T>;
    class MetricSampler$MetricSamplerBuilder <T> {
        constructor(arg0: string, arg1: Internal.MetricCategory_, arg2: Internal.ToDoubleFunction_<T>, arg3: T)
        withBeforeTick(arg0: Internal.Consumer_<T>): this;
        withThresholdAlert(arg0: Internal.MetricSampler$ThresholdTest_): this;
        build(): Internal.MetricSampler;
    }
    type MetricSampler$MetricSamplerBuilder_<T> = MetricSampler$MetricSamplerBuilder<T>;
    interface ResultConsumer <S> {
        abstract onCommandComplete(arg0: Internal.CommandContext_<S>, arg1: boolean, arg2: number): void;
        (arg0: Internal.CommandContext<S>, arg1: boolean, arg2: number): void;
    }
    type ResultConsumer_<S> = ResultConsumer<S>;
    class TripWireBlock extends Internal.Block {
        constructor(arg0: Internal.TripWireHookBlock_, arg1: Internal.BlockBehaviour$Properties_)
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
        shouldConnectTo(arg0: Internal.BlockState_, arg1: Internal.Direction_): boolean;
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
        static readonly ATTACHED: Internal.BooleanProperty;
        static readonly NORTH: Internal.BooleanProperty;
        static readonly SOUTH: Internal.BooleanProperty;
        static readonly WEST: Internal.BooleanProperty;
        static readonly POWERED: Internal.BooleanProperty;
        static readonly DISARMED: Internal.BooleanProperty;
        static readonly EAST: Internal.BooleanProperty;
        static readonly AABB: Internal.ArrayVoxelShape;
        static readonly NOT_ATTACHED_AABB: Internal.CubeVoxelShape;
    }
    type TripWireBlock_ = TripWireBlock;
    class AttackerActionWhenHitPower extends Internal.CooldownPowerFactory$Simple<Internal.ActionWhenHitConfiguration> {
        constructor()
        static execute(arg0: Internal.Entity_, arg1: DamageSource_, arg2: number): void;
        getProgress(arg0: Internal.ConfiguredPower_<Internal.ActionWhenHitConfiguration, any>, arg1: Internal.Entity_): number;
        change(arg0: Internal.ConfiguredPower_<Internal.ActionWhenHitConfiguration, any>, arg1: Internal.Entity_, arg2: number): number;
        decrement(arg0: Internal.ConfiguredPower_<Internal.ActionWhenHitConfiguration, any>, arg1: Internal.Entity_): number;
        increment(arg0: Internal.ConfiguredPower_<Internal.ActionWhenHitConfiguration, any>, arg1: Internal.Entity_): number;
        whenHit(arg0: Internal.ConfiguredPower_<Internal.ActionWhenHitConfiguration, any>, arg1: Internal.Entity_, arg2: DamageSource_, arg3: number): void;
    }
    type AttackerActionWhenHitPower_ = AttackerActionWhenHitPower;
    class DecoratedPotRecipe extends Internal.CustomRecipe {
        constructor(arg0: ResourceLocation_, arg1: Internal.CraftingBookCategory_)
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        matches(arg0: Internal.CraftingContainer_, arg1: Internal.Level_): boolean;
        getSchema(): Internal.RecipeSchema;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getRemainingItems(arg0: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        getType(): ResourceLocation;
        assemble(arg0: Internal.CraftingContainer_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        setGroup(group: string): void;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        static createDecoratedPotItem(arg0: Internal.DecoratedPotBlockEntity$Decorations_): Internal.ItemStack;
        getMod(): string;
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        get mod(): string
    }
    type DecoratedPotRecipe_ = DecoratedPotRecipe;
    class ProjectileImpactEvent extends Internal.EntityEvent {
        constructor()
        constructor(arg0: Internal.Projectile_, arg1: Internal.HitResult_)
        getImpactResult(): Internal.ProjectileImpactEvent$ImpactResult;
        setImpactResult(arg0: Internal.ProjectileImpactEvent$ImpactResult_): void;
        getProjectile(): Internal.Projectile;
        getRayTraceResult(): Internal.HitResult;
        get impactResult(): Internal.ProjectileImpactEvent$ImpactResult
        set impactResult(arg0: Internal.ProjectileImpactEvent$ImpactResult_)
        get projectile(): Internal.Projectile
        get rayTraceResult(): Internal.HitResult
    }
    type ProjectileImpactEvent_ = ProjectileImpactEvent;
    class ModuleDescriptor$Exports$Modifier extends Internal.Enum<Internal.ModuleDescriptor$Exports$Modifier> {
        static values(): Internal.ModuleDescriptor$Exports$Modifier[];
        static valueOf(arg0: string): Internal.ModuleDescriptor$Exports$Modifier;
        static readonly SYNTHETIC: Internal.ModuleDescriptor$Exports$Modifier;
        static readonly MANDATED: Internal.ModuleDescriptor$Exports$Modifier;
    }
    type ModuleDescriptor$Exports$Modifier_ = "mandated" | "synthetic" | ModuleDescriptor$Exports$Modifier;
    class DynamicRecipeComponent extends Internal.Record {
        constructor(desc: Internal.TypeDescJS_, factory: Internal.DynamicRecipeComponent$Factory_)
        desc(): Internal.TypeDescJS;
        factory(): Internal.DynamicRecipeComponent$Factory;
    }
    type DynamicRecipeComponent_ = DynamicRecipeComponent;
    class Item implements Internal.FeatureElement, Internal.ItemLike, Internal.IForgeItem, Internal.ItemKJS, Internal.FabricItem, Internal.IrisItemLightProvider, Internal.ItemVariantCache, Internal.IExtendedItem, Internal.ItemExtensions, Internal.InjectedItemExtension {
        constructor(arg0: Internal.Item$Properties_)
        getDrinkingSound(): Internal.SoundEvent;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setRarity(arg0: Internal.Rarity_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        getDestroySpeed(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): number;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        moonlight$addAdditionalBehavior(placementOverride: Internal.AdditionalItemPlacement_): void;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        isFireResistant(): boolean;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        onCraftedBy(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        isComplex(): boolean;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        appendHoverText(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.List_<Internal.Component>, arg3: Internal.TooltipFlag_): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): void;
        canBeHurtBy(arg0: DamageSource_): boolean;
        /**
         * @deprecated
        */
        getFoodProperties(): Internal.FoodProperties;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        fabric_setEquipmentSlotProvider(equipmentSlotProvider: Internal.EquipmentSlotProvider_): void;
        getUseAnimation(arg0: Internal.ItemStack_): Internal.UseAnim;
        getDescriptionId(): string;
        isValidRepairItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        moonlight$getClientAnimationExtension(): any;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        asItem(): this;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getTypeData(): Internal.CompoundTag;
        getDefaultInstance(): Internal.ItemStack;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        fabric_setCustomDamageHandler(handler: Internal.CustomDamageHandler_): void;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setBurnTime(i: number): void;
        setMaxStackSize(arg0: number): void;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        getBarWidth(arg0: Internal.ItemStack_): number;
        setMaxDamage(arg0: number): void;
        getBarColor(arg0: Internal.ItemStack_): number;
        getOrCreateDescriptionId(): string;
        getItem(): this;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        getItemBuilder(): Internal.ItemBuilder;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        getMaxDamage(): number;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        getDescription(): Internal.Component;
        /**
         * @deprecated
        */
        hasCraftingRemainingItem(): boolean;
        asIngredient(): Internal.Ingredient;
        handler$cbo000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        static byId(arg0: number): Internal.Item;
        getRenderPropertiesInternal(): any;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        handler$dhn000$moonlight$initializeClient(consumer: Internal.Consumer_<any>, ci: Internal.CallbackInfo_): void;
        interactLivingEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.LivingEntity_, arg3: Internal.InteractionHand_): InteractionResult;
        moonlight$getAdditionalBehavior(): Internal.AdditionalItemPlacement;
        moonlight$setClientAnimationExtension(obj: any): void;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        getRarity(arg0: Internal.ItemStack_): Internal.Rarity;
        setItemBuilder(b: Internal.ItemBuilder_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        setAttackDamage(attackDamage: number): void;
        getTooltipImage(arg0: Internal.ItemStack_): Internal.Optional<Internal.TooltipComponent>;
        isEdible(): boolean;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        /**
         * @deprecated
        */
        getEnchantmentValue(): number;
        setArmorToughness(armorToughness: number): void;
        getId(): string;
        isEnchantable(arg0: Internal.ItemStack_): boolean;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        overrideStackedOnOther(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_): boolean;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isFoil(arg0: Internal.ItemStack_): boolean;
        isRepairable(arg0: Internal.ItemStack_): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        useOnRelease(arg0: Internal.ItemStack_): boolean;
        canAttackBlock(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_): boolean;
        fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        handler$dlg000$irons_spellbooks$getHoverName(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setDigSpeed(speed: number): void;
        getDescriptionId(arg0: Internal.ItemStack_): string;
        releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number): void;
        setAttackSpeed(attackSpeed: number): void;
        isBarVisible(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getUseDuration(arg0: Internal.ItemStack_): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        /**
         * @deprecated
        */
        getMaxStackSize(): number;
        /**
         * @deprecated
        */
        static byBlock(arg0: Internal.Block_): Internal.Item;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        canFitInsideContainerItems(): boolean;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        verifyTagAfterLoad(arg0: Internal.CompoundTag_): void;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        finishUsingItem(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_): Internal.ItemStack;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        setFireResistant(arg0: boolean): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        getEatingSound(): Internal.SoundEvent;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        canBeDepleted(): boolean;
        initializeClient(arg0: Internal.Consumer_<Internal.IClientItemExtensions>): void;
        getDamage(arg0: Internal.ItemStack_): number;
        mineBlock(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.LivingEntity_): boolean;
        setNameKey(arg0: string): void;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vector3f;
        getName(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
        */
        getDefaultAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$registryName(): ResourceLocation;
        getIdLocation(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
        */
        builtInRegistryHolder(): Internal.Holder$Reference<Internal.Item>;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        inventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Entity_, arg3: number, arg4: boolean): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        hurtEnemy(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
        */
        getCraftingRemainingItem(): this;
        getTypeItemStackKey(): Internal.ItemStackKey;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        shouldOverrideMultiplayerNbt(): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        requiredFeatures(): Internal.FeatureFlagSet;
        fabric_getCachedItemVariant(): Internal.ItemVariant;
        static getId(arg0: Internal.Item_): number;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.Slot_, arg3: Internal.ClickAction_, arg4: Player_, arg5: Internal.SlotAccess_): boolean;
        fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        setFoodProperties(arg0: Internal.FoodProperties_): void;
        setCraftingRemainder(arg0: Internal.Item_): void;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        static getPlayerPOVHitResult(arg0: Internal.Level_, arg1: Player_, arg2: Internal.ClipContext$Fluid_): Internal.BlockHitResult;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        get drinkingSound(): Internal.SoundEvent
        set rarity(arg0: Internal.Rarity_)
        get fireResistant(): boolean
        get complex(): boolean
        /**
         * @deprecated
        */
        get foodProperties(): Internal.FoodProperties
        get descriptionId(): string
        get creativeTab(): string
        get typeData(): Internal.CompoundTag
        get defaultInstance(): Internal.ItemStack
        set burnTime(i: number)
        set maxStackSize(arg0: number)
        set maxDamage(arg0: number)
        get orCreateDescriptionId(): string
        get item(): Internal.Item
        get itemBuilder(): Internal.ItemBuilder
        /**
         * @deprecated
        */
        get maxDamage(): number
        get description(): Internal.Component
        get renderPropertiesInternal(): any
        set itemBuilder(b: Internal.ItemBuilder_)
        set attackDamage(attackDamage: number)
        get edible(): boolean
        /**
         * @deprecated
        */
        get enchantmentValue(): number
        set armorToughness(armorToughness: number)
        get id(): string
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        /**
         * @deprecated
        */
        get maxStackSize(): number
        set armorKnockbackResistance(knockbackResistance: number)
        set fireResistant(arg0: boolean)
        get eatingSound(): Internal.SoundEvent
        set nameKey(arg0: string)
        get idLocation(): ResourceLocation
        get mod(): string
        set armorProtection(armorProtection: number)
        /**
         * @deprecated
        */
        get craftingRemainingItem(): Internal.Item
        get typeItemStackKey(): Internal.ItemStackKey
        set foodProperties(arg0: Internal.FoodProperties_)
        set craftingRemainder(arg0: Internal.Item_)
        static readonly BY_BLOCK: {[key: Internal.RedstoneLaneBlock]: Internal.BlockItem, [key: Internal.MelonBlock]: Internal.BlockItem, [key: Internal.SandBlock]: Internal.BlockItem, [key: Internal.SpongeBlock]: Internal.BlockItem, [key: Internal.LightBlock]: Internal.BlockItem, [key: Internal.GeothermalVentBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RootedDirtBlock]: Internal.BlockItem, [key: Internal.TwistingVinesBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Mural_Block]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.WetSpongeBlock]: Internal.BlockItem, [key: Internal.MendingAuraStairBlock]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.BaseCoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.MendingAuraSlabBlock]: Internal.BlockItem, [key: Internal.Mural_Block]: Internal.BlockItem, [key: Internal.MossMultifaceBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WeepingVinesBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.WallSkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.DaylightDetectorBlock]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.StrippableLogBlock]: Internal.BlockItemWithSupplier, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.MetalScaffoldingBlock]: Internal.BlockItemWithScaffolding, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.ChocolateBlock]: Internal.BlockItemWithSupplier, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Boss_Respawn_Spawner_Block]: Internal.BlockItemCMRender, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.SkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlimeBlock]: Internal.BlockItem, [key: Internal.BigDripleafStemBlock]: Internal.Items$1, [key: Internal.Cataclysm_Skull_Block]: Internal.CataclysmSkullItem, [key: Internal.TallGrassBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.BaseCoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.CocoaBlock]: Internal.ItemNameBlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.Mural_Block]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.ChaosSpawnerEdgeBlock]: Internal.BlockItem, [key: Internal.CampfireBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.TripWireBlock]: Internal.ItemNameBlockItem, [key: Internal.ChaosSpawnerEdgeBlock]: Internal.BlockItem, [key: Internal.FairkeeperSpawnerBlock]: Internal.BlockItem, [key: Internal.GuanoLayerBlock]: Internal.BlockItemWithSupplier, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CaveSaplingBlock]: Internal.BlockItemWithSupplier, [key: Internal.GiantSweetberryBlock]: Internal.BlockItemWithSupplier, [key: Internal.SprinklesBlock]: Internal.BlockItemWithSupplier, [key: Internal.StairBlock]: Internal.BlockItemWithSupplier, [key: Internal.TreeStarBlock]: Internal.BlockItemWithSupplier, [key: Internal.NyliumBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.VertexPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CauldronBlock]: Internal.Items$1, [key: Internal.SulfurBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItemWithSupplier, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.SaplingBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.AmethystClusterBlock]: Internal.BlockItem, [key: Internal.WallPlatformBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.SulfurBudBlock]: Internal.BlockItemWithSupplier, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.SkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.AnvilBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.NeodymiumNodeBlock]: Internal.BlockItemWithSupplier, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StonecutterBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItemWithSupplier, [key: Internal.BeehiveBlock]: Internal.BlockItem, [key: Internal.Abyssal_Egg_Block]: Internal.BlockItemCMRender, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Mural_Block]: Internal.BlockItem, [key: Internal.SeaPickleBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.RedStoneOreBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Mural_Block]: Internal.BlockItem, [key: Internal.DNLButtonBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.TargetBlock]: Internal.BlockItem, [key: Internal.MendingAuraBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WallSkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.IronBarsBlock]: Internal.BlockItem, [key: Internal.RotatorPressurePlate]: Internal.BlockItem, [key: Internal.GlowingAbyssmarineBlock]: Internal.BlockItemWithSupplier, [key: Internal.InfestedBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CakeBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.RebarBlock]: Internal.BlockItemWithSupplier, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.StairBlock]: Internal.BlockItemWithSupplier, [key: Internal.PeppermintBlock]: Internal.BlockItemWithSupplier, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.DoublePlantBlock]: Internal.BlockItem, [key: Internal.MangroveRootsBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItemWithSupplier, [key: Internal.FiddleheadBlock]: Internal.BlockItemWithSupplier, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.ScrollForgeBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.AbyssmarineSlabBlock]: Internal.BlockItemWithSupplier, [key: Internal.SmallCandyCaneBlock]: Internal.BlockItemWithSupplier, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItemWithSupplier, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.TripWireHookBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.ExplosiveBarrelBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.OverchargedRedstoneBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StoneNotchBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CoralBlock]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.PrimalMagmaBlock]: Internal.BlockItemWithSupplier, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.ChaosSpawnerEdgeBlock]: Internal.BlockItem, [key: Internal.EnigmaticEngineBlock]: Internal.BlockItemWithSupplier, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.NeodymiumNodeBlock]: Internal.BlockItemWithSupplier, [key: Internal.TrophyBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItemWithSupplier, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.GlassBlock]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.CommandBlock]: Internal.GameMasterBlockItem, [key: Internal.ComparatorBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.EnergizedGalenaBlock]: Internal.BlockItemWithSupplier, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.RotatedPillarBlock]: Internal.BlockItemWithSupplier, [key: Internal.Mural_Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItemWithSupplier, [key: Internal.DragonEggBlock]: Internal.BlockItem, [key: Internal.MagnetBlock]: Internal.BlockItemWithSupplier, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FlowerPotBlock]: Internal.BlockItem, [key: Internal.DepthGlassBlock]: Internal.BlockItemWithSupplier, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.OceanFloraBlock]: Internal.BlockItemWithSupplier, [key: Internal.DirectionalFacingBlock]: Internal.BlockItemWithSupplier, [key: Internal.DinosaurChopBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.ObsidilithSummonBlock]: Internal.BlockItem, [key: Internal.HeartOfIronBlock]: Internal.BlockItemWithSupplier, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.BallistaGolemStatueBlock]: Internal.BlockItem, [key: Internal.Ink_Mural_Block]: Internal.BlockItem, [key: Internal.AzuroLogBlock]: Internal.BlockItem, [key: Internal.ChaosSpawnerBarrierCenterBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.GingerbarrelBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.PinkPetalsBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.TorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.StoneNotchBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StoneNotchBlock]: Internal.BlockItem, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Mural_Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItemWithSupplier, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItemWithSupplier, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BigDripleafBlock]: Internal.Items$1, [key: Internal.WallBlock]: Internal.BlockItemWithSupplier, [key: Internal.ChorusPlantBlock]: Internal.BlockItem, [key: Internal.BaseCoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.GrindstoneBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.GingerbreadDoorBlock]: Internal.BlockItemWithSupplier, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.MushroomBlock]: Internal.BlockItem, [key: Internal.CavePlantBlock]: Internal.BlockItemWithSupplier, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItemWithSupplier, [key: Internal.CoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.RedstoneTorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.StoneNotchBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.TallFlowerBlock]: Internal.DoubleHighBlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ConfectionOvenBlock]: Internal.BlockItemWithSupplier, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.MangroveLeavesBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItemWithSupplier, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.GuanoBlock]: Internal.BlockItemWithSupplier, [key: Internal.PlayerHeadBlock]: Internal.PlayerHeadItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.PiglinWallSkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.UraniumFullBlock]: Internal.RadioactiveBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.CoralBlock]: Internal.BlockItem, [key: Internal.ThinGeothermalVentBlock]: Internal.BlockItemWithSupplier, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.LoomBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.BaseCoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.DNLDoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.SkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.PumpkinBlock]: Internal.BlockItem, [key: Internal.FungusBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.StoneNotchBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.CycadBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItemWithSupplier, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.GrassBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.ChainBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.ScaffoldingBlock]: Internal.ScaffoldingBlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.BioluminescentWallTorch]: Internal.StandingAndWallBlockItem, [key: Internal.SculkCatalystBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StemBlock]: Internal.ItemNameBlockItem, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.SaplingBlock]: Internal.BlockItem, [key: Internal.SirenLightBlock]: Internal.BlockItemWithISTER, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.FurnaceBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.CoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.WallBlock]: Internal.BlockItemWithSupplier, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CandyCaneBlock]: Internal.BlockItemWithSupplier, [key: Internal.RepeaterBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.SlabBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BellBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.StructureBlock]: Internal.GameMasterBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.CoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.BaseCoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.Altar_Of_Fire_Block]: Internal.BlockItemCMRender, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RootsBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.PitcherCropBlock]: Internal.ItemNameBlockItem, [key: Internal.NeodymiumOreBlock]: Internal.BlockItemWithSupplier, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.GummyRingBlock]: Internal.BlockItemWithSupplier, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.RedStoneWireBlock]: Internal.ItemNameBlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.Mural_Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.MultipleDinosaurEggsBlock]: Internal.BlockItemWithSupplier, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.CaveVinesBlock]: Internal.ItemNameBlockItem, [key: Internal.MobWardBlock]: Internal.BlockItem, [key: Internal.BrushableBlock]: Internal.BlockItem, [key: Internal.SculkSensorBlock]: Internal.BlockItem, [key: Internal.BoneWormsBlock]: Internal.BlockItemWithSupplier, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SoulSandBlock]: Internal.BlockItem, [key: Internal.Cataclysm_Wall_Skull_Block]: Internal.CataclysmSkullItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.IceCreamBlock]: Internal.BlockItemWithSupplier, [key: Internal.DisabledFairkeeperChestBlock]: Internal.FierceFairkeeperChestBlockItem, [key: Internal.CopperValveBlock]: Internal.BlockItemWithISTER, [key: Internal.Altar_Of_Abyss_Block]: Internal.BlockItemCMRender, [key: Internal.MendingAuraPaneBlock]: Internal.BlockItem, [key: Internal.Ink_Mural_Block]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.FungusBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.SulfurBudBlock]: Internal.BlockItemWithSupplier, [key: Internal.ConduitBlock]: Internal.BlockItem, [key: Internal.HazmatBlock]: Internal.BlockItemWithSupplier, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.DeadBushBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.LightningRodBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.VineBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.PingPongSpongeBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.OceanFloraBlock]: Internal.BlockItemWithSupplier, [key: Internal.StoneNotchBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TintedGlassBlock]: Internal.BlockItem, [key: Internal.PewenPinesBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PurpurVoidRuneTrapBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PileBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.WasteDrumBlock]: Internal.RadioactiveOnDestroyedBlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.DirtPathBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.DuriteClusterBlock]: Internal.BlockItem, [key: Internal.JigsawBlock]: Internal.GameMasterBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.HugeMushroomBlock]: Internal.BlockItem, [key: Internal.MagnetBlock]: Internal.BlockItemWithSupplier, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.StairBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.Sandstone_Falling_Trap]: Internal.BlockItem, [key: Internal.FireflyJar]: Internal.BlockItem, [key: Internal.GlassBlock]: Internal.BlockItemWithSupplier, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Cursed_Tombstone_Block]: Internal.BlockItemCMRender, [key: Internal.FenceBlock]: Internal.BlockItemWithSupplier, [key: Internal.WallBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallTorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.PistonBaseBlock]: Internal.BlockItem, [key: Internal.SporeBlossomBlock]: Internal.BlockItem, [key: Internal.CandyCanePoleBlock]: Internal.BlockItemWithSupplier, [key: Internal.AbyssalAltarBlock]: Internal.BlockItemWithSupplier, [key: Internal.SlabBlock]: Internal.BlockItemWithSupplier, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.NuclearBombBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.StoneNotchBlock]: Internal.BlockItem, [key: Internal.FallingBlockWithColor]: Internal.BlockItemWithSupplier, [key: Internal.LayeredCauldronBlock]: Internal.Items$1, [key: Internal.BambooStalkBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.GummyRingBlock]: Internal.BlockItemWithSupplier, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.AbyssmarinePillarBlock]: Internal.BlockItemWithSupplier, [key: Internal.SaplingBlock]: Internal.BlockItem, [key: Internal.SnowLayerBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Mural_Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItemWithSupplier, [key: Internal.SignalGateBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.EndPortalFrameBlock]: Internal.BlockItem, [key: Internal.DinosaurEggBlock]: Internal.BlockItemWithSupplier, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.BrewingStandBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItemWithSupplier, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.BaseCoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.HopperBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Mural_Block]: Internal.BlockItem, [key: Internal.Mural_Block]: Internal.BlockItem, [key: Internal.BaseCoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.WeatheringCopperStairBlock]: Internal.BlockItem, [key: Internal.TurtleEggBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.GauntletBlackstoneBlock]: Internal.BlockItem, [key: Internal.InfestedBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.ObserverBlock]: Internal.BlockItem, [key: Internal.CavePlantBlock]: Internal.BlockItemWithSupplier, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WeightedPressurePlateBlock]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.Statue_Block]: Internal.BlockItemCMRender, [key: Internal.SculkVeinBlock]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.EnergizedGalenaBlock]: Internal.BlockItemWithSupplier, [key: Internal.HazmatBlock]: Internal.BlockItemWithSupplier, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Ink_Mural_Block]: Internal.BlockItem, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.InfestedBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.LanternBlock]: Internal.BlockItem, [key: Internal.InfestedBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.ArchaicVineBlock]: Internal.BlockItemWithSupplier, [key: Internal.NeodymiumPillarBlock]: Internal.BlockItemWithSupplier, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.RootsBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.HologramProjectorBlock]: Internal.BlockItemWithSupplier, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.KelpBlock]: Internal.BlockItem, [key: Internal.StrippableLogBlock]: Internal.BlockItemWithSupplier, [key: Internal.StairBlock]: Internal.BlockItemWithSupplier, [key: Internal.BeholderBlock]: Internal.BlockItemWithISTER, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.PeppermintBlock]: Internal.BlockItemWithSupplier, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.DuriteClusterBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.IceBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.Mural_Block]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.CraftingTableBlock]: Internal.BlockItem, [key: Internal.BarrierBlock]: Internal.BlockItem, [key: Internal.Ink_Mural_Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.PoweredRailBlock]: Internal.BlockItem, [key: Internal.StrippableLogBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.AmberMonolithBlock]: Internal.BlockItemWithSupplier, [key: Internal.Mural_Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.Mechanical_fusion_Anvil]: Internal.BlockItemCMRender, [key: Internal.DuriteClusterBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.NeodymiumPillarBlock]: Internal.BlockItemWithSupplier, [key: Internal.CandyCaneBlock]: Internal.BlockItemWithSupplier, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.CavePlantBlock]: Internal.BlockItemWithSupplier, [key: Internal.EMP_Block]: Internal.BlockItemCMRender, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.EndRodBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.GravelBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.AzaleaBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StemBlock]: Internal.ItemNameBlockItem, [key: Internal.DoublePlantBlock]: Internal.DoubleHighBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DropperBlock]: Internal.BlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.AbyssmarineWallBlock]: Internal.BlockItemWithSupplier, [key: Internal.VoidBlossomSummonBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItemWithSupplier, [key: Internal.ChestBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItemWithSupplier, [key: Internal.UnrefinedWasteBlock]: Internal.RadioactiveBlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.DungeonWallTorch]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.NuclearFurnaceComponentBlock]: Internal.BlockItemWithSupplier, [key: Internal.WaterlilyBlock]: Internal.PlaceOnWaterBlockItem, [key: Internal.Mural_Block]: Internal.BlockItem, [key: Internal.MetalBarrelBlock]: Internal.BlockItemWithSupplier, [key: Internal.CoralPlantBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FairkeeperChestBlock]: Internal.FairkeeperChestBlockItem, [key: Internal.PowderSnowBlock]: Internal.SolidBucketItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItemWithSupplier, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Altar_Of_Amethyst_Block]: Internal.BlockItemCMRender, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ThinBoneBlock]: Internal.BlockItemWithSupplier, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.Mural_Block]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.SugarCaneBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.PillarCapBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.ChaosSpawnerVertexBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.BoneRibsBlock]: Internal.BlockItemWithSupplier, [key: Internal.AcidicRadrockBlock]: Internal.BlockItemWithSupplier, [key: Internal.PedestalBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.ComposterBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ForsakenIdolBlock]: Internal.BlockItemWithSupplier, [key: Internal.StairBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DecoratedPotBlock]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.CoralPlantBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SugarGlassBlock]: Internal.BlockItemWithSupplier, [key: Internal.PlayerStatueBlock]: Internal.PlayerStatueBlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CoralBlock]: Internal.BlockItem, [key: Internal.Mural_Block]: Internal.BlockItem, [key: Internal.Cataclysm_Wall_Skull_Block]: Internal.CataclysmSkullItem, [key: Internal.BlastFurnaceBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WallRackBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.LecternBlock]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.MagneticActivatorBlock]: Internal.BlockItemWithSupplier, [key: Internal.Ink_Mural_Block]: Internal.BlockItem, [key: Internal.StructureVoidBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.BrushableBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TntBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.RedstoneWallTorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ConversionCrucibleBlock]: Internal.BlockItemWithSupplier, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItemWithSupplier, [key: Internal.HangingAzuroLeavesTipBlock]: Internal.BlockItem, [key: Internal.AmethystBlock]: Internal.BlockItem, [key: Internal.HayBlock]: Internal.BlockItem, [key: Internal.InscriptionTableBlock]: Internal.BlockItem, [key: Internal.CarvedPumpkinBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.PointedDripstoneBlock]: Internal.BlockItem, [key: Internal.TubeWormBlock]: Internal.BlockItemWithSupplier, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.BoneNoduleBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.SlabBlock]: Internal.BlockItemWithSupplier, [key: Internal.BaseCoralPlantBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItemWithSupplier, [key: Internal.NetherrackBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.DetectorRailBlock]: Internal.BlockItem, [key: Internal.PreserverBlock]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItemWithSupplier, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.RedstoneIdolBlock]: Internal.RedstoneIdolItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.StrippableLogBlock]: Internal.BlockItemWithSupplier, [key: Internal.Cataclysm_Wall_Skull_Block]: Internal.CataclysmSkullItem, [key: Internal.GalenaPillarBlock]: Internal.BlockItemWithSupplier, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.BaseCoralPlantBlock]: Internal.BlockItem, [key: Internal.ChaosSpawnerVertexBlock]: Internal.BlockItem, [key: Internal.CoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.CoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.MetalBarrelBlock]: Internal.BlockItemWithSupplier, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.SnowyDirtBlock]: Internal.BlockItem, [key: Internal.NuclearSirenBlock]: Internal.BlockItemWithSupplier, [key: Internal.WallBlock]: Internal.BlockItemWithSupplier, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.ThornwoodBranchBlock]: Internal.BlockItemWithSupplier, [key: Internal.GingerbreadDoorBlock]: Internal.BlockItemWithSupplier, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.SpelunkeryTableBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.StoneNotchBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.AnvilBlock]: Internal.BlockItem, [key: Internal.PistonBaseBlock]: Internal.BlockItem, [key: Internal.BuddingAmethystBlock]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.WallBlock]: Internal.BlockItemWithSupplier, [key: Internal.CommandBlock]: Internal.GameMasterBlockItem, [key: Internal.RedstoneLampBlock]: Internal.BlockItem, [key: Internal.AmethystClusterBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WeightedPressurePlateBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItemWithSupplier, [key: Internal.FacingPillarBlock]: Internal.BlockItem, [key: Internal.TorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.ChiseledStoneAltarBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WitherRoseBlock]: Internal.BlockItem, [key: Internal.StoneNotchBlock]: Internal.BlockItem, [key: Internal.JukeboxBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.StairBlock]: Internal.BlockItemWithSupplier, [key: Internal.MushroomBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.HollowBoneBlock]: Internal.BlockItemWithSupplier, [key: Internal.CalibratedSculkSensorBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.EnderChestBlock]: Internal.BlockItem, [key: Internal.CoralPlantBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BookPileBlock]: Internal.BlockItem, [key: Internal.VoidBlossomBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RedStoneOreBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.HoneyBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItemWithSupplier, [key: Internal.CoralBlock]: Internal.BlockItem, [key: Internal.PoweredRailBlock]: Internal.BlockItem, [key: Internal.GlowingAbyssmarineBlock]: Internal.BlockItemWithSupplier, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.MendingTableBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Mural_Block]: Internal.BlockItem, [key: Internal.MendstoneChalkMarkBlock]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.VoidLilyBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.CoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.StairBlock]: Internal.BlockItemWithSupplier, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.SundropBlock]: Internal.BlockItemWithSupplier, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.RedstoneLaneBlock]: Internal.BlockItem, [key: Internal.MossBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.PewenBranchBlock]: Internal.BlockItemWithSupplier, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.HugeMushroomBlock]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.EnergizedGalenaBlock]: Internal.BlockItemWithSupplier, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.StoneNotchBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItemWithSupplier, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.WallBlock]: Internal.BlockItemWithSupplier, [key: Internal.BaseCoralPlantBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.EndStoneTeleportTrapBricks]: Internal.BlockItem, [key: Internal.Mural_Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.FarmBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItemWithSupplier, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.CartographyTableBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.Mural_Block]: Internal.BlockItem, [key: Internal.AzaleaBlock]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WebBlock]: Internal.BlockItem, [key: Internal.UraniumRodBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.LeavesBlock]: Internal.BlockItemWithSupplier, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.ChorusFlowerBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.CoralPlantBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StoneNotchBlock]: Internal.BlockItem, [key: Internal.RailBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.ObsidianExplosionTrapBricks]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.TallFlowerBlock]: Internal.DoubleHighBlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.GummyRingBlock]: Internal.BlockItemWithSupplier, [key: Internal.TremorzillaEggBlock]: Internal.BlockItemWithSupplier, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.OceanFloraBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.AmethystClusterBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.AlchemistCauldronBlock]: Internal.BlockItem, [key: Internal.BeaconBlock]: Internal.BlockItem, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.MendingAuraFenceBlock]: Internal.BlockItem, [key: Internal.LevitationBlock]: Internal.BlockItem, [key: Internal.SmoothLimestoneBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.InfestedBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.TallFlowerBlock]: Internal.DoubleHighBlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.DisabledFairkeeperChestBlock]: Internal.WiseFairkeeperChestBlockItem, [key: Internal.RadrockUraniumOreBlock]: Internal.RadioactiveBlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.Mural_Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItemWithSupplier, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.ObsidilithRuneBlock]: Internal.BlockItem, [key: Internal.PlayerWallHeadBlock]: Internal.PlayerHeadItem, [key: Internal.DinosaurEggBlock]: Internal.BlockItemWithSupplier, [key: Internal.CoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.MothBallBlock]: Internal.BlockItemWithSupplier, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.AbyssmarineStairBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.DinosaurEggBlock]: Internal.BlockItemWithSupplier, [key: Internal.StairBlock]: Internal.BlockItemWithSupplier, [key: Internal.Cataclysm_Skull_Block]: Internal.CataclysmSkullItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.MagneticLightBlock]: Internal.BlockItemWithSupplier, [key: Internal.StoneNotchBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.PowderSnowCauldronBlock]: Internal.Items$1, [key: Internal.PileBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Mural_Block]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItemWithSupplier, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.MonolithBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.MagmaBlock]: Internal.BlockItem, [key: Internal.StoneNotchBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.AnvilBlock]: Internal.BlockItem, [key: Internal.GlowLichenBlock]: Internal.BlockItem, [key: Internal.NeodymiumOreBlock]: Internal.BlockItemWithSupplier, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.DinosaurChopBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.GalenaSpireBlock]: Internal.BlockItemWithSupplier, [key: Internal.CoralPlantBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.Sandstone_Poison_Dart_Trap]: Internal.BlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.SlabBlock]: Internal.BlockItemWithSupplier, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.TrophyBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItemWithSupplier, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.QuarryBlock]: Internal.BlockItemWithSupplier, [key: Internal.FrostmintBlock]: Internal.BlockItemWithSupplier, [key: Internal.CandyCaneBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItemWithSupplier, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Cataclysm_Skull_Block]: Internal.CataclysmSkullItem, [key: Internal.CandyCanePoleBlock]: Internal.BlockItemWithSupplier, [key: Internal.FrostedChocolateBlock]: Internal.BlockItemWithSupplier, [key: Internal.MendingAuraWallBlock]: Internal.BlockItem, [key: Internal.FacingBlock]: Internal.BlockItem, [key: Internal.ChaosSpawnerEdgeBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FlytrapBlock]: Internal.BlockItemWithSupplier, [key: Internal.FletchingTableBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.MultipleDinosaurEggsBlock]: Internal.BlockItemWithSupplier, [key: Internal.StairBlock]: Internal.BlockItemWithSupplier, [key: Internal.HalfTransparentBlock]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DoublePlantWithRotationBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.BaseCoralPlantBlock]: Internal.BlockItem, [key: Internal.ChaosSpawnerBarrierVertexBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.Ink_Mural_Block]: Internal.BlockItem, [key: Internal.EquipableCarvedPumpkinBlock]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.LanternBlock]: Internal.BlockItem, [key: Internal.SmokerBlock]: Internal.BlockItem, [key: Internal.MendingAuraChestBlock]: Internal.BlockItem, [key: Internal.VolcanicCoreBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.LadderBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.TorchflowerCropBlock]: Internal.ItemNameBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SpawnerBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.WitherWallSkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SmithingTableBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CactusBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.BeetrootBlock]: Internal.ItemNameBlockItem, [key: Internal.SaplingBlock]: Internal.BlockItemWithSupplier, [key: Internal.EnchantmentTableBlock]: Internal.BlockItem, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.NoteBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.LicorootVineBlock]: Internal.BlockItemWithSupplier, [key: Internal.DNLPressurePlateBlock]: Internal.BlockItem, [key: Internal.IceCreamBlock]: Internal.BlockItemWithSupplier, [key: Internal.SculkShriekerBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperSlabBlock]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.IronBarsBlock]: Internal.BlockItem, [key: Internal.SaplingBlock]: Internal.BlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.MagneticLevitationRailBlock]: Internal.BlockItemWithSupplier, [key: Internal.WallSkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.FenceGateBlock]: Internal.BlockItemWithSupplier, [key: Internal.SaplingBlock]: Internal.BlockItem, [key: Internal.FrogspawnBlock]: Internal.PlaceOnWaterBlockItem, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BarrelBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BaseCoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.MendingAuraNearFullHeightBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.MuckBlock]: Internal.BlockItemWithSupplier, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PotatoBlock]: Internal.ItemNameBlockItem, [key: Internal.ChaosSpawnerBarrierEdgeBlock]: Internal.BlockItem, [key: Internal.GummyRingBlock]: Internal.BlockItemWithSupplier, [key: Internal.BaseCoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.GummyRingBlock]: Internal.BlockItemWithSupplier, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.WallTorchBlock]: Internal.StandingAndWallBlockItem, [key: Internal.LavaCauldronBlock]: Internal.Items$1, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItemWithSupplier, [key: Internal.FenceBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CherryLeavesBlock]: Internal.BlockItem, [key: Internal.Mural_Block]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.CampfireBlock]: Internal.BlockItem, [key: Internal.NyliumBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.MusselBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StoneNotchBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItemWithSupplier, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItemWithSupplier, [key: Internal.SpikesBlock]: Internal.BlockItem, [key: Internal.BioluminescentTorch]: Internal.StandingAndWallBlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CropBlock]: Internal.ItemNameBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.HazmatBlock]: Internal.BlockItemWithSupplier, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.BeehiveBlock]: Internal.BlockItem, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.TallFlowerBlock]: Internal.DoubleHighBlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.SaplingBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.Ink_Mural_Block]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.DrainBlock]: Internal.BlockItemWithSupplier, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.MangrovePropaguleBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItemWithSupplier, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItemWithSupplier, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.Sandstone_Ignite_Trap]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.CoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.PoweredBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ArcaneAnvilBlock]: Internal.BlockItem, [key: Internal.MudBlock]: Internal.BlockItem, [key: Internal.SmallDripleafBlock]: Internal.DoubleHighBlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.Block]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.DinosaurEggBlock]: Internal.BlockItemWithSupplier, [key: Internal.SlabBlock]: Internal.BlockItemWithSupplier, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.BaseCoralWallFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItemWithSupplier, [key: Internal.RebarBlock]: Internal.BlockItemWithSupplier, [key: Internal.WallSignBlock]: Internal.SignItem, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.LeavesBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.RedStoneOreBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.ScuttleStatueBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.CoralFanBlock]: Internal.StandingAndWallBlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.RespawnAnchorBlock]: Internal.BlockItem, [key: Internal.AmbersolBlock]: Internal.BlockItemWithSupplier, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.NetherSproutsBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.Ink_Mural_Block]: Internal.BlockItem, [key: Internal.PebbleBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItemWithSupplier, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.SculkBlock]: Internal.BlockItem, [key: Internal.StainedGlassPaneBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.RedstoneLaneBlock]: Internal.BlockItem, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CaveSaplingBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StoneNotchBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.Block]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.IceCreamBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DoublePlantBlock]: Internal.DoubleHighBlockItem, [key: Internal.TrappedChestBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.WoolCarpetBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.CavePaintingBlock]: Internal.BlockItemWithSupplierLore, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.SaplingBlock]: Internal.BlockItem, [key: Internal.CarpetBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CryingObsidianBlock]: Internal.BlockItem, [key: Internal.PressurePlateBlock]: Internal.BlockItem, [key: Internal.SulfurBudBlock]: Internal.BlockItemWithSupplier, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CommandBlock]: Internal.GameMasterBlockItem, [key: Internal.NetherWartBlock]: Internal.ItemNameBlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.GobthumperBlock]: Internal.BlockItemWithISTER, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SnifferEggBlock]: Internal.BlockItem, [key: Internal.PointedIcicleBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.GlazedTerracottaBlock]: Internal.BlockItem, [key: Internal.FacingBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItemWithSupplier, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItemWithSupplier, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.CoralBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItemWithSupplier, [key: Internal.ThinGeothermalVentBlock]: Internal.BlockItemWithSupplier, [key: Internal.Ink_Mural_Block]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.HugeMushroomBlock]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.Door_of_Seal_Block]: Internal.BlockItemCMRender, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItemWithSupplier, [key: Internal.BaleenBoneBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.ButtonBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Altar_Of_Void_Block]: Internal.BlockItemCMRender, [key: Internal.SeagrassBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItem, [key: Internal.FlowerBlock]: Internal.BlockItem, [key: Internal.WallHangingSignBlock]: Internal.HangingSignItem, [key: Internal.TrapDoorBlock]: Internal.BlockItem, [key: Internal.StainedGlassBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.WitherSkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.ConcretePowderBlock]: Internal.BlockItem, [key: Internal.Ink_Mural_Block]: Internal.BlockItem, [key: Internal.PebbleBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DropExperienceBlock]: Internal.BlockItem, [key: Internal.DoorBlock]: Internal.DoubleHighBlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.SandBlock]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.FenceBlock]: Internal.BlockItem, [key: Internal.TeslaBulbBlock]: Internal.BlockItemWithSupplier, [key: Internal.ArmorPileBlock]: Internal.BlockItem, [key: Internal.TallGrassBlock]: Internal.BlockItem, [key: Internal.WallSkullBlock]: Internal.StandingAndWallBlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.ShulkerBoxBlock]: Internal.BlockItem, [key: Internal.DuriteClusterBlock]: Internal.BlockItem, [key: Internal.BaseCoralPlantBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItemWithSupplier, [key: Internal.FenceGateBlock]: Internal.BlockItem, [key: Internal.VineWallBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.MetalScaffoldingBlock]: Internal.BlockItemWithScaffolding, [key: Internal.Block]: Internal.BlockItem, [key: Internal.DispenserBlock]: Internal.BlockItem, [key: Internal.CeilingHangingSignBlock]: Internal.HangingSignItem, [key: Internal.SulfurBudBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.CandleBlock]: Internal.BlockItem, [key: Internal.StairBlock]: Internal.BlockItemWithSupplier, [key: Internal.Block]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItemWithSupplier, [key: Internal.StandingSignBlock]: Internal.SignItem, [key: Internal.StoneNotchBlock]: Internal.BlockItem, [key: Internal.MyceliumBlock]: Internal.BlockItem, [key: Internal.BedBlock]: Internal.BedItem, [key: Internal.SlabBlock]: Internal.BlockItem, [key: Internal.WallBlock]: Internal.BlockItemWithSupplier, [key: Internal.CarrotBlock]: Internal.ItemNameBlockItem, [key: Internal.WallBannerBlock]: Internal.BannerItem, [key: Internal.InfestedBlock]: Internal.BlockItem, [key: Internal.Ink_Mural_Block]: Internal.BlockItem, [key: Internal.SweetBerryBushBlock]: Internal.ItemNameBlockItem, [key: Internal.WeatheringCopperFullBlock]: Internal.BlockItem, [key: Internal.InfestedRotatedPillarBlock]: Internal.BlockItem, [key: Internal.HangingRootsBlock]: Internal.BlockItem, [key: Internal.ChiseledBookShelfBlock]: Internal.BlockItem, [key: Internal.RotatedPillarBlock]: Internal.BlockItem, [key: Internal.Block]: Internal.BlockItem, [key: Internal.SaplingBlock]: Internal.BlockItem, [key: Internal.BannerBlock]: Internal.BannerItem, [key: Internal.LeverBlock]: Internal.BlockItem, [key: Internal.AmethystClusterBlock]: Internal.BlockItem};
        static readonly EAT_DURATION: 32;
        static readonly BASE_ATTACK_DAMAGE_UUID: Internal.UUID;
        static readonly MAX_STACK_SIZE: 64;
        static readonly MAX_BAR_WIDTH: 13;
        static readonly BASE_ATTACK_SPEED_UUID: Internal.UUID;
        readonly canRepair: boolean;
        renderProperties: any;
        moonlight$clientAnimationProvider: any;
    }
    type Item_ = Item | Special.Item;
    class DamageOverTimePower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<any> {
        constructor()
    }
    type DamageOverTimePower_ = DamageOverTimePower;
    class SimpleDamageCondition extends Internal.DamageCondition<Internal.NoConfiguration> {
        constructor(arg0: Internal.BiPredicate_<DamageSource, number>)
        constructor(arg0: Internal.Predicate_<DamageSource>)
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        check(arg0: Internal.NoConfiguration_, arg1: DamageSource_, arg2: number): boolean;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        check(arg0: Internal.IDynamicFeatureConfiguration_, arg1: DamageSource_, arg2: number): boolean;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type SimpleDamageCondition_ = SimpleDamageCondition;
    interface ItemSupplier {
        abstract getItem(): Internal.ItemStack;
        get item(): Internal.ItemStack
        (): Internal.ItemStack_;
    }
    type ItemSupplier_ = ItemSupplier;
    interface IPowerContainer {
        getSources(arg0: ResourceLocation_): Internal.List<ResourceLocation>;
        hasPower(arg0: ResourceLocation_, arg1: ResourceLocation_): boolean;
        hasPower<T extends Internal.IDynamicFeatureConfiguration, F extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<T>>(arg0: Internal.Entity_, arg1: F): boolean;
        addPower(arg0: ResourceLocation_, arg1: ResourceLocation_): boolean;
        modify<T extends Internal.IDynamicFeatureConfiguration, F extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<T> & Internal.IValueModifyingPower<T>>(arg0: Internal.Entity_, arg1: F, arg2: number, arg3: Internal.Predicate_<Internal.Holder<Internal.ConfiguredPower<T, F>>>, arg4: Internal.Consumer_<Internal.Holder<Internal.ConfiguredPower<T, F>>>): number;
        getPowerData<T>(arg0: Internal.Holder_<Internal.ConfiguredPower<any, any>>, arg1: Internal.NonNullSupplier_<T>): T;
        getPowers<T extends Internal.IDynamicFeatureConfiguration, F extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<T>>(arg0: Internal.Entity_, arg1: F, arg2: Internal.Predicate_<Internal.Holder<Internal.ConfiguredPower<T, F>>>): Internal.List<Internal.Holder<Internal.ConfiguredPower<T, F>>>;
        abstract hasPower(arg0: Internal.ResourceKey_<Internal.ConfiguredPower<any, any>>): boolean;
        abstract rebuildCache(): void;
        abstract getPowers(): Internal.List<Internal.Holder<Internal.ConfiguredPower<any, any>>>;
        abstract getPower<C extends Internal.IDynamicFeatureConfiguration, F extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<C>>(arg0: Internal.ResourceKey_<Internal.ConfiguredPower<any, any>>): Internal.Holder<Internal.ConfiguredPower<C, F>>;
        abstract getPowers<C extends Internal.IDynamicFeatureConfiguration, F extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<C>>(arg0: F, arg1: Internal.Predicate_<Internal.Holder<Internal.ConfiguredPower<C, F>>>): Internal.List<Internal.Holder<Internal.ConfiguredPower<C, F>>>;
        modify<T extends Internal.IDynamicFeatureConfiguration, F extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<T> & Internal.IValueModifyingPower<T>>(arg0: Internal.Entity_, arg1: F, arg2: number): number;
        abstract getPowerTypes(arg0: boolean): Internal.Set<Internal.ResourceKey<Internal.ConfiguredPower<any, any>>>;
        hasPower(arg0: ResourceLocation_): boolean;
        getPowers<C extends Internal.IDynamicFeatureConfiguration, F extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<C>>(arg0: F): Internal.List<Internal.Holder<Internal.ConfiguredPower<C, F>>>;
        abstract handle(arg0: Internal.Multimap_<ResourceLocation, ResourceLocation>, arg1: Internal.Map_<ResourceLocation, Internal.CompoundTag>): void;
        modify<T extends Internal.IDynamicFeatureConfiguration, F extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<T> & Internal.IValueModifyingPower<T>>(arg0: Internal.Entity_, arg1: F, arg2: number, arg3: Internal.Predicate_<Internal.Holder<Internal.ConfiguredPower<T, F>>>): number;
        abstract serverTick(): void;
        getPower<C extends Internal.IDynamicFeatureConfiguration, F extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<C>>(arg0: ResourceLocation_): Internal.Holder<Internal.ConfiguredPower<C, F>>;
        getPowerNames(): Internal.Set<Internal.ResourceKey<Internal.ConfiguredPower<any, any>>>;
        abstract hasPower(arg0: Internal.ResourceKey_<Internal.ConfiguredPower<any, any>>, arg1: ResourceLocation_): boolean;
        modify<T extends Internal.IDynamicFeatureConfiguration, F extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<T> & Internal.IValueModifyingPower<T>>(arg0: Internal.Entity_, arg1: F, arg2: Internal.Iterable_<Internal.Holder<Internal.ConfiguredPower<T, F>>>, arg3: number, arg4: Internal.Consumer_<Internal.Holder<Internal.ConfiguredPower<T, F>>>): number;
        abstract hasPower(arg0: io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory_<any>): boolean;
        abstract writeToNbt(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        abstract sync(): void;
        modify<T extends Internal.IDynamicFeatureConfiguration, F extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<T> & Internal.IValueModifyingPower<T>>(arg0: Internal.Entity_, arg1: F, arg2: number): number;
        removePower(arg0: ResourceLocation_, arg1: ResourceLocation_): void;
        abstract removePower(arg0: Internal.ResourceKey_<Internal.ConfiguredPower<any, any>>, arg1: ResourceLocation_): void;
        abstract getPowerData<T>(arg0: Internal.ResourceKey_<Internal.ConfiguredPower<any, any>>, arg1: Internal.NonNullSupplier_<T>): T;
        withPower<T extends Internal.IDynamicFeatureConfiguration, F extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<T>>(arg0: Internal.Entity_, arg1: F, arg2: Internal.Predicate_<Internal.Holder<Internal.ConfiguredPower<T, F>>>, arg3: Internal.Consumer_<Internal.Holder<Internal.ConfiguredPower<T, F>>>): void;
        sync(arg0: Internal.Entity_, arg1: Internal.ServerPlayer_): void;
        modify<T extends Internal.IDynamicFeatureConfiguration, F extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<T> & Internal.IValueModifyingPower<T>>(arg0: Internal.Entity_, arg1: F, arg2: number, arg3: Internal.Predicate_<Internal.Holder<Internal.ConfiguredPower<T, F>>>, arg4: Internal.Consumer_<Internal.Holder<Internal.ConfiguredPower<T, F>>>): number;
        abstract addPower(arg0: Internal.ResourceKey_<Internal.ConfiguredPower<any, any>>, arg1: ResourceLocation_): boolean;
        getPowers<T extends Internal.IDynamicFeatureConfiguration, F extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<T>>(arg0: Internal.Entity_, arg1: F): Internal.List<Internal.Holder<Internal.ConfiguredPower<T, F>>>;
        abstract removeAllPowersFromSource(arg0: ResourceLocation_): number;
        abstract getPowersFromSource(arg0: ResourceLocation_): Internal.List<Internal.ResourceKey<Internal.ConfiguredPower<any, any>>>;
        readFromNbt(arg0: Internal.CompoundTag_): void;
        sync(arg0: Internal.Entity_): void;
        get(arg0: Internal.Entity_): Internal.LazyOptional<Internal.IPowerContainer>;
        abstract getOwner(): Internal.Entity;
        getPowers<C extends Internal.IDynamicFeatureConfiguration, F extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<C>>(arg0: F, arg1: boolean): Internal.List<Internal.Holder<Internal.ConfiguredPower<C, F>>>;
        abstract getSources(arg0: Internal.ResourceKey_<Internal.ConfiguredPower<any, any>>): Internal.List<ResourceLocation>;
        abstract readNbt(arg0: Internal.CompoundTag_, arg1: boolean): void;
        get powers(): Internal.List<Internal.Holder<Internal.ConfiguredPower<any, any>>>
        get powerNames(): Internal.Set<Internal.ResourceKey<Internal.ConfiguredPower<any, any>>>
        get owner(): Internal.Entity
        readonly KEY: ResourceLocation;
    }
    type IPowerContainer_ = IPowerContainer;
    class ScuttleStatueBlock extends Internal.BaseEntityBlock implements Internal.EntityBlock {
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
        static readonly FACING: Internal.DirectionProperty;
        static readonly HALF: Internal.EnumProperty<Internal.DoubleBlockHalf>;
    }
    type ScuttleStatueBlock_ = ScuttleStatueBlock;
    interface ChestMenuInventoryClickEvent$Callback {
        abstract onClick(arg0: Internal.ChestMenuInventoryClickEvent_): void;
        (arg0: Internal.ChestMenuInventoryClickEvent): void;
    }
    type ChestMenuInventoryClickEvent$Callback_ = ChestMenuInventoryClickEvent$Callback;
    interface Boolean2ObjectFunction <V> extends it.unimi.dsi.fastutil.Function<boolean, V> {
        put(arg0: boolean, arg1: V): V;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Boolean2ShortFunction;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Boolean2ObjectFunction<T>;
        composeFloat(arg0: Internal.Float2BooleanFunction_): Internal.Float2ObjectFunction<V>;
        composeReference<T>(arg0: Internal.Reference2BooleanFunction_<T>): Internal.Reference2ObjectFunction<T, V>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Boolean2DoubleFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Boolean2FloatFunction;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Boolean2IntFunction;
        composeLong(arg0: Internal.Long2BooleanFunction_): Internal.Long2ObjectFunction<V>;
        /**
         * @deprecated
        */
        put(arg0: boolean, arg1: V): V;
        /**
         * @deprecated
        */
        get(arg0: any): V;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Boolean2LongFunction;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, boolean>): Internal.Function<T, V>;
        apply(arg0: boolean): V;
        abstract get(arg0: boolean): V;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Boolean2ByteFunction;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<boolean, V>;
        composeShort(arg0: Internal.Short2BooleanFunction_): Internal.Short2ObjectFunction<V>;
        composeInt(arg0: Internal.Int2BooleanFunction_): Internal.Int2ObjectFunction<V>;
        composeChar(arg0: Internal.Char2BooleanFunction_): Internal.Char2ObjectFunction<V>;
        composeObject<T>(arg0: Internal.Object2BooleanFunction_<T>): Internal.Object2ObjectFunction<T, V>;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Boolean2ReferenceFunction<T>;
        containsKey(arg0: boolean): boolean;
        remove(arg0: boolean): V;
        size(): number;
        composeDouble(arg0: Internal.Double2BooleanFunction_): Internal.Double2ObjectFunction<V>;
        clear(): void;
        composeByte(arg0: Internal.Byte2BooleanFunction_): Internal.Byte2ObjectFunction<V>;
        defaultReturnValue(): V;
        getOrDefault(arg0: boolean, arg1: V): V;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Boolean2CharFunction;
        (arg0: boolean): V;
    }
    type Boolean2ObjectFunction_<V> = Boolean2ObjectFunction<V>;
    class HoeItemBuilder extends Internal.HandheldItemBuilder {
        constructor(i: ResourceLocation_)
        createObject(): Internal.Item;
    }
    type HoeItemBuilder_ = HoeItemBuilder;
    interface ISSKJSUtils$ResourceHolder <T extends Internal.ISSKJSUtils$ResourceHolder<T>> {
        of<T extends Internal.ISSKJSUtils$ResourceHolder<T>>(o: any, constructor_: Internal.Function_<ResourceLocation, T>): T;
    }
    type ISSKJSUtils$ResourceHolder_<T extends Internal.ISSKJSUtils$ResourceHolder<T>> = ISSKJSUtils$ResourceHolder<T>;
    abstract class HangingEntity extends Internal.Entity implements Internal.DynamicLightSource {
        constructor(arg0: Internal.EntityType_<Internal.HangingEntity>, arg1: Internal.Level_, arg2: BlockPos_)
        constructor(arg0: Internal.EntityType_<Internal.HangingEntity>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        isOnScoreboardTeam(teamId: string): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        abstract getWidth(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        survives(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isLiving(): boolean;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        alwaysAccepts(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        isInFluid(fluidState: Internal.FluidState_): boolean;
        getDisplayName(): Internal.Component;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        canRiderInteract(): boolean;
        shouldRiderSit(): boolean;
        abstract getHeight(): number;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        isFrame(): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        playSound(id: Internal.SoundEvent_): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        recalculateBoundingBox(): void;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        isPeacefulCreature(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        setRotation(yaw: number, pitch: number): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        getPos(): BlockPos;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        self(): Internal.Entity;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        getMotionY(): number;
        getName(): Internal.Component;
        abstract dropItem(arg0: Internal.Entity_): void;
        getPassengers(): Internal.EntityArrayList;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        isInFluid(fluidProp: Internal.FluidProperties_): boolean;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        abstract playPlacementSound(): void;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getMotionZ(): number;
        tell(message: Internal.Component_): void;
        setZ(z: number): void;
        setDirection(arg0: Internal.Direction_): void;
        setStatusMessage(message: Internal.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getProfile(): Internal.GameProfile;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        get width(): number
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        get facing(): Internal.Direction
        get height(): number
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get frame(): boolean
        set motionY(y: number)
        get peacefulCreature(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get pos(): BlockPos
        get type(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get motionZ(): number
        set z(z: number)
        set direction(arg0: Internal.Direction_)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        pos: BlockPos;
        direction: Internal.Direction;
        static readonly HANGING_ENTITY: Internal.Predicate<Internal.Entity>;
    }
    type HangingEntity_ = HangingEntity;
    class GoalSelectorDebugRenderer$DebugGoal {
        constructor(arg0: BlockPos_, arg1: number, arg2: string, arg3: boolean)
        readonly name: string;
        readonly priority: number;
        readonly isRunning: boolean;
        readonly pos: BlockPos;
    }
    type GoalSelectorDebugRenderer$DebugGoal_ = GoalSelectorDebugRenderer$DebugGoal;
    class Statue_Block extends Internal.BaseEntityBlock {
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
        static readonly FACING: Internal.DirectionProperty;
        static readonly HALF: Internal.EnumProperty<Internal.DoubleBlockHalf>;
    }
    type Statue_Block_ = Statue_Block;
    class BundleDelimiterPacket <T extends Internal.PacketListener> implements Internal.Packet<T> {
        constructor()
        write(arg0: Internal.FriendlyByteBuf_): void;
        isSkippable(): boolean;
        handle(arg0: T): void;
        get skippable(): boolean
    }
    type BundleDelimiterPacket_<T extends Internal.PacketListener> = BundleDelimiterPacket<T>;
    interface ItemExtensions {
        abstract fabric_setCustomDamageHandler(arg0: Internal.CustomDamageHandler_): void;
        abstract fabric_getCustomDamageHandler(): Internal.CustomDamageHandler;
        abstract fabric_setEquipmentSlotProvider(arg0: Internal.EquipmentSlotProvider_): void;
        abstract fabric_getEquipmentSlotProvider(): Internal.EquipmentSlotProvider;
    }
    type ItemExtensions_ = ItemExtensions;
    class CustomEntityBuilder extends Internal.CustomEntityJSBuilder {
        constructor(i: ResourceLocation_, entityClass: typeof Internal.LivingEntity)
        /**
         * Creates a spawn egg item for this entity type
        */
        eggItem(eggItem: Internal.Consumer_<Internal.SpawnEggItemBuilder>): this;
        createObject(): any;
        factory(): Internal.EntityType$EntityFactory<Internal.LivingEntity>;
        /**
         * Indicates that no egg item should be created for this entity type
        */
        noEggItem(): this;
    }
    type CustomEntityBuilder_ = CustomEntityBuilder;
    class GiftLootEventJS extends Internal.LootEventJS {
        constructor(c: Internal.Map_<ResourceLocation, Internal.JsonElement>)
        addGift(id: ResourceLocation_, b: Internal.Consumer_<Internal.LootBuilder>): void;
    }
    type GiftLootEventJS_ = GiftLootEventJS;
    interface IPlayerLanternDataAccessor {
        abstract immersiveLanterns$getZVel(): number;
        abstract immersiveLanterns$getXVel(): number;
        abstract immersiveLanterns$setZVel(arg0: number): void;
        abstract immersiveLanterns$setXAngle(arg0: number): void;
        abstract immersiveLanterns$setZAngle(arg0: number): void;
        abstract immersiveLanterns$getZAngle(): number;
        abstract immersiveLanterns$getXAngle(): number;
        abstract immersiveLanterns$setLastHipPosition(arg0: Vec3d_): void;
        abstract immersiveLanterns$setWasCrouching(arg0: boolean): void;
        abstract immersiveLanterns$getLastHipPosition(): Vec3d;
        abstract immersiveLanterns$getWasCrouching(): boolean;
        abstract immersiveLanterns$setXVel(arg0: number): void;
    }
    type IPlayerLanternDataAccessor_ = IPlayerLanternDataAccessor;
    interface SignedMessageChain$Decoder {
        unsigned(arg0: Internal.UUID_): this;
        abstract unpack(arg0: Internal.MessageSignature_, arg1: Internal.SignedMessageBody_): Internal.PlayerChatMessage;
        (arg0: Internal.MessageSignature, arg1: Internal.SignedMessageBody): Internal.PlayerChatMessage_;
        readonly REJECT_ALL: Internal.SignedMessageChain$Decoder;
    }
    type SignedMessageChain$Decoder_ = SignedMessageChain$Decoder;
    interface ParticleEngineAccessor {
        abstract getParticles(): Internal.Map<Internal.ParticleRenderType, Internal.Queue<Internal.Particle>>;
        get particles(): Internal.Map<Internal.ParticleRenderType, Internal.Queue<Internal.Particle>>
        (): Internal.Map_<Internal.ParticleRenderType, Internal.Queue<Internal.Particle>>;
    }
    type ParticleEngineAccessor_ = ParticleEngineAccessor;
    class ServerEventJS extends Internal.EventJS {
        constructor(s: Internal.MinecraftServer_)
        getServer(): Internal.MinecraftServer;
        get server(): Internal.MinecraftServer
        readonly server: Internal.MinecraftServer;
    }
    type ServerEventJS_ = ServerEventJS;
    class SerializableData$Instance {
        constructor(arg0: Internal.SerializableData_)
        get<T>(arg0: string): T;
        ifPresent<T>(arg0: string, arg1: Internal.Consumer_<T>): void;
        getBoolean(arg0: string): boolean;
        getDouble(arg0: string): number;
        getString(arg0: string): string;
        getInt(arg0: string): number;
        set(arg0: string, arg1: any): void;
        isPresent(arg0: string): boolean;
        getFloat(arg0: string): number;
        getModifier(arg0: string): Internal.AttributeModifier;
        getId(arg0: string): ResourceLocation;
    }
    type SerializableData$Instance_ = SerializableData$Instance;
    interface RegistryIdRemapCallback$RemapState <T> {
        abstract getIdFromOld(arg0: number): ResourceLocation;
        abstract getRawIdChangeMap(): Internal.Int2IntMap;
        abstract getIdFromNew(arg0: number): ResourceLocation;
        get rawIdChangeMap(): Internal.Int2IntMap
    }
    type RegistryIdRemapCallback$RemapState_<T> = RegistryIdRemapCallback$RemapState<T>;
    class FishingHook extends Internal.Projectile {
        constructor(arg0: Player_, arg1: Internal.Level_, arg2: number, arg3: number)
        constructor(arg0: Internal.EntityType_<Internal.FishingHook>, arg1: Internal.Level_)
        constructor(arg0: Internal.EntityType_<Internal.FishingHook>, arg1: Internal.Level_, arg2: number, arg3: number)
        getDistance(pos: BlockPos_): number;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        pullEntity(arg0: Internal.Entity_): void;
        isOnScoreboardTeam(teamId: string): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
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
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        alwaysAccepts(): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        isInFluid(fluidState: Internal.FluidState_): boolean;
        getDisplayName(): Internal.Component;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        canRiderInteract(): boolean;
        shouldRiderSit(): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        isFrame(): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        playSound(id: Internal.SoundEvent_): void;
        isOpenWaterFishing(): boolean;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        isPeacefulCreature(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        setRotation(yaw: number, pitch: number): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getHookedIn(): Internal.Entity;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        self(): Internal.Entity;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        getMotionY(): number;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        getPlayerOwner(): Player;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        isInFluid(fluidProp: Internal.FluidProperties_): boolean;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        retrieve(arg0: Internal.ItemStack_): number;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getMotionZ(): number;
        tell(message: Internal.Component_): void;
        setZ(z: number): void;
        setStatusMessage(message: Internal.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getProfile(): Internal.GameProfile;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get teamId(): string
        get facing(): Internal.Direction
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get frame(): boolean
        get openWaterFishing(): boolean
        set motionY(y: number)
        get peacefulCreature(): boolean
        get hookedIn(): Internal.Entity
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get type(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        get playerOwner(): Player
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
    }
    type FishingHook_ = FishingHook;
    class EmptyMapItem extends Internal.ComplexItem {
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
    type EmptyMapItem_ = EmptyMapItem;
    class LootTableEntry implements Internal.FunctionContainer, Internal.ConditionContainer {
        constructor(o: Internal.JsonObject_)
        enchantWithLevels(levels: Internal.NumberProvider_, treasure: boolean): Internal.FunctionContainer;
        weight(weight: number): this;
        addFunction(arg0: Internal.JsonObject_): Internal.FunctionContainer;
        enchantRandomly(enchantments: ResourceLocation_[]): Internal.FunctionContainer;
        furnaceSmelt(): Internal.FunctionContainer;
        entityProperties(entity: Internal.LootContext$EntityTarget_, properties: Internal.JsonObject_): Internal.ConditionContainer;
        lootingEnchant(count: Internal.NumberProvider_, limit: number): Internal.FunctionContainer;
        addCondition(o: Internal.JsonObject_): this;
        addConditionalFunction(func: Internal.Consumer_<Internal.ConditionalFunction>): Internal.FunctionContainer;
        randomChanceWithLooting(chance: number, multiplier: number): Internal.ConditionContainer;
        randomChance(chance: number): Internal.ConditionContainer;
        name(name: Internal.Component_, entity: Internal.LootContext$EntityTarget_): Internal.FunctionContainer;
        killedByPlayer(): Internal.ConditionContainer;
        damage(damage: Internal.NumberProvider_): Internal.FunctionContainer;
        nbt(tag: Internal.CompoundTag_): Internal.FunctionContainer;
        entityScores(entity: Internal.LootContext$EntityTarget_, scores: Internal.Map_<string, any>): Internal.ConditionContainer;
        count(count: Internal.NumberProvider_): Internal.FunctionContainer;
        survivesExplosion(): Internal.ConditionContainer;
        quality(quality: number): this;
        copyName(source: Internal.CopyNameFunction$NameSource_): Internal.FunctionContainer;
        lootTable(table: ResourceLocation_, seed: number): Internal.FunctionContainer;
        name(name: Internal.Component_): Internal.FunctionContainer;
        readonly json: Internal.JsonObject;
    }
    type LootTableEntry_ = LootTableEntry;
    class SkeletonSpiderJokeyFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor()
    }
    type SkeletonSpiderJokeyFeature_ = SkeletonSpiderJokeyFeature;
    interface LevelCallback <T> {
        abstract onTrackingEnd(arg0: T): void;
        abstract onSectionChange(arg0: T): void;
        abstract onTickingEnd(arg0: T): void;
        abstract onCreated(arg0: T): void;
        abstract onTickingStart(arg0: T): void;
        abstract onDestroyed(arg0: T): void;
        abstract onTrackingStart(arg0: T): void;
    }
    type LevelCallback_<T> = LevelCallback<T>;
    class KubeJSEntityRenderer <T extends Internal.LivingEntity & Internal.IAnimatableJS> extends Internal.GeoEntityRenderer<T> {
        constructor(renderManager: Internal.EntityRendererProvider$Context_, builder: Internal.BaseLivingEntityBuilder_<T>)
        entityName(): string;
        getScaleHeight(): number;
        postRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.MultiBufferSource_, arg4: Internal.VertexConsumer_, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        getScaleWidth(): number;
        getTextureLocation(entity: T): ResourceLocation;
        render(animatable: T, entityYaw: number, partialTick: number, poseStack: Internal.PoseStack_, bufferSource: Internal.MultiBufferSource_, packedLight: number): void;
        applyRenderLayersForBone(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        preApplyRenderLayers(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.BakedGeoModel_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number): void;
        reRender(arg0: Internal.BakedGeoModel_, arg1: Internal.PoseStack_, arg2: Internal.MultiBufferSource_, arg3: T, arg4: Internal.RenderType_, arg5: Internal.VertexConsumer_, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number): void;
        defaultRender(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.MultiBufferSource_, arg3: Internal.RenderType_, arg4: Internal.VertexConsumer_, arg5: number, arg6: number, arg7: number): void;
        getRenderType(animatable: T, texture: ResourceLocation_, bufferSource: Internal.MultiBufferSource_, partialTick: number): Internal.RenderType;
        getRenderColor(arg0: T, arg1: number, arg2: number): software.bernie.geckolib.core.object.Color;
        renderCube(arg0: Internal.PoseStack_, arg1: Internal.GeoCube_, arg2: Internal.VertexConsumer_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        createVerticesOfQuad(arg0: Internal.GeoQuad_, arg1: Matrix4f_, arg2: Vector3f_, arg3: Internal.VertexConsumer_, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        scaleModelForRender(widthScale: number, heightScale: number, poseStack: Internal.PoseStack_, animatable: T, model: Internal.BakedGeoModel_, isReRender: boolean, partialTick: number, packedLight: number, packedOverlay: number): void;
        getMotionAnimThreshold(arg0: T): number;
        renderFinal(poseStack: Internal.PoseStack_, animatable: T, model: Internal.BakedGeoModel_, bufferSource: Internal.MultiBufferSource_, buffer: Internal.VertexConsumer_, partialTick: number, packedLight: number, packedOverlay: number, red: number, green: number, blue: number, alpha: number): void;
        renderChildBones(arg0: Internal.PoseStack_, arg1: T, arg2: Internal.GeoBone_, arg3: Internal.RenderType_, arg4: Internal.MultiBufferSource_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): void;
        renderCubesOfBone(arg0: Internal.PoseStack_, arg1: Internal.GeoBone_, arg2: Internal.VertexConsumer_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        get scaleHeight(): number
        get scaleWidth(): number
    }
    type KubeJSEntityRenderer_<T extends Internal.LivingEntity & Internal.IAnimatableJS> = KubeJSEntityRenderer<T>;
    class CherryLeavesBlock extends Internal.LeavesBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isShearable(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
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
        onSheared(arg0: Player_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: number): Internal.List<Internal.ItemStack>;
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
    }
    type CherryLeavesBlock_ = CherryLeavesBlock;
    class Gauntlet_of_Bulwark extends Internal.Item implements Internal.More_Tool_Attribute {
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
        setAttackSpeed(attackSpeed: number): void;
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
    type Gauntlet_of_Bulwark_ = Gauntlet_of_Bulwark;
    interface LootItemCondition$Builder {
        and(arg0: Internal.LootItemCondition$Builder_): Internal.AllOfCondition$Builder;
        abstract build(): Internal.LootItemCondition;
        invert(): this;
        or(arg0: Internal.LootItemCondition$Builder_): Internal.AnyOfCondition$Builder;
        (): Internal.LootItemCondition_;
    }
    type LootItemCondition$Builder_ = LootItemCondition$Builder;
    class VineBlock extends Internal.Block implements Internal.IForgeShearable {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        isShearable(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: BlockPos_): boolean;
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
        static getPropertyForFace(arg0: Internal.Direction_): Internal.BooleanProperty;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        onSheared(arg0: Player_, arg1: Internal.ItemStack_, arg2: Internal.Level_, arg3: BlockPos_, arg4: number): Internal.List<Internal.ItemStack>;
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
        static isAcceptableNeighbour(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.Direction_): boolean;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        static readonly NORTH: Internal.BooleanProperty;
        static readonly PROPERTY_BY_DIRECTION: {[key: Internal.Direction]: Internal.BooleanProperty, [key: Internal.Direction]: Internal.BooleanProperty, [key: Internal.Direction]: Internal.BooleanProperty, [key: Internal.Direction]: Internal.BooleanProperty, [key: Internal.Direction]: Internal.BooleanProperty};
        static readonly UP: Internal.BooleanProperty;
        static readonly SOUTH: Internal.BooleanProperty;
        static readonly WEST: Internal.BooleanProperty;
        static readonly AABB_OFFSET: 1.0;
        static readonly EAST: Internal.BooleanProperty;
    }
    type VineBlock_ = VineBlock;
    class BallistaGolemStatueBlock extends Internal.BaseEntityBlock implements Internal.EntityBlock {
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
        static destroyAllBlocks(arg0: Internal.Level_, arg1: BlockPos_): void;
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
        static destroyBlocksAbove(arg0: Internal.Level_, arg1: BlockPos_): void;
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
        isPortalFrame(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        onCaughtFire(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.LivingEntity_): void;
        hidesNeighborFace(arg0: Internal.BlockGetter_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_, arg4: Internal.Direction_): boolean;
        onTreeGrow(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: Internal.BiConsumer_<BlockPos, Internal.BlockState>, arg3: Internal.RandomSource_, arg4: BlockPos_, arg5: Internal.TreeConfiguration_): boolean;
        isScaffolding(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getStateAtViewpoint(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Vec3d_): Internal.BlockState;
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        static getDirection(arg0: Internal.BlockState_): Internal.Direction;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        getFireSpreadSpeed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        getLightEmission(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): number;
        setBedOccupied(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.LivingEntity_, arg4: boolean): void;
        arch$registryName(): ResourceLocation;
        getMod(): string;
        setPlayerDestroyed(arg0: boolean): void;
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
        set playerDestroyed(arg0: boolean)
        static readonly statePositions: {[key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos, [key: Internal.BallistaGolemStatueStates]: BlockPos};
        playerDestroyed: boolean;
        static readonly FACING: Internal.DirectionProperty;
    }
    type BallistaGolemStatueBlock_ = BallistaGolemStatueBlock;
    interface Byte2CharFunction extends Internal.IntUnaryOperator, it.unimi.dsi.fastutil.Function<number, string> {
        getOrDefault(arg0: number, arg1: string): string;
        composeObject<T>(arg0: Internal.Object2ByteFunction_<T>): Internal.Object2CharFunction<T>;
        abstract get(arg0: number): string;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: string): string;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        defaultReturnValue(): string;
        andThenLong(arg0: Internal.Char2LongFunction_): Internal.Byte2LongFunction;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        composeChar(arg0: Internal.Char2ByteFunction_): Internal.Char2CharFunction;
        andThenFloat(arg0: Internal.Char2FloatFunction_): Internal.Byte2FloatFunction;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        andThenByte(arg0: Internal.Char2ByteFunction_): Internal.Byte2ByteFunction;
        composeByte(arg0: Internal.Byte2ByteFunction_): this;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        defaultReturnValue(arg0: string): void;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        identity(): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        get(arg0: any): string;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, string>;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        containsKey(arg0: number): boolean;
        andThenInt(arg0: Internal.Char2IntFunction_): Internal.Byte2IntFunction;
        composeShort(arg0: Internal.Short2ByteFunction_): Internal.Short2CharFunction;
        andThenDouble(arg0: Internal.Char2DoubleFunction_): Internal.Byte2DoubleFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<string, T>): Internal.Function<number, T>;
        composeDouble(arg0: Internal.Double2ByteFunction_): Internal.Double2CharFunction;
        andThenReference<T>(arg0: Internal.Char2ReferenceFunction_<T>): Internal.Byte2ReferenceFunction<T>;
        remove(arg0: number): string;
        composeInt(arg0: Internal.Int2ByteFunction_): Internal.Int2CharFunction;
        andThenChar(arg0: Internal.Char2CharFunction_): this;
        andThenObject<T>(arg0: Internal.Char2ObjectFunction_<T>): Internal.Byte2ObjectFunction<T>;
        size(): number;
        composeReference<T>(arg0: Internal.Reference2ByteFunction_<T>): Internal.Reference2CharFunction<T>;
        composeFloat(arg0: Internal.Float2ByteFunction_): Internal.Float2CharFunction;
        clear(): void;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: string): string;
        apply(arg0: number): string;
        composeLong(arg0: Internal.Long2ByteFunction_): Internal.Long2CharFunction;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        put(arg0: number, arg1: string): string;
        andThenShort(arg0: Internal.Char2ShortFunction_): Internal.Byte2ShortFunction;
        (arg0: number): string;
    }
    type Byte2CharFunction_ = Byte2CharFunction;
    class PreventGameEventPower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<Internal.PreventGameEventConfiguration> {
        constructor()
        static tryPreventGameEvent(arg0: Internal.Entity_, arg1: Internal.GameEvent_): boolean;
        doesPrevent(arg0: Internal.ConfiguredPower_<Internal.PreventGameEventConfiguration, any>, arg1: Internal.GameEvent_): boolean;
        execute(arg0: Internal.ConfiguredPower_<Internal.PreventGameEventConfiguration, any>, arg1: Internal.Entity_): void;
    }
    type PreventGameEventPower_ = PreventGameEventPower;
    class ItemFrameItem extends Internal.HangingEntityItem {
        constructor(arg0: Internal.EntityType_<Internal.HangingEntity>, arg1: Internal.Item$Properties_)
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
    type ItemFrameItem_ = ItemFrameItem;
    interface IOriginCallbackPower <T extends Internal.IDynamicFeatureConfiguration> {
        prepare(arg0: T, arg1: Internal.Entity_, arg2: boolean): void;
        isReady(arg0: T, arg1: Internal.Entity_, arg2: boolean): boolean;
        abstract onChosen(arg0: T, arg1: Internal.Entity_, arg2: boolean): void;
        onChosen<F extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<T>>(arg0: Internal.ConfiguredPower_<T, F>, arg1: Internal.Entity_, arg2: boolean): void;
        prepare<F extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<T>>(arg0: Internal.ConfiguredPower_<T, F>, arg1: Internal.Entity_, arg2: boolean): void;
        isReady<F extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<T>>(arg0: Internal.ConfiguredPower_<T, F>, arg1: Internal.Entity_, arg2: boolean): boolean;
        (arg0: T, arg1: Internal.Entity, arg2: boolean): void;
    }
    type IOriginCallbackPower_<T extends Internal.IDynamicFeatureConfiguration> = IOriginCallbackPower<T>;
    interface PowerModifiedGrindstone {
        abstract getPos(): Internal.Optional<BlockPos>;
        abstract getAppliedPowers(): Internal.List<Internal.Holder<Internal.ConfiguredPower<Internal.ModifyGrindstoneConfiguration, Internal.ModifyGrindstonePower>>>;
        abstract getPlayer(): Player;
        get pos(): Internal.Optional<BlockPos>
        get appliedPowers(): Internal.List<Internal.Holder<Internal.ConfiguredPower<Internal.ModifyGrindstoneConfiguration, Internal.ModifyGrindstonePower>>>
        get player(): Player
    }
    type PowerModifiedGrindstone_ = PowerModifiedGrindstone;
    class LevelStem extends Internal.Record {
        constructor(arg0: Internal.Holder_<Internal.DimensionType>, arg1: Internal.ChunkGenerator_)
        generator(): Internal.ChunkGenerator;
        type(): Internal.Holder<Internal.DimensionType>;
        static readonly OVERWORLD: Internal.ResourceKey<Internal.LevelStem>;
        static readonly END: Internal.ResourceKey<Internal.LevelStem>;
        static readonly CODEC: Internal.Codec<Internal.LevelStem>;
        static readonly NETHER: Internal.ResourceKey<Internal.LevelStem>;
    }
    type LevelStem_ = Special.Dimension | LevelStem;
    class CustomSpell$CastContext extends Internal.Record {
        getCastSource(): Internal.CastSource;
        getLevel(): Internal.Level;
        getSpellLevel(): number;
        getEntity(): Internal.LivingEntity;
        getPlayerMagicData(): Internal.MagicData;
        get castSource(): Internal.CastSource
        get level(): Internal.Level
        get spellLevel(): number
        get entity(): Internal.LivingEntity
        get playerMagicData(): Internal.MagicData
    }
    type CustomSpell$CastContext_ = CustomSpell$CastContext;
    class ListTag extends Internal.CollectionTag<Internal.Tag> {
        constructor()
        constructor(arg0: Internal.List_<Internal.Tag>, arg1: number)
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        getDouble(arg0: number): number;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        remove(arg0: number): any;
        set(arg0: number, arg1: Internal.Tag_): Internal.Tag;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        getCompound(arg0: number): Internal.CompoundTag;
        getShort(arg0: number): number;
        static of<E>(arg0: E): Internal.List<E>;
        static of<E>(): Internal.List<E>;
        static of<E>(...arg0: E[]): Internal.List<E>;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        getFloat(arg0: number): number;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        getIntArray(arg0: number): number[];
        getLongArray(arg0: number): number[];
        getList(arg0: number): this;
        getInt(arg0: number): number;
        sort(arg0: Internal.Comparator_<Internal.Tag>): void;
        stream(): Internal.Stream<Internal.Tag>;
        getString(arg0: number): string;
        spliterator(): Internal.Spliterator<Internal.Tag>;
        replaceAll(arg0: Internal.UnaryOperator_<Internal.Tag>): void;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        getType(): Internal.TagType<Internal.ListTag>;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        forEach(arg0: Internal.Consumer_<Internal.Tag>): void;
        abstract toArray<T>(arg0: T[]): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        get(arg0: number): any;
        parallelStream(): Internal.Stream<Internal.Tag>;
        getAsString(): string;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        removeIf(arg0: Internal.Predicate_<Internal.Tag>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        get type(): Internal.TagType<Internal.ListTag>
        get asString(): string
        static readonly TYPE: Internal.TagType<Internal.ListTag>;
    }
    type ListTag_ = ListTag;
    class GlowSquid extends Internal.Squid {
        constructor(arg0: Internal.EntityType_<Internal.GlowSquid>, arg1: Internal.Level_)
        static checkGlowSquideSpawnRules(arg0: Internal.EntityType_<Internal.LivingEntity>, arg1: Internal.ServerLevelAccessor_, arg2: Internal.MobSpawnType_, arg3: BlockPos_, arg4: Internal.RandomSource_): boolean;
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
        getDarkTicksRemaining(): number;
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
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
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
        get darkTicksRemaining(): number
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
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
    }
    type GlowSquid_ = GlowSquid;
    class TrappedChestBlock extends Internal.ChestBlock {
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
    }
    type TrappedChestBlock_ = TrappedChestBlock;
    class URL implements Internal.Serializable {
        constructor(arg0: Internal.URL_, arg1: string, arg2: Internal.URLStreamHandler_)
        constructor(arg0: Internal.URL_, arg1: string)
        constructor(arg0: string, arg1: string, arg2: string)
        constructor(arg0: string, arg1: string, arg2: number, arg3: string)
        constructor(arg0: string, arg1: string, arg2: number, arg3: string, arg4: Internal.URLStreamHandler_)
        constructor(arg0: string)
        getContent(): any;
        getQuery(): string;
        sameFile(arg0: Internal.URL_): boolean;
        openConnection(): Internal.URLConnection;
        openConnection(arg0: Internal.Proxy_): Internal.URLConnection;
        getPort(): number;
        getFile(): string;
        getAuthority(): string;
        getUserInfo(): string;
        getRef(): string;
        getProtocol(): string;
        toExternalForm(): string;
        openStream(): Internal.InputStream;
        static setURLStreamHandlerFactory(arg0: Internal.URLStreamHandlerFactory_): void;
        toURI(): Internal.URI;
        getContent(arg0: typeof any[]): any;
        getPath(): string;
        getHost(): string;
        getDefaultPort(): number;
        get content(): any
        get query(): string
        get port(): number
        get file(): string
        get authority(): string
        get userInfo(): string
        get ref(): string
        get protocol(): string
        set URLStreamHandlerFactory(arg0: Internal.URLStreamHandlerFactory_)
        get path(): string
        get host(): string
        get defaultPort(): number
    }
    type URL_ = URL;
    class Score {
        constructor(arg0: Internal.Scoreboard_, arg1: Internal.Objective_, arg2: string)
        isLocked(): boolean;
        getOwner(): string;
        setScore(arg0: number): void;
        getObjective(): Internal.Objective;
        getScore(): number;
        add(arg0: number): void;
        increment(): void;
        reset(): void;
        setLocked(arg0: boolean): void;
        getScoreboard(): Internal.Scoreboard;
        get locked(): boolean
        get owner(): string
        set score(arg0: number)
        get objective(): Internal.Objective
        get score(): number
        set locked(arg0: boolean)
        get scoreboard(): Internal.Scoreboard
        static readonly SCORE_COMPARATOR: Internal.Comparator<Internal.Score>;
    }
    type Score_ = Score;
    class DisplayBuilder {
        constructor(arg0: ResourceLocation_)
        /**
         * The ItemStack containing data for the advancement's icon.
        */
        setIcon(arg0: Internal.ItemStack_): void;
        /**
         * Type of frame for the icon. Defaults to 'FrameType.TASK'.
        */
        setFrameType(arg0: Internal.FrameType_): void;
        /**
         * Whether to hide this advancement and all its children from the advancement screen until this advancement have been completed.
         * 
         * Has no effect on root advancements themselves, but still affects all their children. Defaults to false.
        */
        setHidden(arg0: boolean): void;
        /**
         * Configure this advancement's display location.
         * @param offsetX The offset x of display.
         * @param offsetY The offset y of display.
         * @param modifyChildren Determine should its children apply the same offset.
        */
        offset(arg0: number, arg1: number, arg2: boolean): void;
        /**
         * The title of this advancement.
        */
        setTitle(arg0: Internal.Component_): void;
        /**
         * Whether to show a toast to the player when this advancement has been completed. Defaults to true.
        */
        setShowToast(arg0: boolean): void;
        /**
         * The directory for the background to use in this advancement tab (used only for the root advancement).
        */
        setBackground(arg0: ResourceLocation_): void;
        /**
         * Configure this advancement's display location.
         * @param offsetX The offset x of display.
         * @param offsetY The offset y of display.
        */
        offset(arg0: number, arg1: number): void;
        /**
         * Whether to announce in the chat when this advancement has been completed. Defaults to true.
        */
        setAnnounceToChat(arg0: boolean): void;
        /**
         * The description text of this advancement.
        */
        setDescription(arg0: Internal.Component_): void;
        /**
         * The ItemStack containing data for the advancement's icon.
        */
        set icon(arg0: Internal.ItemStack_)
        /**
         * Type of frame for the icon. Defaults to 'FrameType.TASK'.
        */
        set frameType(arg0: Internal.FrameType_)
        /**
         * Whether to hide this advancement and all its children from the advancement screen until this advancement have been completed.
         * 
         * Has no effect on root advancements themselves, but still affects all their children. Defaults to false.
        */
        set hidden(arg0: boolean)
        /**
         * The title of this advancement.
        */
        set title(arg0: Internal.Component_)
        /**
         * Whether to show a toast to the player when this advancement has been completed. Defaults to true.
        */
        set showToast(arg0: boolean)
        /**
         * The directory for the background to use in this advancement tab (used only for the root advancement).
        */
        set background(arg0: ResourceLocation_)
        /**
         * Whether to announce in the chat when this advancement has been completed. Defaults to true.
        */
        set announceToChat(arg0: boolean)
        /**
         * The description text of this advancement.
        */
        set description(arg0: Internal.Component_)
    }
    type DisplayBuilder_ = DisplayBuilder;
    class AnyOfPredicate extends Internal.CombiningPredicate {
        constructor(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>)
        static hasSturdyFace(arg0: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static noFluid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        and(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static matchesTag(arg0: Vec3i_, arg1: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static noFluid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        negate(): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        test(arg0: Internal.WorldGenLevel_, arg1: BlockPos_): boolean;
        static solid(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static insideWorld(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        or(arg0: Internal.BiPredicate_<Internal.WorldGenLevel, BlockPos>): Internal.BiPredicate<Internal.WorldGenLevel, BlockPos>;
        static matchesTag(arg0: Internal.TagKey_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static solid(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static alwaysTrue(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Vec3i_, ...arg1: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Vec3i_, arg1: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static replaceable(): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static wouldSurvive(arg0: Internal.BlockState_, arg1: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, arg1: Internal.List_<Internal.Fluid>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static not(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(arg0: Vec3i_, ...arg1: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: Internal.List_<net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static allOf(arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, arg1: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static anyOf(...arg0: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static replaceable(arg0: Vec3i_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static hasSturdyFace(arg0: Vec3i_, arg1: Internal.Direction_): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(...arg0: Internal.Block_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesBlocks(arg0: Internal.List_<Internal.Block>): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static matchesFluids(...arg0: Internal.Fluid_[]): net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate;
        static readonly CODEC: Internal.Codec<Internal.AnyOfPredicate>;
    }
    type AnyOfPredicate_ = AnyOfPredicate;
    class HayBlock extends Internal.RotatedPillarBlock {
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
    type HayBlock_ = HayBlock;
    class AnimationProcessor <T extends Internal.GeoAnimatable> {
        constructor(arg0: Internal.CoreGeoModel_<T>)
        setActiveModel(arg0: Internal.CoreBakedGeoModel_): void;
        preAnimationSetup(arg0: T, arg1: number): void;
        getBone(arg0: string): Internal.CoreGeoBone;
        getRegisteredBones(): Internal.Collection<Internal.CoreGeoBone>;
        registerGeoBone(arg0: Internal.CoreGeoBone_): void;
        buildAnimationQueue(arg0: T, arg1: Internal.RawAnimation_): Internal.Queue<Internal.AnimationProcessor$QueuedAnimation>;
        tickAnimation(arg0: T, arg1: Internal.CoreGeoModel_<T>, arg2: Internal.AnimatableManager_<T>, arg3: number, arg4: software.bernie.geckolib.core.animation.AnimationState_<T>, arg5: boolean): void;
        set activeModel(arg0: Internal.CoreBakedGeoModel_)
        get registeredBones(): Internal.Collection<Internal.CoreGeoBone>
        reloadAnimations: boolean;
    }
    type AnimationProcessor_<T extends Internal.GeoAnimatable> = AnimationProcessor<T>;
    class BambooFeature extends Internal.Feature<Internal.ProbabilityFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.ProbabilityFeatureConfiguration>)
    }
    type BambooFeature_ = BambooFeature;
    interface PathMatcher {
        abstract matches(arg0: Internal.Path_): boolean;
        (arg0: Internal.Path): boolean;
    }
    type PathMatcher_ = PathMatcher;
    interface BitStorage {
        abstract getAndSet(arg0: number, arg1: number): number;
        abstract getAll(arg0: Internal.IntConsumer_): void;
        abstract getSize(): number;
        abstract copy(): this;
        abstract get(arg0: number): number;
        abstract set(arg0: number, arg1: number): void;
        abstract getBits(): number;
        abstract unpack(arg0: number[]): void;
        abstract getRaw(): number[];
        get size(): number
        get bits(): number
        get raw(): number[]
    }
    type BitStorage_ = BitStorage;
    class SimpleDescriptiveCurio extends Internal.CurioBaseItem {
        constructor(arg0: Internal.Item$Properties_)
        constructor(arg0: Internal.Item$Properties_, arg1: string)
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onUnequip(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        canSync(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canUnequip(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getDropRule(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_): Internal.ICurio$DropRule;
        getAttributesTooltip(arg0: Internal.List_<Internal.Component>, arg1: Internal.ItemStack_): Internal.List<Internal.Component>;
        canWalkOnPowderedSnow(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        playRightClickEquipSound(arg0: Internal.LivingEntity_, arg1: Internal.ItemStack_): void;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        hasCurioCapability(arg0: Internal.ItemStack_): boolean;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        getAttributeModifiers(arg0: Internal.SlotContext_, arg1: Internal.UUID_, arg2: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        curioTick(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        getDefaultTooltipHideFlags(arg0: Internal.ItemStack_): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getLootingBonus(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): number;
        getCreatorModId(arg0: Internal.ItemStack_): string;
        canContinueUsing(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getFoodProperties(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): Internal.FoodProperties;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canEquip(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_): boolean;
        onLeftClickEntity(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): boolean;
        makesPiglinsNeutral(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        removeAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_): void;
        handler$cbo000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        showAttributesTooltip(arg0: string, arg1: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getTagsTooltip(arg0: Internal.List_<Internal.Component>, arg1: Internal.ItemStack_): Internal.List<Internal.Component>;
        getCraftingRemainingItem(arg0: Internal.ItemStack_): Internal.ItemStack;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        onEquipFromUse(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        canUnequip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        damageItem<T extends Internal.LivingEntity>(arg0: Internal.ItemStack_, arg1: number, arg2: T, arg3: Internal.Consumer_<T>): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        writeSyncData(arg0: Internal.ItemStack_): Internal.CompoundTag;
        setAttackDamage(attackDamage: number): void;
        getAttributeModifiers(stack: Internal.ItemStack_, slot: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        arch$holder(): Internal.Holder<Internal.Item>;
        getArmorTexture(arg0: Internal.ItemStack_, arg1: Internal.Entity_, arg2: Internal.EquipmentSlot_, arg3: string): string;
        getAttributes(attribute: Internal.Attribute_): Internal.List<Internal.AttributeModifier>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioBreak(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        readSyncData(arg0: Internal.CompoundTag_, arg1: Internal.ItemStack_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canSync(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): boolean;
        setArmorToughness(armorToughness: number): void;
        getDescription(arg0: Internal.ItemStack_): Internal.Component;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getFortuneBonus(arg0: string, arg1: Internal.LivingEntity_, arg2: Internal.ItemStack_, arg3: number): number;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onEquip(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioTick(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        curioAnimate(arg0: string, arg1: number, arg2: Internal.LivingEntity_, arg3: Internal.ItemStack_): void;
        setDigSpeed(speed: number): void;
        readSyncData(arg0: Internal.SlotContext_, arg1: Internal.CompoundTag_, arg2: Internal.ItemStack_): void;
        setAttackSpeed(attackSpeed: number): void;
        writeSyncData(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): Internal.CompoundTag;
        getLootingLevel(arg0: Internal.SlotContext_, arg1: DamageSource_, arg2: Internal.LivingEntity_, arg3: number, arg4: Internal.ItemStack_): number;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        isEnderMask(arg0: Internal.SlotContext_, arg1: Internal.EnderMan_, arg2: Internal.ItemStack_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        canEquipFromUse(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        canRightClickEquip(arg0: Internal.ItemStack_): boolean;
        getFortuneLevel(arg0: Internal.SlotContext_, arg1: Internal.LootContext_, arg2: Internal.ItemStack_): number;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        getHighlightTip(arg0: Internal.ItemStack_, arg1: Internal.Component_): Internal.Component;
        getDescriptionLines(arg0: Internal.ItemStack_): Internal.List<Internal.Component>;
        canEquip(arg0: Internal.ItemStack_, arg1: Internal.EquipmentSlot_, arg2: Internal.Entity_): boolean;
        onUnequip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        onEquip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): void;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        curioBreak(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): void;
        getDamage(arg0: Internal.ItemStack_): number;
        readShareTag(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): void;
        getEquipmentSlot(arg0: Internal.ItemStack_): Internal.EquipmentSlot;
        getLightColor(player: Player_, stack: Internal.ItemStack_): Vector3f;
        arch$registryName(): ResourceLocation;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        createEntity(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: Internal.ItemStack_): Internal.Entity;
        makesPiglinsNeutral(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        setArmorProtection(armorProtection: number): void;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        getDropRule(arg0: Internal.SlotContext_, arg1: DamageSource_, arg2: number, arg3: boolean, arg4: Internal.ItemStack_): Internal.ICurio$DropRule;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAttributeModifiers(arg0: string, arg1: Internal.ItemStack_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        canEquip(arg0: Internal.SlotContext_, arg1: Internal.ItemStack_): boolean;
        get creativeTab(): string
        set attackDamage(attackDamage: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        set armorKnockbackResistance(knockbackResistance: number)
        get mod(): string
        set armorProtection(armorProtection: number)
    }
    type SimpleDescriptiveCurio_ = SimpleDescriptiveCurio;
    class MagicRangedAttribute extends Internal.RangedAttribute implements Internal.IMagicAttribute {
        constructor(arg0: string, arg1: number, arg2: number, arg3: number)
        toValueComponent(arg0: Internal.AttributeModifier$Operation_, arg1: number, arg2: Internal.TooltipFlag_): Internal.MutableComponent;
        static toValueComponent(arg0: Internal.Attribute_, arg1: Internal.AttributeModifier$Operation_, arg2: number, arg3: Internal.TooltipFlag_): Internal.MutableComponent;
        static toBaseComponent(arg0: Internal.Attribute_, arg1: number, arg2: number, arg3: boolean, arg4: Internal.TooltipFlag_): Internal.MutableComponent;
        toBaseComponent(arg0: number, arg1: number, arg2: boolean, arg3: Internal.TooltipFlag_): Internal.MutableComponent;
        static toComponent(arg0: Internal.Attribute_, arg1: Internal.AttributeModifier_, arg2: Internal.TooltipFlag_): Internal.MutableComponent;
        getDebugInfo(arg0: Internal.AttributeModifier_, arg1: Internal.TooltipFlag_): Internal.Component;
        addBonusTooltips(arg0: Internal.ItemStack_, arg1: Internal.Consumer_<Internal.Component>, arg2: Internal.TooltipFlag_): void;
        toComponent(arg0: Internal.AttributeModifier_, arg1: Internal.TooltipFlag_): Internal.MutableComponent;
        getBonusBaseValue(arg0: Internal.ItemStack_): number;
        ths(): Internal.Attribute;
        static isNullOrAddition(arg0: Internal.AttributeModifier$Operation_): boolean;
        getBaseUUID(): Internal.UUID;
        get baseUUID(): Internal.UUID
    }
    type MagicRangedAttribute_ = MagicRangedAttribute;
    class URI implements Internal.Comparable<Internal.URI>, Internal.Serializable {
        constructor(arg0: string, arg1: string, arg2: string)
        constructor(arg0: string, arg1: string, arg2: string, arg3: string)
        constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string)
        constructor(arg0: string, arg1: string, arg2: string, arg3: number, arg4: string, arg5: string, arg6: string)
        constructor(arg0: string)
        getQuery(): string;
        toURL(): Internal.URL;
        relativize(arg0: Internal.URI_): this;
        getPort(): number;
        getRawUserInfo(): string;
        compareTo(arg0: any): number;
        toASCIIString(): string;
        isOpaque(): boolean;
        getRawSchemeSpecificPart(): string;
        static create(arg0: string): Internal.URI;
        resolve(arg0: Internal.URI_): this;
        resolve(arg0: string): this;
        getPath(): string;
        getScheme(): string;
        compareTo(arg0: Internal.URI_): number;
        normalize(): this;
        getRawQuery(): string;
        getAuthority(): string;
        getUserInfo(): string;
        getSchemeSpecificPart(): string;
        parseServerAuthority(): this;
        getRawPath(): string;
        getFragment(): string;
        isAbsolute(): boolean;
        getRawAuthority(): string;
        getRawFragment(): string;
        getHost(): string;
        get query(): string
        get port(): number
        get rawUserInfo(): string
        get opaque(): boolean
        get rawSchemeSpecificPart(): string
        get path(): string
        get scheme(): string
        get rawQuery(): string
        get authority(): string
        get userInfo(): string
        get schemeSpecificPart(): string
        get rawPath(): string
        get fragment(): string
        get absolute(): boolean
        get rawAuthority(): string
        get rawFragment(): string
        get host(): string
    }
    type URI_ = URI;
    class AnimationMetadataSectionSerializer implements Internal.MetadataSectionSerializer<Internal.AnimationMetadataSection> {
        constructor()
        getMetadataSectionName(): string;
        fromJson(arg0: Internal.JsonObject_): any;
        get metadataSectionName(): string
    }
    type AnimationMetadataSectionSerializer_ = AnimationMetadataSectionSerializer;
    class DinosaurChopBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
        constructor(arg0: number, arg1: number)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        static getOutputSignal(arg0: number): number;
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
        static readonly BITES: Internal.IntegerProperty;
        readonly shapeMap: Internal.Map<Internal.BlockState, Internal.VoxelShape>;
        static readonly FACING: Internal.DirectionProperty;
    }
    type DinosaurChopBlock_ = DinosaurChopBlock;
    interface Functor$Mu extends Internal.Kind1$Mu {
    }
    type Functor$Mu_ = Functor$Mu;
    abstract class AbstractByteBuf extends Internal.ByteBuf {
        touch(arg0: any): Internal.ReferenceCounted;
        retain(): Internal.ReferenceCounted;
        retain(arg0: number): Internal.ReferenceCounted;
    }
    type AbstractByteBuf_ = AbstractByteBuf;
    class ModelBlockRenderer {
        constructor(arg0: Internal.BlockColors_)
        calculateShape(arg0: Internal.BlockAndTintGetter_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: number[], arg4: Internal.Direction_, arg5: number[], arg6: Internal.BitSet_): void;
        /**
         * @deprecated
        */
        tesselateWithAO(arg0: Internal.BlockAndTintGetter_, arg1: Internal.BakedModel_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.PoseStack_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: Internal.RandomSource_, arg8: number, arg9: number): void;
        renderModel(arg0: Internal.PoseStack$Pose_, arg1: Internal.VertexConsumer_, arg2: Internal.BlockState_, arg3: Internal.BakedModel_, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.ModelData_, arg10: Internal.RenderType_): void;
        static enableCaching(): void;
        /**
         * @deprecated
        */
        renderModel(arg0: Internal.PoseStack$Pose_, arg1: Internal.VertexConsumer_, arg2: Internal.BlockState_, arg3: Internal.BakedModel_, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        tesselateWithAO(arg0: Internal.BlockAndTintGetter_, arg1: Internal.BakedModel_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.PoseStack_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: Internal.RandomSource_, arg8: number, arg9: number, arg10: Internal.ModelData_, arg11: Internal.RenderType_): void;
        static clearCache(): void;
        /**
         * @deprecated
        */
        tesselateBlock(arg0: Internal.BlockAndTintGetter_, arg1: Internal.BakedModel_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.PoseStack_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: Internal.RandomSource_, arg8: number, arg9: number): void;
        /**
         * @deprecated
        */
        tesselateWithoutAO(arg0: Internal.BlockAndTintGetter_, arg1: Internal.BakedModel_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.PoseStack_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: Internal.RandomSource_, arg8: number, arg9: number): void;
        tesselateBlock(arg0: Internal.BlockAndTintGetter_, arg1: Internal.BakedModel_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.PoseStack_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: Internal.RandomSource_, arg8: number, arg9: number, arg10: Internal.ModelData_, arg11: Internal.RenderType_): void;
        tesselateWithoutAO(arg0: Internal.BlockAndTintGetter_, arg1: Internal.BakedModel_, arg2: Internal.BlockState_, arg3: BlockPos_, arg4: Internal.PoseStack_, arg5: Internal.VertexConsumer_, arg6: boolean, arg7: Internal.RandomSource_, arg8: number, arg9: number, arg10: Internal.ModelData_, arg11: Internal.RenderType_): void;
        static readonly CACHE: Internal.ThreadLocal<Internal.ModelBlockRenderer$Cache>;
        static readonly DIRECTIONS: Internal.Direction[];
    }
    type ModelBlockRenderer_ = ModelBlockRenderer;
    class FreezeEffect extends Internal.MobEffect {
        constructor(statusEffectCategory: Internal.MobEffectCategory_, color: number)
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type FreezeEffect_ = FreezeEffect;
    class ChatReportBuilder$Result extends Internal.Record {
        constructor(arg0: Internal.UUID_, arg1: Internal.AbuseReport_)
        id(): Internal.UUID;
        report(): Internal.AbuseReport;
    }
    type ChatReportBuilder$Result_ = ChatReportBuilder$Result;
    class InventoryMenu extends Internal.RecipeBookMenu<Internal.CraftingContainer> {
        constructor(arg0: Internal.Inventory_, arg1: boolean, arg2: Player_)
        static isHotbarSlot(arg0: number): boolean;
        static onEquipItem(arg0: Player_, arg1: Internal.EquipmentSlot_, arg2: Internal.ItemStack_, arg3: Internal.ItemStack_): void;
        getCraftSlots(): Internal.CraftingContainer;
        get craftSlots(): Internal.CraftingContainer
        static readonly EMPTY_ARMOR_SLOT_BOOTS: ResourceLocation;
        static readonly RESULT_SLOT: 0;
        static readonly CONTAINER_ID: 0;
        static readonly USE_ROW_SLOT_END: 45;
        static readonly USE_ROW_SLOT_START: 36;
        static readonly CRAFT_SLOT_END: 5;
        static readonly ARMOR_SLOT_END: 9;
        static readonly CRAFT_SLOT_START: 1;
        static readonly EMPTY_ARMOR_SLOT_SHIELD: ResourceLocation;
        static readonly EMPTY_ARMOR_SLOT_LEGGINGS: ResourceLocation;
        readonly owner: Player;
        static readonly EMPTY_ARMOR_SLOT_CHESTPLATE: ResourceLocation;
        static readonly TEXTURE_EMPTY_SLOTS: ResourceLocation[];
        static readonly SHIELD_SLOT: 45;
        readonly active: boolean;
        static readonly ARMOR_SLOT_START: 5;
        static readonly INV_SLOT_START: 9;
        static readonly INV_SLOT_END: 36;
        static readonly BLOCK_ATLAS: ResourceLocation;
        static readonly EMPTY_ARMOR_SLOT_HELMET: ResourceLocation;
    }
    type InventoryMenu_ = InventoryMenu;
    interface BooleanFunction <R> {
        abstract apply(arg0: boolean): R;
        (arg0: boolean): R;
    }
    type BooleanFunction_<R> = BooleanFunction<R>;
    interface NetworkHandlerExtensions {
        abstract getAddon(): Internal.AbstractNetworkAddon<any>;
        get addon(): Internal.AbstractNetworkAddon<any>
        (): Internal.AbstractNetworkAddon_<any>;
    }
    type NetworkHandlerExtensions_ = NetworkHandlerExtensions;
    class WallPlatformBlock extends Internal.HorizontalDirectionalBlock implements Internal.SimpleWaterloggedBlock {
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
        static readonly FACING: Internal.DirectionProperty;
    }
    type WallPlatformBlock_ = WallPlatformBlock;
    interface WrappedExecutable {
        getReturnType(): typeof any;
        construct(cx: Internal.Context_, scope: Internal.Scriptable_, args: any[]): any;
        isStatic(): boolean;
        unwrap(): Internal.Executable;
        abstract invoke(arg0: Internal.Context_, arg1: Internal.Scriptable_, arg2: any, arg3: any[]): any;
        get returnType(): typeof any
        get "static"(): boolean
        (arg0: Internal.Context, arg1: Internal.Scriptable, arg2: any, arg3: any[]): any;
    }
    type WrappedExecutable_ = WrappedExecutable;
    class Optional <T> {
        orElseThrow(): T;
        stream(): Internal.Stream<T>;
        ifPresent(arg0: Internal.Consumer_<T>): void;
        static empty<T>(): Internal.Optional<T>;
        orElseGet(arg0: Internal.Supplier_<T>): T;
        ifPresentOrElse(arg0: Internal.Consumer_<T>, arg1: Internal.Runnable_): void;
        isEmpty(): boolean;
        flatMap<U>(arg0: Internal.Function_<T, Internal.Optional<U>>): Internal.Optional<U>;
        static ofNullable<T>(arg0: T): Internal.Optional<T>;
        filter(arg0: Internal.Predicate_<T>): this;
        or(arg0: Internal.Supplier_<Internal.Optional<T>>): this;
        orElse(arg0: T): T;
        isPresent(): boolean;
        map<U>(arg0: Internal.Function_<T, U>): Internal.Optional<U>;
        orElseThrow<X extends Internal.Throwable>(arg0: Internal.Supplier_<X>): T;
        get(): T;
        static of<T>(arg0: T): Internal.Optional<T>;
        get empty(): boolean
        get present(): boolean
    }
    type Optional_<T> = Optional<T>;
    /**
     * @deprecated
    */
    class ReloadableServerResources {
        constructor(arg0: Internal.RegistryAccess$Frozen_, arg1: Internal.FeatureFlagSet_, arg2: Internal.Commands$CommandSelection_, arg3: number)
        handler$djk001$fabric_resource_conditions_api_v1$hookRefresh(dynamicRegistryManager: Internal.RegistryAccess_, ci: Internal.CallbackInfo_): void;
        getFunctionLibrary(): Internal.ServerFunctionLibrary;
        getRecipeManager(): Internal.RecipeManager;
        updateRegistryTags(arg0: Internal.RegistryAccess_): void;
        getLootData(): Internal.LootDataManager;
        static loadResources(arg0: Internal.ResourceManager_, arg1: Internal.RegistryAccess$Frozen_, arg2: Internal.FeatureFlagSet_, arg3: Internal.Commands$CommandSelection_, arg4: number, arg5: Internal.Executor_, arg6: Internal.Executor_): Internal.CompletableFuture<Internal.ReloadableServerResources>;
        getConditionContext(): Internal.ICondition$IContext;
        listeners(): Internal.List<Internal.PreparableReloadListener>;
        handler$dbh000$kubejs$updateRegistryTags(registryAccess: Internal.RegistryAccess_, ci: Internal.CallbackInfo_): void;
        handler$zeo000$placebo$listeners(arg0: Internal.CallbackInfoReturnable_<any>): void;
        getAdvancements(): Internal.ServerAdvancementManager;
        getCommands(): Internal.Commands;
        get functionLibrary(): Internal.ServerFunctionLibrary
        get recipeManager(): Internal.RecipeManager
        get lootData(): Internal.LootDataManager
        get conditionContext(): Internal.ICondition$IContext
        get advancements(): Internal.ServerAdvancementManager
        get commands(): Internal.Commands
        readonly tagManager: Internal.TagManager;
    }
    type ReloadableServerResources_ = ReloadableServerResources;
    interface DynamicLightHandler <T> {
        makeLivingEntityHandler<T extends Internal.LivingEntity>(handler: Internal.DynamicLightHandler_<T>): this;
        makeHandler<T extends Internal.LivingEntity>(luminance: Internal.Function_<T, number>, waterSensitive: Internal.Function_<T, boolean>): this;
        makeCreeperEntityHandler<T extends Internal.Creeper>(handler: Internal.DynamicLightHandler_<T>): this;
        abstract getLuminance(arg0: T): number;
        isWaterSensitive(lightSource: T): boolean;
        (arg0: T): number;
    }
    type DynamicLightHandler_<T> = DynamicLightHandler<T>;
    class Cataclysm_Wall_Skull_Block extends Internal.WallSkullBlock {
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
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        get equipSound(): Internal.SoundEvent
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
    }
    type Cataclysm_Wall_Skull_Block_ = Cataclysm_Wall_Skull_Block;
    interface TierAffixer {
        abstract InvCopy(): Internal.NonNullList<Internal.ItemStack>;
        abstract SetInvCopy(arg0: Internal.NonNullList_<Internal.ItemStack>): void;
        copyDefaultedList(arg0: Internal.NonNullList_<Internal.ItemStack>): Internal.NonNullList<Internal.ItemStack>;
        abstract player(): Internal.ServerPlayer;
    }
    type TierAffixer_ = TierAffixer;
    interface ChatDecorator {
        abstract decorate(arg0: Internal.ServerPlayer_, arg1: Internal.Component_): Internal.CompletableFuture<Internal.Component>;
        (arg0: Internal.ServerPlayer, arg1: Internal.Component): Internal.CompletableFuture_<Internal.Component>;
        readonly PLAIN: Internal.ChatDecorator;
    }
    type ChatDecorator_ = ChatDecorator;
    class AdvancementJS {
        constructor(a: Internal.Advancement_)
        addChild(a: Internal.AdvancementJS_): void;
        getId(): ResourceLocation;
        getDisplayText(): Internal.Component;
        getTitle(): Internal.Component;
        id(): ResourceLocation;
        hasDisplay(): boolean;
        getParent(): this;
        getDescription(): Internal.Component;
        getChildren(): Internal.Set<Internal.AdvancementJS>;
        get id(): ResourceLocation
        get displayText(): Internal.Component
        get title(): Internal.Component
        get parent(): Internal.AdvancementJS
        get description(): Internal.Component
        get children(): Internal.Set<Internal.AdvancementJS>
        readonly advancement: Internal.Advancement;
    }
    type AdvancementJS_ = AdvancementJS;
    interface NoiseGeneratorSettingsAccessor {
        abstract onSaveData(arg0: boolean): void;
        (arg0: boolean): void;
    }
    type NoiseGeneratorSettingsAccessor_ = NoiseGeneratorSettingsAccessor;
    class SparkTrailParticle$SparkData implements Internal.ParticleOptions {
        constructor(arg0: number, arg1: number, arg2: number)
        getR(): number;
        getB(): number;
        getType(): Internal.ParticleType<Internal.SparkTrailParticle$SparkData>;
        getG(): number;
        static CODEC(arg0: Internal.ParticleType_<Internal.SparkTrailParticle$SparkData>): Internal.Codec<Internal.SparkTrailParticle$SparkData>;
        writeToString(): string;
        writeToNetwork(arg0: Internal.FriendlyByteBuf_): void;
        get r(): number
        get b(): number
        get type(): Internal.ParticleType<Internal.SparkTrailParticle$SparkData>
        get g(): number
        static readonly DESERIALIZER: Internal.ParticleOptions$Deserializer<Internal.SparkTrailParticle$SparkData>;
    }
    type SparkTrailParticle$SparkData_ = SparkTrailParticle$SparkData;
    class BakedGeoModel extends Internal.Record implements Internal.CoreBakedGeoModel {
        constructor(topLevelBones: Internal.List_<Internal.GeoBone>, properties: Internal.ModelProperties_)
        properties(): Internal.ModelProperties;
        searchForChildBone(arg0: Internal.CoreGeoBone_, arg1: string): Internal.CoreGeoBone;
        getBone(arg0: string): Internal.Optional<Internal.GeoBone>;
        topLevelBones(): Internal.List<Internal.GeoBone>;
        getBones(): Internal.List<Internal.CoreGeoBone>;
        get bones(): Internal.List<Internal.CoreGeoBone>
    }
    type BakedGeoModel_ = BakedGeoModel;
    class SignBlockEntity extends Internal.BlockEntity {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        setText(arg0: Internal.SignText_, arg1: boolean): boolean;
        updateText(arg0: Internal.UnaryOperator_<Internal.SignText>, arg1: boolean): boolean;
        getMaxTextLineWidth(): number;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        getPlayerWhoMayEdit(): Internal.UUID;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        setWaxed(arg0: boolean): boolean;
        playerIsTooFarAwayToEdit(arg0: Internal.UUID_): boolean;
        createDefaultSignText(): Internal.SignText;
        serializeNBT(): Internal.Tag;
        onLoad(): void;
        updateSignText(arg0: Player_, arg1: boolean, arg2: Internal.List_<Internal.FilteredText>): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        canExecuteClickCommands(arg0: boolean, arg1: Player_): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        getTextFacingPlayer(arg0: Player_): Internal.SignText;
        getFrontText(): Internal.SignText;
        sdl$isDynamicLightEnabled(): boolean;
        isWaxed(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isFacingFrontText(arg0: Player_): boolean;
        getUpdatePacket(): Internal.ClientboundBlockEntityDataPacket;
        getText(arg0: boolean): Internal.SignText;
        getBackText(): Internal.SignText;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        getTextLineHeight(): number;
        static tick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.SignBlockEntity_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getModelData(): Internal.ModelData;
        executeClickCommandsIfPresent(arg0: Player_, arg1: Internal.Level_, arg2: BlockPos_, arg3: boolean): boolean;
        setAllowedPlayerEditor(arg0: Internal.UUID_): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        get maxTextLineWidth(): number
        get playerWhoMayEdit(): Internal.UUID
        set waxed(arg0: boolean)
        get frontText(): Internal.SignText
        get waxed(): boolean
        get updatePacket(): Internal.ClientboundBlockEntityDataPacket
        get backText(): Internal.SignText
        get textLineHeight(): number
        get modelData(): Internal.ModelData
        set allowedPlayerEditor(arg0: Internal.UUID_)
    }
    type SignBlockEntity_ = SignBlockEntity;
    class Hashtable <K, V> extends Internal.Dictionary<K, V> implements Internal.Cloneable, Internal.Map<K, V>, Internal.Serializable {
        constructor(arg0: Internal.Map_<K, V>)
        constructor()
        constructor(arg0: number)
        constructor(arg0: number, arg1: number)
        clone(): any;
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, V>): V;
        replace(arg0: K, arg1: V): V;
        containsValue(arg0: any): boolean;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, V, V>): V;
        static of<K, V>(): Internal.Map<K, V>;
        getOrDefault(arg0: any, arg1: V): V;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        keys(): Internal.Enumeration<K>;
        containsKey(arg0: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        put(arg0: K, arg1: V): V;
        get(arg0: any): V;
        remove(arg0: any): V;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        contains(arg0: any): boolean;
        elements(): Internal.Enumeration<V>;
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
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        replace(arg0: K, arg1: V, arg2: V): boolean;
        replaceAll(arg0: Internal.BiFunction_<K, V, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
    }
    type Hashtable_<K, V> = Hashtable<K, V>;
    interface ComponentContents {
        resolve(arg0: Internal.CommandSourceStack_, arg1: Internal.Entity_, arg2: number): Internal.MutableComponent;
        visit<T>(arg0: Internal.FormattedText$StyledContentConsumer_<T>, arg1: Internal.Style_): Internal.Optional<T>;
        visit<T>(arg0: Internal.FormattedText$ContentConsumer_<T>): Internal.Optional<T>;
        readonly EMPTY: Internal.ComponentContents;
    }
    type ComponentContents_ = ComponentContents;
    class VideoMode {
        constructor(arg0: any_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
        constructor(arg0: any_)
        static read(arg0: string): Internal.Optional<Internal.VideoMode>;
        getRedBits(): number;
        getWidth(): number;
        getBlueBits(): number;
        write(): string;
        getHeight(): number;
        getGreenBits(): number;
        getRefreshRate(): number;
        get redBits(): number
        get width(): number
        get blueBits(): number
        get height(): number
        get greenBits(): number
        get refreshRate(): number
    }
    type VideoMode_ = VideoMode;
}
declare namespace org.objectweb.asm {
    class Type {
        getOpcode(arg0: number): number;
        getSort(): number;
        getClassName(): string;
        getDescriptor(): string;
        static getDescriptor(arg0: typeof any): string;
        static getArgumentCount(arg0: string): number;
        getSize(): number;
        static getConstructorDescriptor(arg0: Internal.Constructor_<any>): string;
        getDimensions(): number;
        static getType(arg0: Internal.Constructor_<any>): org.objectweb.asm.Type;
        static getInternalName(arg0: typeof any): string;
        static getType(arg0: typeof any): org.objectweb.asm.Type;
        getElementType(): this;
        getArgumentCount(): number;
        static getMethodType(arg0: org.objectweb.asm.Type_, ...arg1: org.objectweb.asm.Type_[]): org.objectweb.asm.Type;
        static getMethodDescriptor(arg0: org.objectweb.asm.Type_, ...arg1: org.objectweb.asm.Type_[]): string;
        static getReturnType(arg0: Internal.Method_): org.objectweb.asm.Type;
        getInternalName(): string;
        static getReturnType(arg0: string): org.objectweb.asm.Type;
        getArgumentTypes(): org.objectweb.asm.Type[];
        static getObjectType(arg0: string): org.objectweb.asm.Type;
        static getMethodType(arg0: string): org.objectweb.asm.Type;
        getArgumentsAndReturnSizes(): number;
        static getMethodDescriptor(arg0: Internal.Method_): string;
        static getType(arg0: Internal.Method_): org.objectweb.asm.Type;
        static getArgumentTypes(arg0: string): org.objectweb.asm.Type[];
        getReturnType(): this;
        static getType(arg0: string): org.objectweb.asm.Type;
        static getArgumentsAndReturnSizes(arg0: string): number;
        static getArgumentTypes(arg0: Internal.Method_): org.objectweb.asm.Type[];
        get sort(): number
        get className(): string
        get descriptor(): string
        get size(): number
        get dimensions(): number
        get elementType(): org.objectweb.asm.Type
        get argumentCount(): number
        get internalName(): string
        get argumentTypes(): org.objectweb.asm.Type[]
        get argumentsAndReturnSizes(): number
        get returnType(): org.objectweb.asm.Type
        static readonly ARRAY: 9;
        static readonly VOID_TYPE: org.objectweb.asm.Type;
        static readonly INT: 5;
        static readonly LONG: 7;
        static readonly SHORT_TYPE: org.objectweb.asm.Type;
        static readonly INT_TYPE: org.objectweb.asm.Type;
        static readonly CHAR: 2;
        static readonly BYTE: 3;
        static readonly CHAR_TYPE: org.objectweb.asm.Type;
        static readonly SHORT: 4;
        static readonly METHOD: 11;
        static readonly OBJECT: 10;
        static readonly BYTE_TYPE: org.objectweb.asm.Type;
        static readonly LONG_TYPE: org.objectweb.asm.Type;
        static readonly VOID: 0;
        static readonly FLOAT: 6;
        static readonly DOUBLE: 8;
        static readonly FLOAT_TYPE: org.objectweb.asm.Type;
        static readonly DOUBLE_TYPE: org.objectweb.asm.Type;
        static readonly BOOLEAN_TYPE: org.objectweb.asm.Type;
        static readonly BOOLEAN: 1;
    }
    type Type_ = Type;
}
declare namespace io.github.edwinmindcraft.apoli.common.condition.item {
    class NbtCondition extends Internal.ItemCondition<Internal.FieldConfiguration<Internal.CompoundTag>> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type NbtCondition_ = NbtCondition;
}
