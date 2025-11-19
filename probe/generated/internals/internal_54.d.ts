/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class ShadowstingSwordItem extends Internal.UniqueSwordItem {
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
    type ShadowstingSwordItem_ = ShadowstingSwordItem;
    class AttackIndicatorStatus extends Internal.Enum<Internal.AttackIndicatorStatus> implements Internal.OptionEnum {
        getKey(): string;
        static valueOf(arg0: string): Internal.AttackIndicatorStatus;
        static values(): Internal.AttackIndicatorStatus[];
        getCaption(): Internal.Component;
        static byId(arg0: number): Internal.AttackIndicatorStatus;
        getId(): number;
        get key(): string
        get caption(): Internal.Component
        get id(): number
        static readonly CROSSHAIR: Internal.AttackIndicatorStatus;
        static readonly OFF: Internal.AttackIndicatorStatus;
        static readonly HOTBAR: Internal.AttackIndicatorStatus;
    }
    type AttackIndicatorStatus_ = "hotbar" | "crosshair" | AttackIndicatorStatus | "off";
    class CoderResult {
        isMalformed(): boolean;
        isUnderflow(): boolean;
        static malformedForLength(arg0: number): Internal.CoderResult;
        isError(): boolean;
        isUnmappable(): boolean;
        isOverflow(): boolean;
        throwException(): void;
        static unmappableForLength(arg0: number): Internal.CoderResult;
        length(): number;
        get malformed(): boolean
        get underflow(): boolean
        get error(): boolean
        get unmappable(): boolean
        get overflow(): boolean
        static readonly UNDERFLOW: Internal.CoderResult;
        static readonly OVERFLOW: Internal.CoderResult;
    }
    type CoderResult_ = CoderResult;
    class DarkOakFoliagePlacer extends Internal.FoliagePlacer {
        constructor(arg0: Internal.IntProvider_, arg1: Internal.IntProvider_)
        static readonly CODEC: Internal.Codec<Internal.DarkOakFoliagePlacer>;
    }
    type DarkOakFoliagePlacer_ = DarkOakFoliagePlacer;
    class SlotTypeReference extends Internal.Record {
        constructor(slotName: string)
        get(isClientSide: boolean): Internal.SlotType;
        get(level: Internal.Level_): Internal.SlotType;
        slotName(): string;
    }
    type SlotTypeReference_ = SlotTypeReference;
    class TreeFromStructureNBTFeature extends Internal.Feature<Internal.TreeFromStructureNBTConfig> {
        constructor($$0: Internal.Codec_<Internal.TreeFromStructureNBTConfig>)
        static rotateInDirectionAroundOrigin(pos: BlockPos_, origin: BlockPos_, direction: Internal.Direction_): BlockPos;
        static noTreePartPresent(location: ResourceLocation_): Internal.IllegalArgumentException;
        static placeLogsWithRotation(logProvider: Internal.BlockStateProvider_, level: Internal.WorldGenLevel_, random: Internal.RandomSource_, origin: BlockPos_, placeSettings: Internal.StructurePlaceSettings_, centerOffset: BlockPos_, logs: Internal.List_<Internal.StructureTemplate$StructureBlockInfo>, trunkPositions: Internal.Map_<BlockPos, Internal.BlockState>, treeGrowthDirection: Internal.Direction_): void;
        static isOnGround(maxLogDepth: number, level: Internal.WorldGenLevel_, pos: BlockPos_, growableOn: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, treeGrowthDirection: Internal.Direction_): boolean;
        static fillTrunkPositions(logProvider: Internal.BlockStateProvider_, leavesProvider: Internal.BlockStateProvider_, config: Internal.TreeFromStructureNBTConfig_, level: Internal.WorldGenLevel_, randomSource: Internal.RandomSource_, origin: BlockPos_, placeSettings: Internal.StructurePlaceSettings_, trunkBasePalette: Internal.StructureTemplate$Palette_, centerOffset: BlockPos_, logs: Internal.List_<Internal.StructureTemplate$StructureBlockInfo>, logBuilders: Internal.List_<Internal.StructureTemplate$StructureBlockInfo>, leavePositions: Internal.Map_<BlockPos, Internal.BlockState>, trunkPositions: Internal.Map_<BlockPos, Internal.BlockState>, additionalBlocks: Internal.Map_<BlockPos, Internal.BlockState>, maxTrunkBuildingDepth: number, treeGrowthDirection: Internal.Direction_): void;
        static getTransformedState(modifiedPos: BlockPos_, state: Internal.BlockState_, nbtState: Internal.BlockState_, rotation: Internal.Rotation_, level: Internal.WorldGenLevel_, directionOfGrowth: Internal.Direction_): Internal.BlockState;
        static placeLeavesWithCalculatedDistanceAndRotation(leavesProvider: Internal.BlockStateProvider_, level: Internal.WorldGenLevel_, origin: BlockPos_, random: Internal.RandomSource_, placeSettings: Internal.StructurePlaceSettings_, leaves: Internal.List_<Internal.StructureTemplate$StructureBlockInfo>, leavePositions: Internal.Map_<BlockPos, Internal.BlockState>, canopyCenterOffset: BlockPos_, leavesPlacementFilter: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, treeGrowthDirection: Internal.Direction_): void;
        static intersectTrunk(logProvider: Internal.BlockStateProvider_, level: Internal.WorldGenLevel_, random: Internal.RandomSource_, origin: BlockPos_, placeSettings: Internal.StructurePlaceSettings_, centerOffset: BlockPos_, logBuilders: Internal.List_<Internal.StructureTemplate$StructureBlockInfo>, maxTrunkBuildingDepth: number, trunkPositions: Internal.Map_<BlockPos, Internal.BlockState>, treeGrowthDirection: Internal.Direction_): boolean;
        static fillCanopyPositions(logProvider: Internal.BlockStateProvider_, leavesProvider: Internal.BlockStateProvider_, config: Internal.TreeFromStructureNBTConfig_, level: Internal.WorldGenLevel_, randomSource: Internal.RandomSource_, origin: BlockPos_, placeSettings: Internal.StructurePlaceSettings_, randomCanopyPalette: Internal.StructureTemplate$Palette_, leavePositions: Internal.Map_<BlockPos, Internal.BlockState>, trunkPositions: Internal.Map_<BlockPos, Internal.BlockState>, additionalBlocks: Internal.Map_<BlockPos, Internal.BlockState>, trunkLength: number, treeGrowthDirection: Internal.Direction_): boolean;
        static placeTreeDecorations(treeDecorators: Internal.Iterable_<Internal.TreeDecorator>, level: Internal.WorldGenLevel_, random: Internal.RandomSource_, leavePositions: Internal.Set_<BlockPos>, trunkPositions: Internal.Set_<BlockPos>, decorationPositions: Internal.Set_<BlockPos>): void;
        static fillLogsUnder(logProvider: Internal.BlockStateProvider_, level: Internal.WorldGenLevel_, random: Internal.RandomSource_, origin: BlockPos_, placeSettings: Internal.StructurePlaceSettings_, centerOffset: BlockPos_, logBuilders: Internal.List_<Internal.StructureTemplate$StructureBlockInfo>, maxTrunkBuildingDepth: number, groundFilter: net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate_, trunkPositions: Internal.Map_<BlockPos, Internal.BlockState>, treeGrowthDirection: Internal.Direction_): void;
        static getModifiedPos(settings: Internal.StructurePlaceSettings_, placing: Internal.StructureTemplate$StructureBlockInfo_, partCenter: BlockPos_, featureOrigin: BlockPos_): BlockPos;
        static getStructureInfosInStructurePalletteFromBlockList(blocks: Internal.Iterable_<Internal.Block>, palette: Internal.StructureTemplate$Palette_): Internal.List<Internal.StructureTemplate$StructureBlockInfo>;
        static readonly BLOCK_STATE_MODIFIERS: [any, any, any, any];
    }
    type TreeFromStructureNBTFeature_ = TreeFromStructureNBTFeature;
    abstract class HttpAuthenticationService extends Internal.BaseAuthenticationService {
        static constantURL(arg0: string): Internal.URL;
        static concatenateURL(arg0: Internal.URL_, arg1: string): Internal.URL;
        static buildQuery(arg0: Internal.Map_<string, any>): string;
        performGetRequest(arg0: Internal.URL_): string;
        performPostRequest(arg0: Internal.URL_, arg1: string, arg2: string): string;
        getProxy(): Internal.Proxy;
        performGetRequest(arg0: Internal.URL_, arg1: string): string;
        get proxy(): Internal.Proxy
    }
    type HttpAuthenticationService_ = HttpAuthenticationService;
    class ContextUtils$Vec3Context {
        constructor(vec3: Vec3d_, entity: Internal.LivingEntity_)
        /**
         * The Travel Vector of the entity.
        */
        readonly vec3: Vec3d;
        /**
         * The entity undergoing movement
        */
        readonly entity: Internal.LivingEntity;
    }
    type ContextUtils$Vec3Context_ = ContextUtils$Vec3Context;
    class BaseCoralFanBlock extends Internal.BaseCoralPlantTypeBlock {
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
    }
    type BaseCoralFanBlock_ = BaseCoralFanBlock;
    interface BiomeManager$NoiseBiomeSource {
        abstract getNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        (arg0: number, arg1: number, arg2: number): Internal.Holder_<Internal.Biome>;
    }
    type BiomeManager$NoiseBiomeSource_ = BiomeManager$NoiseBiomeSource;
    interface IRegistryJS {
        abstract createCustom(id: string, entityClass: typeof Internal.LivingEntity, consumer: Internal.Consumer_<Internal.ModifyEntityBuilder>): Internal.CustomEntityBuilder;
        (id: string, entityClass: typeof Internal.LivingEntity, consumer: Internal.Consumer<Internal.ModifyEntityBuilder>): Internal.CustomEntityBuilder_;
    }
    type IRegistryJS_ = IRegistryJS;
    interface VillagerEntityAccessor {
        fabric_setGatherableItems(items: Internal.Set_<Internal.Item>): void;
        fabric_setItemFoodValues(items: Internal.Map_<Internal.Item, number>): void;
        fabric_getGatherableItems(): Internal.Set<Internal.Item>;
    }
    type VillagerEntityAccessor_ = VillagerEntityAccessor;
    class Scoreboard {
        constructor()
        getPlayersTeam(arg0: string): Internal.PlayerTeam;
        getPlayerScores(arg0: Internal.Objective_): Internal.Collection<Internal.Score>;
        getDisplayObjective(arg0: number): Internal.Objective;
        hasPlayerScore(arg0: string, arg1: Internal.Objective_): boolean;
        savePlayerScores(): Internal.ListTag;
        onTeamAdded(arg0: Internal.PlayerTeam_): void;
        removePlayerFromTeam(arg0: string, arg1: Internal.PlayerTeam_): void;
        loadPlayerScores(arg0: Internal.ListTag_): void;
        removePlayerTeam(arg0: Internal.PlayerTeam_): void;
        static getDisplaySlotName(arg0: number): string;
        static getDisplaySlotByName(arg0: string): number;
        onObjectiveChanged(arg0: Internal.Objective_): void;
        onObjectiveAdded(arg0: Internal.Objective_): void;
        onScoreChanged(arg0: Internal.Score_): void;
        onPlayerRemoved(arg0: string): void;
        removeObjective(arg0: Internal.Objective_): void;
        addObjective(arg0: string, arg1: Internal.ObjectiveCriteria_, arg2: Internal.Component_, arg3: Internal.ObjectiveCriteria$RenderType_): Internal.Objective;
        getPlayerScores(arg0: string): Internal.Map<Internal.Objective, Internal.Score>;
        forAllObjectives(arg0: Internal.ObjectiveCriteria_, arg1: string, arg2: Internal.Consumer_<Internal.Score>): void;
        onTeamRemoved(arg0: Internal.PlayerTeam_): void;
        removePlayerFromTeam(arg0: string): boolean;
        getOrCreateObjective(arg0: string): Internal.Objective;
        addPlayerTeam(arg0: string): Internal.PlayerTeam;
        onTeamChanged(arg0: Internal.PlayerTeam_): void;
        getPlayerTeam(arg0: string): Internal.PlayerTeam;
        getObjectives(): Internal.Collection<Internal.Objective>;
        resetPlayerScore(arg0: string, arg1: Internal.Objective_): void;
        entityRemoved(arg0: Internal.Entity_): void;
        onPlayerScoreRemoved(arg0: string, arg1: Internal.Objective_): void;
        addPlayerToTeam(arg0: string, arg1: Internal.PlayerTeam_): boolean;
        hasObjective(arg0: string): boolean;
        getOrCreatePlayerScore(arg0: string, arg1: Internal.Objective_): Internal.Score;
        getPlayerTeams(): Internal.Collection<Internal.PlayerTeam>;
        getObjectiveNames(): Internal.Collection<string>;
        getTrackedPlayers(): Internal.Collection<string>;
        getTeamNames(): Internal.Collection<string>;
        onObjectiveRemoved(arg0: Internal.Objective_): void;
        static getDisplaySlotNames(): string[];
        setDisplayObjective(arg0: number, arg1: Internal.Objective_): void;
        getObjective(arg0: string): Internal.Objective;
        get objectives(): Internal.Collection<Internal.Objective>
        get playerTeams(): Internal.Collection<Internal.PlayerTeam>
        get objectiveNames(): Internal.Collection<string>
        get trackedPlayers(): Internal.Collection<string>
        get teamNames(): Internal.Collection<string>
        get displaySlotNames(): string[]
        static readonly DISPLAY_SLOTS: 19;
        static readonly DISPLAY_SLOT_TEAMS_SIDEBAR_END: 18;
        static readonly DISPLAY_SLOT_SIDEBAR: 1;
        static readonly DISPLAY_SLOT_TEAMS_SIDEBAR_START: 3;
        static readonly DISPLAY_SLOT_BELOW_NAME: 2;
        static readonly DISPLAY_SLOT_LIST: 0;
    }
    type Scoreboard_ = Scoreboard;
    class NamedPackage {
    }
    type NamedPackage_ = NamedPackage;
    class HandshakeMessages$S2CRegistry extends Internal.HandshakeMessages$LoginIndexedMessage {
        constructor(arg0: ResourceLocation_, arg1: Internal.ForgeRegistry$Snapshot_)
        getSnapshot(): Internal.ForgeRegistry$Snapshot;
        hasSnapshot(): boolean;
        static decode(arg0: Internal.FriendlyByteBuf_): Internal.HandshakeMessages$S2CRegistry;
        getRegistryName(): ResourceLocation;
        get snapshot(): Internal.ForgeRegistry$Snapshot
        get registryName(): ResourceLocation
    }
    type HandshakeMessages$S2CRegistry_ = HandshakeMessages$S2CRegistry;
    interface TagEntry$Lookup <T> {
        abstract tag(arg0: ResourceLocation_): Internal.Collection<T>;
        abstract element(arg0: ResourceLocation_): T;
    }
    type TagEntry$Lookup_<T> = TagEntry$Lookup<T>;
    abstract class GrowingPlantBlock extends Internal.Block {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.Direction_, arg2: Internal.VoxelShape_, arg3: boolean)
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
        canAttachTo(arg0: Internal.BlockState_): boolean;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getStateForPlacement(arg0: Internal.LevelAccessor_): Internal.BlockState;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        abstract getBodyBlock(): Internal.Block;
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
        abstract getHeadBlock(): Internal.GrowingPlantHeadBlock;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get bodyBlock(): Internal.Block
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get headBlock(): Internal.GrowingPlantHeadBlock
        readonly shape: Internal.VoxelShape;
        readonly scheduleFluidTicks: boolean;
        readonly growthDirection: Internal.Direction;
    }
    type GrowingPlantBlock_ = GrowingPlantBlock;
    class ViewportEvent$ComputeFov extends Internal.ViewportEvent {
        constructor()
        constructor(arg0: Internal.GameRenderer_, arg1: Internal.Camera_, arg2: number, arg3: number, arg4: boolean)
        setFOV(arg0: number): void;
        usedConfiguredFov(): boolean;
        getFOV(): number;
        set FOV(arg0: number)
        get FOV(): number
    }
    type ViewportEvent$ComputeFov_ = ViewportEvent$ComputeFov;
    class ContextUtils$PartEntityParams <T extends Internal.LivingEntity> {
        constructor(name: string, width: number, height: number, builder: Internal.PartBuilder_<T>)
        readonly name: string;
        readonly width: number;
        readonly builder: Internal.PartBuilder<T>;
        readonly height: number;
    }
    type ContextUtils$PartEntityParams_<T extends Internal.LivingEntity> = ContextUtils$PartEntityParams<T>;
    abstract class Format implements Internal.Cloneable, Internal.Serializable {
        clone(): any;
        abstract format(arg0: any, arg1: Internal.StringBuffer_, arg2: Internal.FieldPosition_): Internal.StringBuffer;
        formatToCharacterIterator(arg0: any): Internal.AttributedCharacterIterator;
        parseObject(arg0: string): any;
        abstract parseObject(arg0: string, arg1: Internal.ParsePosition_): any;
        format(arg0: any): string;
    }
    type Format_ = Format;
    class TrapDoorBlock extends Internal.HorizontalDirectionalBlock implements Internal.SimpleWaterloggedBlock {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.BlockSetType_)
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
        playSound(arg0: Player_, arg1: Internal.Level_, arg2: BlockPos_, arg3: boolean): void;
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
        static readonly NORTH_OPEN_AABB: Internal.ArrayVoxelShape;
        static readonly HALF: Internal.EnumProperty<Internal.Half>;
        static readonly WEST_OPEN_AABB: Internal.ArrayVoxelShape;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly EAST_OPEN_AABB: Internal.ArrayVoxelShape;
        static readonly SOUTH_OPEN_AABB: Internal.ArrayVoxelShape;
        static readonly BOTTOM_AABB: Internal.ArrayVoxelShape;
        static readonly TOP_AABB: Internal.ArrayVoxelShape;
        static readonly OPEN: Internal.BooleanProperty;
        static readonly AABB_THICKNESS: 3;
        static readonly POWERED: Internal.BooleanProperty;
    }
    type TrapDoorBlock_ = TrapDoorBlock;
    class ConfiguredItemCondition <C extends Internal.IDynamicFeatureConfiguration, F extends Internal.ItemCondition<C>> extends Internal.ConfiguredCondition<C, F, Internal.ConfiguredItemCondition<any, any>> {
        constructor(arg0: Internal.Supplier_<F>, arg1: C, arg2: Internal.ConditionData_)
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        static optional(arg0: string, arg1: ResourceLocation_): Internal.MapCodec<Internal.Holder<Internal.ConfiguredItemCondition<any, any>>>;
        static required(arg0: string): Internal.MapCodec<Internal.Holder<Internal.ConfiguredItemCondition<any, any>>>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        static check(arg0: Internal.Holder_<Internal.ConfiguredItemCondition<any, any>>, arg1: Internal.Level_, arg2: Internal.ItemStack_): boolean;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        check(arg0: Internal.Level_, arg1: Internal.ItemStack_): boolean;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        static optional(arg0: string, arg1: Internal.ResourceKey_<Internal.ConfiguredItemCondition<any, any>>): Internal.MapCodec<Internal.Holder<Internal.ConfiguredItemCondition<any, any>>>;
        getUnbound(): Internal.List<string>;
        getMissingBinds(): Internal.List<string>;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        static optional(arg0: string): Internal.MapCodec<Internal.Holder<Internal.ConfiguredItemCondition<any, any>>>;
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        static readonly CODEC_SET: Internal.CodecSet<Internal.ConfiguredItemCondition<any, any>>;
        static readonly HOLDER: Internal.Codec<Internal.Holder<Internal.ConfiguredItemCondition<any, any>>>;
        static readonly CODEC: Internal.Codec<Internal.ConfiguredItemCondition<any, any>>;
    }
    type ConfiguredItemCondition_<C extends Internal.IDynamicFeatureConfiguration, F extends Internal.ItemCondition<C>> = Special.ConfiguredItemCondition | ConfiguredItemCondition<C, F>;
    class AbstractArrow$Pickup extends Internal.Enum<Internal.AbstractArrow$Pickup> {
        static values(): Internal.AbstractArrow$Pickup[];
        static byOrdinal(arg0: number): Internal.AbstractArrow$Pickup;
        static valueOf(arg0: string): Internal.AbstractArrow$Pickup;
        static readonly DISALLOWED: Internal.AbstractArrow$Pickup;
        static readonly ALLOWED: Internal.AbstractArrow$Pickup;
        static readonly CREATIVE_ONLY: Internal.AbstractArrow$Pickup;
    }
    type AbstractArrow$Pickup_ = "allowed" | "disallowed" | "creative_only" | AbstractArrow$Pickup;
    class VertexFormatElement {
        constructor(arg0: number, arg1: Internal.VertexFormatElement$Type_, arg2: Internal.VertexFormatElement$Usage_, arg3: number)
        getType(): Internal.VertexFormatElement$Type;
        getByteSize(): number;
        getCount(): number;
        getElementCount(): number;
        getUsage(): Internal.VertexFormatElement$Usage;
        getIndex(): number;
        setupBufferState(arg0: number, arg1: number, arg2: number): void;
        isPosition(): boolean;
        clearBufferState(arg0: number): void;
        get type(): Internal.VertexFormatElement$Type
        get byteSize(): number
        get count(): number
        get elementCount(): number
        get usage(): Internal.VertexFormatElement$Usage
        get index(): number
        get position(): boolean
    }
    type VertexFormatElement_ = VertexFormatElement;
    class SnifferEggBlock extends Internal.Block {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        getHatchLevel(arg0: Internal.BlockState_): number;
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        supportsExternalFaceHiding(arg0: Internal.BlockState_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        isFertile(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        collisionExtendsVertically(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        canBeHydrated(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.FluidState_, arg4: BlockPos_): boolean;
        getWeakChanges(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): boolean;
        onBlockStateChange(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.BlockState_): void;
        static hatchBoost(arg0: Internal.BlockGetter_, arg1: BlockPos_): boolean;
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
        static readonly MAX_HATCH_LEVEL: 2;
        static readonly HATCH: Internal.IntegerProperty;
    }
    type SnifferEggBlock_ = SnifferEggBlock;
    class CanyonWorldCarver extends Internal.WorldCarver<Internal.CanyonCarverConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.CanyonCarverConfiguration>)
        isStartChunk(arg0: Internal.CanyonCarverConfiguration_, arg1: Internal.RandomSource_): boolean;
        carve(arg0: Internal.CarvingContext_, arg1: Internal.CanyonCarverConfiguration_, arg2: Internal.ChunkAccess_, arg3: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg4: Internal.RandomSource_, arg5: Internal.Aquifer_, arg6: Internal.ChunkPos_, arg7: Internal.CarvingMask_): boolean;
    }
    type CanyonWorldCarver_ = CanyonWorldCarver;
    class ResourceContainer <T, C extends Widget> extends WidgetGroup {
        constructor(resource: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<T>, panel: Internal.ResourcePanel_)
        getWidgetSupplier(): Internal.Function<Internal.Either<string, Internal.File>, C>;
        getResource(): com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource<T>;
        static deserializeNBT(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): void;
        getTranslateKey(): string;
        setCanGlobalChange(canGlobalChange: Internal.Predicate_<Internal.Either<string, Internal.File>>): this;
        getSelected(): Internal.Either<string, Internal.File>;
        setOnEdit(onEdit: Internal.Consumer_<Internal.Either<string, Internal.File>>): this;
        setRenamePredicate(renamePredicate: Internal.Predicate_<string>): this;
        handleDragging(dragging: any): boolean;
        setDragging<D>(draggingMapping: Internal.Function_<Internal.Either<string, Internal.File>, D>, draggingRenderer: Internal.TriFunction_<Internal.Either<string, Internal.File>, D, GuiPos, Internal.IGuiTexture>): this;
        setDragging<D>(draggingMapping: Internal.Function_<Internal.Either<string, Internal.File>, D>, draggingRenderer: Internal.Function_<D, Internal.IGuiTexture>): this;
        setCanEdit(canEdit: Internal.Predicate_<Internal.Either<string, Internal.File>>): this;
        getChatComponent(): Internal.Component;
        setCanRemove(canRemove: Internal.Predicate_<Internal.Either<string, Internal.File>>): this;
        getPanel(): Internal.ResourcePanel;
        static deserializeWrapper(tag: Internal.CompoundTag_): Internal.IConfigurableWidget;
        setWidgetSupplier(widgetSupplier: Internal.Function_<Internal.Either<string, Internal.File>, C>): this;
        isLDLRegister(): boolean;
        serializeWrapper(): Internal.CompoundTag;
        setOnRemove(onRemove: Internal.Consumer_<Internal.Either<string, Internal.File>>): this;
        setOnAdd(onAdd: Internal.Function_<string, T>): this;
        canDragIn(dragging: any): boolean;
        reBuild(): void;
        setClientSideWidget(): Widget;
        static serializeNBT(widget: Internal.IConfigurableWidget_, resources: Internal.Resources_, isProject: boolean): Internal.CompoundTag;
        setOnGlobalChange(onGlobalChange: Internal.Consumer_<Internal.Either<string, Internal.File>>): this;
        widget(): Widget;
        name(): string;
        setOnMenu(onMenu: Internal.BiConsumer_<Internal.Either<string, Internal.File>, Internal.TreeBuilder$Menu>): this;
        static serializeNBT(widget: Internal.IConfigurableWidget_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): Internal.CompoundTag;
        getRegisterUI(): Internal.LDLRegister;
        static deserializeNBT(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: Internal.Resources_, isProject: boolean): void;
        group(): string;
        setNameSupplier(nameSupplier: Internal.Supplier_<string>): this;
        getWidgets(): Internal.Map<Internal.Either<string, Internal.File>, C>;
        get widgetSupplier(): Internal.Function<Internal.Either<string, Internal.File>, C>
        get resource(): com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource<T>
        get translateKey(): string
        set canGlobalChange(canGlobalChange: Internal.Predicate_<Internal.Either<string, Internal.File>>)
        get selected(): Internal.Either<string, Internal.File>
        set onEdit(onEdit: Internal.Consumer_<Internal.Either<string, Internal.File>>)
        set renamePredicate(renamePredicate: Internal.Predicate_<string>)
        set canEdit(canEdit: Internal.Predicate_<Internal.Either<string, Internal.File>>)
        get chatComponent(): Internal.Component
        set canRemove(canRemove: Internal.Predicate_<Internal.Either<string, Internal.File>>)
        get panel(): Internal.ResourcePanel
        set widgetSupplier(widgetSupplier: Internal.Function_<Internal.Either<string, Internal.File>, C>)
        get LDLRegister(): boolean
        set onRemove(onRemove: Internal.Consumer_<Internal.Either<string, Internal.File>>)
        set onAdd(onAdd: Internal.Function_<string, T>)
        set onGlobalChange(onGlobalChange: Internal.Consumer_<Internal.Either<string, Internal.File>>)
        set onMenu(onMenu: Internal.BiConsumer_<Internal.Either<string, Internal.File>, Internal.TreeBuilder$Menu>)
        get registerUI(): Internal.LDLRegister
        set nameSupplier(nameSupplier: Internal.Supplier_<string>)
        get widgets(): Internal.Map<Internal.Either<string, Internal.File>, C>
    }
    type ResourceContainer_<T, C extends Widget> = ResourceContainer<T, C>;
    class SchoolTypeJSBuilder extends Internal.BuilderBase<Internal.SchoolType> {
        constructor(i: ResourceLocation_)
        /**
         *         Sets the name of the school. It requires a `Component`, which allows custom colors and formatting. You can also use `Text`.
        */
        setName(name: Internal.Component_): this;
        /**
         *         Sets the power attribute of the school. It takes either a String, ResourceLocation, or just an Attribute.
        */
        setPowerAttribute(powerAttribute: Internal.ISSKJSUtils$AttributeHolder_): this;
        /**
         *         Sets the ID of the item tag used for the focus item.
         *         Focus items need the `"irons_spellbooks:school_focus"` tag, as well as the tag specified here.
        */
        setFocus(focus: ResourceLocation_): this;
        /**
         *         Sets the default cast sound of the school. It takes either a String, ResourceLocation, or just a SoundEvent.
        */
        setDefaultCastSound(defaultCastSound: Internal.ISSKJSUtils$SoundEventHolder_): this;
        /**
         *         Sets the damage type of the school. It takes either a String, ResourceLocation, or just a DamageType.
         *         Damage types can be created using datapacks or server scripts, or you can use an existing damage type.
        */
        setDamageType(damageType: Internal.ISSKJSUtils$DamageTypeHolder_): this;
        getRegistryType(): Internal.RegistryInfo<Internal.SchoolType>;
        /**
         *         Sets the resistance attribute of the school. It takes either a String, ResourceLocation, or just an Attribute.
        */
        setResistanceAttribute(resistanceAttribute: Internal.ISSKJSUtils$AttributeHolder_): this;
        createObject(): Internal.SchoolType;
        /**
         *         Sets the name of the school. It requires a `Component`, which allows custom colors and formatting. You can also use `Text`.
        */
        set name(name: Internal.Component_)
        /**
         *         Sets the power attribute of the school. It takes either a String, ResourceLocation, or just an Attribute.
        */
        set powerAttribute(powerAttribute: Internal.ISSKJSUtils$AttributeHolder_)
        /**
         *         Sets the ID of the item tag used for the focus item.
         *         Focus items need the `"irons_spellbooks:school_focus"` tag, as well as the tag specified here.
        */
        set focus(focus: ResourceLocation_)
        /**
         *         Sets the default cast sound of the school. It takes either a String, ResourceLocation, or just a SoundEvent.
        */
        set defaultCastSound(defaultCastSound: Internal.ISSKJSUtils$SoundEventHolder_)
        /**
         *         Sets the damage type of the school. It takes either a String, ResourceLocation, or just a DamageType.
         *         Damage types can be created using datapacks or server scripts, or you can use an existing damage type.
        */
        set damageType(damageType: Internal.ISSKJSUtils$DamageTypeHolder_)
        get registryType(): Internal.RegistryInfo<Internal.SchoolType>
        /**
         *         Sets the resistance attribute of the school. It takes either a String, ResourceLocation, or just an Attribute.
        */
        set resistanceAttribute(resistanceAttribute: Internal.ISSKJSUtils$AttributeHolder_)
    }
    type SchoolTypeJSBuilder_ = SchoolTypeJSBuilder;
    class RenderShape extends Internal.Enum<Internal.RenderShape> {
        static values(): Internal.RenderShape[];
        static valueOf(arg0: string): Internal.RenderShape;
        static readonly ENTITYBLOCK_ANIMATED: Internal.RenderShape;
        static readonly MODEL: Internal.RenderShape;
        static readonly INVISIBLE: Internal.RenderShape;
    }
    type RenderShape_ = RenderShape | "model" | "invisible" | "entityblock_animated";
    class Proxy {
        constructor(arg0: Internal.Proxy$Type_, arg1: Internal.SocketAddress_)
        address(): Internal.SocketAddress;
        type(): Internal.Proxy$Type;
        static readonly NO_PROXY: Internal.Proxy;
    }
    type Proxy_ = Proxy;
    class PlayerXpEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Player_)
        getEntity(): Internal.LivingEntity;
        get entity(): Internal.LivingEntity
    }
    type PlayerXpEvent_ = PlayerXpEvent;
    interface DebugScreenOverlayAccessor {
        abstract invokeRenderLines(arg0: Internal.GuiGraphics_, arg1: Internal.List_<string>, arg2: boolean): void;
        (arg0: Internal.GuiGraphics, arg1: Internal.List<string>, arg2: boolean): void;
    }
    type DebugScreenOverlayAccessor_ = DebugScreenOverlayAccessor;
    class Astrape extends Internal.Item implements Internal.More_Tool_Attribute {
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
        static getPowerForTime(arg0: number): number;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
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
    type Astrape_ = Astrape;
    class ItemCombinerMenuSlotDefinition$Builder {
        constructor()
        withSlot(arg0: number, arg1: number, arg2: number, arg3: Internal.Predicate_<Internal.ItemStack>): this;
        withResultSlot(arg0: number, arg1: number, arg2: number): this;
        build(): Internal.ItemCombinerMenuSlotDefinition;
    }
    type ItemCombinerMenuSlotDefinition$Builder_ = ItemCombinerMenuSlotDefinition$Builder;
    class VolcanoStructure extends Internal.Structure {
        generatePieces(arg0: Internal.StructurePiecesBuilder_, arg1: Internal.Structure$GenerationContext_): void;
        static readonly CODEC: Internal.Codec<Internal.VolcanoStructure>;
        static readonly VOLCANO_Y_CENTER: -34;
    }
    type VolcanoStructure_ = VolcanoStructure;
    class Window implements Internal.WindowKJS, Internal.AutoCloseable {
        constructor(arg0: Internal.WindowEventHandler_, arg1: any_, arg2: any_, arg3: string, arg4: string)
        setFramerateLimit(arg0: number): void;
        getX(): number;
        getY(): number;
        getPreferredFullscreenVideoMode(): Internal.Optional<Internal.VideoMode>;
        calculateScale(arg0: number, arg1: boolean): number;
        findBestMonitor(): Internal.Monitor;
        setErrorSection(arg0: string): void;
        isFullscreen(): boolean;
        setGuiScale(arg0: number): void;
        kjs$loadIcons(original: Internal.List_<Internal.IoSupplier<Internal.InputStream>>): Internal.List<Internal.IoSupplier<Internal.InputStream>>;
        setPreferredFullscreenVideoMode(arg0: Internal.Optional_<Internal.VideoMode>): void;
        shouldClose(): boolean;
        setWidth(arg0: number): void;
        changeFullscreenVideoMode(): void;
        getHeight(): number;
        defaultErrorCallback(arg0: number, arg1: number): void;
        updateRawMouseInput(arg0: boolean): void;
        getGuiScaledWidth(): number;
        setDefaultErrorCallback(): void;
        static checkGlfwError(arg0: Internal.BiConsumer_<number, string>): void;
        getFramerateLimit(): number;
        getScreenHeight(): number;
        getWidth(): number;
        setIcon(arg0: Internal.PackResources_, arg1: Internal.IconSet_): void;
        getGuiScaledHeight(): number;
        getWindow(): number;
        updateVsync(arg0: boolean): void;
        setWindowed(arg0: number, arg1: number): void;
        getScreenWidth(): number;
        setTitle(arg0: string): void;
        getGuiScale(): number;
        close(): void;
        toggleFullScreen(): void;
        setHeight(arg0: number): void;
        updateDisplay(): void;
        getRefreshRate(): number;
        set framerateLimit(arg0: number)
        get x(): number
        get y(): number
        get preferredFullscreenVideoMode(): Internal.Optional<Internal.VideoMode>
        set errorSection(arg0: string)
        get fullscreen(): boolean
        set guiScale(arg0: number)
        set preferredFullscreenVideoMode(arg0: Internal.Optional_<Internal.VideoMode>)
        set width(arg0: number)
        get height(): number
        get guiScaledWidth(): number
        get framerateLimit(): number
        get screenHeight(): number
        get width(): number
        get guiScaledHeight(): number
        get window(): number
        get screenWidth(): number
        set title(arg0: string)
        get guiScale(): number
        set height(arg0: number)
        get refreshRate(): number
    }
    type Window_ = Window;
    class EyeOfEnderJSBuilder extends Internal.EyeOfEnderEntityBuilder<any> {
        constructor(i: ResourceLocation_)
        /**
         * Disables the default ender eye break sound as well as the death particles.
        */
        disableDefaultDeathLogic(): this;
        /**
         * @param survivalChance A float value from 0 to 1 representing the chance that the Eye of Ender will not break after use.
         * 
         *     Example usage:
         *     ```javascript
         *     eyeOfEnderBuilder.setSurvivalChance(0.8);
         *     ```
        */
        setSurvivalChance(survivalChance: number): this;
        /**
         * Sets a function to determine the itemstack the entity drops when it
         * turns back into an item
         * Defaults to eye of ender.
         * Example usage:
         * ```javascript
         * builder.getItem(entity => {
         *     // Use information about the entity provided by the context.
         *     return Item.of('kubejs:eye_of_ender')// Some ItemStack
         * });
         * ```
        */
        getItem(function_: Internal.Function_<Internal.EyeOfEnder, any>): this;
        /**
         * The default trail particles will be disabled
        */
        disableTrailParticles(): this;
        createObject(): any;
        /**
         * Creates the item for this entity type
        */
        item(item: Internal.Consumer_<Internal.EyeOfEnderItemBuilder>): this;
        /**
         * Indicates that no item should be created for this entity type
        */
        noItem(): this;
        /**
         * @param survivalChance A float value from 0 to 1 representing the chance that the Eye of Ender will not break after use.
         * 
         *     Example usage:
         *     ```javascript
         *     eyeOfEnderBuilder.setSurvivalChance(0.8);
         *     ```
        */
        set survivalChance(survivalChance: number)
    }
    type EyeOfEnderJSBuilder_ = EyeOfEnderJSBuilder;
    class RenderType$CompositeState$CompositeStateBuilder {
        constructor()
        setLightmapState(arg0: Internal.RenderStateShard$LightmapStateShard_): this;
        setLineState(arg0: Internal.RenderStateShard$LineStateShard_): this;
        setCullState(arg0: Internal.RenderStateShard$CullStateShard_): this;
        setTransparencyState(arg0: Internal.RenderStateShard$TransparencyStateShard_): this;
        setTextureState(arg0: Internal.RenderStateShard$EmptyTextureStateShard_): this;
        setTexturingState(arg0: Internal.RenderStateShard$TexturingStateShard_): this;
        setColorLogicState(arg0: Internal.RenderStateShard$ColorLogicStateShard_): this;
        setShaderState(arg0: Internal.RenderStateShard$ShaderStateShard_): this;
        setDepthTestState(arg0: Internal.RenderStateShard$DepthTestStateShard_): this;
        setOverlayState(arg0: Internal.RenderStateShard$OverlayStateShard_): this;
        setWriteMaskState(arg0: Internal.RenderStateShard$WriteMaskStateShard_): this;
        setOutputState(arg0: Internal.RenderStateShard$OutputStateShard_): this;
        setLayeringState(arg0: Internal.RenderStateShard$LayeringStateShard_): this;
        createCompositeState(arg0: boolean): Internal.RenderType$CompositeState;
        createCompositeState(arg0: Internal.RenderType$OutlineProperty_): Internal.RenderType$CompositeState;
        set lightmapState(arg0: Internal.RenderStateShard$LightmapStateShard_)
        set lineState(arg0: Internal.RenderStateShard$LineStateShard_)
        set cullState(arg0: Internal.RenderStateShard$CullStateShard_)
        set transparencyState(arg0: Internal.RenderStateShard$TransparencyStateShard_)
        set textureState(arg0: Internal.RenderStateShard$EmptyTextureStateShard_)
        set texturingState(arg0: Internal.RenderStateShard$TexturingStateShard_)
        set colorLogicState(arg0: Internal.RenderStateShard$ColorLogicStateShard_)
        set shaderState(arg0: Internal.RenderStateShard$ShaderStateShard_)
        set depthTestState(arg0: Internal.RenderStateShard$DepthTestStateShard_)
        set overlayState(arg0: Internal.RenderStateShard$OverlayStateShard_)
        set writeMaskState(arg0: Internal.RenderStateShard$WriteMaskStateShard_)
        set outputState(arg0: Internal.RenderStateShard$OutputStateShard_)
        set layeringState(arg0: Internal.RenderStateShard$LayeringStateShard_)
    }
    type RenderType$CompositeState$CompositeStateBuilder_ = RenderType$CompositeState$CompositeStateBuilder;
    class EventLivingRenderer$AccessToBufferSource extends Internal.EventLivingRenderer {
        constructor()
        constructor(arg0: Internal.LivingEntity_, arg1: Internal.EntityModel_<any>, arg2: Internal.PoseStack_, arg3: number, arg4: number, arg5: Internal.MultiBufferSource_, arg6: number)
        getBodyYRot(): number;
        getBufferSource(): Internal.MultiBufferSource;
        getPackedLight(): number;
        get bodyYRot(): number
        get bufferSource(): Internal.MultiBufferSource
        get packedLight(): number
    }
    type EventLivingRenderer$AccessToBufferSource_ = EventLivingRenderer$AccessToBufferSource;
    interface StructureProcessorType <P extends Internal.StructureProcessor> {
        abstract codec(): Internal.Codec<P>;
        register<P extends Internal.StructureProcessor>(arg0: string, arg1: Internal.Codec_<P>): this;
        (): Internal.Codec_<P>;
        readonly LIST_CODEC: Internal.Codec<Internal.Holder<Internal.StructureProcessorList>>;
        readonly SINGLE_CODEC: Internal.Codec<Internal.StructureProcessor>;
        readonly LIST_OBJECT_CODEC: Internal.Codec<Internal.StructureProcessorList>;
        readonly BLACKSTONE_REPLACE: Internal.StructureProcessorType<Internal.BlackstoneReplaceProcessor>;
        readonly LAVA_SUBMERGED_BLOCK: Internal.StructureProcessorType<Internal.LavaSubmergedBlockProcessor>;
        readonly PROTECTED_BLOCKS: Internal.StructureProcessorType<Internal.ProtectedBlockProcessor>;
        readonly BLOCK_ROT: Internal.StructureProcessorType<Internal.BlockRotProcessor>;
        readonly CAPPED: Internal.StructureProcessorType<Internal.CappedProcessor>;
        readonly DIRECT_CODEC: Internal.Codec<Internal.StructureProcessorList>;
        readonly BLOCK_IGNORE: Internal.StructureProcessorType<Internal.BlockIgnoreProcessor>;
        readonly GRAVITY: Internal.StructureProcessorType<Internal.GravityProcessor>;
        readonly RULE: Internal.StructureProcessorType<Internal.RuleProcessor>;
        readonly NOP: Internal.StructureProcessorType<Internal.NopProcessor>;
        readonly JIGSAW_REPLACEMENT: Internal.StructureProcessorType<Internal.JigsawReplacementProcessor>;
        readonly BLOCK_AGE: Internal.StructureProcessorType<Internal.BlockAgeProcessor>;
    }
    type StructureProcessorType_<P extends Internal.StructureProcessor> = Special.StructureProcessor | StructureProcessorType<P>;
    interface ServicesKeyInfo {
        abstract keyBitCount(): number;
        abstract signature(): Internal.Signature;
        abstract validateProperty(arg0: com.mojang.authlib.properties.Property_): boolean;
        signatureBitCount(): number;
    }
    type ServicesKeyInfo_ = ServicesKeyInfo;
    class BlockItemWithScaffolding extends Internal.BlockItemWithSupplier {
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
    type BlockItemWithScaffolding_ = BlockItemWithScaffolding;
    class ChestMenu extends Internal.AbstractContainerMenu {
        constructor(arg0: Internal.MenuType_<any>, arg1: number, arg2: Internal.Inventory_, arg3: Internal.Container_, arg4: number)
        static twoRows(arg0: number, arg1: Internal.Inventory_): Internal.ChestMenu;
        static oneRow(arg0: number, arg1: Internal.Inventory_): Internal.ChestMenu;
        static threeRows(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Container_): Internal.ChestMenu;
        static threeRows(arg0: number, arg1: Internal.Inventory_): Internal.ChestMenu;
        static sixRows(arg0: number, arg1: Internal.Inventory_, arg2: Internal.Container_): Internal.ChestMenu;
        getRowCount(): number;
        static fiveRows(arg0: number, arg1: Internal.Inventory_): Internal.ChestMenu;
        static sixRows(arg0: number, arg1: Internal.Inventory_): Internal.ChestMenu;
        getContainer(): Internal.Container;
        static fourRows(arg0: number, arg1: Internal.Inventory_): Internal.ChestMenu;
        get rowCount(): number
        get container(): Internal.Container
    }
    type ChestMenu_ = ChestMenu;
    class EntityGroupPower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<Internal.FieldConfiguration<Internal.MobType>> {
        constructor()
    }
    type EntityGroupPower_ = EntityGroupPower;
    class DocumentClass extends Internal.AbstractDocument<Internal.DocumentClass> {
        constructor()
        merge(arg0: Internal.AbstractDocumentBase_<any>): Internal.AbstractDocumentBase<any>;
        isAbstract(): boolean;
        copy(): this;
        applyProperties(): Internal.AbstractDocumentBase<any>;
        getConstructors(): Internal.Set<Internal.DocumentConstructor>;
        isInterface(): boolean;
        setAbstract(anAbstract: boolean): void;
        setInterface(anInterface: boolean): void;
        merge(other: Internal.DocumentClass_): this;
        getInterfaces(): Internal.Set<Internal.PropertyType<any>>;
        getParent(): Internal.PropertyType<any>;
        getFields(): Internal.Set<Internal.DocumentField>;
        setName(name: string): void;
        getName(): string;
        getMethods(): Internal.Set<Internal.DocumentMethod>;
        setParent(parent: Internal.PropertyType_<any>): void;
        static fromJava(info: Internal.ClassInfo_): Internal.DocumentClass;
        getGenerics(): Internal.List<Internal.PropertyType<any>>;
        get "abstract"(): boolean
        get constructors(): Internal.Set<Internal.DocumentConstructor>
        get "interface"(): boolean
        set "abstract"(anAbstract: boolean)
        set "interface"(anInterface: boolean)
        get interfaces(): Internal.Set<Internal.PropertyType<any>>
        get parent(): Internal.PropertyType<any>
        get fields(): Internal.Set<Internal.DocumentField>
        set name(name: string)
        get name(): string
        get methods(): Internal.Set<Internal.DocumentMethod>
        set parent(parent: Internal.PropertyType_<any>)
        get generics(): Internal.List<Internal.PropertyType<any>>
        methods: Internal.Set<Internal.DocumentMethod>;
        fields: Internal.Set<Internal.DocumentField>;
        interfaces: Internal.Set<Internal.PropertyType<any>>;
        constructors: Internal.Set<Internal.DocumentConstructor>;
    }
    type DocumentClass_ = DocumentClass;
    class GeodeCrackSettings {
        constructor(arg0: number, arg1: number, arg2: number)
        static readonly CODEC: Internal.Codec<Internal.GeodeCrackSettings>;
        readonly generateCrackChance: number;
        readonly baseCrackSize: number;
        readonly crackPointOffset: number;
    }
    type GeodeCrackSettings_ = GeodeCrackSettings;
    interface MagneticEntityAccessor {
        abstract setMagneticAttachmentFace(arg0: Internal.Direction_): void;
        abstract postMagnetJump(): void;
        abstract getAttachmentProgress(arg0: number): number;
        abstract setMagneticDeltaX(arg0: number): void;
        abstract getMagneticDeltaY(): number;
        abstract getMagneticDeltaZ(): number;
        abstract getMagneticDeltaX(): number;
        abstract canChangeDirection(): boolean;
        abstract getMagneticAttachmentFace(): Internal.Direction;
        abstract stepOnMagnetBlock(arg0: BlockPos_): void;
        abstract setMagneticDeltaY(arg0: number): void;
        abstract setMagneticDeltaZ(arg0: number): void;
        abstract getPrevMagneticAttachmentFace(): Internal.Direction;
        set magneticAttachmentFace(arg0: Internal.Direction_)
        set magneticDeltaX(arg0: number)
        get magneticDeltaY(): number
        get magneticDeltaZ(): number
        get magneticDeltaX(): number
        get magneticAttachmentFace(): Internal.Direction
        set magneticDeltaY(arg0: number)
        set magneticDeltaZ(arg0: number)
        get prevMagneticAttachmentFace(): Internal.Direction
    }
    type MagneticEntityAccessor_ = MagneticEntityAccessor;
    class SurfaceSystem {
        constructor(arg0: Internal.RandomState_, arg1: Internal.BlockState_, arg2: number, arg3: Internal.PositionalRandomFactory_)
        buildSurface(arg0: Internal.RandomState_, arg1: Internal.BiomeManager_, arg2: Internal.Registry_<Internal.Biome>, arg3: boolean, arg4: Internal.WorldGenerationContext_, arg5: Internal.ChunkAccess_, arg6: Internal.NoiseChunk_, arg7: Internal.SurfaceRules$RuleSource_): void;
        getBand(arg0: number, arg1: number, arg2: number): Internal.BlockState;
        getSurfaceDepth(arg0: number, arg1: number): number;
        getSurfaceSecondary(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        topMaterial(arg0: Internal.SurfaceRules$RuleSource_, arg1: Internal.CarvingContext_, arg2: Internal.Function_<BlockPos, Internal.Holder<Internal.Biome>>, arg3: Internal.ChunkAccess_, arg4: Internal.NoiseChunk_, arg5: BlockPos_, arg6: boolean): Internal.Optional<Internal.BlockState>;
    }
    type SurfaceSystem_ = SurfaceSystem;
    class BlockMatchTest extends Internal.RuleTest {
        constructor(arg0: Internal.Block_)
        static readonly CODEC: Internal.Codec<Internal.BlockMatchTest>;
    }
    type BlockMatchTest_ = BlockMatchTest;
    interface GameRendererAccessor {
        abstract getRenderHand(): boolean;
        abstract getPanoramicMode(): boolean;
        abstract invokeGetFov(arg0: Internal.Camera_, arg1: number, arg2: boolean): number;
        abstract invokeBobHurt(arg0: Internal.PoseStack_, arg1: number): void;
        abstract invokeBobView(arg0: Internal.PoseStack_, arg1: number): void;
        get renderHand(): boolean
        get panoramicMode(): boolean
    }
    type GameRendererAccessor_ = GameRendererAccessor;
    class BlockInteractingRecipe$Serializer <T extends Internal.BlockInteractingRecipe> extends Internal.ItemAndBlockRecipe$Serializer<T> {
        constructor(arg0: Internal.Function_<ResourceLocation, T>)
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromNetwork(arg0: T, arg1: Internal.FriendlyByteBuf_): void;
        toNetwork0(arg0: Internal.FriendlyByteBuf_, arg1: T): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): T;
        fromJson(arg0: T, arg1: Internal.JsonObject_): void;
    }
    type BlockInteractingRecipe$Serializer_<T extends Internal.BlockInteractingRecipe> = BlockInteractingRecipe$Serializer<T>;
    class MinMaxBounds$Ints extends Internal.MinMaxBounds<number> implements Internal.IntsAccess {
        matchesSqr(arg0: number): boolean;
        static fromReader(arg0: Internal.StringReader_, arg1: Internal.Function_<number, number>): Internal.MinMaxBounds$Ints;
        static create(arg0: number, arg1: number): Internal.MinMaxBounds$Ints;
        static atLeast(arg0: number): Internal.MinMaxBounds$Ints;
        static exactly(arg0: number): Internal.MinMaxBounds$Ints;
        matches(arg0: number): boolean;
        static fromReader(arg0: Internal.StringReader_): Internal.MinMaxBounds$Ints;
        static fromJson(arg0: Internal.JsonElement_): Internal.MinMaxBounds$Ints;
        static atMost(arg0: number): Internal.MinMaxBounds$Ints;
        static between(arg0: number, arg1: number): Internal.MinMaxBounds$Ints;
        static create$lychee_$md$2a2e30$0(arg0: number, arg1: number): Internal.MinMaxBounds$Ints;
        static readonly ANY: Internal.MinMaxBounds$Ints;
    }
    type MinMaxBounds$Ints_ = MinMaxBounds$Ints;
    class EnumProperty <T extends Internal.Enum<T> & Internal.StringRepresentable> extends Internal.Property<T> {
        constructor(arg0: string, arg1: T, arg2: Internal.Collection_<T>)
        static create<T extends Internal.Enum<T> & Internal.StringRepresentable>(arg0: string, arg1: T): Internal.EnumProperty<T>;
        static create<T extends Internal.Enum<T> & Internal.StringRepresentable>(arg0: string, arg1: T, arg2: Internal.Predicate_<T>): Internal.EnumProperty<T>;
        getPossibleValues(): Internal.Collection<T>;
        getName(arg0: T): string;
        getValue(arg0: string): Internal.Optional<T>;
        static create<T extends Internal.Enum<T> & Internal.StringRepresentable>(arg0: string, arg1: T, ...arg2: T[]): Internal.EnumProperty<T>;
        static create<T extends Internal.Enum<T> & Internal.StringRepresentable>(arg0: string, arg1: T, arg2: Internal.Collection_<T>): Internal.EnumProperty<T>;
        get possibleValues(): Internal.Collection<T>
    }
    type EnumProperty_<T extends Internal.Enum<T> & Internal.StringRepresentable> = EnumProperty<T>;
    class ShovelItem extends Internal.DiggerItem implements dev.emi.emi.mixin.accessor.ShovelItemAccessor, Internal.ShovelItemAccessor {
        constructor(arg0: Internal.Tier_, arg1: number, arg2: number, arg3: Internal.Item$Properties_)
        static getPathStates$emi_$md$2a2e30$1(): Internal.Map<any, any>;
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        getShareTag(arg0: Internal.ItemStack_): Internal.CompoundTag;
        isDamageable(arg0: Internal.ItemStack_): boolean;
        isEnderMask(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.EnderMan_): boolean;
        isEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        allowContinuingBlockBreaking(player: Player_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        getRecipeRemainder(stack: Internal.ItemStack_): Internal.ItemStack;
        canGrindstoneRepair(arg0: Internal.ItemStack_): boolean;
        static getShovelPathingState(arg0: Internal.BlockState_): Internal.BlockState;
        getBurnTime(arg0: Internal.ItemStack_, arg1: Internal.RecipeType_<any>): number;
        setDigSpeed(speed: number): void;
        onItemUseFirst(arg0: Internal.ItemStack_, arg1: Internal.UseOnContext_): InteractionResult;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
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
        static getPathStates(): Internal.Map<Internal.Block, Internal.BlockState>;
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
        static getPathStates$fabric_content_registries_v0_$md$2a2e30$0(): Internal.Map<any, any>;
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
        get pathStates$emi_$md$2a2e30$1(): Internal.Map<any, any>
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get creativeTab(): string
        get pathStates(): Internal.Map<Internal.Block, Internal.BlockState>
        set armorKnockbackResistance(knockbackResistance: number)
        set attackDamage(attackDamage: number)
        get mod(): string
        get pathStates$fabric_content_registries_v0_$md$2a2e30$0(): Internal.Map<any, any>
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        static FLATTENABLES: {[key: Internal.GrassBlock]: Internal.BlockState, [key: Internal.Block]: Internal.BlockState, [key: Internal.Block]: Internal.BlockState, [key: Internal.SnowyDirtBlock]: Internal.BlockState, [key: Internal.MyceliumBlock]: Internal.BlockState, [key: Internal.RootedDirtBlock]: Internal.BlockState};
    }
    type ShovelItem_ = ShovelItem;
    interface Kind1$Mu extends Internal.K1 {
    }
    type Kind1$Mu_ = Kind1$Mu;
    class RadioactiveItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_, arg1: number)
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
    type RadioactiveItem_ = RadioactiveItem;
    class Ink_Mural_Block extends Internal.Mural_Block {
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
    }
    type Ink_Mural_Block_ = Ink_Mural_Block;
    class SoundManager extends Internal.SimplePreparableReloadListener<Internal.SoundManager$Preparations> implements Internal.IdentifiableResourceReloadListener {
        constructor(arg0: Internal.Options_)
        play(arg0: Internal.SoundInstance_): void;
        getAvailableSounds(): Internal.Collection<ResourceLocation>;
        destroy(): void;
        updateSourceVolume(arg0: Internal.SoundSource_, arg1: number): void;
        static validateSoundResource(arg0: Internal.Sound_, arg1: ResourceLocation_, arg2: Internal.ResourceProvider_): boolean;
        stop(arg0: Internal.SoundInstance_): void;
        addListener(arg0: Internal.SoundEventListener_): void;
        playDelayed(arg0: Internal.SoundInstance_, arg1: number): void;
        getName(): string;
        stop(arg0: ResourceLocation_, arg1: Internal.SoundSource_): void;
        getFabricId(): ResourceLocation;
        prepare(arg0: Internal.ResourceManager_, arg1: Internal.ProfilerFiller_): Internal.SoundManager$Preparations;
        updateSource(arg0: Internal.Camera_): void;
        queueTickingSound(arg0: Internal.TickableSoundInstance_): void;
        reload(): void;
        getSoundEvent(arg0: ResourceLocation_): Internal.WeighedSoundEvents;
        resume(): void;
        getFabricDependencies(): Internal.Collection<any>;
        getAvailableSoundDevices(): Internal.List<string>;
        getDebugString(): string;
        apply(arg0: Internal.SoundManager$Preparations_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_): void;
        removeListener(arg0: Internal.SoundEventListener_): void;
        isActive(arg0: Internal.SoundInstance_): boolean;
        tick(arg0: boolean): void;
        stop(): void;
        pause(): void;
        get availableSounds(): Internal.Collection<ResourceLocation>
        get name(): string
        get fabricId(): ResourceLocation
        get fabricDependencies(): Internal.Collection<any>
        get availableSoundDevices(): Internal.List<string>
        get debugString(): string
        static readonly EMPTY_SOUND: Internal.Sound;
        static readonly INTENTIONALLY_EMPTY_SOUND: Internal.Sound;
        readonly soundEngine: Internal.SoundEngine;
        static readonly INTENTIONALLY_EMPTY_SOUND_LOCATION: ResourceLocation;
        static readonly INTENTIONALLY_EMPTY_SOUND_EVENT: Internal.WeighedSoundEvents;
        static readonly LOGGER: Internal.Log4jLogger;
    }
    type SoundManager_ = SoundManager;
    class ModelColorPower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<Internal.ColorConfiguration> {
        constructor()
    }
    type ModelColorPower_ = ModelColorPower;
    class FireworksJS {
        constructor()
        static of(o: any): Internal.FireworksJS;
        createFireworkRocket(w: Internal.Level_, x: number, y: number, z: number): Internal.FireworkRocketEntity;
        lifetime: number;
        readonly explosions: Internal.List<Internal.FireworksJS$Explosion>;
        flight: number;
    }
    type FireworksJS_ = FireworksJS;
    class BlockEntityWithoutLevelRenderer implements Internal.ResourceManagerReloadListener {
        constructor(arg0: Internal.BlockEntityRenderDispatcher_, arg1: Internal.EntityModelSet_)
        renderByItem(arg0: Internal.ItemStack_, arg1: Internal.ItemDisplayContext_, arg2: Internal.PoseStack_, arg3: Internal.MultiBufferSource_, arg4: number, arg5: number): void;
        getName(): string;
        onResourceManagerReload(arg0: Internal.ResourceManager_): void;
        reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        get name(): string
    }
    type BlockEntityWithoutLevelRenderer_ = BlockEntityWithoutLevelRenderer;
    interface IntToLongFunction {
        abstract applyAsLong(arg0: number): number;
        (arg0: number): number;
    }
    type IntToLongFunction_ = IntToLongFunction;
    class DiscFragmentItem extends Internal.Item {
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
        getDisplayName(): Internal.MutableComponent;
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
        get displayName(): Internal.MutableComponent
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
    }
    type DiscFragmentItem_ = DiscFragmentItem;
    class DistanceFromPointBlockCondition extends Internal.BlockCondition<any> {
        constructor(arg0: Internal.Codec_<any>)
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type DistanceFromPointBlockCondition_ = DistanceFromPointBlockCondition;
    class WorldStem extends Internal.Record implements Internal.AutoCloseable {
        constructor(arg0: Internal.CloseableResourceManager_, arg1: Internal.ReloadableServerResources_, arg2: Internal.LayeredRegistryAccess_<Internal.RegistryLayer>, arg3: Internal.WorldData_)
        dataPackResources(): Internal.ReloadableServerResources;
        resourceManager(): Internal.CloseableResourceManager;
        close(): void;
        registries(): Internal.LayeredRegistryAccess<Internal.RegistryLayer>;
        worldData(): Internal.WorldData;
    }
    type WorldStem_ = WorldStem;
    interface TelemetryEvent extends Internal.TelemetryPropertyContainer {
        abstract addProperty(arg0: string, arg1: boolean): void;
        abstract addNullProperty(arg0: string): void;
        forJsonObject(arg0: Internal.JsonObject_): Internal.TelemetryPropertyContainer;
        abstract addProperty(arg0: string, arg1: number): void;
        abstract addProperty(arg0: string, arg1: number): void;
        abstract addProperty(arg0: string, arg1: string): void;
        abstract send(): void;
        readonly EMPTY: Internal.TelemetryEvent;
    }
    type TelemetryEvent_ = TelemetryEvent;
    class RecipesUpdatedEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.RecipeManager_)
        getRecipeManager(): Internal.RecipeManager;
        get recipeManager(): Internal.RecipeManager
    }
    type RecipesUpdatedEvent_ = RecipesUpdatedEvent;
    interface Short2ReferenceFunction <V> extends Internal.IntFunction<V>, it.unimi.dsi.fastutil.Function<number, V> {
        andThenLong(arg0: Internal.Reference2LongFunction_<V>): Internal.Short2LongFunction;
        andThenDouble(arg0: Internal.Reference2DoubleFunction_<V>): Internal.Short2DoubleFunction;
        andThenByte(arg0: Internal.Reference2ByteFunction_<V>): Internal.Short2ByteFunction;
        remove(arg0: number): V;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        composeLong(arg0: Internal.Long2ShortFunction_): Internal.Long2ReferenceFunction<V>;
        composeByte(arg0: Internal.Byte2ShortFunction_): Internal.Byte2ReferenceFunction<V>;
        andThenShort(arg0: Internal.Reference2ShortFunction_<V>): Internal.Short2ShortFunction;
        andThenObject<T>(arg0: Internal.Reference2ObjectFunction_<V, T>): Internal.Short2ObjectFunction<T>;
        composeObject<T>(arg0: Internal.Object2ShortFunction_<T>): Internal.Object2ReferenceFunction<T, V>;
        composeFloat(arg0: Internal.Float2ShortFunction_): Internal.Float2ReferenceFunction<V>;
        apply(arg0: number): V;
        andThenReference<T>(arg0: Internal.Reference2ReferenceFunction_<V, T>): Internal.Short2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        getOrDefault(arg0: number, arg1: V): V;
        andThenChar(arg0: Internal.Reference2CharFunction_<V>): Internal.Short2CharFunction;
        composeInt(arg0: Internal.Int2ShortFunction_): Internal.Int2ReferenceFunction<V>;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
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
        apply(arg0: number): V;
        composeShort(arg0: Internal.Short2ShortFunction_): this;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        containsKey(arg0: number): boolean;
        andThenInt(arg0: Internal.Reference2IntFunction_<V>): Internal.Short2IntFunction;
        composeChar(arg0: Internal.Char2ShortFunction_): Internal.Char2ReferenceFunction<V>;
        put(arg0: number, arg1: V): V;
        size(): number;
        composeReference<T>(arg0: Internal.Reference2ShortFunction_<T>): Internal.Reference2ReferenceFunction<T, V>;
        composeDouble(arg0: Internal.Double2ShortFunction_): Internal.Double2ReferenceFunction<V>;
        abstract get(arg0: number): V;
        clear(): void;
        andThenFloat(arg0: Internal.Reference2FloatFunction_<V>): Internal.Short2FloatFunction;
        defaultReturnValue(): V;
        identity<T>(): Internal.Function<T, T>;
        defaultReturnValue(arg0: V): void;
        (arg0: number): V;
    }
    type Short2ReferenceFunction_<V> = Short2ReferenceFunction<V>;
    class ToggleAction extends Internal.EntityAction<Internal.PowerReference> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        execute(arg0: Internal.PowerReference_, arg1: Internal.Entity_): void;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type ToggleAction_ = ToggleAction;
    interface FloatBinaryOperator extends Internal.DoubleBinaryOperator, Internal.BinaryOperator<number> {
        /**
         * @deprecated
        */
        apply(arg0: number, arg1: number): number;
        andThen<V>(arg0: Internal.Function_<number, V>): Internal.BiFunction<number, number, V>;
        /**
         * @deprecated
        */
        apply(arg0: any, arg1: any): any;
        abstract apply(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        applyAsDouble(arg0: number, arg1: number): number;
        maxBy<T>(arg0: Internal.Comparator_<T>): Internal.BinaryOperator<T>;
        minBy<T>(arg0: Internal.Comparator_<T>): Internal.BinaryOperator<T>;
        (arg0: number, arg1: number): number;
    }
    type FloatBinaryOperator_ = FloatBinaryOperator;
    class PlayerHurtEntityTrigger$TriggerInstance extends Internal.AbstractCriterionTriggerInstance {
        constructor(arg0: Internal.ContextAwarePredicate_, arg1: Internal.DamagePredicate_, arg2: Internal.ContextAwarePredicate_)
        static playerHurtEntity(arg0: Internal.DamagePredicate$Builder_): Internal.PlayerHurtEntityTrigger$TriggerInstance;
        static playerHurtEntity(arg0: Internal.DamagePredicate_, arg1: Internal.EntityPredicate_): Internal.PlayerHurtEntityTrigger$TriggerInstance;
        static playerHurtEntity(arg0: Internal.DamagePredicate$Builder_, arg1: Internal.EntityPredicate_): Internal.PlayerHurtEntityTrigger$TriggerInstance;
        static playerHurtEntity(): Internal.PlayerHurtEntityTrigger$TriggerInstance;
        matches(arg0: Internal.ServerPlayer_, arg1: Internal.LootContext_, arg2: DamageSource_, arg3: number, arg4: number, arg5: boolean): boolean;
        static playerHurtEntity(arg0: Internal.DamagePredicate_): Internal.PlayerHurtEntityTrigger$TriggerInstance;
        static playerHurtEntity(arg0: Internal.EntityPredicate_): Internal.PlayerHurtEntityTrigger$TriggerInstance;
    }
    type PlayerHurtEntityTrigger$TriggerInstance_ = PlayerHurtEntityTrigger$TriggerInstance;
    class Minecart extends Internal.AbstractMinecart {
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.EntityType_<any>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        getMaxCartSpeedOnRail(): number;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        getSlopeAdjustment(): number;
        isOnScoreboardTeam(teamId: string): boolean;
        canBeRidden(): boolean;
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
        getComparatorLevel(): number;
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
        shouldDoRailFunctions(): boolean;
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
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        isPoweredCart(): boolean;
        isPeacefulCreature(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        setRotation(yaw: number, pitch: number): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
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
        getCurrentRailPosition(): BlockPos;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
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
        get maxCartSpeedOnRail(): number
        get slopeAdjustment(): number
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get comparatorLevel(): number
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
        set motionY(y: number)
        get poweredCart(): boolean
        get peacefulCreature(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get type(): string
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        get currentRailPosition(): BlockPos
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
    type Minecart_ = Minecart;
    interface PathIterator {
        abstract next(): void;
        abstract getWindingRule(): number;
        abstract isDone(): boolean;
        abstract currentSegment(arg0: number[]): number;
        abstract currentSegment(arg0: number[]): number;
        get windingRule(): number
        get done(): boolean
        readonly SEG_MOVETO: 0;
        readonly WIND_NON_ZERO: 1;
        readonly SEG_LINETO: 1;
        readonly SEG_CUBICTO: 3;
        readonly WIND_EVEN_ODD: 0;
        readonly SEG_QUADTO: 2;
        readonly SEG_CLOSE: 4;
    }
    type PathIterator_ = PathIterator;
    interface Object2DoubleMap <K> extends Internal.Map<K, number>, Internal.Object2DoubleFunction<K> {
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        abstract object2DoubleEntrySet(): Internal.ObjectSet<Internal.Object2DoubleMap$Entry<K>>;
        /**
         * @deprecated
        */
        mergeDouble(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        compute(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        /**
         * @deprecated
        */
        containsValue(arg0: any): boolean;
        andThenReference<T>(arg0: Internal.Double2ReferenceFunction_<T>): Internal.Object2ReferenceFunction<K, T>;
        andThenByte(arg0: Internal.Double2ByteFunction_): Internal.Object2ByteFunction<K>;
        /**
         * @deprecated
        */
        computeDoubleIfAbsentPartial(arg0: K, arg1: Internal.Object2DoubleFunction_<K>): number;
        /**
         * @deprecated
        */
        replace(arg0: K, arg1: number, arg2: number): boolean;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        replace(arg0: K, arg1: number): number;
        andThenFloat(arg0: Internal.Double2FloatFunction_): Internal.Object2FloatFunction<K>;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any, arg2: any): boolean;
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2DoubleFunction<T>;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        abstract defaultReturnValue(arg0: number): void;
        copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, number>): number;
        values(): Internal.Collection<any>;
        merge(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        computeIfAbsent(arg0: K, arg1: Internal.Object2DoubleFunction_<K>): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        /**
         * @deprecated
        */
        entrySet(): Internal.ObjectSet<Internal.Map$Entry<K, number>>;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2DoubleFunction;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        replaceAll(arg0: Internal.BiFunction_<K, number, number>): void;
        removeDouble(arg0: any): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        abstract putAll(arg0: Internal.Map_<K, number>): void;
        mergeDouble(arg0: K, arg1: number, arg2: it.unimi.dsi.fastutil.doubles.DoubleBinaryOperator_): number;
        andThenShort(arg0: Internal.Double2ShortFunction_): Internal.Object2ShortFunction<K>;
        forEach(arg0: Internal.BiConsumer_<K, number>): void;
        abstract defaultReturnValue(): number;
        replace(arg0: K, arg1: number): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        computeDoubleIfPresent(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2DoubleFunction;
        mergeDouble(arg0: K, arg1: number, arg2: Internal.DoubleBinaryOperator_): number;
        andThenChar(arg0: Internal.Double2CharFunction_): Internal.Object2CharFunction<K>;
        getOrDefault(arg0: any, arg1: number): number;
        andThenInt(arg0: Internal.Double2IntFunction_): Internal.Object2IntFunction<K>;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: any, arg1: any): any;
        of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        andThenLong(arg0: Internal.Double2LongFunction_): Internal.Object2LongFunction<K>;
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        of<K, V>(): Internal.Map<K, V>;
        abstract containsValue(arg0: number): boolean;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2DoubleFunction;
        abstract isEmpty(): boolean;
        computeDouble(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        replace(arg0: K, arg1: number, arg2: number): boolean;
        abstract containsKey(arg0: any): boolean;
        andThenDouble(arg0: Internal.Double2DoubleFunction_): Internal.Object2DoubleFunction<K>;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2DoubleFunction<T>;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        computeDoubleIfAbsent(arg0: K, arg1: Internal.ToDoubleFunction_<K>): number;
        remove(arg0: any, arg1: number): boolean;
        applyAsDouble(arg0: K): number;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2DoubleFunction;
        abstract keySet(): Internal.ObjectSet<K>;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2DoubleFunction;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2DoubleFunction;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        remove(arg0: any, arg1: any): boolean;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        apply(arg0: K): number;
        andThenObject<T>(arg0: Internal.Double2ObjectFunction_<T>): Internal.Object2ObjectFunction<K, T>;
        abstract size(): number;
        abstract hashCode(): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2DoubleFunction;
        putIfAbsent(arg0: K, arg1: number): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        /**
         * @deprecated
        */
        merge(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any): any;
        computeIfAbsent(arg0: K, arg1: Internal.ToDoubleFunction_<K>): number;
        abstract getDouble(arg0: any): number;
        /**
         * @deprecated
        */
        merge(arg0: any, arg1: any, arg2: Internal.BiFunction_<any, any, any>): any;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        abstract equals(arg0: any): boolean;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        get empty(): boolean
    }
    type Object2DoubleMap_<K> = Object2DoubleMap<K>;
    abstract class IntBuffer extends Internal.Buffer implements Internal.Comparable<Internal.IntBuffer> {
        put(arg0: number, arg1: Internal.IntBuffer_, arg2: number, arg3: number): this;
        compareTo(arg0: any): number;
        static wrap(arg0: number[], arg1: number, arg2: number): Internal.IntBuffer;
        abstract order(): Internal.ByteOrder;
        static wrap(arg0: number[]): Internal.IntBuffer;
        put(arg0: Internal.IntBuffer_): this;
        mark(): this;
        put(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        flip(): this;
        get(arg0: number, arg1: number[], arg2: number, arg3: number): this;
        compareTo(arg0: Internal.IntBuffer_): number;
        mismatch(arg0: Internal.IntBuffer_): number;
        abstract slice(arg0: number, arg1: number): this;
        rewind(): this;
        put(arg0: number[]): this;
        abstract put(arg0: number): this;
        static allocate(arg0: number): Internal.IntBuffer;
        abstract compact(): this;
        abstract duplicate(): this;
        reset(): this;
        get(arg0: number, arg1: number[]): this;
        put(arg0: number[], arg1: number, arg2: number): this;
        abstract get(arg0: number): number;
        abstract put(arg0: number, arg1: number): this;
        abstract asReadOnlyBuffer(): this;
        put(arg0: number, arg1: number[]): this;
        get(arg0: number[]): this;
        limit(arg0: number): this;
        get(arg0: number[], arg1: number, arg2: number): this;
        abstract get(): number;
    }
    type IntBuffer_ = IntBuffer;
    class FiddleheadBlock extends Internal.CavePlantBlock {
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
    }
    type FiddleheadBlock_ = FiddleheadBlock;
    class CanBeReplacedCallbackJS {
        constructor(blockPlaceContext: Internal.BlockPlaceContext_, state: Internal.BlockState_)
        getClickedFace(): Internal.Direction;
        getClickedBlock(): Internal.BlockContainerJS;
        getNearestLookingDirections(): Internal.Direction[];
        getItem(): Internal.ItemStack;
        getHorizontalDirection(): Internal.Direction;
        getRotation(): number;
        getFluidStateAtClickedPos(): Internal.FluidState;
        canBeReplaced(): boolean;
        getLevel(): Internal.Level;
        getNearestLookingDirection(): Internal.Direction;
        getClickLocation(): Vec3d;
        getNearestLookingVerticalDirection(): Internal.Direction;
        isSecondaryUseActive(): boolean;
        isClickedPosIn(fluid: Internal.Fluid_): boolean;
        getHand(): Internal.InteractionHand;
        getClickedPos(): BlockPos;
        getPlayer(): Player;
        isInside(): boolean;
        get clickedFace(): Internal.Direction
        get clickedBlock(): Internal.BlockContainerJS
        get nearestLookingDirections(): Internal.Direction[]
        get item(): Internal.ItemStack
        get horizontalDirection(): Internal.Direction
        get rotation(): number
        get fluidStateAtClickedPos(): Internal.FluidState
        get level(): Internal.Level
        get nearestLookingDirection(): Internal.Direction
        get clickLocation(): Vec3d
        get nearestLookingVerticalDirection(): Internal.Direction
        get secondaryUseActive(): boolean
        get hand(): Internal.InteractionHand
        get clickedPos(): BlockPos
        get player(): Player
        get inside(): boolean
    }
    type CanBeReplacedCallbackJS_ = CanBeReplacedCallbackJS;
    class ChunkStatus$ChunkType extends Internal.Enum<Internal.ChunkStatus$ChunkType> {
        static values(): Internal.ChunkStatus$ChunkType[];
        static valueOf(arg0: string): Internal.ChunkStatus$ChunkType;
        static readonly PROTOCHUNK: Internal.ChunkStatus$ChunkType;
        static readonly LEVELCHUNK: Internal.ChunkStatus$ChunkType;
    }
    type ChunkStatus$ChunkType_ = ChunkStatus$ChunkType | "levelchunk" | "protochunk";
    class NonNullList <E> extends Internal.AbstractList<E> {
        constructor(arg0: Internal.List_<E>, arg1: E)
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.List<E>;
        get(arg0: number): E;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.List<E>;
        static createWithCapacity<E>(arg0: number): Internal.NonNullList<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.List<E>;
        parallelStream(): Internal.Stream<E>;
        sort(arg0: Internal.Comparator_<E>): void;
        static of<E>(arg0: E, ...arg1: E[]): Internal.NonNullList<E>;
        set(arg0: number, arg1: E): E;
        static of<E>(arg0: E): Internal.List<E>;
        static of<E>(): Internal.List<E>;
        static of<E>(...arg0: E[]): Internal.List<E>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        remove(arg0: number): E;
        static create<E>(): Internal.NonNullList<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.List<E>;
        replaceAll(arg0: Internal.UnaryOperator_<E>): void;
        forEach(arg0: Internal.Consumer_<E>): void;
        abstract toArray<T>(arg0: T[]): T[];
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.List<E>;
        static of<E>(arg0: E, arg1: E): Internal.List<E>;
        static withSize<E>(arg0: number, arg1: E): Internal.NonNullList<E>;
        stream(): Internal.Stream<E>;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.List<E>;
        spliterator(): Internal.Spliterator<E>;
    }
    type NonNullList_<E> = NonNullList<E>;
    class Matrix2f implements Internal.Cloneable, Internal.Externalizable, Internal.Matrix2fc {
        constructor()
        constructor(arg0: Internal.Matrix3fc_)
        constructor(arg0: Internal.FloatBuffer_)
        constructor(arg0: Internal.Matrix2fc_)
        constructor(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        normal(): this;
        rotate(arg0: number, arg1: Internal.Matrix2f_): this;
        m00(): number;
        normalizedPositiveX(arg0: Internal.Vector2f_): Internal.Vector2f;
        setRow(arg0: number, arg1: Internal.Vector2fc_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        getRow(arg0: number, arg1: Internal.Vector2f_): Internal.Vector2f;
        getColumn(arg0: number, arg1: Internal.Vector2f_): Internal.Vector2f;
        lerp(arg0: Internal.Matrix2fc_, arg1: number, arg2: Internal.Matrix2f_): this;
        scaling(arg0: number, arg1: number): this;
        mul(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): this;
        set(arg0: number, arg1: Internal.FloatBuffer_): this;
        rotateLocal(arg0: number): this;
        scaleLocal(arg0: number, arg1: number, arg2: Internal.Matrix2f_): this;
        mulComponentWise(arg0: Internal.Matrix2fc_): this;
        sub(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): this;
        transformTranspose(arg0: Internal.Vector2f_): Internal.Vector2f;
        get(arg0: number[]): number[];
        toString(arg0: Internal.NumberFormat_): string;
        get(arg0: number[], arg1: number): number[];
        set(arg0: number, arg1: number, arg2: number, arg3: number): this;
        transformTranspose(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): Internal.Vector2f;
        setFromAddress(arg0: number): this;
        m00(arg0: number): this;
        m01(): number;
        mulLocal(arg0: Internal.Matrix2fc_): this;
        clone(): any;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        normalizedPositiveY(arg0: Internal.Vector2f_): Internal.Vector2f;
        getRotation(): number;
        add(arg0: Internal.Matrix2fc_): this;
        getScale(arg0: Internal.Vector2f_): Internal.Vector2f;
        set(arg0: Internal.ByteBuffer_): this;
        getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        equals(arg0: Internal.Matrix2fc_, arg1: number): boolean;
        getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        scale(arg0: number): this;
        m01(arg0: number): this;
        getToAddress(arg0: number): Internal.Matrix2fc;
        transformTranspose(arg0: number, arg1: number, arg2: Internal.Vector2f_): Internal.Vector2f;
        setColumn(arg0: number, arg1: Internal.Vector2fc_): this;
        invert(arg0: Internal.Matrix2f_): this;
        scale(arg0: number, arg1: number): this;
        scale(arg0: Internal.Vector2fc_, arg1: Internal.Matrix2f_): this;
        scaling(arg0: Internal.Vector2fc_): this;
        get(arg0: Internal.Matrix2f_): this;
        isFinite(): boolean;
        transform(arg0: Internal.Vector2f_): Internal.Vector2f;
        positiveX(arg0: Internal.Vector2f_): Internal.Vector2f;
        mul(arg0: Internal.Matrix2fc_): this;
        set(arg0: Internal.FloatBuffer_): this;
        normal(arg0: Internal.Matrix2f_): this;
        m10(arg0: number): this;
        set(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_): this;
        m10(): number;
        sub(arg0: Internal.Matrix2fc_): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        mulComponentWise(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): this;
        set(arg0: Internal.Matrix3fc_): this;
        rotation(arg0: number): this;
        get(arg0: Matrix3f_): Matrix3f;
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        get(arg0: number, arg1: number): number;
        lerp(arg0: Internal.Matrix2fc_, arg1: number): this;
        transform(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): Internal.Vector2f;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        determinant(): number;
        mulLocal(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): this;
        add(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2f_): this;
        rotateLocal(arg0: number, arg1: Internal.Matrix2f_): this;
        setColumn(arg0: number, arg1: number, arg2: number): this;
        setRow(arg0: number, arg1: number, arg2: number): this;
        get(arg0: Internal.Matrix3x2f_): Internal.Matrix3x2f;
        rotate(arg0: number): this;
        set(arg0: Internal.Matrix2fc_): this;
        scale(arg0: number, arg1: number, arg2: Internal.Matrix2f_): this;
        positiveY(arg0: Internal.Vector2f_): Internal.Vector2f;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        zero(): this;
        scaling(arg0: number): this;
        set(arg0: number[]): this;
        transpose(): this;
        getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        m11(arg0: number): this;
        set(arg0: Internal.Matrix3x2fc_): this;
        m11(): number;
        scale(arg0: number, arg1: Internal.Matrix2f_): this;
        set(arg0: number, arg1: number, arg2: number): this;
        getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        transform(arg0: number, arg1: number, arg2: Internal.Vector2f_): Internal.Vector2f;
        identity(): this;
        invert(): this;
        scaleLocal(arg0: number, arg1: number): this;
        transpose(arg0: Internal.Matrix2f_): this;
        swap(arg0: Internal.Matrix2f_): this;
        scale(arg0: Internal.Vector2fc_): this;
        set fromAddress(arg0: number)
        get rotation(): number
        get finite(): boolean
        m10: number;
        m01: number;
        m00: number;
        m11: number;
    }
    type Matrix2f_ = Matrix2f;
    class Matrix2d implements Internal.Cloneable, Internal.Matrix2dc, Internal.Externalizable {
        constructor(arg0: Internal.Matrix3fc_)
        constructor()
        constructor(arg0: Internal.Matrix2fc_)
        constructor(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_)
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number)
        constructor(arg0: Internal.Matrix3dc_)
        constructor(arg0: Internal.Matrix2dc_)
        setColumn(arg0: number, arg1: Internal.Vector2dc_): this;
        mul(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        normal(): this;
        scaling(arg0: Internal.Vector2dc_): this;
        m01(): number;
        positiveY(arg0: Internal.Vector2d_): Internal.Vector2d;
        mul(arg0: Internal.Matrix2dc_): this;
        sub(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): this;
        set(arg0: Internal.Matrix3dc_): this;
        transformTranspose(arg0: number, arg1: number, arg2: Internal.Vector2d_): Internal.Vector2d;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        sub(arg0: Internal.Matrix2dc_): this;
        equals(arg0: Internal.Matrix2dc_, arg1: number): boolean;
        toString(arg0: Internal.NumberFormat_): string;
        scaling(arg0: number, arg1: number): this;
        setRow(arg0: number, arg1: number, arg2: number): this;
        swap(arg0: Internal.Matrix2d_): this;
        scaling(arg0: number): this;
        transformTranspose(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): Internal.Vector2d;
        rotation(arg0: number): this;
        rotateLocal(arg0: number, arg1: Internal.Matrix2d_): this;
        setFromAddress(arg0: number): this;
        clone(): any;
        set(arg0: Internal.Matrix2dc_): this;
        invert(arg0: Internal.Matrix2d_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        normalizedPositiveX(arg0: Internal.Vector2d_): Internal.Vector2d;
        m01(arg0: number): this;
        getRow(arg0: number, arg1: Internal.Vector2d_): Internal.Vector2d;
        set(arg0: Internal.ByteBuffer_): this;
        getColumn(arg0: number, arg1: Internal.Vector2d_): Internal.Vector2d;
        getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        get(arg0: Internal.Matrix2d_): this;
        transform(arg0: Internal.Vector2d_): Internal.Vector2d;
        mul(arg0: Internal.Matrix2fc_, arg1: Internal.Matrix2d_): this;
        m00(): number;
        set(arg0: Internal.Matrix3x2dc_): this;
        get(arg0: number[]): number[];
        normal(arg0: Internal.Matrix2d_): this;
        determinant(): number;
        scale(arg0: number, arg1: number, arg2: Internal.Matrix2d_): this;
        scale(arg0: number, arg1: Internal.Matrix2d_): this;
        set(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_): this;
        lerp(arg0: Internal.Matrix2dc_, arg1: number): this;
        getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        getTransposedFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotateLocal(arg0: number): this;
        getFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        getTransposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        get(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        m11(): number;
        scale(arg0: Internal.Vector2dc_): this;
        scale(arg0: number): this;
        scale(arg0: Internal.Vector2dc_, arg1: Internal.Matrix2d_): this;
        setRow(arg0: number, arg1: Internal.Vector2dc_): this;
        normalizedPositiveY(arg0: Internal.Vector2d_): Internal.Vector2d;
        m00(arg0: number): this;
        get(arg0: Internal.Matrix3x2d_): Internal.Matrix3x2d;
        getScale(arg0: Internal.Vector2d_): Internal.Vector2d;
        set(arg0: Internal.DoubleBuffer_): this;
        isFinite(): boolean;
        getTransposedFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        mul(arg0: Internal.Matrix2fc_): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mulComponentWise(arg0: Internal.Matrix2dc_): this;
        rotate(arg0: number): this;
        set(arg0: Internal.Matrix3fc_): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        getRotation(): number;
        m11(arg0: number): this;
        scaleLocal(arg0: number, arg1: number): this;
        mulComponentWise(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): this;
        setColumn(arg0: number, arg1: number, arg2: number): this;
        scale(arg0: number, arg1: number): this;
        m10(): number;
        transpose(arg0: Internal.Matrix2d_): this;
        transform(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): Internal.Vector2d;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        getToAddress(arg0: number): Internal.Matrix2dc;
        getTransposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        add(arg0: Internal.Matrix2dc_): this;
        mulLocal(arg0: Internal.Matrix2dc_): this;
        set(arg0: number, arg1: number, arg2: number): this;
        rotate(arg0: number, arg1: Internal.Matrix2d_): this;
        mulLocal(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): this;
        add(arg0: Internal.Matrix2dc_, arg1: Internal.Matrix2d_): this;
        lerp(arg0: Internal.Matrix2dc_, arg1: number, arg2: Internal.Matrix2d_): this;
        get(arg0: number[], arg1: number): number[];
        set(arg0: number[]): this;
        set(arg0: Internal.Matrix2fc_): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        transform(arg0: number, arg1: number, arg2: Internal.Vector2d_): Internal.Vector2d;
        positiveX(arg0: Internal.Vector2d_): Internal.Vector2d;
        scaleLocal(arg0: number, arg1: number, arg2: Internal.Matrix2d_): this;
        transpose(): this;
        zero(): this;
        set(arg0: Internal.Matrix3x2fc_): this;
        getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        getFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        get(arg0: number, arg1: number): number;
        transformTranspose(arg0: Internal.Vector2d_): Internal.Vector2d;
        m10(arg0: number): this;
        identity(): this;
        invert(): this;
        set fromAddress(arg0: number)
        get finite(): boolean
        get rotation(): number
        m01: number;
        m10: number;
        m00: number;
        m11: number;
    }
    type Matrix2d_ = Matrix2d;
    interface SpawnSettingsBuilderAccessor {
        abstract getSpawnCosts(): Internal.Map<Internal.EntityType<any>, Internal.MobSpawnSettings$MobSpawnCost>;
        get spawnCosts(): Internal.Map<Internal.EntityType<any>, Internal.MobSpawnSettings$MobSpawnCost>
        (): Internal.Map_<Internal.EntityType<any>, Internal.MobSpawnSettings$MobSpawnCost>;
    }
    type SpawnSettingsBuilderAccessor_ = SpawnSettingsBuilderAccessor;
    interface GameMasterBlock {
    }
    type GameMasterBlock_ = GameMasterBlock;
    interface IBlockHolder {
        abstract setHeldBlock(arg0: Internal.BlockState_, arg1: number): boolean;
        getHeldBlock(): Internal.BlockState;
        setHeldBlock(state: Internal.BlockState_): boolean;
        abstract getHeldBlock(arg0: number): Internal.BlockState;
        get heldBlock(): Internal.BlockState
        set heldBlock(state: Internal.BlockState_)
    }
    type IBlockHolder_ = IBlockHolder;
    abstract class BlockableEventLoop <R extends Internal.Runnable> implements Internal.ProfilerMeasured, Internal.Executor, Internal.ProcessorHandle<R> {
        constructor(arg0: string)
        executeIfPossible(arg0: Internal.Runnable_): void;
        pollTask(): boolean;
        submit<V>(arg0: Internal.Supplier_<V>): Internal.CompletableFuture<V>;
        dropAllTasks(): void;
        submit(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        static of<Msg>(arg0: string, arg1: Internal.Consumer_<Msg>): Internal.ProcessorHandle<Msg>;
        waitForTasks(): void;
        abstract getRunningThread(): Internal.Thread;
        tell(arg0: R): void;
        tell(arg0: any): void;
        doRunTask(arg0: R): void;
        executeBlocking(arg0: Internal.Runnable_): void;
        runAllTasks(): void;
        getPendingTasksCount(): number;
        abstract shouldRun(arg0: R): boolean;
        profiledMetrics(): Internal.List<Internal.MetricSampler>;
        ask<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Source>, R>): Internal.CompletableFuture<Source>;
        abstract wrapRunnable(arg0: Internal.Runnable_): R;
        name(): string;
        askEither<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Internal.Either<Source, Internal.Exception>>, R>): Internal.CompletableFuture<Source>;
        scheduleExecutables(): boolean;
        close(): void;
        execute(arg0: Internal.Runnable_): void;
        submitAsync(arg0: Internal.Runnable_): Internal.CompletableFuture<void>;
        isSameThread(): boolean;
        managedBlock(arg0: Internal.BooleanSupplier_): void;
        get runningThread(): Internal.Thread
        get pendingTasksCount(): number
        get sameThread(): boolean
    }
    type BlockableEventLoop_<R extends Internal.Runnable> = BlockableEventLoop<R>;
    class ItemComponents$2 implements Internal.RecipeComponentWithParent<InputItem[]> {
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, InputItem[]>>;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<InputItem[]>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<InputItem[]>;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<InputItem[]>;
        replaceOutput(recipe: Internal.RecipeJS_, original: InputItem_[], match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): InputItem[];
        role(): Internal.ComponentRole;
        componentClass(): typeof any;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, InputItem[]>>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<InputItem[]>;
        checkEmpty(key: Internal.RecipeKey_<InputItem[]>, value: InputItem_[]): string;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem[]>, json: Internal.JsonObject_): void;
        key(name: string): Internal.RecipeKey<InputItem[]>;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        orSelf(): Internal.RecipeComponent<InputItem[]>;
        componentType(): string;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<InputItem[]>;
        asArray(): Internal.ArrayRecipeComponent<InputItem[]>;
        static builder(): Internal.RecipeComponentBuilder;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<InputItem[], O>;
        write(recipe: Internal.RecipeJS_, value: InputItem_[]): Internal.JsonElement;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem[]>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem[]>, map: Internal.Map_<any, any>): void;
        checkValueHasChanged(oldValue: InputItem_[], newValue: InputItem_[]): boolean;
        isInput(recipe: Internal.RecipeJS_, value: InputItem_[], match: Internal.ReplacementMatch_): boolean;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<InputItem[], O>;
        parentComponent(): Internal.RecipeComponent<InputItem[]>;
        isOutput(recipe: Internal.RecipeJS_, value: InputItem_[], match: Internal.ReplacementMatch_): boolean;
        read(recipe: Internal.RecipeJS_, from: any): InputItem[];
        replaceInput(recipe: Internal.RecipeJS_, original: InputItem_[], match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): InputItem[];
    }
    type ItemComponents$2_ = ItemComponents$2;
    class ItemComponents$1 implements Internal.RecipeComponent<InputItem> {
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<InputItem>;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<InputItem>;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<InputItem, O>;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<InputItem>;
        role(): Internal.ComponentRole;
        componentClass(): typeof any;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<InputItem>;
        checkValueHasChanged(oldValue: InputItem_, newValue: InputItem_): boolean;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<InputItem, O>;
        isInput(recipe: Internal.RecipeJS_, value: InputItem_, match: Internal.ReplacementMatch_): boolean;
        key(name: string): Internal.RecipeKey<InputItem>;
        isOutput(recipe: Internal.RecipeJS_, value: InputItem_, match: Internal.ReplacementMatch_): boolean;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem>, map: Internal.Map_<any, any>): void;
        orSelf(): Internal.RecipeComponent<InputItem>;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<InputItem>;
        replaceOutput(recipe: Internal.RecipeJS_, original: InputItem_, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): InputItem;
        checkEmpty(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, InputItem>>;
        asArray(): Internal.ArrayRecipeComponent<InputItem>;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<InputItem>, json: Internal.JsonObject_): void;
        static builder(): Internal.RecipeComponentBuilder;
        checkEmpty(key: Internal.RecipeKey_<InputItem>, value: InputItem_): string;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        write(recipe: Internal.RecipeJS_, value: InputItem_): Internal.JsonElement;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        read(arg0: Internal.RecipeJS_, arg1: any): any;
        replaceInput(recipe: Internal.RecipeJS_, original: InputItem_, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): InputItem;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, InputItem>>;
        isInput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
    }
    type ItemComponents$1_ = ItemComponents$1;
    class ItemComponents$4 implements Internal.RecipeComponentWithParent<OutputItem> {
        read(recipe: Internal.RecipeJS_, from: any): OutputItem;
        parentComponent(): Internal.RecipeComponent<OutputItem>;
        checkValueHasChanged(oldValue: OutputItem_, newValue: OutputItem_): boolean;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<OutputItem, O>;
        isOutput(recipe: Internal.RecipeJS_, value: OutputItem_, match: Internal.ReplacementMatch_): boolean;
        checkEmpty(key: Internal.RecipeKey_<OutputItem>, value: OutputItem_): string;
        role(): Internal.ComponentRole;
        componentClass(): typeof any;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<OutputItem>;
        replaceInput(recipe: Internal.RecipeJS_, original: OutputItem_, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): OutputItem;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, OutputItem>>;
        replaceOutput(recipe: Internal.RecipeJS_, original: OutputItem_, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): OutputItem;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<OutputItem>;
        static builder(): Internal.RecipeComponentBuilder;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<OutputItem>;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<OutputItem, O>;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, OutputItem>>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        write(recipe: Internal.RecipeJS_, value: OutputItem_): Internal.JsonElement;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, json: Internal.JsonObject_): void;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, map: Internal.Map_<any, any>): void;
        asArray(): Internal.ArrayRecipeComponent<OutputItem>;
        isInput(recipe: Internal.RecipeJS_, value: OutputItem_, match: Internal.ReplacementMatch_): boolean;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<OutputItem>;
        key(name: string): Internal.RecipeKey<OutputItem>;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<OutputItem>;
        orSelf(): Internal.RecipeComponent<OutputItem>;
    }
    type ItemComponents$4_ = ItemComponents$4;
    interface RecipeFilter extends Internal.Predicate<Internal.RecipeKJS> {
        test(arg0: any): boolean;
        negate(): Internal.Predicate<Internal.RecipeKJS>;
        not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        or(arg0: Internal.Predicate_<Internal.RecipeKJS>): Internal.Predicate<Internal.RecipeKJS>;
        and(arg0: Internal.Predicate_<Internal.RecipeKJS>): Internal.Predicate<Internal.RecipeKJS>;
        abstract test(arg0: Internal.RecipeKJS_): boolean;
        of(cx: Internal.Context_, o: any): this;
        isEqual<T>(arg0: any): Internal.Predicate<T>;
        (arg0: Internal.RecipeKJS): boolean;
        readonly PARSE: dev.architectury.event.Event<Internal.RecipeFilterParseEvent>;
    }
    type RecipeFilter_ = RegExp | RecipeFilter | "-" | Internal.RecipeFilter_[] | "*" | {output?: Internal.ReplacementMatch_, id?: Special.RecipeId, input?: Internal.ReplacementMatch_, type?: Special.RecipeSerializer, mod?: Special.Mod, not?: Internal.RecipeFilter_, or?: Internal.RecipeFilter_, group?: string};
    class CopperValveBlock extends Internal.BaseEntityBlock implements Internal.SimpleWaterloggedBlock {
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
        static readonly TURNED: Internal.BooleanProperty;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly FACING: Internal.DirectionProperty;
    }
    type CopperValveBlock_ = CopperValveBlock;
    interface StructureTemplatePoolAccessor {
        abstract getRawTemplates(): Internal.List<com.mojang.datafixers.util.Pair<Internal.StructurePoolElement, number>>;
        get rawTemplates(): Internal.List<com.mojang.datafixers.util.Pair<Internal.StructurePoolElement, number>>
        (): Internal.List_<com.mojang.datafixers.util.Pair<Internal.StructurePoolElement, number>>;
    }
    type StructureTemplatePoolAccessor_ = StructureTemplatePoolAccessor;
    interface ScreenMouseEvents$AllowMouseScroll {
        abstract allowMouseScroll(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        (arg0: Internal.Screen, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
    }
    type ScreenMouseEvents$AllowMouseScroll_ = ScreenMouseEvents$AllowMouseScroll;
    class EnderMan extends Internal.Monster implements Internal.NeutralMob {
        constructor(arg0: Internal.EntityType_<Internal.EnderMan>, arg1: Internal.Level_)
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
        isLookingAtMe(arg0: Player_): boolean;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        teleportTowards(arg0: Internal.Entity_): boolean;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        readPersistentAngerSaveData(arg0: Internal.Level_, arg1: Internal.CompoundTag_): void;
        stopBeingAngry(): void;
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
        getCarriedBlock(): Internal.BlockState;
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
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        canRiderInteract(): boolean;
        addPersistentAngerSaveData(arg0: Internal.CompoundTag_): void;
        teleport(): boolean;
        bettermobcombat$startUpswing(arg0: Internal.WeaponAttributes_): void;
        shouldRiderSit(): boolean;
        hasBeenStaredAt(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getReachDistance(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        getPersistentAngerTarget(): Internal.UUID;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        isFrame(): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        isAngryAtAllPlayers(arg0: Internal.Level_): boolean;
        foodEaten(is: Internal.ItemStack_): void;
        setCarriedBlock(arg0: Internal.BlockState_): void;
        self(): Internal.LivingEntity;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getDefaultMovementSpeed(): number;
        swing(hand: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        getDistance(x: number, y: number, z: number): number;
        playerDied(arg0: Player_): void;
        setMotionY(y: number): void;
        static createAttributes(): Internal.AttributeSupplier$Builder;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        isAngry(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        startPersistentAngerTimer(): void;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        isWeaponSwingInProgress(): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        setRemainingPersistentAngerTime(arg0: number): void;
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        self(): Internal.Entity;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        getMotionY(): number;
        playStareSound(): void;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        setTotalMovementSpeedMultiplier(speed: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        setPersistentAngerTarget(arg0: Internal.UUID_): void;
        setBeingStaredAt(): void;
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
        isAngryAt(arg0: Internal.LivingEntity_): boolean;
        getHeadArmorItem(): Internal.ItemStack;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        getRemainingPersistentAngerTime(): number;
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
        isCreepy(): boolean;
        setZ(z: number): void;
        setStatusMessage(message: Internal.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getProfile(): Internal.GameProfile;
        updatePersistentAnger(arg0: Internal.ServerLevel_, arg1: boolean): void;
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
        get carriedBlock(): Internal.BlockState
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
        get persistentAngerTarget(): Internal.UUID
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get potionEffects(): Internal.EntityPotionEffectsJS
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set carriedBlock(arg0: Internal.BlockState_)
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        get angry(): boolean
        get undead(): boolean
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get weaponSwingInProgress(): boolean
        set remainingPersistentAngerTime(arg0: number)
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        set persistentAngerTarget(arg0: Internal.UUID_)
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
        get remainingPersistentAngerTime(): number
        get parts(): Internal.PartEntity<any>[]
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        get creepy(): boolean
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
    }
    type EnderMan_ = EnderMan;
    class ItemComponents$3 implements Internal.RecipeComponent<OutputItem> {
        checkValueHasChanged(oldValue: OutputItem_, newValue: OutputItem_): boolean;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<OutputItem, O>;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        isOutput(recipe: Internal.RecipeJS_, value: OutputItem_, match: Internal.ReplacementMatch_): boolean;
        checkEmpty(key: Internal.RecipeKey_<OutputItem>, value: OutputItem_): string;
        role(): Internal.ComponentRole;
        componentClass(): typeof any;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<OutputItem>;
        replaceInput(recipe: Internal.RecipeJS_, original: OutputItem_, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): OutputItem;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        componentType(): string;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, OutputItem>>;
        checkEmpty(arg0: Internal.RecipeKey_<any>, arg1: any): string;
        replaceOutput(recipe: Internal.RecipeJS_, original: OutputItem_, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): OutputItem;
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<OutputItem>;
        static builder(): Internal.RecipeComponentBuilder;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<OutputItem>;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<OutputItem, O>;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, OutputItem>>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        read(arg0: Internal.RecipeJS_, arg1: any): any;
        write(recipe: Internal.RecipeJS_, value: OutputItem_): Internal.JsonElement;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, json: Internal.JsonObject_): void;
        isOutput(arg0: Internal.RecipeJS_, arg1: any, arg2: Internal.ReplacementMatch_): boolean;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<OutputItem>, map: Internal.Map_<any, any>): void;
        asArray(): Internal.ArrayRecipeComponent<OutputItem>;
        isInput(recipe: Internal.RecipeJS_, value: OutputItem_, match: Internal.ReplacementMatch_): boolean;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<OutputItem>;
        key(name: string): Internal.RecipeKey<OutputItem>;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<OutputItem>;
        orSelf(): Internal.RecipeComponent<OutputItem>;
    }
    type ItemComponents$3_ = ItemComponents$3;
    class AcidBlock extends Internal.LiquidBlock {
        constructor(arg0: Internal.RegistryObject_<Internal.FlowingFluid>, arg1: Internal.BlockBehaviour$Properties_)
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        tickCorrosion(arg0: Internal.Level_, arg1: BlockPos_): void;
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
        static doesBlockCorrode(arg0: Internal.BlockState_): boolean;
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
        getBlockStates(): Internal.List<Internal.BlockState>;
        isBed(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getExplosionResistance(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): number;
        getBedDirection(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): Internal.Direction;
        setRequiresTool(v: boolean): void;
        canStickTo(arg0: Internal.BlockState_, arg1: Internal.BlockState_): boolean;
        arch$getFluid(): Internal.FlowingFluid;
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
    type AcidBlock_ = AcidBlock;
    interface IForgeRegistry$CreateCallback <V> {
        abstract onCreate(arg0: Internal.IForgeRegistryInternal_<V>, arg1: Internal.RegistryManager_): void;
        (arg0: Internal.IForgeRegistryInternal<V>, arg1: Internal.RegistryManager): void;
    }
    type IForgeRegistry$CreateCallback_<V> = IForgeRegistry$CreateCallback<V>;
    class DropInventoryConfiguration extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(inventoryType: Internal.InventoryUtil$InventoryType_, entityAction: Internal.Holder_<Internal.ConfiguredEntityAction<any, any>>, itemAction: Internal.Holder_<Internal.ConfiguredItemAction<any, any>>, itemCondition: Internal.Holder_<Internal.ConfiguredItemCondition<any, any>>, slots: Internal.ListConfiguration_<Internal.ArgumentWrapper<number>>, power: Internal.Optional_<ResourceLocation>, throwRandomly: boolean, retainOwnership: boolean, amount: number)
        inventoryType(): Internal.InventoryUtil$InventoryType;
        isConfigurationValid(): boolean;
        slots(): Internal.ListConfiguration<Internal.ArgumentWrapper<number>>;
        entityAction(): Internal.Holder<Internal.ConfiguredEntityAction<any, any>>;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        throwRandomly(): boolean;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        amount(): number;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        itemCondition(): Internal.Holder<Internal.ConfiguredItemCondition<any, any>>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        retainOwnership(): boolean;
        itemAction(): Internal.Holder<Internal.ConfiguredItemAction<any, any>>;
        getMissingBinds(): Internal.List<string>;
        power(): Internal.Optional<ResourceLocation>;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        static readonly CODEC: Internal.Codec<Internal.DropInventoryConfiguration>;
    }
    type DropInventoryConfiguration_ = DropInventoryConfiguration;
    class RecipeIngredientRole extends Internal.Enum<Internal.RecipeIngredientRole> {
        static valueOf(arg0: string): Internal.RecipeIngredientRole;
        static values(): Internal.RecipeIngredientRole[];
        static readonly CATALYST: Internal.RecipeIngredientRole;
        static readonly OUTPUT: Internal.RecipeIngredientRole;
        static readonly RENDER_ONLY: Internal.RecipeIngredientRole;
        static readonly INPUT: Internal.RecipeIngredientRole;
    }
    type RecipeIngredientRole_ = "output" | "input" | "catalyst" | RecipeIngredientRole | "render_only";
    class BlockInRadiusCondition extends Internal.EntityCondition<Internal.BlockInRadiusConfiguration> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        check(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.Entity_): boolean;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        check(arg0: Internal.BlockInRadiusConfiguration_, arg1: Internal.ConditionData_, arg2: Internal.Entity_): boolean;
        check(arg0: Internal.BlockInRadiusConfiguration_, arg1: Internal.Entity_): boolean;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type BlockInRadiusCondition_ = BlockInRadiusCondition;
    class DyeItem extends Internal.Item implements Internal.SignApplicator {
        constructor(arg0: Internal.DyeColor_, arg1: Internal.Item$Properties_)
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
        getDyeColor(): Internal.DyeColor;
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
        static byColor(arg0: Internal.DyeColor_): Internal.DyeItem;
        handler$cbo000$connectormod$redirectIsPiglinCurrency(arg0: Internal.ItemStack_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        setArmorKnockbackResistance(knockbackResistance: number): void;
        canPerformAction(arg0: Internal.ItemStack_, arg1: Internal.ToolAction_): boolean;
        onInventoryTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Player_, arg3: number, arg4: number): void;
        hasCustomEntity(arg0: Internal.ItemStack_): boolean;
        onEntityItemUpdate(arg0: Internal.ItemStack_, arg1: Internal.ItemEntity_): boolean;
        tryApplyToSign(arg0: Internal.Level_, arg1: Internal.SignBlockEntity_, arg2: boolean, arg3: Player_): boolean;
        canApplyToSign(arg0: Internal.SignText_, arg1: Player_): boolean;
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
        get dyeColor(): Internal.DyeColor
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
    type DyeItem_ = DyeItem;
    class AmbersolLightBlock extends Internal.Block {
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
        static testSkylight(arg0: Internal.LevelReader_, arg1: Internal.BlockState_, arg2: BlockPos_): boolean;
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
        getTopOfColumnLight(arg0: BlockPos_, arg1: Internal.LevelReader_): BlockPos;
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
        getTopOfColumn(arg0: BlockPos_, arg1: Internal.LevelReader_, arg2: Internal.Predicate_<Internal.BlockState>): BlockPos;
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
        static readonly WATERLOGGED: Internal.BooleanProperty;
    }
    type AmbersolLightBlock_ = AmbersolLightBlock;
    class Matrix3d implements Internal.Cloneable, Internal.Externalizable, Internal.Matrix3dc {
        constructor(arg0: Internal.Matrix3fc_)
        constructor()
        constructor(arg0: Internal.Matrix2fc_)
        constructor(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_)
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: Internal.Matrix4dc_)
        constructor(arg0: Internal.Matrix3dc_)
        constructor(arg0: Internal.Matrix4fc_)
        constructor(arg0: Internal.Matrix2dc_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number)
        mapXZnY(arg0: Internal.Matrix3d_): this;
        reflect(arg0: Internal.Quaterniondc_): this;
        rotationX(arg0: number): this;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mapnZXY(arg0: Internal.Matrix3d_): this;
        set(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        mapnYXnZ(arg0: Internal.Matrix3d_): this;
        setFloats(arg0: number, arg1: Internal.ByteBuffer_): this;
        mapnZnXY(): this;
        mapZXnY(): this;
        rotationYXZ(arg0: number, arg1: number, arg2: number): this;
        setLookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        setRow(arg0: number, arg1: Internal.Vector3dc_): this;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapZnYnX(arg0: Internal.Matrix3d_): this;
        swap(arg0: Internal.Matrix3d_): this;
        m20(): number;
        mul(arg0: Internal.Matrix3fc_, arg1: Internal.Matrix3d_): this;
        rotate(arg0: Internal.AxisAngle4d_): this;
        mapXnYnZ(): this;
        negateY(arg0: Internal.Matrix3d_): this;
        getUnnormalizedRotation(arg0: Quaternionf_): Quaternionf;
        quadraticFormProduct(arg0: Internal.Vector3dc_): number;
        lerp(arg0: Internal.Matrix3dc_, arg1: number, arg2: Internal.Matrix3d_): this;
        mapnYnZX(): this;
        rotation(arg0: number, arg1: number, arg2: number, arg3: number): this;
        set(arg0: Internal.Matrix4fc_): this;
        scaleLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        rotateLocalY(arg0: number): this;
        set(arg0: number, arg1: number, arg2: number): this;
        mapnZYnX(): this;
        m02(arg0: number): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        rotateY(arg0: number): this;
        getNormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        scale(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        mapnZnYnX(arg0: Internal.Matrix3d_): this;
        mapYZnX(): this;
        positiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        scaleLocal(arg0: number, arg1: number, arg2: number): this;
        transform(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapnXZY(arg0: Internal.Matrix3d_): this;
        mapnYnZnX(): this;
        setRowColumn(arg0: number, arg1: number, arg2: number): this;
        normal(arg0: Internal.Matrix3d_): this;
        scale(arg0: number, arg1: number, arg2: number): this;
        set(arg0: Internal.Matrix3fc_): this;
        obliqueZ(arg0: number, arg1: number): this;
        rotationY(arg0: number): this;
        mapZYX(): this;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        transformTranspose(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        add(arg0: Internal.Matrix3dc_): this;
        equals(arg0: Internal.Matrix3dc_, arg1: number): boolean;
        mulLocal(arg0: Internal.Matrix3dc_): this;
        rotate(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix3d_): this;
        mapYnZX(): this;
        mapnXnYnZ(): this;
        mapYXnZ(arg0: Internal.Matrix3d_): this;
        mapnXnYZ(): this;
        mapYnZnX(): this;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotateX(arg0: number, arg1: Internal.Matrix3d_): this;
        set(arg0: Internal.AxisAngle4d_): this;
        rotateX(arg0: number): this;
        scale(arg0: Internal.Vector3dc_, arg1: Internal.Matrix3d_): this;
        rotation(arg0: number, arg1: Internal.Vector3fc_): this;
        mapZnYX(): this;
        mapYnXnZ(arg0: Internal.Matrix3d_): this;
        rotationZYX(arg0: number, arg1: number, arg2: number): this;
        mulComponentWise(arg0: Internal.Matrix3dc_, arg1: Internal.Matrix3d_): this;
        negateZ(arg0: Internal.Matrix3d_): this;
        rotate(arg0: Internal.AxisAngle4f_): this;
        mulComponentWise(arg0: Internal.Matrix3dc_): this;
        rotate(arg0: Internal.AxisAngle4d_, arg1: Internal.Matrix3d_): this;
        scale(arg0: number): this;
        set(arg0: Internal.Matrix2dc_): this;
        set(arg0: Internal.ByteBuffer_): this;
        mapZXY(arg0: Internal.Matrix3d_): this;
        rotateLocalX(arg0: number): this;
        transformTranspose(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        mapnYnXnZ(arg0: Internal.Matrix3d_): this;
        getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        mulLocal(arg0: Internal.Matrix3dc_, arg1: Internal.Matrix3d_): this;
        setTransposed(arg0: Internal.Matrix3fc_): this;
        m01(arg0: number): this;
        set(arg0: Internal.Matrix4x3dc_): this;
        obliqueZ(arg0: number, arg1: number, arg2: Internal.Matrix3d_): this;
        get(arg0: Internal.Matrix3d_): this;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix3d_): this;
        transform(arg0: Vector3f_): Vector3f;
        positiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        set(arg0: Internal.Quaterniondc_): this;
        mapnXYnZ(): this;
        mapnXnZY(arg0: Internal.Matrix3d_): this;
        mapZYnX(): this;
        set(arg0: Internal.FloatBuffer_): this;
        rotateLocal(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix3d_): this;
        getRowColumn(arg0: number, arg1: number): number;
        rotationZ(arg0: number): this;
        transformTranspose(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotateLocalX(arg0: number, arg1: Internal.Matrix3d_): this;
        m12(arg0: number): this;
        quadraticFormProduct(arg0: Internal.Vector3fc_): number;
        mul(arg0: Internal.Matrix3dc_): this;
        isFinite(): boolean;
        set(arg0: Internal.AxisAngle4f_): this;
        mapYXZ(arg0: Internal.Matrix3d_): this;
        mapnYZX(): this;
        rotation(arg0: Internal.Quaternionfc_): this;
        mapnXnZnY(): this;
        rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix3d_): this;
        reflect(arg0: number, arg1: number, arg2: number): this;
        setSkewSymmetric(arg0: number, arg1: number, arg2: number): this;
        mapXnZnY(): this;
        mapZnXnY(arg0: Internal.Matrix3d_): this;
        set(arg0: Internal.Matrix4dc_): this;
        sub(arg0: Internal.Matrix3dc_): this;
        set(arg0: Internal.DoubleBuffer_): this;
        m00(arg0: number): this;
        mapYnXZ(): this;
        reflect(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix3d_): this;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        add(arg0: Internal.Matrix3dc_, arg1: Internal.Matrix3d_): this;
        setFloats(arg0: Internal.ByteBuffer_): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): this;
        reflection(arg0: number, arg1: number, arg2: number): this;
        setLookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        set(arg0: Internal.Matrix3dc_): this;
        mapYnZX(arg0: Internal.Matrix3d_): this;
        transform(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        get(arg0: number[], arg1: number): number[];
        rotateLocalY(arg0: number, arg1: Internal.Matrix3d_): this;
        mapnYnXZ(arg0: Internal.Matrix3d_): this;
        m11(arg0: number): this;
        m02(): number;
        scaling(arg0: number): this;
        mapZnYX(arg0: Internal.Matrix3d_): this;
        quadraticFormProduct(arg0: number, arg1: number, arg2: number): number;
        mapnZXnY(): this;
        mapnXnYZ(arg0: Internal.Matrix3d_): this;
        invert(): this;
        mapYXnZ(): this;
        mapnZYnX(arg0: Internal.Matrix3d_): this;
        scale(arg0: Internal.Vector3dc_): this;
        negateZ(): this;
        mapnXnZY(): this;
        getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotate(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix3d_): this;
        rotateLocal(arg0: Internal.Quaterniondc_): this;
        transform(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        rotateZ(arg0: number): this;
        getNormalizedRotation(arg0: Quaternionf_): Quaternionf;
        set(arg0: number[]): this;
        m22(arg0: number): this;
        setTransposed(arg0: Internal.Matrix3dc_): this;
        rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3d_): this;
        mapnYZX(arg0: Internal.Matrix3d_): this;
        getToAddress(arg0: number): Internal.Matrix3dc;
        rotateXYZ(arg0: number, arg1: number, arg2: number): this;
        mapZYX(arg0: Internal.Matrix3d_): this;
        mapnZnXnY(arg0: Internal.Matrix3d_): this;
        mapnYnZX(arg0: Internal.Matrix3d_): this;
        scale(arg0: number, arg1: Internal.Matrix3d_): this;
        rotateLocalZ(arg0: number, arg1: Internal.Matrix3d_): this;
        rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix3d_): this;
        mapXZY(): this;
        mapnZXY(): this;
        mapnYnZnX(arg0: Internal.Matrix3d_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        identity(): this;
        m01(): number;
        mapnZnXY(arg0: Internal.Matrix3d_): this;
        m10(arg0: number): this;
        mapXZnY(): this;
        lerp(arg0: Internal.Matrix3dc_, arg1: number): this;
        rotation(arg0: Internal.Quaterniondc_): this;
        mapZXnY(arg0: Internal.Matrix3d_): this;
        mul(arg0: Internal.Matrix3fc_): this;
        mapnZnYnX(): this;
        mapXnYnZ(arg0: Internal.Matrix3d_): this;
        negateY(): this;
        mapnXZY(): this;
        setFromAddress(arg0: number): this;
        rotate(arg0: Internal.Quaternionfc_): this;
        mapZnYnX(): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix3d_): this;
        mapYZnX(arg0: Internal.Matrix3d_): this;
        get(arg0: number[]): number[];
        setRow(arg0: number, arg1: number, arg2: number, arg3: number): this;
        normal(): this;
        m21(arg0: number): this;
        toString(arg0: Internal.NumberFormat_): string;
        mapnYXnZ(): this;
        set(arg0: number, arg1: Internal.FloatBuffer_): this;
        m12(): number;
        mapnZXnY(arg0: Internal.Matrix3d_): this;
        rotationXYZ(arg0: number, arg1: number, arg2: number): this;
        get(arg0: number[], arg1: number): number[];
        clone(): any;
        rotateLocal(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix3d_): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        getRotation(arg0: Internal.AxisAngle4f_): Internal.AxisAngle4f;
        mapnZnXnY(): this;
        mapnXZnY(): this;
        rotate(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix3d_): this;
        rotationTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mapYZX(): this;
        getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapnYnXZ(): this;
        mul(arg0: Internal.Matrix3dc_, arg1: Internal.Matrix3d_): this;
        m00(): number;
        transpose(arg0: Internal.Matrix3d_): this;
        rotateZYX(arg0: number, arg1: number, arg2: number): this;
        mapnYXZ(): this;
        get(arg0: number[]): number[];
        determinant(): number;
        negateX(): this;
        invert(arg0: Internal.Matrix3d_): this;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix3d_): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_): this;
        normalizedPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotateLocal(arg0: Internal.Quaternionfc_): this;
        getTransposedFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        mapnZnYX(): this;
        getEulerAnglesZYX(arg0: Internal.Vector3d_): Internal.Vector3d;
        getColumn(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        getFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        getTransposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        m20(arg0: number): this;
        m11(): number;
        rotation(arg0: Internal.AxisAngle4d_): this;
        mapYnXZ(arg0: Internal.Matrix3d_): this;
        setColumn(arg0: number, arg1: Internal.Vector3dc_): this;
        rotationTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Matrix3d_): this;
        getTransposedFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        m22(): number;
        mapZnXnY(): this;
        sub(arg0: Internal.Matrix3dc_, arg1: Internal.Matrix3d_): this;
        mapnYZnX(): this;
        scaling(arg0: Internal.Vector3dc_): this;
        rotateY(arg0: number, arg1: Internal.Matrix3d_): this;
        mapXnZnY(arg0: Internal.Matrix3d_): this;
        mapYXZ(): this;
        reflect(arg0: Internal.Vector3dc_): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix3d_): this;
        rotate(arg0: Internal.Quaterniondc_): this;
        mapnZYX(arg0: Internal.Matrix3d_): this;
        normalizedPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapnZYX(): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        scaling(arg0: number, arg1: number, arg2: number): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number): this;
        mapYZX(arg0: Internal.Matrix3d_): this;
        cofactor(arg0: Internal.Matrix3d_): this;
        mapnYZnX(arg0: Internal.Matrix3d_): this;
        getRow(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        getScale(arg0: Internal.Vector3d_): Internal.Vector3d;
        setColumn(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mapXnZY(arg0: Internal.Matrix3d_): this;
        mapnXnZnY(arg0: Internal.Matrix3d_): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix3d_): this;
        m10(): number;
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapZnXY(arg0: Internal.Matrix3d_): this;
        mapnYXZ(arg0: Internal.Matrix3d_): this;
        transpose(): this;
        rotation(arg0: Internal.AxisAngle4f_): this;
        reflect(arg0: Internal.Vector3dc_, arg1: Internal.Matrix3d_): this;
        getTransposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        mapnXZnY(arg0: Internal.Matrix3d_): this;
        reflection(arg0: Internal.Quaterniondc_): this;
        getEulerAnglesXYZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapZnXY(): this;
        rotation(arg0: number, arg1: Internal.Vector3dc_): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mapnYnXnZ(): this;
        m21(): number;
        negateX(arg0: Internal.Matrix3d_): this;
        cofactor(): this;
        rotateZ(arg0: number, arg1: Internal.Matrix3d_): this;
        transform(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        getUnnormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapXnZY(): this;
        mapZYnX(arg0: Internal.Matrix3d_): this;
        getFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        reflection(arg0: Internal.Vector3dc_): this;
        rotateLocalZ(arg0: number): this;
        set(arg0: Internal.Matrix2fc_): this;
        rotate(arg0: number, arg1: Internal.Vector3fc_): this;
        normalizedPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        get(arg0: number, arg1: number): number;
        mapZXY(): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        mapYnXnZ(): this;
        mapnXYnZ(arg0: Internal.Matrix3d_): this;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        positiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        zero(): this;
        rotateYXZ(arg0: Internal.Vector3d_): this;
        set(arg0: Internal.Quaternionfc_): this;
        mapXZY(arg0: Internal.Matrix3d_): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        mapYnZnX(arg0: Internal.Matrix3d_): this;
        mapnXnYnZ(arg0: Internal.Matrix3d_): this;
        mapnZnYX(arg0: Internal.Matrix3d_): this;
        set(arg0: number[]): this;
        set transposed(arg0: Internal.Matrix3fc_)
        get finite(): boolean
        set floats(arg0: Internal.ByteBuffer_)
        set transposed(arg0: Internal.Matrix3dc_)
        set fromAddress(arg0: number)
        m01: number;
        m12: number;
        m02: number;
        m10: number;
        m21: number;
        m00: number;
        m11: number;
        m22: number;
        m20: number;
    }
    type Matrix3d_ = Matrix3d;
    class BlockPositionSource$Type implements Internal.PositionSourceType<Internal.BlockPositionSource> {
        constructor()
        static register<S extends Internal.PositionSourceType<T>, T extends Internal.PositionSource>(arg0: string, arg1: S): S;
        static toNetwork<T extends Internal.PositionSource>(arg0: T, arg1: Internal.FriendlyByteBuf_): void;
        codec(): Internal.Codec<Internal.BlockPositionSource>;
        static fromNetwork(arg0: Internal.FriendlyByteBuf_): Internal.PositionSource;
        read(arg0: Internal.FriendlyByteBuf_): Internal.PositionSource;
        write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.BlockPositionSource_): void;
        write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.PositionSource_): void;
    }
    type BlockPositionSource$Type_ = BlockPositionSource$Type;
    interface IntStream extends Internal.BaseStream<number, Internal.IntStream> {
        concat(arg0: Internal.IntStream_, arg1: Internal.IntStream_): this;
        range(arg0: number, arg1: number): this;
        abstract min(): Internal.OptionalInt;
        abstract map(arg0: Internal.IntUnaryOperator_): this;
        abstract isParallel(): boolean;
        abstract onClose(arg0: Internal.Runnable_): this;
        generate(arg0: Internal.IntSupplier_): this;
        builder(): Internal.IntStream$Builder;
        abstract sum(): number;
        abstract findFirst(): Internal.OptionalInt;
        abstract max(): Internal.OptionalInt;
        rangeClosed(arg0: number, arg1: number): this;
        dropWhile(arg0: Internal.IntPredicate_): this;
        abstract count(): number;
        abstract findAny(): Internal.OptionalInt;
        mapMulti(arg0: Internal.IntStream$IntMapMultiConsumer_): this;
        abstract reduce(arg0: Internal.IntBinaryOperator_): Internal.OptionalInt;
        of(arg0: number): this;
        abstract mapToLong(arg0: Internal.IntToLongFunction_): Internal.LongStream;
        iterate(arg0: number, arg1: Internal.IntUnaryOperator_): this;
        spliterator(): Internal.Spliterator<any>;
        abstract reduce(arg0: number, arg1: Internal.IntBinaryOperator_): number;
        iterate(arg0: number, arg1: Internal.IntPredicate_, arg2: Internal.IntUnaryOperator_): this;
        abstract filter(arg0: Internal.IntPredicate_): this;
        abstract anyMatch(arg0: Internal.IntPredicate_): boolean;
        abstract distinct(): this;
        takeWhile(arg0: Internal.IntPredicate_): this;
        abstract peek(arg0: Internal.IntConsumer_): this;
        abstract collect<R>(arg0: Internal.Supplier_<R>, arg1: Internal.ObjIntConsumer_<R>, arg2: Internal.BiConsumer_<R, R>): R;
        abstract mapToDouble(arg0: Internal.IntToDoubleFunction_): Internal.DoubleStream;
        abstract sorted(): this;
        abstract forEach(arg0: Internal.IntConsumer_): void;
        abstract flatMap(arg0: Internal.IntFunction_<Internal.IntStream>): this;
        abstract noneMatch(arg0: Internal.IntPredicate_): boolean;
        abstract toArray(): number[];
        abstract iterator(): Internal.PrimitiveIterator$OfInt;
        abstract unordered(): this;
        sequential(): Internal.BaseStream<any, any>;
        empty(): this;
        abstract mapToObj<U>(arg0: Internal.IntFunction_<U>): Internal.Stream<U>;
        abstract limit(arg0: number): this;
        abstract asDoubleStream(): Internal.DoubleStream;
        of(...arg0: number[]): this;
        abstract allMatch(arg0: Internal.IntPredicate_): boolean;
        abstract asLongStream(): Internal.LongStream;
        abstract forEachOrdered(arg0: Internal.IntConsumer_): void;
        abstract boxed(): Internal.Stream<number>;
        abstract close(): void;
        abstract summaryStatistics(): Internal.IntSummaryStatistics;
        abstract average(): Internal.OptionalDouble;
        parallel(): Internal.BaseStream<any, any>;
        abstract skip(arg0: number): this;
        get parallel(): boolean
    }
    type IntStream_ = IntStream;
    interface ClimateProperties {
        abstract getTemperatureModifier(): Internal.Biome$TemperatureModifier;
        abstract getDownfall(): number;
        abstract getTemperature(): number;
        abstract hasPrecipitation(): boolean;
        get temperatureModifier(): Internal.Biome$TemperatureModifier
        get downfall(): number
        get temperature(): number
    }
    type ClimateProperties_ = ClimateProperties;
    interface IConfigurable {
        abstract getConfigElement<T>(...arg0: string[]): Internal.Optional<T>;
        abstract getConfigList(...arg0: string[]): Internal.List<Internal.IConfigurable>;
    }
    type IConfigurable_ = IConfigurable;
    class ActionOnBlockUsePower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<Internal.BlockInteractionConfiguration> {
        constructor()
        tryExecute(arg0: Internal.ConfiguredPower_<Internal.BlockInteractionConfiguration, any>, arg1: Internal.Entity_, arg2: BlockPos_, arg3: Internal.Direction_, arg4: Internal.InteractionHand_): Internal.Optional<InteractionResult>;
        static tryInteract(arg0: Internal.Entity_, arg1: BlockPos_, arg2: Internal.Direction_, arg3: Internal.InteractionHand_): Internal.Optional<InteractionResult>;
    }
    type ActionOnBlockUsePower_ = ActionOnBlockUsePower;
    class AbstractUniform {
        constructor()
        setMat2x2(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: number, arg1: number, arg2: number): void;
        setMat3x4(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        set(arg0: number): void;
        setSafe(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setMat3x2(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setMat3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
        set(arg0: number): void;
        set(arg0: number, arg1: number, arg2: number): void;
        set(arg0: number[]): void;
        setMat4x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
        setMat4x2(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        set(arg0: number, arg1: number): void;
        setMat4x4(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): void;
        set(arg0: Matrix4f_): void;
        set(arg0: Matrix3f_): void;
        setMat2x4(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        set(arg0: Vector3f_): void;
        setSafe(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: Vec4f_): void;
        set(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set(arg0: number, arg1: number): void;
        setMat2x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    }
    type AbstractUniform_ = AbstractUniform;
    class ContextUtils$EMayInteractContext {
        constructor(level: Internal.Level_, pos: BlockPos_, entity: Internal.Entity_)
        /**
         * The position where the interaction may occur
        */
        readonly pos: BlockPos;
        /**
         * The level where the interaction may occur
        */
        readonly level: Internal.Level;
        /**
         * The entity involved in the interaction
        */
        readonly entity: Internal.Entity;
    }
    type ContextUtils$EMayInteractContext_ = ContextUtils$EMayInteractContext;
    class DualBiEntityCondition extends Internal.BiEntityCondition<Internal.HolderConfiguration<Internal.ConfiguredBiEntityCondition<any, any>>> {
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static invert(): Internal.DualBiEntityCondition;
        static undirected(): Internal.DualBiEntityCondition;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type DualBiEntityCondition_ = DualBiEntityCondition;
    class WildcardIngredient extends Internal.KubeJSIngredient {
        getDisplayStacks(): Internal.ItemStackSet;
        static not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        self(): Internal.Ingredient;
        getCustomIngredient(): Internal.CustomIngredient;
        getItemIds(): Internal.Set<string>;
        asStack(): InputItem;
        withCount(count: number): InputItem;
        or(ingredient: Internal.Ingredient_): Internal.Ingredient;
        toJson(): Internal.JsonElement;
        static isEqual<T>(arg0: any): Internal.Predicate<T>;
        isWildcard(): boolean;
        getStacks(): Internal.ItemStackSet;
        getItemTypes(): Internal.Set<Internal.Item>;
        or(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        and(ingredient: Internal.Ingredient_): Internal.Ingredient;
        getFirst(): Internal.ItemStack;
        subtract(subtracted: Internal.Ingredient_): Internal.Ingredient;
        negate(): Internal.Predicate<Internal.ItemStack>;
        requiresTesting(): boolean;
        asIngredient(): Internal.Ingredient;
        testItem(item: Internal.Item_): boolean;
        and(arg0: Internal.Predicate_<Internal.ItemStack>): Internal.Predicate<Internal.ItemStack>;
        get displayStacks(): Internal.ItemStackSet
        get customIngredient(): Internal.CustomIngredient
        get itemIds(): Internal.Set<string>
        get wildcard(): boolean
        get stacks(): Internal.ItemStackSet
        get itemTypes(): Internal.Set<Internal.Item>
        get first(): Internal.ItemStack
        static INSTANCE: Internal.WildcardIngredient;
        static readonly SERIALIZER: Internal.KubeJSIngredientSerializer<Internal.WildcardIngredient>;
    }
    type WildcardIngredient_ = WildcardIngredient;
    interface BorderChangeListener {
        abstract onBorderSetDamageSafeZOne(arg0: Internal.WorldBorder_, arg1: number): void;
        abstract onBorderSizeLerping(arg0: Internal.WorldBorder_, arg1: number, arg2: number, arg3: number): void;
        abstract onBorderCenterSet(arg0: Internal.WorldBorder_, arg1: number, arg2: number): void;
        abstract onBorderSizeSet(arg0: Internal.WorldBorder_, arg1: number): void;
        abstract onBorderSetDamagePerBlock(arg0: Internal.WorldBorder_, arg1: number): void;
        abstract onBorderSetWarningBlocks(arg0: Internal.WorldBorder_, arg1: number): void;
        abstract onBorderSetWarningTime(arg0: Internal.WorldBorder_, arg1: number): void;
    }
    type BorderChangeListener_ = BorderChangeListener;
    class ChanneledLightningBuilder extends Internal.BaseTriggerInstanceBuilder {
        constructor()
        /**
         * The victims hit by the lightning summoned by the Channeling enchantment.
         * 
         * All entities in this list must be hit.
        */
        addVictimByPredicate(arg0: Internal.EntityPredicate_): void;
        wrapEntity(arg0: Internal.EntityPredicate_): Internal.ContextAwarePredicate;
        /**
         * The victims hit by the lightning summoned by the Channeling enchantment.
         * 
         * All entities in this list must be hit.
        */
        addVictimByType(arg0: Internal.EntityType_<any>): void;
        /**
         * The victims hit by the lightning summoned by the Channeling enchantment.
         * 
         * All entities in this list must be hit.
        */
        addVictimByCondition(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): void;
        /**
         * The victims hit by the lightning summoned by the Channeling enchantment.
         * 
         * All entities in this list must be hit.
        */
        addVictim(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>): void;
        toEntity(arg0: Internal.EntityType_<any>): Internal.EntityPredicate;
        wrapEntity(arg0: Internal.EntityType_<any>): Internal.ContextAwarePredicate;
        wrapEntity(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): Internal.ContextAwarePredicate;
    }
    type ChanneledLightningBuilder_ = ChanneledLightningBuilder;
    class DripstoneRecipe extends Internal.LycheeRecipe<Internal.DripstoneContext> implements Internal.BlockKeyRecipe<Internal.DripstoneRecipe>, Internal.ChanceRecipe {
        constructor(arg0: ResourceLocation_)
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        showingActionsCount(): number;
        getSchema(): Internal.RecipeSchema;
        static safeTick(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_, arg3: Internal.RandomSource_): boolean;
        getBlockOutputs(): Internal.List<net.minecraft.advancements.critereon.BlockPredicate>;
        getRemainingItems(arg0: Internal.DripstoneContext_): Internal.NonNullList<Internal.ItemStack>;
        getBlock(): net.minecraft.advancements.critereon.BlockPredicate;
        compareTo(arg0: any): number;
        static getBlockAboveStalactite(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_): Internal.BlockState;
        matches(arg0: Internal.DripstoneContext_, arg1: Internal.Level_): boolean;
        getMod(): string;
        isActionPath(arg0: Internal.JsonPointer_): boolean;
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        defaultItemPointer(): Internal.JsonPointer;
        getAllActions(): Internal.Stream<Internal.PostAction>;
        static filterHidden(arg0: Internal.Stream_<Internal.PostAction>): Internal.Stream<Internal.PostAction>;
        compareTo(arg0: Internal.DripstoneRecipe_): number;
        static processActionGroup(arg0: Internal.ILycheeRecipe_<any>, arg1: Internal.JsonPointer_, arg2: Internal.List_<Internal.PostAction>, arg3: Internal.JsonObject_): Internal.JsonElement;
        lychee$getId(): ResourceLocation;
        getChance(): number;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        static processActions(arg0: Internal.ILycheeRecipe_<any>, arg1: Internal.JsonObject_): void;
        setGroup(group: string): void;
        setChance(arg0: number): void;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        getSourceBlock(): net.minecraft.advancements.critereon.BlockPredicate;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        static on(arg0: Internal.BlockState_, arg1: Internal.ServerLevel_, arg2: BlockPos_): boolean;
        getItemIndexes(arg0: LycheeReference_): Internal.IntList;
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get blockOutputs(): Internal.List<net.minecraft.advancements.critereon.BlockPredicate>
        get block(): net.minecraft.advancements.critereon.BlockPredicate
        get mod(): string
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get allActions(): Internal.Stream<Internal.PostAction>
        get chance(): number
        get type(): ResourceLocation
        set group(group: string)
        set chance(arg0: number)
        get orCreateId(): ResourceLocation
        get sourceBlock(): net.minecraft.advancements.critereon.BlockPredicate
        get incomplete(): boolean
    }
    type DripstoneRecipe_ = DripstoneRecipe;
    class HurtBySensor extends Internal.Sensor<Internal.LivingEntity> {
        constructor()
    }
    type HurtBySensor_ = HurtBySensor;
    class Matrix4d implements Internal.Cloneable, Internal.Externalizable, Internal.Matrix4dc {
        constructor()
        constructor(arg0: Internal.Matrix4x3dc_)
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: Internal.Matrix4dc_)
        constructor(arg0: Internal.Matrix3dc_)
        constructor(arg0: Internal.Matrix4fc_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number)
        constructor(arg0: Internal.Matrix4x3fc_)
        constructor(arg0: Internal.Vector4d_, arg1: Internal.Vector4d_, arg2: Internal.Vector4d_, arg3: Internal.Vector4d_)
        unproject(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        set(arg0: number, arg1: number, arg2: number): this;
        mapZXY(arg0: Internal.Matrix4d_): this;
        unprojectInv(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        invertOrtho(arg0: Internal.Matrix4d_): this;
        determinant3x3(): number;
        mapnZYnX(): this;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        get(arg0: Internal.Matrix4d_): this;
        mul(arg0: Internal.Matrix4dc_): this;
        rotateTranslation(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        projectedGridRange(arg0: Internal.Matrix4dc_, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        transform(arg0: Internal.Vector4d_): Internal.Vector4d;
        zero(): this;
        translationRotateScale(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_): this;
        getUnnormalizedRotation(arg0: Quaternionf_): Quaternionf;
        setFrustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        origin(arg0: Internal.Vector3d_): Internal.Vector3d;
        normal(arg0: Internal.Matrix4d_): this;
        rotateAffine(arg0: Internal.Quaterniondc_): this;
        mapnXZnY(arg0: Internal.Matrix4d_): this;
        rotationX(arg0: number): this;
        unproject(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        arcball(arg0: number, arg1: Internal.Vector3dc_, arg2: number, arg3: number): this;
        pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: Internal.Matrix4d_): this;
        perspectiveNear(): number;
        unprojectInv(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        transformDirection(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        normalize3x3(arg0: Internal.Matrix4d_): this;
        obliqueZ(arg0: number, arg1: number): this;
        mapZXnY(): this;
        mul(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        translation(arg0: number, arg1: number, arg2: number): this;
        get4x3Transposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        invertFrustum(arg0: Internal.Matrix4d_): this;
        rotateAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        rotateAroundAffine(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        normal(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        rotation(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotate(arg0: Internal.AxisAngle4d_, arg1: Internal.Matrix4d_): this;
        set(arg0: Internal.Matrix4x3dc_): this;
        setPerspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mul4x3ComponentWise(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        unprojectInv(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        normalize3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        mapnXnZnY(arg0: Internal.Matrix4d_): this;
        obliqueZ(arg0: number, arg1: number, arg2: Internal.Matrix4d_): this;
        sub4x3(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        setFrustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mapnYXZ(arg0: Internal.Matrix4d_): this;
        mapZYnX(): this;
        perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number): this;
        translationRotateScaleMulAffine(arg0: Internal.Vector3fc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3fc_, arg3: Internal.Matrix4d_): this;
        lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        rotateAffine(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        mapXZnY(arg0: Internal.Matrix4d_): this;
        perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        rotationY(arg0: number): this;
        translationRotateScale(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: number): this;
        mapnZXY(arg0: Internal.Matrix4d_): this;
        mapnYXnZ(arg0: Internal.Matrix4d_): this;
        mul(arg0: Internal.Matrix3x2dc_): this;
        setFloats(arg0: number, arg1: Internal.ByteBuffer_): this;
        unprojectInv(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        translateLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        transformAab(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): this;
        translationRotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        mapYXnZ(arg0: Internal.Matrix4d_): this;
        setLookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mulOrthoAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        rotateAffineYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        translateLocal(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        mapZnYX(): this;
        mapYXZ(arg0: Internal.Matrix4d_): this;
        mapXnZnY(arg0: Internal.Matrix4d_): this;
        scaling(arg0: Internal.Vector3dc_): this;
        setPerspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mapZnXnY(): this;
        rotationZYX(arg0: number, arg1: number, arg2: number): this;
        invertPerspectiveView(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        set(arg0: number[], arg1: number): this;
        testAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        setOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        setTranslation(arg0: Internal.Vector3dc_): this;
        transpose3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        tile(arg0: number, arg1: number, arg2: number, arg3: number): this;
        setPerspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Internal.Matrix4d_): this;
        lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        getColumn(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        m03(): number;
        isFinite(): boolean;
        reflect(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        shadow(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.Matrix4d_): this;
        setFloats(arg0: Internal.ByteBuffer_): this;
        rotateTowardsXY(arg0: number, arg1: number): this;
        mapZYX(arg0: Internal.Matrix4d_): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number): this;
        set(arg0: Internal.FloatBuffer_): this;
        mapYnZX(arg0: Internal.Matrix4d_): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        rotationZ(arg0: number): this;
        invertAffine(arg0: Internal.Matrix4d_): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): this;
        perspectiveInvOrigin(arg0: Internal.Vector3d_): Internal.Vector3d;
        transformTranspose(arg0: Internal.Vector4d_): Internal.Vector4d;
        perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        mapnZnXnY(): this;
        rotationTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mapnYnXZ(arg0: Internal.Matrix4d_): this;
        scale(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        set4x3(arg0: Internal.Matrix4x3dc_): this;
        translateLocal(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4d_): this;
        rotation(arg0: Internal.Quaternionfc_): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        rotateAffine(arg0: Internal.Quaternionfc_): this;
        get4x3Transposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        set(arg0: Internal.Matrix4fc_): this;
        transformProject(arg0: Internal.Vector4d_): Internal.Vector4d;
        add4x3(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        rotate(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix4d_): this;
        rotationAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number): this;
        get(arg0: number[], arg1: number): number[];
        mulTranslationAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        fma4x3(arg0: Internal.Matrix4dc_, arg1: number, arg2: Internal.Matrix4d_): this;
        mapYZnX(): this;
        m02(): number;
        scaleLocal(arg0: number, arg1: number, arg2: number): this;
        withLookAtUp(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        reflect(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        translationRotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): this;
        translationRotateScale(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): this;
        perspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        invertPerspective(arg0: Internal.Matrix4d_): this;
        mul(arg0: Matrix4f_): this;
        rotateAffineZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        set(arg0: Internal.Matrix3dc_): this;
        translationRotateScaleInvert(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3dc_): this;
        mapnZnXY(): this;
        assume(arg0: number): this;
        transformAffine(arg0: Internal.Vector4d_): Internal.Vector4d;
        m13(): number;
        setFrustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        transformProject(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        reflection(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        mapnZXnY(): this;
        setRotationZYX(arg0: number, arg1: number, arg2: number): this;
        negateZ(): this;
        rotate(arg0: number, arg1: Internal.Vector3dc_): this;
        setFromAddress(arg0: number): this;
        translationRotateScale(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): this;
        scale(arg0: Internal.Vector3dc_): this;
        mul(arg0: Internal.Matrix3x2fc_, arg1: Internal.Matrix4d_): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        mapnXZY(): this;
        mapYZnX(arg0: Internal.Matrix4d_): this;
        rotateLocal(arg0: Internal.Quaternionfc_): this;
        setColumn(arg0: number, arg1: Internal.Vector4dc_): this;
        mul3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        mul(arg0: Internal.Matrix4x3dc_): this;
        m22(arg0: number): this;
        translate(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4d_): this;
        mapnZXnY(arg0: Internal.Matrix4d_): this;
        rotationXYZ(arg0: number, arg1: number, arg2: number): this;
        perspective(arg0: number, arg1: number, arg2: number, arg3: number): this;
        setPerspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        transformProject(arg0: Internal.Vector4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        arcball(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        translationRotate(arg0: number, arg1: number, arg2: number, arg3: Internal.Quaterniondc_): this;
        mulAffine(arg0: Internal.Matrix4dc_): this;
        scale(arg0: number, arg1: Internal.Matrix4d_): this;
        rotateLocalZ(arg0: number, arg1: Internal.Matrix4d_): this;
        transformProject(arg0: Internal.Vector3d_): Internal.Vector3d;
        billboardSpherical(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        mapXZY(): this;
        mapnZXY(): this;
        setOrthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        transformDirection(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        rotate(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4d_): this;
        m10(arg0: number): this;
        m33(arg0: number): this;
        scaleLocal(arg0: number, arg1: Internal.Matrix4d_): this;
        mul3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        setOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        add(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        mapZnYX(arg0: Internal.Matrix4d_): this;
        get(arg0: number[], arg1: number): number[];
        rotateZ(arg0: number, arg1: Internal.Matrix4d_): this;
        mapXZnY(): this;
        getToAddress(arg0: number): Internal.Matrix4dc;
        translate(arg0: number, arg1: number, arg2: number): this;
        mapnXnYZ(arg0: Internal.Matrix4d_): this;
        rotation(arg0: Internal.Quaterniondc_): this;
        mapYXnZ(): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number): this;
        perspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        negateY(): this;
        perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        rotateZYX(arg0: number, arg1: number, arg2: number): this;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        setOrtho2D(arg0: number, arg1: number, arg2: number, arg3: number): this;
        set(arg0: Internal.Matrix4dc_): this;
        translationRotateScale(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: number): this;
        setTranslation(arg0: number, arg1: number, arg2: number): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        lookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        set(arg0: number, arg1: Internal.FloatBuffer_): this;
        m21(arg0: number): this;
        mapnYXnZ(): this;
        rotateAffineXYZ(arg0: number, arg1: number, arg2: number): this;
        transpose3x3(): this;
        reflection(arg0: number, arg1: number, arg2: number, arg3: number): this;
        shadow(arg0: Internal.Vector4dc_, arg1: Internal.Matrix4dc_, arg2: Internal.Matrix4d_): this;
        invertOrtho(): this;
        translationRotate(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        transpose3x3(arg0: Internal.Matrix4d_): this;
        normalizedPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        translateLocal(arg0: Internal.Vector3dc_): this;
        mul(arg0: Internal.Matrix4fc_, arg1: Internal.Matrix4d_): this;
        mulOrthoAffine(arg0: Internal.Matrix4dc_): this;
        getTransposedFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotateZYX(arg0: Internal.Vector3d_): this;
        getEulerAnglesZYX(arg0: Internal.Vector3d_): Internal.Vector3d;
        lerp(arg0: Internal.Matrix4dc_, arg1: number, arg2: Internal.Matrix4d_): this;
        getColumn(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        mul0(arg0: Internal.Matrix4dc_): this;
        getFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        m32(arg0: number): this;
        mapYZX(): this;
        translation(arg0: Internal.Vector3dc_): this;
        mapnYXZ(): this;
        transpose(arg0: Internal.Matrix4d_): this;
        transformProject(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        setLookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        originAffine(arg0: Internal.Vector3d_): Internal.Vector3d;
        negateX(): this;
        lookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        cofactor3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        mapnZYX(arg0: Internal.Matrix4d_): this;
        rotate(arg0: number, arg1: Internal.Vector3fc_): this;
        mapYZX(arg0: Internal.Matrix4d_): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number): this;
        withLookAtUp(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        lerp(arg0: Internal.Matrix4dc_, arg1: number): this;
        scaleXY(arg0: number, arg1: number, arg2: Internal.Matrix4d_): this;
        getRow(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        mapXnZY(arg0: Internal.Matrix4d_): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        m20(arg0: number): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        getTransposedFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        mapZnXY(arg0: Internal.Matrix4d_): this;
        transpose(): this;
        unprojectRay(arg0: Internal.Vector2dc_, arg1: number[], arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): this;
        set(arg0: number[]): this;
        rotation(arg0: Internal.AxisAngle4d_): this;
        frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        setRotationXYZ(arg0: number, arg1: number, arg2: number): this;
        normalizedPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        mul(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        setLookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        unproject(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        getRow(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        getScale(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotateX(arg0: number, arg1: Internal.Matrix4d_): this;
        m31(arg0: number): this;
        setFrustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        setPerspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4dc_): this;
        perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        mapnZYX(): this;
        rotate(arg0: Internal.Quaternionfc_): this;
        getEulerAnglesXYZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number): this;
        mapnYZnX(arg0: Internal.Matrix4d_): this;
        mul(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4d_): this;
        normal(): this;
        rotateTranslation(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        unproject(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        set(arg0: Internal.Matrix4x3fc_): this;
        lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        cofactor3x3(): this;
        arcball(arg0: number, arg1: Internal.Vector3dc_, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        rotateYXZ(arg0: Internal.Vector3d_): this;
        mapZnXY(): this;
        transformAffine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        mul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: Internal.Matrix4d_): this;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        mapXZY(arg0: Internal.Matrix4d_): this;
        frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        rotation(arg0: Internal.AxisAngle4f_): this;
        mulAffineR(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        mapnYnZX(arg0: Internal.Matrix4d_): this;
        getFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        normalizedPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        translateLocal(arg0: Internal.Vector3fc_): this;
        cofactor3x3(arg0: Internal.Matrix4d_): this;
        get(arg0: number, arg1: number): number;
        transformProject(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        rotation(arg0: number, arg1: Internal.Vector3dc_): this;
        rotateAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number): this;
        rotationYXZ(arg0: number, arg1: number, arg2: number): this;
        orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mul(arg0: Internal.Matrix3x2fc_): this;
        setOrtho2DLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        transformPosition(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        mapnYZnX(): this;
        perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        m30(arg0: number): this;
        positiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        translation(arg0: Internal.Vector3fc_): this;
        rotateY(arg0: number, arg1: Internal.Matrix4d_): this;
        mulLocal(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        mapXnZY(): this;
        set(arg0: Internal.ByteBuffer_): this;
        rotateLocalY(arg0: number): this;
        perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        m03(arg0: number): this;
        rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        lookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: Internal.Matrix4d_): this;
        rotateZ(arg0: number): this;
        set(arg0: number[]): this;
        billboardCylindrical(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        arcball(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        translationRotateScaleInvert(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): this;
        m20(): number;
        set(arg0: Internal.Quaterniondc_): this;
        frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        setPerspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        mapnZnXnY(arg0: Internal.Matrix4d_): this;
        withLookAtUp(arg0: number, arg1: number, arg2: number): this;
        mapZYX(): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        perspectiveFov(): number;
        get3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        perspectiveOrigin(arg0: Internal.Vector3d_): Internal.Vector3d;
        mapnXnYnZ(): this;
        reflect(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): this;
        getNormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        rotateY(arg0: number): this;
        positiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        negateX(arg0: Internal.Matrix4d_): this;
        m31(): number;
        perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        invertPerspective(): this;
        testSphere(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        mapnYnZX(): this;
        unprojectInvRay(arg0: Internal.Vector2dc_, arg1: number[], arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): this;
        getTranslation(arg0: Internal.Vector3d_): Internal.Vector3d;
        rotate(arg0: Internal.AxisAngle4d_): this;
        scaleLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        rotate(arg0: Internal.Quaterniondc_): this;
        perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        sub(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        setRowColumn(arg0: number, arg1: number, arg2: number): this;
        determineProperties(): this;
        mapZnXnY(arg0: Internal.Matrix4d_): this;
        mul(arg0: Internal.Matrix3x2dc_, arg1: Internal.Matrix4d_): this;
        rotateLocalX(arg0: number): this;
        transformAffine(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        mapXnZnY(): this;
        scale(arg0: number): this;
        translationRotateScaleInvert(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: number): this;
        m02(arg0: number): this;
        mulLocalAffine(arg0: Internal.Matrix4dc_): this;
        mapnZnYnX(arg0: Internal.Matrix4d_): this;
        translate(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): this;
        ortho2DLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        lookAtPerspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        translateLocal(arg0: number, arg1: number, arg2: number): this;
        mapnXnZY(arg0: Internal.Matrix4d_): this;
        mapnXYnZ(): this;
        scale(arg0: number, arg1: number, arg2: number): this;
        mapnXnYZ(): this;
        translate(arg0: Internal.Vector3dc_): this;
        ortho2DLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        setLookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        transform(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        rotate(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        mapYnZX(): this;
        getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        set(arg0: number[], arg1: number): this;
        m13(arg0: number): this;
        translate(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        set(arg0: Internal.AxisAngle4d_): this;
        rotateX(arg0: number): this;
        rotation(arg0: number, arg1: Internal.Vector3fc_): this;
        mapZnYnX(arg0: Internal.Matrix4d_): this;
        swap(arg0: Internal.Matrix4d_): this;
        m30(): number;
        positiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        project(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        mapXnYnZ(): this;
        negateY(arg0: Internal.Matrix4d_): this;
        rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        perspectiveFrustumSlice(arg0: number, arg1: number, arg2: Internal.Matrix4d_): this;
        mapnXnZnY(): this;
        rotate(arg0: Internal.AxisAngle4f_): this;
        sub4x3(arg0: Internal.Matrix4dc_): this;
        perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        getRowColumn(arg0: number, arg1: number): number;
        rotateLocal(arg0: Internal.Quaterniondc_): this;
        frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        perspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): this;
        set(arg0: Internal.Vector4d_, arg1: Internal.Vector4d_, arg2: Internal.Vector4d_, arg3: Internal.Vector4d_): this;
        transformTranspose(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        m01(arg0: number): this;
        project(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        mul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): this;
        mapnYZX(arg0: Internal.Matrix4d_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        setPerspective(arg0: number, arg1: number, arg2: number, arg3: number): this;
        shadow(arg0: Internal.Vector4d_, arg1: Internal.Matrix4d_): this;
        setLookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        rotateLocal(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): this;
        rotationTowardsXY(arg0: number, arg1: number): this;
        frustumAabb(arg0: Internal.Vector3d_, arg1: Internal.Vector3d_): this;
        rotateLocalX(arg0: number, arg1: Internal.Matrix4d_): this;
        mulPerspectiveAffine(arg0: Internal.Matrix4dc_): this;
        translationRotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        mapnYZX(): this;
        m12(arg0: number): this;
        set(arg0: Internal.AxisAngle4f_): this;
        rotateAffineZYX(arg0: number, arg1: number, arg2: number): this;
        transformDirection(arg0: Vector3f_): Vector3f;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        negateZ(arg0: Internal.Matrix4d_): this;
        invert(): this;
        mulPerspectiveAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        setOrthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        mapnZYnX(arg0: Internal.Matrix4d_): this;
        rotateXYZ(arg0: Internal.Vector3d_): this;
        rotateAffineYXZ(arg0: number, arg1: number, arg2: number): this;
        unprojectRay(arg0: number, arg1: number, arg2: number[], arg3: Internal.Vector3d_, arg4: Internal.Vector3d_): this;
        add(arg0: Internal.Matrix4dc_): this;
        perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): this;
        set(arg0: Internal.DoubleBuffer_): this;
        transformAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Vector3d_, arg7: Internal.Vector3d_): this;
        setPerspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number): this;
        transformPosition(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        m23(arg0: number): this;
        rotateAroundLocal(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        m00(arg0: number): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        mapnXZY(arg0: Internal.Matrix4d_): this;
        get4x3(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        mulComponentWise(arg0: Internal.Matrix4dc_): this;
        rotateXYZ(arg0: number, arg1: number, arg2: number): this;
        normalize3x3(): this;
        getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        withLookAtUp(arg0: Internal.Vector3dc_): this;
        billboardSpherical(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_): this;
        lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        lookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        rotateLocalY(arg0: number, arg1: Internal.Matrix4d_): this;
        transformPosition(arg0: Internal.Vector3d_): Internal.Vector3d;
        getNormalizedRotation(arg0: Quaternionf_): Quaternionf;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        m11(arg0: number): this;
        shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4dc_, arg5: Internal.Matrix4d_): this;
        scaling(arg0: number): this;
        add4x3(arg0: Internal.Matrix4dc_): this;
        perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        setRotationYXZ(arg0: number, arg1: number, arg2: number): this;
        invertPerspectiveView(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        mapnXnZY(): this;
        add4x3(arg0: Internal.Matrix4fc_, arg1: Internal.Matrix4d_): this;
        invert(arg0: Internal.Matrix4d_): this;
        isAffine(): boolean;
        get4x3Transposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        mulComponentWise(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        translationRotateScaleInvert(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_, arg2: Internal.Vector3fc_): this;
        mapYnXnZ(): this;
        m01(): number;
        rotateTranslation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        rotateAffine(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        set3x3(arg0: Internal.Matrix4dc_): this;
        invertFrustum(): this;
        invertAffine(): this;
        mapYnZnX(arg0: Internal.Matrix4d_): this;
        setPerspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        shadow(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number): this;
        rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        get(arg0: number[]): number[];
        sub(arg0: Internal.Matrix4dc_): this;
        toString(arg0: Internal.NumberFormat_): string;
        set4x3(arg0: Internal.Matrix4x3fc_): this;
        identity(): this;
        m12(): number;
        mapnZnXY(arg0: Internal.Matrix4d_): this;
        perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mapnYnXnZ(): this;
        setFromIntrinsic(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        setOrthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        rotateAffine(arg0: number, arg1: number, arg2: number, arg3: number): this;
        reflection(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        mapXnYnZ(arg0: Internal.Matrix4d_): this;
        clone(): any;
        rotateAffineXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        mulPerspectiveAffine(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): this;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        mapZnYnX(): this;
        mapnZnYX(): this;
        frustumRayDir(arg0: number, arg1: number, arg2: Internal.Vector3d_): Internal.Vector3d;
        getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        m23(): number;
        lookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: Internal.Matrix4d_): this;
        m00(): number;
        mapYnXZ(): this;
        mul0(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        affineSpan(arg0: Internal.Vector3d_, arg1: Internal.Vector3d_, arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): this;
        get(arg0: number[]): number[];
        lookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        determinant(): number;
        properties(): number;
        rotateLocal(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): this;
        mulLocalAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        mapYnXZ(arg0: Internal.Matrix4d_): this;
        setOrthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number): this;
        translationRotateScaleInvert(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: number): this;
        mapnXZnY(): this;
        add4x3(arg0: Internal.Matrix4fc_): this;
        rotationTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        translationRotateInvert(arg0: Internal.Vector3fc_, arg1: Internal.Quaternionfc_): this;
        rotateAffine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        setOrthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        transformTranspose(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        setTransposed(arg0: Internal.Matrix4dc_): this;
        setOrthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        getTransposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        transformDirection(arg0: Internal.Vector3d_): Internal.Vector3d;
        m11(): number;
        determinantAffine(): number;
        mapnZnYnX(): this;
        transformDirection(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        mapnYnXZ(): this;
        mapZYnX(arg0: Internal.Matrix4d_): this;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        mapnYnXnZ(arg0: Internal.Matrix4d_): this;
        pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): this;
        transformProject(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector3d_): Internal.Vector3d;
        orthoCrop(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        setRow(arg0: number, arg1: Internal.Vector4dc_): this;
        fma4x3(arg0: Internal.Matrix4dc_, arg1: number): this;
        mapnXYnZ(arg0: Internal.Matrix4d_): this;
        m22(): number;
        mul4x3ComponentWise(arg0: Internal.Matrix4dc_): this;
        translationRotateInvert(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): this;
        get4x3Transposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        set(arg0: Internal.Quaternionfc_): this;
        mapnXnYnZ(arg0: Internal.Matrix4d_): this;
        mapnZnYX(arg0: Internal.Matrix4d_): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number): this;
        rotateTowardsXY(arg0: number, arg1: number, arg2: Internal.Matrix4d_): this;
        project(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        setPerspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): this;
        mapYnZnX(): this;
        rotateAroundLocal(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number): this;
        rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_): this;
        m10(): number;
        m33(): number;
        mapYXZ(): this;
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        mapYnXnZ(arg0: Internal.Matrix4d_): this;
        transformDirection(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        setLookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): this;
        unprojectInvRay(arg0: number, arg1: number, arg2: number[], arg3: Internal.Vector3d_, arg4: Internal.Vector3d_): this;
        getTransposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        rotateLocalZ(arg0: number): this;
        testPoint(arg0: number, arg1: number, arg2: number): boolean;
        scaling(arg0: number, arg1: number, arg2: number): this;
        project(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        setPerspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): this;
        mapZXY(): this;
        equals(arg0: Internal.Matrix4dc_, arg1: number): boolean;
        trapezoidCrop(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): this;
        lookAtPerspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): this;
        perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number): this;
        scaleLocal(arg0: number): this;
        mapnYnZnX(): this;
        scale(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): this;
        perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        tile(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        reflect(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_): this;
        m21(): number;
        ortho2D(arg0: number, arg1: number, arg2: number, arg3: number): this;
        translationRotateScaleMulAffine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: Internal.Matrix4d_): this;
        mulLocal(arg0: Internal.Matrix4dc_): this;
        perspectiveFar(): number;
        frustumPlane(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        getUnnormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        translate(arg0: Internal.Vector3fc_): this;
        frustumCorner(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        setPerspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        translationRotateScale(arg0: Internal.Vector3dc_, arg1: Internal.Quaterniondc_, arg2: Internal.Vector3dc_): this;
        mapnYnZnX(arg0: Internal.Matrix4d_): this;
        reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): this;
        transformProject(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        mulAffineR(arg0: Internal.Matrix4dc_): this;
        mulAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): this;
        set4x3(arg0: Internal.Matrix4dc_): this;
        static perspectiveOffCenterViewFromRectangle(arg0: Internal.Vector3d_, arg1: Internal.Vector3d_, arg2: Internal.Vector3d_, arg3: Internal.Vector3d_, arg4: number, arg5: boolean, arg6: Internal.Matrix4d_, arg7: Internal.Matrix4d_): void;
        m32(): number;
        ortho2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): this;
        set3x3(arg0: Internal.Matrix3dc_): this;
        reflection(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_): this;
        scaleXY(arg0: number, arg1: number): this;
        transform(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        mapZXnY(arg0: Internal.Matrix4d_): this;
        set translation(arg0: Internal.Vector3dc_)
        get finite(): boolean
        set floats(arg0: Internal.ByteBuffer_)
        set fromAddress(arg0: number)
        get affine(): boolean
        set transposed(arg0: Internal.Matrix4dc_)
    }
    type Matrix4d_ = Matrix4d;
    interface Saddleable {
        getSaddleSoundEvent(): Internal.SoundEvent;
        abstract equipSaddle(arg0: Internal.SoundSource_): void;
        abstract isSaddled(): boolean;
        abstract isSaddleable(): boolean;
        get saddleSoundEvent(): Internal.SoundEvent
        get saddled(): boolean
        get saddleable(): boolean
    }
    type Saddleable_ = Saddleable;
    interface LongFunction <R> {
        abstract apply(arg0: number): R;
        (arg0: number): R;
    }
    type LongFunction_<R> = LongFunction<R>;
    class ProtectedBlockProcessor extends Internal.StructureProcessor {
        constructor(arg0: Internal.TagKey_<Internal.Block>)
        static readonly CODEC: Internal.Codec<Internal.ProtectedBlockProcessor>;
        readonly cannotReplace: Internal.TagKey<Internal.Block>;
    }
    type ProtectedBlockProcessor_ = ProtectedBlockProcessor;
    interface AbstractBlockSettingsAccessor {
        abstract getBlockBreakParticles(): boolean;
        abstract getRandomTicks(): boolean;
        abstract getLuminance(): Internal.ToIntFunction<Internal.BlockState>;
        abstract getEmissiveLightingPredicate(): Internal.BlockBehaviour$StatePredicate;
        abstract getBlockVisionPredicate(): Internal.BlockBehaviour$StatePredicate;
        abstract setForceSolid(arg0: boolean): void;
        abstract setOffsetter(arg0: Internal.Optional_<Internal.BlockBehaviour$OffsetFunction>): void;
        abstract setMapColorProvider(arg0: Internal.Function_<Internal.BlockState, Internal.MapColor>): void;
        abstract getJumpVelocityMultiplier(): number;
        abstract getInstrument(): Internal.NoteBlockInstrument;
        abstract getResistance(): number;
        abstract setLootTableId(arg0: ResourceLocation_): void;
        abstract getSuffocationPredicate(): Internal.BlockBehaviour$StatePredicate;
        abstract getForceSolid(): boolean;
        abstract getForceNotSolid(): boolean;
        abstract getVelocityMultiplier(): number;
        abstract setIsAir(arg0: boolean): void;
        abstract setLiquid(arg0: boolean): void;
        abstract getIsAir(): boolean;
        abstract setReplaceable(arg0: boolean): void;
        abstract getAllowsSpawningPredicate(): Internal.BlockBehaviour$StateArgumentPredicate<Internal.EntityType<any>>;
        abstract getRequiredFeatures(): Internal.FeatureFlagSet;
        abstract setRandomTicks(arg0: boolean): void;
        abstract getSolidBlockPredicate(): Internal.BlockBehaviour$StatePredicate;
        abstract getOffsetter(): Internal.Optional<Internal.BlockBehaviour$OffsetFunction>;
        abstract setDynamicBounds(arg0: boolean): void;
        abstract getOpaque(): boolean;
        abstract getSoundGroup(): SoundType;
        abstract getPistonBehavior(): Internal.PushReaction;
        abstract getLootTableId(): ResourceLocation;
        abstract setForceNotSolid(arg0: boolean): void;
        abstract setBlockBreakParticles(arg0: boolean): void;
        abstract getLiquid(): boolean;
        abstract getCollidable(): boolean;
        abstract setCollidable(arg0: boolean): void;
        abstract getHardness(): number;
        abstract getBurnable(): boolean;
        abstract setToolRequired(arg0: boolean): void;
        abstract setRequiredFeatures(arg0: Internal.FeatureFlagSet_): void;
        abstract getReplaceable(): boolean;
        abstract getSlipperiness(): number;
        abstract isToolRequired(): boolean;
        abstract getDynamicBounds(): boolean;
        abstract setBurnable(arg0: boolean): void;
        abstract getMapColorProvider(): Internal.Function<Internal.BlockState, Internal.MapColor>;
        abstract getPostProcessPredicate(): Internal.BlockBehaviour$StatePredicate;
        abstract setOpaque(arg0: boolean): void;
        get blockBreakParticles(): boolean
        get randomTicks(): boolean
        get luminance(): Internal.ToIntFunction<Internal.BlockState>
        get emissiveLightingPredicate(): Internal.BlockBehaviour$StatePredicate
        get blockVisionPredicate(): Internal.BlockBehaviour$StatePredicate
        set forceSolid(arg0: boolean)
        set offsetter(arg0: Internal.Optional_<Internal.BlockBehaviour$OffsetFunction>)
        set mapColorProvider(arg0: Internal.Function_<Internal.BlockState, Internal.MapColor>)
        get jumpVelocityMultiplier(): number
        get instrument(): Internal.NoteBlockInstrument
        get resistance(): number
        set lootTableId(arg0: ResourceLocation_)
        get suffocationPredicate(): Internal.BlockBehaviour$StatePredicate
        get forceSolid(): boolean
        get forceNotSolid(): boolean
        get velocityMultiplier(): number
        set isAir(arg0: boolean)
        set liquid(arg0: boolean)
        get isAir(): boolean
        set replaceable(arg0: boolean)
        get allowsSpawningPredicate(): Internal.BlockBehaviour$StateArgumentPredicate<Internal.EntityType<any>>
        get requiredFeatures(): Internal.FeatureFlagSet
        set randomTicks(arg0: boolean)
        get solidBlockPredicate(): Internal.BlockBehaviour$StatePredicate
        get offsetter(): Internal.Optional<Internal.BlockBehaviour$OffsetFunction>
        set dynamicBounds(arg0: boolean)
        get opaque(): boolean
        get soundGroup(): SoundType
        get pistonBehavior(): Internal.PushReaction
        get lootTableId(): ResourceLocation
        set forceNotSolid(arg0: boolean)
        set blockBreakParticles(arg0: boolean)
        get liquid(): boolean
        get collidable(): boolean
        set collidable(arg0: boolean)
        get hardness(): number
        get burnable(): boolean
        set toolRequired(arg0: boolean)
        set requiredFeatures(arg0: Internal.FeatureFlagSet_)
        get replaceable(): boolean
        get slipperiness(): number
        get toolRequired(): boolean
        get dynamicBounds(): boolean
        set burnable(arg0: boolean)
        get mapColorProvider(): Internal.Function<Internal.BlockState, Internal.MapColor>
        get postProcessPredicate(): Internal.BlockBehaviour$StatePredicate
        set opaque(arg0: boolean)
    }
    type AbstractBlockSettingsAccessor_ = AbstractBlockSettingsAccessor;
    class RecipeTypeFunction extends Internal.BaseFunction implements Internal.WrappedJS {
        constructor(event: Internal.RecipesEventJS_, schemaType: Internal.RecipeSchemaType_)
        enumerationIteratorNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        getAllIds(cx: Internal.Context_): any[];
        enumerationIteratorHasNext(cx: Internal.Context_, currentId: Internal.Consumer_<any>): boolean;
        createRecipe(args: any[]): Internal.RecipeJS;
        getMod(): string;
        get mod(): string
        readonly schemaType: Internal.RecipeSchemaType;
        static readonly SKIP_ERROR: Internal.Pattern;
        readonly id: ResourceLocation;
        readonly idString: string;
        readonly event: Internal.RecipesEventJS;
    }
    type RecipeTypeFunction_ = RecipeTypeFunction;
    class LayerDefinition {
        bakeRoot(): Internal.ModelPart;
        static create(arg0: Internal.MeshDefinition_, arg1: number, arg2: number): Internal.LayerDefinition;
    }
    type LayerDefinition_ = LayerDefinition;
    class WeightedStateProvider extends Internal.BlockStateProvider {
        constructor(arg0: Internal.SimpleWeightedRandomList$Builder_<Internal.BlockState>)
        constructor(arg0: Internal.SimpleWeightedRandomList_<Internal.BlockState>)
        static readonly CODEC: Internal.Codec<Internal.WeightedStateProvider>;
    }
    type WeightedStateProvider_ = WeightedStateProvider;
    class PropagatingDefaultedOptionalFieldCodec <A> extends Internal.MapCodec<A> {
        constructor(arg0: string, arg1: Internal.Codec_<A>, arg2: Internal.Supplier_<A>)
        decode<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.MapLike_<T>): Internal.DataResult<A>;
        map<B>(arg0: Internal.Function_<A, B>): Internal.MapDecoder<B>;
        comap<B>(arg0: Internal.Function_<B, A>): Internal.MapEncoder<B>;
        encoder(): Internal.Encoder<A>;
        keys<T>(arg0: Internal.DynamicOps_<T>): Internal.Stream<T>;
        decoder(): Internal.Decoder<A>;
        ap<E>(arg0: Internal.MapDecoder_<Internal.Function<A, E>>): Internal.MapDecoder<E>;
        static forStrings(arg0: Internal.Supplier_<Internal.Stream<string>>): Internal.Keyable;
        flatMap<B>(arg0: Internal.Function_<A, Internal.DataResult<B>>): Internal.MapDecoder<B>;
        abstract compressor<T>(arg0: Internal.DynamicOps_<T>): Internal.KeyCompressor<T>;
        flatComap<B>(arg0: Internal.Function_<B, Internal.DataResult<A>>): Internal.MapEncoder<B>;
        encode<T>(arg0: A, arg1: Internal.DynamicOps_<T>, arg2: Internal.RecordBuilder_<T>): Internal.RecordBuilder<T>;
        compressedBuilder<T>(arg0: Internal.DynamicOps_<T>): Internal.RecordBuilder<T>;
        static makeCompressedBuilder<T>(arg0: Internal.DynamicOps_<T>, arg1: Internal.KeyCompressor_<T>): Internal.RecordBuilder<T>;
        compressedDecode<T>(arg0: Internal.DynamicOps_<T>, arg1: T): Internal.DataResult<A>;
    }
    type PropagatingDefaultedOptionalFieldCodec_<A> = PropagatingDefaultedOptionalFieldCodec<A>;
    class StructureBlockEntity extends Internal.BlockEntity {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        getStructurePos(): BlockPos;
        getShowBoundingBox(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        getSeed(): number;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        hasStructureName(): boolean;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getStructureName(): string;
        loadStructure(arg0: Internal.ServerLevel_, arg1: boolean, arg2: Internal.StructureTemplate_): boolean;
        isStructureLoadable(): boolean;
        loadStructure(arg0: Internal.ServerLevel_, arg1: boolean): boolean;
        onLoad(): void;
        getMode(): Internal.StructureMode;
        getMetaData(): string;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getStructureSize(): Vec3i;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        isPowered(): boolean;
        setSeed(arg0: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        usedBy(arg0: Player_): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        getRotation(): Internal.Rotation;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        setStructureName(arg0: string): void;
        setPowered(arg0: boolean): void;
        setRotation(arg0: Internal.Rotation_): void;
        createdBy(arg0: Internal.LivingEntity_): void;
        static createRandom(arg0: number): Internal.RandomSource;
        getRenderBoundingBox(): Internal.AABB;
        setIntegrity(arg0: number): void;
        saveStructure(arg0: boolean): boolean;
        loadStructure(arg0: Internal.ServerLevel_): boolean;
        detectSize(): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        setStructurePos(arg0: BlockPos_): void;
        setMode(arg0: Internal.StructureMode_): void;
        getMirror(): Internal.Mirror;
        getIntegrity(): number;
        setShowAir(arg0: boolean): void;
        setShowBoundingBox(arg0: boolean): void;
        getUpdatePacket(): Internal.Packet<any>;
        serializeNBT(): Internal.Tag;
        saveStructure(): boolean;
        unloadStructure(): void;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        getStructurePath(): string;
        setIgnoreEntities(arg0: boolean): void;
        setMetaData(arg0: string): void;
        isIgnoreEntities(): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        setStructureSize(arg0: Vec3i_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getModelData(): Internal.ModelData;
        getShowAir(): boolean;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        setStructureName(arg0: ResourceLocation_): void;
        setMirror(arg0: Internal.Mirror_): void;
        get structurePos(): BlockPos
        get showBoundingBox(): boolean
        get seed(): number
        get structureName(): string
        get structureLoadable(): boolean
        get mode(): Internal.StructureMode
        get metaData(): string
        get structureSize(): Vec3i
        get powered(): boolean
        set seed(arg0: number)
        get rotation(): Internal.Rotation
        set structureName(arg0: string)
        set powered(arg0: boolean)
        set rotation(arg0: Internal.Rotation_)
        get renderBoundingBox(): Internal.AABB
        set integrity(arg0: number)
        set structurePos(arg0: BlockPos_)
        set mode(arg0: Internal.StructureMode_)
        get mirror(): Internal.Mirror
        get integrity(): number
        set showAir(arg0: boolean)
        set showBoundingBox(arg0: boolean)
        get updatePacket(): Internal.Packet<any>
        get structurePath(): string
        set ignoreEntities(arg0: boolean)
        set metaData(arg0: string)
        get ignoreEntities(): boolean
        set structureSize(arg0: Vec3i_)
        get modelData(): Internal.ModelData
        get showAir(): boolean
        set structureName(arg0: ResourceLocation_)
        set mirror(arg0: Internal.Mirror_)
        static readonly MAX_OFFSET_PER_AXIS: 48;
        static readonly MAX_SIZE_PER_AXIS: 48;
        static readonly AUTHOR_TAG: "author";
    }
    type StructureBlockEntity_ = StructureBlockEntity;
}
declare namespace net.irisshaders.batchedentityrendering.mixin {
    interface RenderTypeAccessor {
        abstract shouldSortOnUpload(): boolean;
        (): boolean;
    }
    type RenderTypeAccessor_ = RenderTypeAccessor;
}
declare namespace it.unimi.dsi.fastutil.ints {
    interface IntUnaryOperator extends Internal.IntUnaryOperator, Internal.UnaryOperator<number> {
        compose<V>(arg0: Internal.Function_<V, number>): Internal.Function<V, number>;
        abstract apply(arg0: number): number;
        /**
         * @deprecated
        */
        apply(arg0: any): any;
        identity(): this;
        /**
         * @deprecated
        */
        apply(arg0: number): number;
        compose(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        /**
         * @deprecated
        */
        applyAsInt(arg0: number): number;
        andThen<V>(arg0: Internal.Function_<number, V>): Internal.Function<number, V>;
        andThen(arg0: Internal.IntUnaryOperator_): Internal.IntUnaryOperator;
        negation(): this;
        (arg0: number): number;
    }
    type IntUnaryOperator_ = IntUnaryOperator;
}
declare namespace org.mesdag.advjs.util {
    class Provider {
        constructor()
        getFishBuckets(): Internal.List<ResourceLocation>;
        getNetherBiomes(): Internal.List<ResourceLocation>;
        getCatVariants(): Internal.List<ResourceLocation>;
        getOverworldBiomes(): Internal.List<ResourceLocation>;
        getSmithingTrims(): Internal.List<ResourceLocation>;
        getIndirectlyBreedableAnimals(): Internal.List<ResourceLocation>;
        getFish(): Internal.List<ResourceLocation>;
        getEdibleItems(): Internal.List<ResourceLocation>;
        getWaxScrapingTools(): Internal.List<ResourceLocation>;
        getBreedableAnimals(): Internal.List<ResourceLocation>;
        get fishBuckets(): Internal.List<ResourceLocation>
        get netherBiomes(): Internal.List<ResourceLocation>
        get catVariants(): Internal.List<ResourceLocation>
        get overworldBiomes(): Internal.List<ResourceLocation>
        get smithingTrims(): Internal.List<ResourceLocation>
        get indirectlyBreedableAnimals(): Internal.List<ResourceLocation>
        get fish(): Internal.List<ResourceLocation>
        get edibleItems(): Internal.List<ResourceLocation>
        get waxScrapingTools(): Internal.List<ResourceLocation>
        get breedableAnimals(): Internal.List<ResourceLocation>
    }
    type Provider_ = Provider;
}
