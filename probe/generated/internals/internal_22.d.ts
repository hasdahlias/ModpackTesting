/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    /**
     * @deprecated
    */
    class LazyLoadedValue <T> {
        constructor(arg0: Internal.Supplier_<T>)
        get(): T;
    }
    type LazyLoadedValue_<T> = LazyLoadedValue<T>;
    interface TriggerMatchCallback {
        abstract match(arg0: any): boolean;
        (arg0: any): boolean;
    }
    type TriggerMatchCallback_ = TriggerMatchCallback;
    interface NonNullPredicate <T> {
        abstract test(arg0: T): boolean;
        (arg0: T): boolean;
    }
    type NonNullPredicate_<T> = NonNullPredicate<T>;
    class ClientboundSetEntityLinkPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.Entity_, arg1: Internal.Entity_)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getSourceId(): number;
        getDestId(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        get sourceId(): number
        get destId(): number
        get skippable(): boolean
    }
    type ClientboundSetEntityLinkPacket_ = ClientboundSetEntityLinkPacket;
    class OriginUpgrade extends Internal.Record {
        constructor(advancement: ResourceLocation_, origin: Internal.Holder_<Internal.Origin>, announcement: string)
        advancement(): ResourceLocation;
        announcement(): string;
        origin(): Internal.Holder<Internal.Origin>;
        static readonly MAP_CODEC: Internal.MapCodec<Internal.OriginUpgrade>;
        static readonly CODEC: Internal.Codec<Internal.OriginUpgrade>;
    }
    type OriginUpgrade_ = OriginUpgrade;
    class ModelBakery$BakedCacheKey extends Internal.Record {
        constructor(id: ResourceLocation_, transformation: Internal.Transformation_, isUvLocked: boolean)
        isUvLocked(): boolean;
        id(): ResourceLocation;
        transformation(): Internal.Transformation;
        get uvLocked(): boolean
    }
    type ModelBakery$BakedCacheKey_ = ModelBakery$BakedCacheKey;
    interface PlayerRideableJumping extends Internal.PlayerRideable {
        abstract handleStopJump(): void;
        abstract onPlayerJump(arg0: number): void;
        getJumpCooldown(): number;
        abstract handleStartJump(arg0: number): void;
        abstract canJump(): boolean;
        get jumpCooldown(): number
    }
    type PlayerRideableJumping_ = PlayerRideableJumping;
    class ClientboundGameEventPacket$Type {
        constructor(arg0: number)
        static readonly TYPES: {0: Internal.ClientboundGameEventPacket$Type, 5: Internal.ClientboundGameEventPacket$Type, 7: Internal.ClientboundGameEventPacket$Type, 3: Internal.ClientboundGameEventPacket$Type, 1: Internal.ClientboundGameEventPacket$Type, 10: Internal.ClientboundGameEventPacket$Type, 11: Internal.ClientboundGameEventPacket$Type, 9: Internal.ClientboundGameEventPacket$Type, 8: Internal.ClientboundGameEventPacket$Type, 4: Internal.ClientboundGameEventPacket$Type, 6: Internal.ClientboundGameEventPacket$Type, 2: Internal.ClientboundGameEventPacket$Type};
        readonly id: number;
    }
    type ClientboundGameEventPacket$Type_ = ClientboundGameEventPacket$Type;
    class CarpetBlockBuilder extends Internal.ShapedBlockBuilder {
        constructor(i: ResourceLocation_)
        /**
         * Tags both the block and the item with the given tag.
        */
        tag(arg0: ResourceLocation_): Internal.BuilderBase<any>;
        texture(texture: string): this;
        createObject(): any;
    }
    type CarpetBlockBuilder_ = CarpetBlockBuilder;
    class VegetationPatchFeature extends Internal.Feature<Internal.VegetationPatchConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.VegetationPatchConfiguration>)
        distributeVegetation(arg0: Internal.FeaturePlaceContext_<Internal.VegetationPatchConfiguration>, arg1: Internal.WorldGenLevel_, arg2: Internal.VegetationPatchConfiguration_, arg3: Internal.RandomSource_, arg4: Internal.Set_<BlockPos>, arg5: number, arg6: number): void;
        placeVegetation(arg0: Internal.WorldGenLevel_, arg1: Internal.VegetationPatchConfiguration_, arg2: Internal.ChunkGenerator_, arg3: Internal.RandomSource_, arg4: BlockPos_): boolean;
        placeGroundPatch(arg0: Internal.WorldGenLevel_, arg1: Internal.VegetationPatchConfiguration_, arg2: Internal.RandomSource_, arg3: BlockPos_, arg4: Internal.Predicate_<Internal.BlockState>, arg5: number, arg6: number): Internal.Set<BlockPos>;
        placeGround(arg0: Internal.WorldGenLevel_, arg1: Internal.VegetationPatchConfiguration_, arg2: Internal.Predicate_<Internal.BlockState>, arg3: Internal.RandomSource_, arg4: Internal.BlockPos$MutableBlockPos_, arg5: number): boolean;
    }
    type VegetationPatchFeature_ = VegetationPatchFeature;
    class LivingEntityDropsEventJS extends Internal.LivingEntityEventJS {
        constructor(e: Internal.LivingDropsEvent_)
        addDrop(stack: Internal.ItemStack_, chance: number): Internal.ItemEntity;
        addDrop(stack: Internal.ItemStack_): Internal.ItemEntity;
        getSource(): DamageSource;
        getDrops(): Internal.List<Internal.ItemEntity>;
        isRecentlyHit(): boolean;
        getLootingLevel(): number;
        get source(): DamageSource
        get drops(): Internal.List<Internal.ItemEntity>
        get recentlyHit(): boolean
        get lootingLevel(): number
        eventDrops: Internal.List<Internal.ItemEntity>;
    }
    type LivingEntityDropsEventJS_ = LivingEntityDropsEventJS;
    class ModifyBlockStateConfiguration extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(property: string, operation: Internal.ResourceOperation_, change: number, value: boolean, enumValue: string, cycle: boolean)
        isConfigurationValid(): boolean;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        enumValue(): string;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        operation(): Internal.ResourceOperation;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        cycle(): boolean;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        getMissingBinds(): Internal.List<string>;
        value(): boolean;
        property(): string;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        change(): number;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        static readonly CODEC: Internal.Codec<Internal.ModifyBlockStateConfiguration>;
    }
    type ModifyBlockStateConfiguration_ = ModifyBlockStateConfiguration;
    interface UserApiService {
        abstract isBlockedPlayer(arg0: Internal.UUID_): boolean;
        abstract reportAbuse(arg0: Internal.AbuseReportRequest_): void;
        abstract canSendReports(): boolean;
        abstract getAbuseReportLimits(): Internal.AbuseReportLimits;
        abstract newTelemetrySession(arg0: Internal.Executor_): Internal.TelemetrySession;
        abstract properties(): Internal.UserApiService$UserProperties;
        abstract getKeyPair(): Internal.KeyPairResponse;
        abstract refreshBlockList(): void;
        get abuseReportLimits(): Internal.AbuseReportLimits
        get keyPair(): Internal.KeyPairResponse
        readonly OFFLINE: Internal.UserApiService;
        readonly OFFLINE_PROPERTIES: Internal.UserApiService$UserProperties;
    }
    type UserApiService_ = UserApiService;
    class LargeDripstoneConfiguration implements Internal.FeatureConfiguration {
        constructor(arg0: number, arg1: Internal.IntProvider_, arg2: Internal.FloatProvider_, arg3: number, arg4: Internal.FloatProvider_, arg5: Internal.FloatProvider_, arg6: Internal.FloatProvider_, arg7: number, arg8: number)
        getFeatures(): Internal.Stream<Internal.ConfiguredFeature<any, any>>;
        get features(): Internal.Stream<Internal.ConfiguredFeature<any, any>>
        readonly floorToCeilingSearchRange: number;
        readonly columnRadius: Internal.IntProvider;
        readonly stalactiteBluntness: Internal.FloatProvider;
        readonly minBluntnessForWind: number;
        static readonly CODEC: Internal.Codec<Internal.LargeDripstoneConfiguration>;
        readonly minRadiusForWind: number;
        readonly heightScale: Internal.FloatProvider;
        readonly windSpeed: Internal.FloatProvider;
        readonly maxColumnRadiusToCaveHeightRatio: number;
        readonly stalagmiteBluntness: Internal.FloatProvider;
    }
    type LargeDripstoneConfiguration_ = LargeDripstoneConfiguration;
    class CustomGeoLayerJS <T extends Internal.LivingEntity & Internal.IAnimatableJSCustom> extends Internal.GeoRenderLayer<T> {
        constructor(entityRendererIn: Internal.CustomKubeJSEntityRenderer_<T>, geoBuilder: Internal.CustomGeoLayerJSBuilder_<T>, builder: Internal.CustomEntityJSBuilder_)
        entityName(): string;
        preRender(poseStack: Internal.PoseStack_, animatable: T, bakedModel: Internal.BakedGeoModel_, renderType: Internal.RenderType_, bufferSource: Internal.MultiBufferSource_, buffer: Internal.VertexConsumer_, partialTick: number, packedLight: number, packedOverlay: number): void;
        render(poseStack: Internal.PoseStack_, animatable: T, bakedModel: Internal.BakedGeoModel_, renderType: Internal.RenderType_, bufferSource: Internal.MultiBufferSource_, buffer: Internal.VertexConsumer_, partialTicks: number, packedLightIn: number, packedOverlay: number): void;
        readonly geoBuilder: Internal.CustomGeoLayerJSBuilder<T>;
        readonly renderer: Internal.CustomKubeJSEntityRenderer<T>;
        entity: T;
        readonly builder: Internal.CustomEntityJSBuilder;
    }
    type CustomGeoLayerJS_<T extends Internal.LivingEntity & Internal.IAnimatableJSCustom> = CustomGeoLayerJS<T>;
    class PurpurVoidRuneTrapBlock extends Internal.TrapBlock {
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
    type PurpurVoidRuneTrapBlock_ = PurpurVoidRuneTrapBlock;
    class TargetCombatActionPower extends Internal.CooldownPowerFactory$Simple<Internal.ConditionedCombatActionConfiguration> {
        constructor()
        decrement(arg0: Internal.ConfiguredPower_<Internal.ConditionedCombatActionConfiguration, any>, arg1: Internal.Entity_): number;
        increment(arg0: Internal.ConfiguredPower_<Internal.ConditionedCombatActionConfiguration, any>, arg1: Internal.Entity_): number;
        static onHit(arg0: Internal.Entity_, arg1: Internal.Entity_, arg2: DamageSource_, arg3: number): void;
        execute(arg0: Internal.ConfiguredPower_<Internal.ConditionedCombatActionConfiguration, any>, arg1: Internal.Entity_, arg2: Internal.Entity_, arg3: DamageSource_, arg4: number): void;
        change(arg0: Internal.ConfiguredPower_<Internal.ConditionedCombatActionConfiguration, any>, arg1: Internal.Entity_, arg2: number): number;
        getProgress(arg0: Internal.ConfiguredPower_<Internal.ConditionedCombatActionConfiguration, any>, arg1: Internal.Entity_): number;
    }
    type TargetCombatActionPower_ = TargetCombatActionPower;
    class Library {
        constructor()
        getDebugString(): string;
        getListener(): Internal.Listener;
        isCurrentDeviceDisconnected(): boolean;
        static getDefaultDeviceName(): string;
        hasDefaultDeviceChanged(): boolean;
        releaseChannel(arg0: com.mojang.blaze3d.audio.Channel_): void;
        cleanup(): void;
        getCurrentDeviceName(): string;
        init(arg0: string, arg1: boolean): void;
        acquireChannel(arg0: Internal.Library$Pool_): com.mojang.blaze3d.audio.Channel;
        getAvailableSoundDevices(): Internal.List<string>;
        get debugString(): string
        get listener(): Internal.Listener
        get currentDeviceDisconnected(): boolean
        get defaultDeviceName(): string
        get currentDeviceName(): string
        get availableSoundDevices(): Internal.List<string>
    }
    type Library_ = Library;
    interface Matrix4x3dc {
        abstract get4x4(arg0: number[]): number[];
        abstract mapnYXnZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapXZnY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract rotateTranslation(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract translateLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract ortho2DLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapZnYnX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract transform(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract m20(): number;
        abstract mapnZXY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getUnnormalizedRotation(arg0: Quaternionf_): Quaternionf;
        abstract origin(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract negateY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract fma(arg0: Internal.Matrix4x3dc_, arg1: number, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract translateLocal(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract transformDirection(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnZnYnX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getNormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract normal(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnXZY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract positiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract scale(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract m31(): number;
        abstract arcball(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getTranslation(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract normal(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        abstract scaleLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapYXnZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapYnXnZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract reflect(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract normalize3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        abstract rotate(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mulTranslation(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract normalize3x3(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get4x4(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract rotateAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotateX(arg0: number, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get4x4(arg0: number[], arg1: number): number[];
        abstract negateZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract scale(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnYnXnZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotate(arg0: Internal.AxisAngle4d_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract transform(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract mapZXY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract mul(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract obliqueZ(arg0: number, arg1: number, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract m30(): number;
        abstract positiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract reflect(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract transformAab(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): Internal.Matrix4x3d;
        abstract mapnXnZY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get4x4(arg0: number[]): number[];
        abstract orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapYnXZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract cofactor3x3(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotate(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract transpose3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        abstract reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract translate(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotateY(arg0: number, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapXnZY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapXnZnY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract isFinite(): boolean;
        abstract getToAddress(arg0: number): this;
        abstract add(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract ortho2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract lerp(arg0: Internal.Matrix4x3dc_, arg1: number, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapYZX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnYZnX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract scaleXY(arg0: number, arg1: number, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnXnZnY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnZYX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract mapZnXY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnXZnY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnYXZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get(arg0: number[], arg1: number): number[];
        abstract rotateTranslation(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract negateX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract m02(): number;
        abstract rotateZ(arg0: number, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get4x4(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract lookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract invertOrtho(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract transformPosition(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract mapZYnX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get4x4(arg0: number[], arg1: number): number[];
        abstract getNormalizedRotation(arg0: Quaternionf_): Quaternionf;
        abstract mapXZY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract sub(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract shadow(arg0: Internal.Vector4dc_, arg1: Internal.Matrix4x3dc_, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnXYnZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract arcball(arg0: number, arg1: Internal.Vector3dc_, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapYnZnX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnZnYX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnXnYnZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract lookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnYnZnX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract scale(arg0: number, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get4x4(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract mapnYnZX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract m01(): number;
        abstract mapnZnXY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapZXnY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3dc_, arg5: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mul(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get(arg0: number[]): number[];
        abstract mapXnYnZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapYZnX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnZXnY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract m12(): number;
        abstract get(arg0: number[], arg1: number): number[];
        abstract rotate(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract m00(): number;
        abstract mul3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotateLocal(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract equals(arg0: Internal.Matrix4x3dc_, arg1: number): boolean;
        abstract get(arg0: number[]): number[];
        abstract determinant(): number;
        abstract properties(): number;
        abstract invert(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract translateLocal(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract normalizedPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getTransposed(arg0: number[], arg1: number): number[];
        abstract getTransposedFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract getEulerAnglesZYX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract getColumn(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract getTransposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract transformDirection(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract m11(): number;
        abstract translate(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get4x4(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract mulOrtho(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getTransposed(arg0: number[]): number[];
        abstract cofactor3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        abstract mapnYZX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract transformAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Vector3d_, arg7: Internal.Vector3d_): Internal.Matrix4x3d;
        abstract getRow(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract transpose3x3(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mulTranslation(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getTransposedFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract m22(): number;
        abstract rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotateLocal(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapYXZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract mapZnXnY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract normalizedPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract mulComponentWise(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getScale(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract shadow(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract sub(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract m10(): number;
        abstract get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract translate(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract lookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getTransposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract mapnYnXZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapYnZX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getEulerAnglesXYZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract m21(): number;
        abstract orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract frustumPlane(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract mapZnYX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract add(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getUnnormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract mapnZYnX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnXnYZ(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract getFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract rotate(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract normalizedPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract transformPosition(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract m32(): number;
        abstract positiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract fma(arg0: Internal.Matrix4x3fc_, arg1: number, arg2: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapZYX(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract mapnZnXnY(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract rotateTranslation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        get finite(): boolean
        readonly PLANE_PX: 1;
        readonly PLANE_NY: 2;
        readonly PLANE_NZ: 4;
        readonly PLANE_PY: 3;
        readonly PLANE_NX: 0;
        readonly PLANE_PZ: 5;
        readonly PROPERTY_TRANSLATION: 8;
        readonly PROPERTY_IDENTITY: 4;
        readonly PROPERTY_ORTHONORMAL: 16;
    }
    type Matrix4x3dc_ = Matrix4x3dc;
    class KeyCompressor <T> {
        constructor(arg0: Internal.DynamicOps_<T>, arg1: Internal.Stream_<T>)
        decompress(arg0: number): T;
        compress(arg0: T): number;
        size(): number;
        compress(arg0: string): number;
    }
    type KeyCompressor_<T> = KeyCompressor<T>;
    class WallBlockBuilder extends Internal.MultipartShapedBlockBuilder {
        constructor(i: ResourceLocation_)
        /**
         * Tags both the block and the item with the given tag.
        */
        tag(arg0: ResourceLocation_): Internal.BuilderBase<any>;
        createObject(): Internal.Block;
    }
    type WallBlockBuilder_ = WallBlockBuilder;
    class WorldGenerationContext {
        constructor(arg0: Internal.ChunkGenerator_, arg1: Internal.LevelHeightAccessor_)
        getMinGenY(): number;
        getGenDepth(): number;
        get minGenY(): number
        get genDepth(): number
    }
    type WorldGenerationContext_ = WorldGenerationContext;
    interface ILivingEntityJS {
        abstract addSyncedData(type: Internal.EntitySerializerType_, key: string, value: any): void;
        abstract getAnimatableEntity(): Internal.WrappedAnimatableEntity;
        abstract setSyncedData(key: string, value: any): void;
        abstract addSyncedData(identifier: string, value: any): void;
        abstract getSyncedData<T>(identifier: string): T;
        get animatableEntity(): Internal.WrappedAnimatableEntity
    }
    type ILivingEntityJS_ = ILivingEntityJS;
    interface SortedSet <E> extends Internal.Set<E> {
        abstract subSet(arg0: E, arg1: E): this;
        abstract add(arg0: E): boolean;
        parallelStream(): Internal.Stream<E>;
        abstract isEmpty(): boolean;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        abstract retainAll(arg0: Internal.Collection_<any>): boolean;
        abstract containsAll(arg0: Internal.Collection_<any>): boolean;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        abstract comparator(): Internal.Comparator<E>;
        of<E>(arg0: E, arg1: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        abstract contains(arg0: any): boolean;
        abstract addAll(arg0: Internal.Collection_<E>): boolean;
        abstract tailSet(arg0: E): this;
        abstract last(): E;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        forEach(arg0: Internal.Consumer_<E>): void;
        abstract toArray<T>(arg0: T[]): T[];
        abstract headSet(arg0: E): this;
        abstract remove(arg0: any): boolean;
        abstract toArray(): any[];
        abstract iterator(): Internal.Iterator<E>;
        abstract hashCode(): number;
        abstract size(): number;
        of<E>(arg0: E): Internal.Set<E>;
        of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        of<E>(...arg0: E[]): Internal.Set<E>;
        of<E>(): Internal.Set<E>;
        stream(): Internal.Stream<E>;
        abstract removeAll(arg0: Internal.Collection_<any>): boolean;
        abstract first(): E;
        abstract clear(): void;
        removeIf(arg0: Internal.Predicate_<E>): boolean;
        spliterator(): Internal.Spliterator<E>;
        abstract equals(arg0: any): boolean;
        copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        get empty(): boolean
    }
    type SortedSet_<E> = SortedSet<E>;
    class RecordCodecBuilder$Instance <O> implements Internal.Applicative<Internal.RecordCodecBuilder$Mu<O>, any> {
        constructor()
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>, arg11: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T12>, arg12: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T13>, arg13: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T14>): Internal.Products$P14<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>;
        apply2<A, B, R>(arg0: Internal.BiFunction_<A, B, R>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, A>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, B>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>): Internal.Products$P10<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;
        group<T1, T2>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>): Internal.Products$P2<Internal.RecordCodecBuilder$Mu<O>, T1, T2>;
        lift8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, R>>): Internal.Function8<Internal.App<Internal.RecordCodecBuilder$Mu<O>, T1>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T2>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T3>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T4>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T5>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T6>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T7>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T8>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>>;
        ap4<T1, T2, T3, T4, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function4<T1, T2, T3, T4, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        lift9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>): Internal.Function9<Internal.App<Internal.RecordCodecBuilder$Mu<O>, T1>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T2>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T3>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T4>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T5>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T6>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T7>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T8>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T9>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>>;
        ap3<T1, T2, T3, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function3<T1, T2, T3, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        lift2<A, B, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.BiFunction<A, B, R>>): Internal.BiFunction<Internal.App<Internal.RecordCodecBuilder$Mu<O>, A>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, B>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>, arg11: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T12>, arg12: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T13>, arg13: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T14>, arg14: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T15>): Internal.Products$P15<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>;
        apply4<T1, T2, T3, T4, R>(arg0: Internal.Function4_<T1, T2, T3, T4, R>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>): Internal.Products$P11<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>;
        apply8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: Internal.Function8_<T1, T2, T3, T4, T5, T6, T7, T8, R>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        apply9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: Internal.Function9_<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        ap5<T1, T2, T3, T4, T5, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function5<T1, T2, T3, T4, T5, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        lift6<T1, T2, T3, T4, T5, T6, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function6<T1, T2, T3, T4, T5, T6, R>>): Internal.Function6<Internal.App<Internal.RecordCodecBuilder$Mu<O>, T1>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T2>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T3>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T4>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T5>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T6>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>>;
        ap6<T1, T2, T3, T4, T5, T6, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function6<T1, T2, T3, T4, T5, T6, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        ap16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function16<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg11: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>, arg12: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T12>, arg13: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T13>, arg14: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T14>, arg15: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T15>, arg16: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T16>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        ap11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function11<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg11: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        group<T1, T2, T3>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>): Internal.Products$P3<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3>;
        static unbox<F extends Internal.K1, Mu extends Internal.Applicative$Mu>(arg0: Internal.App_<Mu, F>): Internal.Applicative<F, Mu>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>): Internal.Products$P9<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9>;
        ap9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function9<T1, T2, T3, T4, T5, T6, T7, T8, T9, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        apply5<T1, T2, T3, T4, T5, R>(arg0: Internal.Function5_<T1, T2, T3, T4, T5, R>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        group<T1, T2, T3, T4, T5, T6, T7>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>): Internal.Products$P7<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7>;
        ap13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function13<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg11: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>, arg12: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T12>, arg13: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T13>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        ap14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function14<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg11: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>, arg12: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T12>, arg13: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T13>, arg14: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T14>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        ap12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function12<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg11: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>, arg12: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T12>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        point<A>(arg0: A): Internal.App<Internal.RecordCodecBuilder$Mu<O>, A>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>, arg11: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T12>, arg12: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T13>): Internal.Products$P13<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>;
        group<T1, T2, T3, T4, T5>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>): Internal.Products$P5<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5>;
        lift1<A, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function<A, R>>): Internal.Function<Internal.App<Internal.RecordCodecBuilder$Mu<O>, A>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>>;
        apply3<T1, T2, T3, R>(arg0: Internal.Function3_<T1, T2, T3, R>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        group<T1, T2, T3, T4>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>): Internal.Products$P4<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4>;
        deprecated<A>(arg0: A, arg1: number): Internal.App<Internal.RecordCodecBuilder$Mu<O>, A>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>, arg11: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T12>, arg12: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T13>, arg13: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T14>, arg14: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T15>, arg15: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T16>): Internal.Products$P16<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>;
        ap7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function7<T1, T2, T3, T4, T5, T6, T7, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        stable<A>(arg0: A): Internal.App<Internal.RecordCodecBuilder$Mu<O>, A>;
        ap8<T1, T2, T3, T4, T5, T6, T7, T8, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function8<T1, T2, T3, T4, T5, T6, T7, T8, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        ap<A, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function<A, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, A>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        lift4<T1, T2, T3, T4, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function4<T1, T2, T3, T4, R>>): Internal.Function4<Internal.App<Internal.RecordCodecBuilder$Mu<O>, T1>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T2>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T3>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T4>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>>;
        point<A>(arg0: A, arg1: Internal.Lifecycle_): Internal.App<Internal.RecordCodecBuilder$Mu<O>, A>;
        ap15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function15<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg11: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>, arg12: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T12>, arg13: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T13>, arg14: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T14>, arg15: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T15>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T11>, arg11: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T12>): Internal.Products$P12<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>;
        ap<A, R>(arg0: Internal.Function_<A, R>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, A>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        group<T1, T2, T3, T4, T5, T6, T7, T8>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>): Internal.Products$P8<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6, T7, T8>;
        lift5<T1, T2, T3, T4, T5, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function5<T1, T2, T3, T4, T5, R>>): Internal.Function5<Internal.App<Internal.RecordCodecBuilder$Mu<O>, T1>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T2>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T3>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T4>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T5>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>>;
        lift7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function7<T1, T2, T3, T4, T5, T6, T7, R>>): Internal.Function7<Internal.App<Internal.RecordCodecBuilder$Mu<O>, T1>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T2>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T3>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T4>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T5>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T6>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T7>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>>;
        ap10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>, arg8: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T8>, arg9: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T9>, arg10: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T10>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        map<T, R>(arg0: Internal.Function_<T, R>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        apply7<T1, T2, T3, T4, T5, T6, T7, R>(arg0: Internal.Function7_<T1, T2, T3, T4, T5, T6, T7, R>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>, arg7: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T7>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        lift3<T1, T2, T3, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.Function3<T1, T2, T3, R>>): Internal.Function3<Internal.App<Internal.RecordCodecBuilder$Mu<O>, T1>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T2>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, T3>, Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>>;
        group<T1, T2, T3, T4, T5, T6>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>): Internal.Products$P6<Internal.RecordCodecBuilder$Mu<O>, T1, T2, T3, T4, T5, T6>;
        apply6<T1, T2, T3, T4, T5, T6, R>(arg0: Internal.Function6_<T1, T2, T3, T4, T5, T6, R>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T2>, arg3: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T3>, arg4: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T4>, arg5: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T5>, arg6: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T6>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        ap2<A, B, R>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, Internal.BiFunction<A, B, R>>, arg1: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, A>, arg2: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, B>): Internal.App<Internal.RecordCodecBuilder$Mu<O>, R>;
        group<T1>(arg0: Internal.App_<Internal.RecordCodecBuilder$Mu<O>, T1>): Internal.Products$P1<Internal.RecordCodecBuilder$Mu<O>, T1>;
    }
    type RecordCodecBuilder$Instance_<O> = RecordCodecBuilder$Instance<O>;
    class WaxweaverSwordItem extends Internal.UniqueSwordItem {
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
    type WaxweaverSwordItem_ = WaxweaverSwordItem;
    interface ITagManager <V> extends Internal.Iterable<Internal.ITag<V>> {
        abstract getTagNames(): Internal.Stream<Internal.TagKey<V>>;
        abstract getReverseTag(arg0: V): Internal.Optional<Internal.IReverseTag<V>>;
        spliterator(): Internal.Spliterator<Internal.ITag<V>>;
        abstract addOptionalTagDefaults(arg0: Internal.TagKey_<V>, arg1: Internal.Set_<Internal.Supplier<V>>): void;
        abstract iterator(): Internal.Iterator<Internal.ITag<V>>;
        abstract createOptionalTagKey(arg0: ResourceLocation_, arg1: Internal.Set_<Internal.Supplier<V>>): Internal.TagKey<V>;
        forEach(arg0: Internal.Consumer_<Internal.ITag<V>>): void;
        abstract getTag(arg0: Internal.TagKey_<V>): Internal.ITag<V>;
        abstract isKnownTagName(arg0: Internal.TagKey_<V>): boolean;
        abstract createTagKey(arg0: ResourceLocation_): Internal.TagKey<V>;
        abstract stream(): Internal.Stream<Internal.ITag<V>>;
        get tagNames(): Internal.Stream<Internal.TagKey<V>>
    }
    type ITagManager_<V> = ITagManager<V>;
    class LootBuilderPool implements Internal.FunctionContainer, Internal.ConditionContainer {
        constructor()
        setUniformRolls(min: number, max: number): void;
        addFunction(arg0: Internal.JsonObject_): Internal.FunctionContainer;
        randomChanceWithLooting(chance: number, multiplier: number): Internal.ConditionContainer;
        name(name: Internal.Component_, entity: Internal.LootContext$EntityTarget_): Internal.FunctionContainer;
        toJson(): Internal.JsonObject;
        damage(damage: Internal.NumberProvider_): Internal.FunctionContainer;
        count(count: Internal.NumberProvider_): Internal.FunctionContainer;
        survivesExplosion(): Internal.ConditionContainer;
        addTag(tag: string, expand: boolean): Internal.LootTableEntry;
        addItem(item: Internal.ItemStack_, weight: number, count: Internal.NumberProvider_): Internal.LootTableEntry;
        copyName(source: Internal.CopyNameFunction$NameSource_): Internal.FunctionContainer;
        addCondition(arg0: Internal.JsonObject_): Internal.ConditionContainer;
        lootTable(table: ResourceLocation_, seed: number): Internal.FunctionContainer;
        addItem(item: Internal.ItemStack_): Internal.LootTableEntry;
        enchantWithLevels(levels: Internal.NumberProvider_, treasure: boolean): Internal.FunctionContainer;
        enchantRandomly(enchantments: ResourceLocation_[]): Internal.FunctionContainer;
        addEntry(json: Internal.JsonObject_): Internal.LootTableEntry;
        furnaceSmelt(): Internal.FunctionContainer;
        entityProperties(entity: Internal.LootContext$EntityTarget_, properties: Internal.JsonObject_): Internal.ConditionContainer;
        lootingEnchant(count: Internal.NumberProvider_, limit: number): Internal.FunctionContainer;
        addEmpty(weight: number): Internal.LootTableEntry;
        addConditionalFunction(func: Internal.Consumer_<Internal.ConditionalFunction>): Internal.FunctionContainer;
        randomChance(chance: number): Internal.ConditionContainer;
        addLootTable(table: ResourceLocation_): Internal.LootTableEntry;
        setBinomialRolls(n: number, p: number): void;
        killedByPlayer(): Internal.ConditionContainer;
        nbt(tag: Internal.CompoundTag_): Internal.FunctionContainer;
        entityScores(entity: Internal.LootContext$EntityTarget_, scores: Internal.Map_<string, any>): Internal.ConditionContainer;
        addItem(item: Internal.ItemStack_, weight: number): Internal.LootTableEntry;
        name(name: Internal.Component_): Internal.FunctionContainer;
        rolls: Internal.NumberProvider;
        readonly entries: Internal.JsonArray;
        readonly conditions: Internal.JsonArray;
        bonusRolls: Internal.NumberProvider;
        readonly functions: Internal.JsonArray;
    }
    type LootBuilderPool_ = LootBuilderPool;
    class PiecesContainer extends Internal.Record {
        constructor(arg0: Internal.List_<Internal.StructurePiece>)
        pieces(): Internal.List<Internal.StructurePiece>;
        isInsidePiece(arg0: BlockPos_): boolean;
        static load(arg0: Internal.ListTag_, arg1: Internal.StructurePieceSerializationContext_): Internal.PiecesContainer;
        save(arg0: Internal.StructurePieceSerializationContext_): Internal.Tag;
        calculateBoundingBox(): Internal.BoundingBox;
        isEmpty(): boolean;
        get empty(): boolean
    }
    type PiecesContainer_ = PiecesContainer;
    class DragonChargePlayerPhase extends Internal.AbstractDragonPhaseInstance {
        constructor(arg0: Internal.EnderDragon_)
        getPhase(): Internal.EnderDragonPhase<Internal.DragonChargePlayerPhase>;
        setTarget(arg0: Vec3d_): void;
        get phase(): Internal.EnderDragonPhase<Internal.DragonChargePlayerPhase>
        set target(arg0: Vec3d_)
    }
    type DragonChargePlayerPhase_ = DragonChargePlayerPhase;
    interface ToLongFunction <T> {
        abstract applyAsLong(arg0: T): number;
        (arg0: T): number;
    }
    type ToLongFunction_<T> = ToLongFunction<T>;
    class Object2IntOpenHashMap <K> extends Internal.AbstractObject2IntMap<K> implements Internal.Cloneable, Internal.Hash, Internal.Serializable {
        constructor(arg0: K[], arg1: number[], arg2: number)
        constructor()
        constructor(arg0: Internal.Map_<K, number>, arg1: number)
        constructor(arg0: Internal.Object2IntMap_<K>, arg1: number)
        constructor(arg0: K[], arg1: number[])
        constructor(arg0: Internal.Object2IntMap_<K>)
        constructor(arg0: number)
        constructor(arg0: number, arg1: number)
        constructor(arg0: Internal.Map_<K, number>)
        composeObject<T>(arg0: Internal.Object2ObjectFunction_<T, K>): Internal.Object2IntFunction<T>;
        /**
         * @deprecated
        */
        mergeInt(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        containsValue(arg0: any): boolean;
        andThenObject<T>(arg0: Internal.Int2ObjectFunction_<T>): Internal.Object2ObjectFunction<K, T>;
        trim(arg0: number): boolean;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<K, T>;
        composeChar(arg0: Internal.Char2ObjectFunction_<K>): Internal.Char2IntFunction;
        apply(arg0: K): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        composeLong(arg0: Internal.Long2ObjectFunction_<K>): Internal.Long2IntFunction;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any, arg2: any): boolean;
        /**
         * @deprecated
        */
        computeIntIfAbsentPartial(arg0: K, arg1: Internal.Object2IntFunction_<K>): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        trim(): boolean;
        andThenInt(arg0: Internal.Int2IntFunction_): Internal.Object2IntFunction<K>;
        composeInt(arg0: Internal.Int2ObjectFunction_<K>): Internal.Int2IntFunction;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        andThenDouble(arg0: Internal.Int2DoubleFunction_): Internal.Object2DoubleFunction<K>;
        replaceAll(arg0: Internal.BiFunction_<K, number, number>): void;
        applyAsInt(arg0: K): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        andThenByte(arg0: Internal.Int2ByteFunction_): Internal.Object2ByteFunction<K>;
        compute(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        static identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: any, arg1: any): any;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        clone(): any;
        object2IntEntrySet(): Internal.Object2IntMap$FastEntrySet<K>;
        andThenFloat(arg0: Internal.Int2FloatFunction_): Internal.Object2FloatFunction<K>;
        addTo(arg0: K, arg1: number): number;
        /**
         * @deprecated
        */
        computeIntIfAbsent(arg0: K, arg1: Internal.ToIntFunction_<K>): number;
        andThenLong(arg0: Internal.Int2LongFunction_): Internal.Object2LongFunction<K>;
        composeReference<T>(arg0: Internal.Reference2ObjectFunction_<T, K>): Internal.Reference2IntFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        static of<K, V>(): Internal.Map<K, V>;
        mergeInt(arg0: K, arg1: number, arg2: Internal.IntBinaryOperator_): number;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        /**
         * @deprecated
        */
        merge(arg0: K, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        replace(arg0: K, arg1: number): number;
        andThenShort(arg0: Internal.Int2ShortFunction_): Internal.Object2ShortFunction<K>;
        /**
         * @deprecated
        */
        entrySet(): Internal.ObjectSet<Internal.Map$Entry<K, number>>;
        /**
         * @deprecated
        */
        replace(arg0: K, arg1: number, arg2: number): boolean;
        keySet(): Internal.ObjectSet<K>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        put(arg0: K, arg1: number): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        remove(arg0: any, arg1: any): boolean;
        composeByte(arg0: Internal.Byte2ObjectFunction_<K>): Internal.Byte2IntFunction;
        composeDouble(arg0: Internal.Double2ObjectFunction_<K>): Internal.Double2IntFunction;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        composeFloat(arg0: Internal.Float2ObjectFunction_<K>): Internal.Float2IntFunction;
        andThenReference<T>(arg0: Internal.Int2ReferenceFunction_<T>): Internal.Object2ReferenceFunction<K, T>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        compose<V>(arg0: Internal.Function_<V, K>): Internal.Function<V, number>;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any): any;
        andThenChar(arg0: Internal.Int2CharFunction_): Internal.Object2CharFunction<K>;
        /**
         * @deprecated
        */
        merge(arg0: any, arg1: any, arg2: Internal.BiFunction_<any, any, any>): any;
        computeIfPresent(arg0: K, arg1: Internal.BiFunction_<K, number, number>): number;
        composeShort(arg0: Internal.Short2ObjectFunction_<K>): Internal.Short2IntFunction;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        computeIfAbsent(arg0: K, arg1: Internal.Function_<K, number>): number;
        forEach(arg0: Internal.BiConsumer_<K, number>): void;
    }
    type Object2IntOpenHashMap_<K> = Object2IntOpenHashMap<K>;
    class ImmutableSetMultimap <K, V> extends Internal.ImmutableMultimap<K, V> implements Internal.SetMultimap<K, V> {
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.ImmutableSetMultimap<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.ImmutableSetMultimap<K, V>;
        static copyOf<K, V>(arg0: Internal.Iterable_<Internal.Map$Entry<K, V>>): Internal.ImmutableSetMultimap<K, V>;
        get(arg0: any): Internal.Set<any>;
        static builder<K, V>(): Internal.ImmutableSetMultimap$Builder<K, V>;
        static flatteningToImmutableSetMultimap<T, K, V>(arg0: Internal.Function_<T, K>, arg1: Internal.Function_<T, Internal.Stream<V>>): Internal.Collector<T, any, Internal.ImmutableSetMultimap<K, V>>;
        inverse(): Internal.ImmutableMultimap<any, any>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.ImmutableSetMultimap<K, V>;
        static toImmutableSetMultimap<T, K, V>(arg0: Internal.Function_<T, K>, arg1: Internal.Function_<T, V>): Internal.Collector<T, any, Internal.ImmutableSetMultimap<K, V>>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.ImmutableSetMultimap<K, V>;
        /**
         * @deprecated
        */
        replaceValues(arg0: any, arg1: Internal.Iterable_<any>): Internal.ImmutableCollection<any>;
        /**
         * @deprecated
        */
        removeAll(arg0: any): Internal.ImmutableSet<V>;
        keySet(): Internal.Set<any>;
        static of<K, V>(arg0: K, arg1: V): Internal.ImmutableSetMultimap<K, V>;
        static copyOf<K, V>(arg0: Internal.Multimap_<K, V>): Internal.ImmutableSetMultimap<K, V>;
        entries(): Internal.Set<any>;
        keys(): Internal.Multiset<any>;
        abstract asMap(): Internal.Map<K, Internal.Collection<V>>;
        static of<K, V>(): Internal.ImmutableSetMultimap<K, V>;
    }
    type ImmutableSetMultimap_<K, V> = ImmutableSetMultimap<K, V>;
    class BlockFaceUV {
        constructor(arg0: number[], arg1: number)
        getReverseIndex(arg0: number): number;
        getV(arg0: number): number;
        getU(arg0: number): number;
        setMissingUv(arg0: number[]): void;
        set missingUv(arg0: number[])
        readonly rotation: number;
        uvs: number[];
    }
    type BlockFaceUV_ = BlockFaceUV;
    class Entity$RemovalReason extends Internal.Enum<Internal.Entity$RemovalReason> {
        static values(): Internal.Entity$RemovalReason[];
        shouldSave(): boolean;
        shouldDestroy(): boolean;
        static valueOf(arg0: string): Internal.Entity$RemovalReason;
        static readonly CHANGED_DIMENSION: Internal.Entity$RemovalReason;
        static readonly UNLOADED_TO_CHUNK: Internal.Entity$RemovalReason;
        static readonly UNLOADED_WITH_PLAYER: Internal.Entity$RemovalReason;
        static readonly KILLED: Internal.Entity$RemovalReason;
        static readonly DISCARDED: Internal.Entity$RemovalReason;
    }
    type Entity$RemovalReason_ = "changed_dimension" | Entity$RemovalReason | "killed" | "discarded" | "unloaded_with_player" | "unloaded_to_chunk";
    class ScorcherItem$ScorcherAnimationState extends Internal.Enum<Internal.ScorcherItem$ScorcherAnimationState> implements Internal.DNLAnimationState {
        static values(): Internal.ScorcherItem$ScorcherAnimationState[];
        getName(): string;
        static fromString<T extends Internal.Enum<T> & Internal.DNLAnimationState>(arg0: T, arg1: string, arg2: T): T;
        static valueOf(arg0: string): Internal.ScorcherItem$ScorcherAnimationState;
        get name(): string
        static readonly SCORCHER_OVERHEAT: Internal.ScorcherItem$ScorcherAnimationState;
        static readonly SCORCHER_BASE: Internal.ScorcherItem$ScorcherAnimationState;
        static readonly SCORCHER_ACTIVATED: Internal.ScorcherItem$ScorcherAnimationState;
        static readonly SCORCHER_SHOOT: Internal.ScorcherItem$ScorcherAnimationState;
        static readonly SCORCHER_STALLING: Internal.ScorcherItem$ScorcherAnimationState;
        static readonly SCORCHER_STOP: Internal.ScorcherItem$ScorcherAnimationState;
    }
    type ScorcherItem$ScorcherAnimationState_ = "scorcher_activated" | ScorcherItem$ScorcherAnimationState | "scorcher_shoot" | "scorcher_stalling" | "scorcher_base" | "scorcher_overheat" | "scorcher_stop";
    class TridentItem extends Internal.Item implements Internal.Vanishable, Internal.ModifiableItemKJS {
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
        kjs$getAttributeMap(): Internal.Multimap<any, any>;
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
        kjs$setAttributeMap(arg0: Internal.Multimap_<any, any>): void;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        shouldCauseReequipAnimation(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: boolean): boolean;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        handler$dll001$irons_spellbooks$releaseUsing(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.LivingEntity_, arg3: number, arg4: Internal.CallbackInfo_): void;
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
        static readonly BASE_DAMAGE: 8.0;
        static readonly THROW_THRESHOLD_TIME: 10;
        static readonly SHOOT_POWER: 2.5;
        defaultModifiers: Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
    }
    type TridentItem_ = TridentItem;
    class ServerboundSelectTradePacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        getItem(): number;
        isSkippable(): boolean;
        get item(): number
        get skippable(): boolean
    }
    type ServerboundSelectTradePacket_ = ServerboundSelectTradePacket;
    interface WindowKJS {
        kjs$loadIcons(original: Internal.List_<Internal.IoSupplier<Internal.InputStream>>): Internal.List<Internal.IoSupplier<Internal.InputStream>>;
    }
    type WindowKJS_ = WindowKJS;
    class SplashManager extends Internal.SimplePreparableReloadListener<Internal.List<string>> {
        constructor(arg0: Internal.User_)
        prepare(arg0: Internal.ResourceManager_, arg1: Internal.ProfilerFiller_): any;
        apply(arg0: Internal.List_<string>, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_): void;
        getName(): string;
        getSplash(): Internal.SplashRenderer;
        get name(): string
        get splash(): Internal.SplashRenderer
    }
    type SplashManager_ = SplashManager;
    class CustomGeoLayerJSBuilder <T extends Internal.LivingEntity & Internal.IAnimatableJSCustom> {
        constructor(builder: Internal.CustomEntityJSBuilder_)
        build(entityRendererIn: Internal.CustomKubeJSEntityRenderer_<T>, builder: Internal.CustomEntityJSBuilder_): Internal.CustomGeoLayerJS<T>;
        getBuilder(): Internal.CustomEntityJSBuilder;
        /**
         * Defines logic to render the newGeoLayer.
         * By default this will render the flat texture set in textureResource
         * onto the entity as an overlay. This method overrides the render method completely
         * allowing scripters to define their own render logic.
         * 
         * Example usage:
         * ```javascript
         * geoBuilder.render(context => {
         *     // Define logic to render the newGeoLayer
         *     if (context.entity.isBaby()) {
         *         context.poseStack.scale(0.5, 0.5, 0.5);
         *     }
         * });
         * ```
        */
        render(render: Internal.Consumer_<Internal.ContextUtils$PreRenderContext<T>>): this;
        /**
         * Defines logic to preRender the newGeoLayer.
         * 
         * Example usage:
         * ```javascript
         * geoBuilder.preRender(context => {
         *     // Define logic to render the newGeoLayer
         *     if (context.entity.isBaby()) {
         *         context.poseStack.scale(0.5, 0.5, 0.5);
         *     }
         * });
         * ```
        */
        preRender(preRender: Internal.Consumer_<Internal.ContextUtils$PreRenderContext<T>>): this;
        buildGlowing(entityRendererIn: Internal.CustomKubeJSEntityRenderer_<T>, builder: Internal.CustomEntityJSBuilder_): Internal.CustomGlowingGeoLayerJS<T>;
        /**
         * Sets a function to determine the texture resource for the entity.
         * The provided Function accepts a parameter of type T (the entity),
         * allowing changing the texture based on information about the entity.
         * The default behavior returns <namespace>:textures/entity/<path>.png.
         * 
         * Example usage:
         * ```javascript
         * entityBuilder.textureResource(entity => {
         *     // Define logic to determine the texture resource for the entity
         *     // Use information about the entity provided by the context.
         *     return "kubejs:textures/entity/wyrm.png" // Some ResourceLocation representing the texture resource;
         * });
         * ```
        */
        textureResource(function_: Internal.Function_<T, any>): this;
        get builder(): Internal.CustomEntityJSBuilder
        builder: Internal.CustomEntityJSBuilder;
    }
    type CustomGeoLayerJSBuilder_<T extends Internal.LivingEntity & Internal.IAnimatableJSCustom> = CustomGeoLayerJSBuilder<T>;
    class PressurePlateBlockBuilder extends Internal.ShapedBlockBuilder {
        constructor(i: ResourceLocation_)
        behaviour(wt: string): this;
        /**
         * Tags both the block and the item with the given tag.
        */
        tag(arg0: ResourceLocation_): Internal.BuilderBase<any>;
        behaviour(wt: Internal.BlockSetType_): this;
        createObject(): Internal.Block;
    }
    type PressurePlateBlockBuilder_ = PressurePlateBlockBuilder;
    class ContextUtils$EntityDamageContext {
        constructor(damageSource: DamageSource_, damageAmount: number, entity: Internal.LivingEntity_)
        /**
         * The source of the damage
        */
        readonly damageSource: DamageSource;
        /**
         * The living entity receiving the damage
        */
        readonly entity: Internal.LivingEntity;
        /**
         * The amount of damage inflicted
        */
        readonly damageAmount: number;
    }
    type ContextUtils$EntityDamageContext_ = ContextUtils$EntityDamageContext;
    class LevelEvent$Save extends Internal.LevelEvent {
        constructor()
        constructor(arg0: Internal.LevelAccessor_)
    }
    type LevelEvent$Save_ = LevelEvent$Save;
    class TimeComponent extends Internal.Record implements Internal.RecipeComponent<number> {
        constructor(name: string, scale: number)
        /**
         * Returns a new RecipeComponent that maps the keys in a JsonObject according to the provided map, both before the json gets passed to the component and after the component returns a written json object.
         * The mappings should be provided in the format `{recipe: "component"}` where recipe is the key as in the recipe, and component is the key as how the RecipeComponent expects it.
         * Any keys not included in the provided map will be ignored, and any keys in the provided map that are not in either the input object or output object will be ignored.
         * Note that if the input or output is not a JsonObject (ie its an ItemStack, or it is a JsonPrimitive) then that will pass through this without being modified.
         * If you wish to handle those situations use the actual map function
        */
        simpleMap(mappings: any): Internal.SimpleMappingRecipeComponent<number>;
        read(recipe: Internal.RecipeJS_, from: any): number;
        write(arg0: Internal.RecipeJS_, arg1: any): Internal.JsonElement;
        asArrayOrSelf(): Internal.ArrayRecipeComponent<number>;
        isOutput(recipe: Internal.RecipeJS_, value: number, match: Internal.ReplacementMatch_): boolean;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read, and the mappingFrom function after the component writes to json, before that json is saved
        */
        map(mappingTo: Internal.UnaryOperator_<any>, mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<number>;
        writeToJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<number>, json: Internal.JsonObject_): void;
        readFromMap(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<number>, map: Internal.Map_<any, any>): void;
        role(): Internal.ComponentRole;
        componentClass(): typeof any;
        /**
         * Returns a new RecipeComponent that applies the mappingFrom function after the component writes to json, before that json is saved
        */
        mapOut(mappingFrom: Internal.UnaryOperator_<Internal.JsonElement>): Internal.MappingRecipeComponent<number>;
        checkEmpty(key: Internal.RecipeKey_<number>, value: number): string;
        replaceInput(recipe: Internal.RecipeJS_, original: number, match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): number;
        write(recipe: Internal.RecipeJS_, value: number): Internal.JsonElement;
        orSelf(): Internal.RecipeComponent<number>;
        constructorDescription(ctx: Internal.DescriptionContext_): Internal.TypeDescJS;
        key(name: string): Internal.RecipeKey<number>;
        and<O>(other: Internal.RecipeComponent_<O>): Internal.AndRecipeComponent<number, O>;
        componentType(): string;
        asArray(): Internal.ArrayRecipeComponent<number>;
        isInput(recipe: Internal.RecipeJS_, value: number, match: Internal.ReplacementMatch_): boolean;
        static builder(): Internal.RecipeComponentBuilder;
        hasPriority(recipe: Internal.RecipeJS_, from: any): boolean;
        /**
         * Returns a new RecipeComponent that applies the mappingTo function to the input before it is passed to this component to be read
        */
        mapIn(mappingTo: Internal.UnaryOperator_<any>): Internal.MappingRecipeComponent<number>;
        static builder(...key: Internal.RecipeKey_<any>[]): Internal.RecipeComponentBuilder;
        asMap<K>(key: Internal.RecipeComponent_<K>): Internal.RecipeComponent<Internal.TinyMap<K, number>>;
        name(): string;
        asPatternKey(): Internal.RecipeComponent<Internal.TinyMap<string, number>>;
        readFromJson(recipe: Internal.RecipeJS_, cv: Internal.RecipeComponentValue_<number>, json: Internal.JsonObject_): void;
        scale(): number;
        checkValueHasChanged(oldValue: number, newValue: number): boolean;
        or<O>(other: Internal.RecipeComponent_<O>): Internal.OrRecipeComponent<number, O>;
        replaceOutput(recipe: Internal.RecipeJS_, original: number, match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): number;
        static readonly SECONDS: Internal.TimeComponent;
        static readonly TICKS: Internal.TimeComponent;
        static readonly DYNAMIC: Internal.DynamicRecipeComponent;
        static readonly MINUTES: Internal.TimeComponent;
    }
    type TimeComponent_ = TimeComponent;
    class FishingSpeedEnchantment extends Internal.Enchantment {
        constructor(arg0: Internal.Enchantment$Rarity_, arg1: Internal.EnchantmentCategory_, ...arg2: Internal.EquipmentSlot_[])
        allowedInCreativeTab(arg0: Internal.Item_, arg1: Internal.Set_<Internal.EnchantmentCategory>): boolean;
        getDamageBonus(arg0: number, arg1: Internal.MobType_, arg2: Internal.ItemStack_): number;
    }
    type FishingSpeedEnchantment_ = FishingSpeedEnchantment;
    class SculkSensorBlockEntity extends Internal.BlockEntity implements Internal.GameEventListener$Holder<any>, Internal.VibrationSystem {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        constructor(arg0: Internal.BlockEntityType_<any>, arg1: BlockPos_, arg2: Internal.BlockState_)
        getLastVibrationFrequency(): number;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        static getGameEventFrequency(arg0: Internal.GameEvent_): number;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        getVibrationUser(): Internal.VibrationSystem$User;
        serializeNBT(): Internal.Tag;
        onLoad(): void;
        createVibrationUser(): Internal.VibrationSystem$User;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        static getResonanceEventByFrequency(arg0: number): Internal.GameEvent;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        getListener(): Internal.GameEventListener;
        deserializeNBT(arg0: Internal.Tag_): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getVibrationData(): Internal.VibrationSystem$Data;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getModelData(): Internal.ModelData;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        setLastVibrationFrequency(arg0: number): void;
        static getRedstoneStrengthForDistance(arg0: number, arg1: number): number;
        getRenderBoundingBox(): Internal.AABB;
        get lastVibrationFrequency(): number
        get vibrationUser(): Internal.VibrationSystem$User
        get listener(): Internal.GameEventListener
        get vibrationData(): Internal.VibrationSystem$Data
        get modelData(): Internal.ModelData
        set lastVibrationFrequency(arg0: number)
        get renderBoundingBox(): Internal.AABB
    }
    type SculkSensorBlockEntity_ = SculkSensorBlockEntity;
    class RenderBuffers implements Internal.MemoryTrackingRenderBuffers, Internal.RenderBuffersExt, Internal.DrawCallTrackingRenderBuffers {
        constructor()
        freeAndDeleteBuffers(): void;
        bufferSource(): Internal.MultiBufferSource$BufferSource;
        getMaxBegins(): number;
        getDrawCalls(): number;
        beginLevelRendering(): void;
        getMiscBufferAllocatedSize(): number;
        getRenderTypes(): number;
        getEntityBufferAllocatedSize(): number;
        resetDrawCounts(): void;
        crumblingBufferSource(): Internal.MultiBufferSource$BufferSource;
        endLevelRendering(): void;
        fixedBufferPack(): Internal.ChunkBufferBuilderPack;
        outlineBufferSource(): Internal.OutlineBufferSource;
        get maxBegins(): number
        get drawCalls(): number
        get miscBufferAllocatedSize(): number
        get renderTypes(): number
        get entityBufferAllocatedSize(): number
        fixedBuffers: Internal.SortedMap<Internal.RenderType, Internal.BufferBuilder>;
    }
    type RenderBuffers_ = RenderBuffers;
    class PistonType extends Internal.Enum<Internal.PistonType> implements Internal.StringRepresentable {
        static valueOf(arg0: string): Internal.PistonType;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static values(): Internal.PistonType[];
        get serializedName(): string
        static readonly STICKY: Internal.PistonType;
        static readonly DEFAULT: Internal.PistonType;
    }
    type PistonType_ = "sticky" | PistonType | "default";
    class GhastJSBuilder extends Internal.MobBuilder<any> {
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
    }
    type GhastJSBuilder_ = GhastJSBuilder;
    class ModuleLayer {
        defineModulesWithManyLoaders(arg0: Internal.Configuration_, arg1: Internal.ClassLoader_): this;
        static boot(): Internal.ModuleLayer;
        findLoader(arg0: string): Internal.ClassLoader;
        static defineModulesWithManyLoaders(arg0: Internal.Configuration_, arg1: Internal.List_<Internal.ModuleLayer>, arg2: Internal.ClassLoader_): Internal.ModuleLayer$Controller;
        defineModulesWithOneLoader(arg0: Internal.Configuration_, arg1: Internal.ClassLoader_): this;
        static defineModules(arg0: Internal.Configuration_, arg1: Internal.List_<Internal.ModuleLayer>, arg2: Internal.Function_<string, Internal.ClassLoader>): Internal.ModuleLayer$Controller;
        modules(): Internal.Set<Internal.Module>;
        static defineModulesWithOneLoader(arg0: Internal.Configuration_, arg1: Internal.List_<Internal.ModuleLayer>, arg2: Internal.ClassLoader_): Internal.ModuleLayer$Controller;
        parents(): Internal.List<Internal.ModuleLayer>;
        defineModules(arg0: Internal.Configuration_, arg1: Internal.Function_<string, Internal.ClassLoader>): this;
        static empty(): Internal.ModuleLayer;
        configuration(): Internal.Configuration;
        findModule(arg0: string): Internal.Optional<Internal.Module>;
    }
    type ModuleLayer_ = ModuleLayer;
    class ServerLevel extends Internal.Level implements Internal.ServerLevelKJS, Internal.ServerWorldCache, Internal.WorldGenLevel {
        constructor(arg0: Internal.MinecraftServer_, arg1: Internal.Executor_, arg2: Internal.LevelStorageSource$LevelStorageAccess_, arg3: Internal.ServerLevelData_, arg4: Internal.ResourceKey_<Internal.Level>, arg5: Internal.LevelStem_, arg6: Internal.ChunkProgressListener_, arg7: boolean, arg8: number, arg9: Internal.List_<any>, arg10: boolean, arg11: Internal.RandomSequences_)
        spawnLightning(x: number, y: number, z: number, effectOnly: boolean, player: Internal.ServerPlayer_): void;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_): Player;
        dayTime(): number;
        isUnobstructed(arg0: Internal.Entity_, arg1: Internal.VoxelShape_): boolean;
        resetEmptyTime(): void;
        getMaxSection(): number;
        setDefaultSpawnPos(arg0: BlockPos_, arg1: number): void;
        getPlayers(arg0: Internal.Predicate_<Internal.ServerPlayer>, arg1: number): Internal.List<Internal.ServerPlayer>;
        getSectionYFromSectionIndex(arg0: number): number;
        tick(arg0: Internal.BooleanSupplier_): void;
        isEmptyBlock(arg0: BlockPos_): boolean;
        playSound(arg0: Player_, arg1: BlockPos_, arg2: Internal.SoundEvent_, arg3: Internal.SoundSource_): void;
        getTimeOfDay(arg0: number): number;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        addRespawnedPlayer(arg0: Internal.ServerPlayer_): void;
        runCommandSilent(command: string): number;
        addWorldGenChunkEntities(arg0: Internal.Stream_<Internal.Entity>): void;
        sendParticles<T extends Internal.ParticleOptions>(arg0: Internal.ServerPlayer_, arg1: T, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): boolean;
        fabric_registerCache(pos: BlockPos_, cache: Internal.BlockApiCacheImpl_<any, any>): void;
        getRaidAt(arg0: BlockPos_): Internal.Raid;
        getDataStorage(): Internal.DimensionDataStorage;
        getSectionIndex(arg0: number): number;
        ensureCanWrite(arg0: BlockPos_): boolean;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: BlockPos_, arg1: BlockPos_): boolean;
        destroyBlock(arg0: BlockPos_, arg1: boolean, arg2: Internal.Entity_): boolean;
        getBlock(x: number, y: number, z: number): Internal.BlockContainerJS;
        findLightningTargetAround(arg0: BlockPos_): BlockPos;
        getHeight(): number;
        getPersistentData(): Internal.CompoundTag;
        getPlayers(arg0: Internal.Predicate_<Internal.ServerPlayer>): Internal.List<Internal.ServerPlayer>;
        getFluidTicks(): Internal.LevelTickAccess<any>;
        addDuringTeleport(arg0: Internal.Entity_): void;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: BlockPos_): boolean;
        isNaturalSpawningAllowed(arg0: Internal.ChunkPos_): boolean;
        getBiome(arg0: BlockPos_): Internal.Holder<Internal.Biome>;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        isPositionEntityTicking(arg0: BlockPos_): boolean;
        initCapabilities(): void;
        /**
         * @deprecated
        */
        getLightLevelDependentMagicValue(arg0: BlockPos_): number;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Block_, arg2: number, arg3: Internal.TickPriority_): void;
        getRandomSequences(): Internal.RandomSequences;
        setTime(time: number): void;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_, arg2: Internal.Predicate_<T>): Internal.List<T>;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: number, arg3: number, arg4: number): Player;
        isNaturalSpawningAllowed(arg0: BlockPos_): boolean;
        getControlInputSignal(arg0: BlockPos_, arg1: Internal.Direction_, arg2: boolean): number;
        setWeatherParameters(arg0: number, arg1: number, arg2: boolean, arg3: boolean): void;
        findFreePosition(arg0: Internal.Entity_, arg1: Internal.VoxelShape_, arg2: Vec3d_, arg3: number, arg4: number, arg5: number): Internal.Optional<Vec3d>;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getPortalForcer(): Internal.PortalForcer;
        tickTime(): void;
        hasNeighborSignal(arg0: BlockPos_): boolean;
        getLightEmission(arg0: BlockPos_): number;
        getBlockFloorHeight(arg0: BlockPos_): number;
        isVillage(arg0: Internal.SectionPos_): boolean;
        /**
         * @deprecated
        */
        hasChunksAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getRawBrightness(arg0: BlockPos_, arg1: number): number;
        getName(): Internal.Component;
        getDifficulty(): Internal.Difficulty;
        getForcedChunks(): Internal.LongSet;
        spawnFireworks(x: number, y: number, z: number, f: Internal.FireworksJS_): void;
        canSeeSkyFromBelowWater(arg0: BlockPos_): boolean;
        getSectionsCount(): number;
        getChunk(arg0: number, arg1: number, arg2: Internal.ChunkStatus_): Internal.ChunkAccess;
        getEntities<T extends Internal.Entity>(arg0: Internal.EntityTypeTest_<Internal.Entity, T>, arg1: Internal.Predicate_<T>, arg2: Internal.List_<T>, arg3: number): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        hasChunk(arg0: number, arg1: number): boolean;
        getBlockEntityRenderData(pos: BlockPos_): any;
        getMoonBrightness(): number;
        /**
         * @deprecated
        */
        setDragonFight(arg0: Internal.EndDragonFight_): void;
        isWaterAt(arg0: BlockPos_): boolean;
        saveDebugReport(arg0: Internal.Path_): void;
        getSide(): Internal.ScriptType;
        getEntityCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.VoxelShape>;
        getBlockFloorHeight(arg0: Internal.VoxelShape_, arg1: Internal.Supplier_<Internal.VoxelShape>): number;
        getNoiseBiome(arg0: number, arg1: number, arg2: number): Internal.Holder<Internal.Biome>;
        gameEvent(arg0: Internal.GameEvent_, arg1: BlockPos_, arg2: Internal.GameEvent$Context_): void;
        getStructureManager(): Internal.StructureTemplateManager;
        isBlockInLine(arg0: Internal.ClipBlockStateContext_): Internal.BlockHitResult;
        findSupportingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Optional<BlockPos>;
        removePlayerImmediately(arg0: Internal.ServerPlayer_, arg1: Internal.Entity$RemovalReason_): void;
        getExistingBlockEntity(arg0: BlockPos_): Internal.BlockEntity;
        getPoiManager(): Internal.PoiManager;
        setStatusMessage(message: Internal.Component_): void;
        static makeObsidianPlatform(arg0: Internal.ServerLevel_): void;
        gameEvent(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: BlockPos_): void;
        containsAnyLiquid(arg0: Internal.AABB_): boolean;
        getMaxLightLevel(): number;
        getBlock(pos: BlockPos_): Internal.BlockContainerJS;
        isAreaLoaded(arg0: BlockPos_, arg1: number): boolean;
        static traverseBlocks<T, C>(arg0: Vec3d_, arg1: Vec3d_, arg2: C, arg3: Internal.BiFunction_<C, BlockPos, T>, arg4: Internal.Function_<C, T>): T;
        tickNonPassenger(arg0: Internal.Entity_): void;
        getSeed(): number;
        getSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        save(arg0: Internal.ProgressListener_, arg1: boolean, arg2: boolean): void;
        addWithUUID(arg0: Internal.Entity_): boolean;
        getBrightness(arg0: Internal.LightLayer_, arg1: BlockPos_): number;
        getAllEntities(): Internal.Iterable<Internal.Entity>;
        fabric_invalidateCache(pos: BlockPos_): void;
        sendParticles(arg0: Internal.ServerPlayer_, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: Internal.Packet_<any>): boolean;
        createEntityList(entities: Internal.Collection_<Internal.Entity>): Internal.EntityArrayList;
        unload(arg0: Internal.LevelChunk_): void;
        getEntitiesWithin(aabb: Internal.AABB_): Internal.EntityArrayList;
        getMaxLocalRawBrightness(arg0: BlockPos_, arg1: number): number;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getBlockCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        isOutsideBuildHeight(arg0: BlockPos_): boolean;
        canSleepThroughNights(): boolean;
        getHeightmapPos(arg0: Internal.Heightmap$Types_, arg1: BlockPos_): BlockPos;
        getEntities(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.List<Internal.Entity>;
        getEntitiesOfClass<T extends Internal.Entity>(arg0: T, arg1: Internal.AABB_): Internal.List<T>;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        onReputationEvent(arg0: Internal.ReputationEventType_, arg1: Internal.Entity_, arg2: Internal.ReputationEventHandler_): void;
        getBlockStates(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getPathfindingCostFromLightLevels(arg0: BlockPos_): number;
        setDayTime(arg0: number): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        getMinBuildHeight(): number;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number): void;
        getBiomeFabric(pos: BlockPos_): Internal.Holder<any>;
        getBlock(blockEntity: Internal.BlockEntity_): Internal.BlockContainerJS;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): Player;
        getDisplayName(): Internal.Component;
        /**
         * @deprecated
        */
        hasChunkAt(arg0: number, arg1: number): boolean;
        getDirectSignalTo(arg0: BlockPos_): number;
        getNearestPlayer(arg0: Internal.TargetingConditions_, arg1: number, arg2: number, arg3: number): Player;
        getMaxBuildHeight(): number;
        areEntitiesLoaded(arg0: number): boolean;
        destroyBlock(arg0: BlockPos_, arg1: boolean): boolean;
        tryAddFreshEntityWithPassengers(arg0: Internal.Entity_): boolean;
        spawnLightning(x: number, y: number, z: number, effectOnly: boolean): void;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Block_, arg2: number): void;
        getChunk(arg0: number, arg1: number): Internal.ChunkAccess;
        setChunkForced(arg0: number, arg1: number, arg2: boolean): boolean;
        hasSignal(arg0: BlockPos_, arg1: Internal.Direction_): boolean;
        getCollisions(arg0: Internal.Entity_, arg1: Internal.AABB_): Internal.Iterable<Internal.VoxelShape>;
        addDuringCommandTeleport(arg0: Internal.ServerPlayer_): void;
        startTickingChunk(arg0: Internal.LevelChunk_): void;
        getChunk(arg0: BlockPos_): Internal.ChunkAccess;
        getWatchdogStats(): string;
        getMaxLocalRawBrightness(arg0: BlockPos_): number;
        isUnobstructed(arg0: Internal.BlockState_, arg1: BlockPos_, arg2: Internal.CollisionContext_): boolean;
        /**
         * @deprecated
        */
        getBlockEntityRenderAttachment(pos: BlockPos_): any;
        findClosestBiome3d(arg0: Internal.Predicate_<Internal.Holder<Internal.Biome>>, arg1: BlockPos_, arg2: number, arg3: number, arg4: number): com.mojang.datafixers.util.Pair<BlockPos, Internal.Holder<Internal.Biome>>;
        isCloseToVillage(arg0: BlockPos_, arg1: number): boolean;
        hasNearbyAlivePlayer(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getRandomSequence(arg0: ResourceLocation_): Internal.RandomSource;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        tickCustomSpawners(arg0: boolean, arg1: boolean): void;
        addNewPlayer(arg0: Internal.ServerPlayer_): void;
        getBlockTint(arg0: BlockPos_, arg1: Internal.ColorResolver_): number;
        getMinSection(): number;
        clipWithInteractionOverride(arg0: Vec3d_, arg1: Vec3d_, arg2: BlockPos_, arg3: Internal.VoxelShape_, arg4: Internal.BlockState_): Internal.BlockHitResult;
        createExplosion(x: number, y: number, z: number): Internal.ExplosionJS;
        getNearestPlayer(arg0: Internal.Entity_, arg1: number): Player;
        getBlockStatesIfLoaded(arg0: Internal.AABB_): Internal.Stream<Internal.BlockState>;
        getShade(arg0: number, arg1: number, arg2: number, arg3: boolean): number;
        getEntities<T extends Internal.Entity>(arg0: Internal.EntityTypeTest_<Internal.Entity, T>, arg1: Internal.Predicate_<T>, arg2: Internal.List_<T>): void;
        static create(arg0: number, arg1: number): Internal.LevelHeightAccessor;
        clip(arg0: Internal.ClipContext_): Internal.BlockHitResult;
        sendParticles<T extends Internal.ParticleOptions>(arg0: T, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): number;
        getBlockEntity<T extends Internal.BlockEntity>(arg0: BlockPos_, arg1: Internal.BlockEntityType_<T>): Internal.Optional<T>;
        isHandlingTick(): boolean;
        getBlockTicks(): Internal.LevelTicks<Internal.Block>;
        getDimension(): ResourceLocation;
        canSeeSky(arg0: BlockPos_): boolean;
        getMoonPhase(): number;
        isUnobstructed(arg0: Internal.Entity_): boolean;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: Internal.List_<T>, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number): T;
        /**
         * @deprecated
        */
        getEntityOrPart(arg0: number): Internal.Entity;
        getDragons(): Internal.List<Internal.EnderDragon>;
        addFreshEntityWithPassengers(arg0: Internal.Entity_): void;
        structureManager(): Internal.StructureManager;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        getPlayerByUUID(arg0: Internal.UUID_): Player;
        holderLookup<T>(arg0: Internal.ResourceKey_<Internal.Registry<T>>): Internal.HolderLookup<T>;
        getNearbyPlayers(arg0: Internal.TargetingConditions_, arg1: Internal.LivingEntity_, arg2: Internal.AABB_): Internal.List<Player>;
        getSectionIndexFromSectionY(arg0: number): number;
        updateSleepingPlayerList(): void;
        getRandomPlayer(): Internal.ServerPlayer;
        noCollision(arg0: Internal.Entity_): boolean;
        getLevel(): this;
        tickChunk(arg0: Internal.LevelChunk_, arg1: number): void;
        self(): Internal.Level;
        createEntity(type: Internal.EntityType_<any>): Internal.Entity;
        getBestNeighborSignal(arg0: BlockPos_): number;
        getEntity(arg0: Internal.UUID_): Internal.Entity;
        sectionsToVillage(arg0: Internal.SectionPos_): number;
        getNearbyEntities<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: Internal.AABB_): Internal.List<T>;
        noCollision(arg0: Internal.AABB_): boolean;
        getDirectSignal(arg0: BlockPos_, arg1: Internal.Direction_): number;
        collidesWithSuffocatingBlock(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        clearBlockEvents(arg0: Internal.BoundingBox_): void;
        setCurrentlyGenerating(arg0: Internal.Supplier_<string>): void;
        getModelDataManager(): Internal.ModelDataManager;
        findNearestMapStructure(arg0: Internal.TagKey_<Internal.Structure>, arg1: BlockPos_, arg2: number, arg3: boolean): BlockPos;
        noCollision(arg0: Internal.Entity_, arg1: Internal.AABB_): boolean;
        scheduleTick(arg0: BlockPos_, arg1: Internal.Fluid_, arg2: number, arg3: Internal.TickPriority_): void;
        isOutsideBuildHeight(arg0: number): boolean;
        getEntities(): Internal.EntityArrayList;
        spawnParticles(options: Internal.ParticleOptions_, overrideLimiter: boolean, x: number, y: number, z: number, vx: number, vy: number, vz: number, count: number, speed: number): void;
        getNearestPlayer(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Predicate_<Internal.Entity>): Player;
        gameEvent(arg0: Internal.Entity_, arg1: Internal.GameEvent_, arg2: Vec3d_): void;
        addDuringPortalTeleport(arg0: Internal.ServerPlayer_): void;
        tell(message: Internal.Component_): void;
        getLogicalHeight(): number;
        onStructureStartsAvailable(arg0: Internal.ChunkAccess_): void;
        isRaided(arg0: BlockPos_): boolean;
        addLegacyChunkEntities(arg0: Internal.Stream_<Internal.Entity>): void;
        getRaids(): Internal.Raids;
        levelEvent(arg0: number, arg1: BlockPos_, arg2: number): void;
        isVillage(arg0: BlockPos_): boolean;
        getPlayers(): Internal.EntityArrayList;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getDragonFight(): Internal.EndDragonFight;
        hasBiomes(): boolean;
        isOverworld(): boolean;
        runCommand(command: string): number;
        getEntities<T extends Internal.Entity>(arg0: Internal.EntityTypeTest_<Internal.Entity, T>, arg1: Internal.Predicate_<T>): Internal.List<T>;
        isFlat(): boolean;
        getNearestEntity<T extends Internal.LivingEntity>(arg0: T, arg1: Internal.TargetingConditions_, arg2: Internal.LivingEntity_, arg3: number, arg4: number, arg5: number, arg6: Internal.AABB_): T;
        get maxSection(): number
        get dataStorage(): Internal.DimensionDataStorage
        get height(): number
        get persistentData(): Internal.CompoundTag
        get fluidTicks(): Internal.LevelTickAccess<any>
        get randomSequences(): Internal.RandomSequences
        set time(time: number)
        get portalForcer(): Internal.PortalForcer
        get name(): Internal.Component
        get difficulty(): Internal.Difficulty
        get forcedChunks(): Internal.LongSet
        get sectionsCount(): number
        get moonBrightness(): number
        /**
         * @deprecated
        */
        set dragonFight(arg0: Internal.EndDragonFight_)
        get side(): Internal.ScriptType
        get structureManager(): Internal.StructureTemplateManager
        get poiManager(): Internal.PoiManager
        set statusMessage(message: Internal.Component_)
        get maxLightLevel(): number
        get seed(): number
        get allEntities(): Internal.Iterable<Internal.Entity>
        set dayTime(arg0: number)
        get minBuildHeight(): number
        get displayName(): Internal.Component
        get maxBuildHeight(): number
        get watchdogStats(): string
        get minSection(): number
        get handlingTick(): boolean
        get blockTicks(): Internal.LevelTicks<Internal.Block>
        get dimension(): ResourceLocation
        get moonPhase(): number
        get dragons(): Internal.List<Internal.EnderDragon>
        get randomPlayer(): Internal.ServerPlayer
        get level(): Internal.ServerLevel
        set currentlyGenerating(arg0: Internal.Supplier_<string>)
        get modelDataManager(): Internal.ModelDataManager
        get entities(): Internal.EntityArrayList
        get logicalHeight(): number
        get raids(): Internal.Raids
        get players(): Internal.EntityArrayList
        get dragonFight(): Internal.EndDragonFight
        get overworld(): boolean
        get flat(): boolean
        readonly navigatingMobs: Internal.Set<Internal.Mob>;
        readonly dragonParts: Internal.Int2ObjectMap<Internal.PartEntity<any>>;
        static readonly RAIN_DURATION: Internal.UniformInt;
        static readonly END_SPAWN_POINT: BlockPos;
        readonly entityTickList: Internal.EntityTickList;
        readonly raids: Internal.Raids;
        static readonly THUNDER_DURATION: Internal.UniformInt;
        isUpdatingNavigations: boolean;
        noSave: boolean;
        readonly serverLevelData: Internal.ServerLevelData;
        static readonly RAIN_DELAY: Internal.UniformInt;
        readonly entityManager: Internal.PersistentEntitySectionManager<Internal.Entity>;
    }
    type ServerLevel_ = ServerLevel;
    interface CustomMapData <H extends Internal.CustomMapData$DirtyCounter> {
        abstract loadUpdateTag(arg0: Internal.CompoundTag_): void;
        onItemTooltip(data: Internal.MapItemSavedData_, stack: Internal.ItemStack_): Internal.Component;
        onItemUpdate(data: Internal.MapItemSavedData_, entity: Internal.Entity_): boolean;
        abstract load(arg0: Internal.CompoundTag_): void;
        abstract saveToUpdateTag(arg0: Internal.CompoundTag_, arg1: H): void;
        setDirty(data: Internal.MapItemSavedData_, dirtySetter: Internal.Consumer_<H>): void;
        abstract createDirtyCounter(): H;
        persistOnRescale(): boolean;
        abstract save(arg0: Internal.CompoundTag_): void;
        persistOnCopyOrLock(): boolean;
        abstract getType(): Internal.CustomMapData$Type<any>;
        get type(): Internal.CustomMapData$Type<any>
    }
    type CustomMapData_<H extends Internal.CustomMapData$DirtyCounter> = CustomMapData<H>;
    class ModifyBlockRenderPower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<Internal.ModifyBlockRenderConfiguration> {
        constructor()
        check(arg0: Internal.ConfiguredPower_<Internal.ModifyBlockRenderConfiguration, any>, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.NonNullSupplier_<Internal.BlockState>): boolean;
    }
    type ModifyBlockRenderPower_ = ModifyBlockRenderPower;
    interface MobAttackStrength {
        abstract bettercombat$resetAttackStrengthTicker(): void;
        abstract bettercombat$getAttackStrengthScale(arg0: number): number;
        abstract bettermobcombat$getCurrentItemAttackStrengthDelay(): number;
    }
    type MobAttackStrength_ = MobAttackStrength;
    abstract class CataclysmStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        constructor(arg0: Internal.Structure$StructureSettings_, arg1: Internal.Set_<Internal.Holder<Internal.Biome>>, arg2: boolean, arg3: boolean, arg4: boolean)
        constructor(arg0: Internal.Structure$StructureSettings_, arg1: Internal.Set_<Internal.Holder<Internal.Biome>>)
        generatePieces(arg0: Internal.StructurePiecesBuilder_, arg1: Internal.Structure$GenerationContext_): void;
        checkLocation(arg0: Internal.Structure$GenerationContext_): boolean;
    }
    type CataclysmStructure_ = CataclysmStructure;
    class NoOpFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type NoOpFeature_ = NoOpFeature;
    class LootDataId <T> extends Internal.Record {
        constructor(arg0: Internal.LootDataType_<T>, arg1: ResourceLocation_)
        type(): Internal.LootDataType<T>;
        location(): ResourceLocation;
    }
    type LootDataId_<T> = LootDataId<T>;
    class BlockActionAtAction extends Internal.EntityAction<Internal.HolderConfiguration<Internal.ConfiguredBlockAction<any, any>>> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        execute(arg0: Internal.HolderConfiguration_<Internal.ConfiguredBlockAction<any, any>>, arg1: Internal.Entity_): void;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type BlockActionAtAction_ = BlockActionAtAction;
    class LevelStorageSource$LevelStorageAccess implements Internal.AutoCloseable {
        constructor(arg0: Internal.LevelStorageSource_, arg1: string, arg2: Internal.Path_)
        deleteLevel(): void;
        getLevelPath(arg0: Internal.LevelResource_): Internal.Path;
        getLevelId(): string;
        handler$dmp000$fabric_registry_sync_v0$saveWorld(registryTracker: Internal.RegistryAccess_, saveProperties: Internal.WorldData_, compoundTag: Internal.CompoundTag_, info: Internal.CallbackInfo_): void;
        getWorldDir(): Internal.Path;
        saveDataTag(arg0: Internal.RegistryAccess_, arg1: Internal.WorldData_, arg2: Internal.CompoundTag_): void;
        getDataConfiguration(): Internal.WorldDataConfiguration;
        makeWorldBackup(): number;
        getSummary(): Internal.LevelSummary;
        getDimensionPath(arg0: Internal.ResourceKey_<Internal.Level>): Internal.Path;
        handler$dmp000$fabric_registry_sync_v0$readWorldProperties(callbackInfo: Internal.CallbackInfoReturnable_<any>): void;
        readAdditionalLevelSaveData(): void;
        getDataTag(arg0: Internal.DynamicOps_<Internal.Tag>, arg1: Internal.WorldDataConfiguration_, arg2: Internal.Registry_<Internal.LevelStem>, arg3: Internal.Lifecycle_): com.mojang.datafixers.util.Pair<Internal.WorldData, Internal.WorldDimensions$Complete>;
        renameLevel(arg0: string): void;
        saveDataTag(arg0: Internal.RegistryAccess_, arg1: Internal.WorldData_): void;
        close(): void;
        createPlayerStorage(): Internal.PlayerDataStorage;
        getIconFile(): Internal.Optional<Internal.Path>;
        get levelId(): string
        get worldDir(): Internal.Path
        get dataConfiguration(): Internal.WorldDataConfiguration
        get summary(): Internal.LevelSummary
        get iconFile(): Internal.Optional<Internal.Path>
        readonly lock: Internal.DirectoryLock;
        readonly f_78269_: Internal.LevelStorageSource;
        readonly levelDirectory: Internal.LevelStorageSource$LevelDirectory;
    }
    type LevelStorageSource$LevelStorageAccess_ = LevelStorageSource$LevelStorageAccess;
    interface GenericDeclaration extends Internal.AnnotatedElement {
        getAnnotationsByType<T extends Internal.Annotation>(arg0: T): T[];
        getDeclaredAnnotation<T extends Internal.Annotation>(arg0: T): T;
        getDeclaredAnnotationsByType<T extends Internal.Annotation>(arg0: T): T[];
        abstract getAnnotation<T extends Internal.Annotation>(arg0: T): T;
        abstract getAnnotations(): Internal.Annotation[];
        abstract getTypeParameters(): any[];
        abstract getDeclaredAnnotations(): Internal.Annotation[];
        isAnnotationPresent(arg0: typeof Internal.Annotation): boolean;
        get annotations(): Internal.Annotation[]
        get typeParameters(): any[]
        get declaredAnnotations(): Internal.Annotation[]
    }
    type GenericDeclaration_ = GenericDeclaration;
    interface BiomeSeedProvider {
        getBiomeSeed(arg0: Internal.ClientLevel_): number;
        abstract sodium$getBiomeSeed(): number;
        (): number;
    }
    type BiomeSeedProvider_ = BiomeSeedProvider;
    class AcidPitStructure extends Internal.AbstractCaveGenerationStructure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        static readonly CODEC: Internal.Codec<Internal.AcidPitStructure>;
    }
    type AcidPitStructure_ = AcidPitStructure;
    class ModelDataManager {
        constructor(arg0: Internal.Level_)
        requestRefresh(arg0: Internal.BlockEntity_): void;
        getAt(arg0: BlockPos_): Internal.ModelData;
        getAt(arg0: Internal.ChunkPos_): Internal.Map<BlockPos, Internal.ModelData>;
        static onChunkUnload(arg0: Internal.ChunkEvent$Unload_): void;
    }
    type ModelDataManager_ = ModelDataManager;
    class ModFileScanData$AnnotationData extends Internal.Record {
        constructor(annotationType: org.objectweb.asm.Type_, targetType: Internal.ElementType_, clazz: org.objectweb.asm.Type_, memberName: string, annotationData: Internal.Map_<string, any>)
        memberName(): string;
        clazz(): org.objectweb.asm.Type;
        annotationData(): Internal.Map<string, any>;
        targetType(): Internal.ElementType;
        annotationType(): org.objectweb.asm.Type;
    }
    type ModFileScanData$AnnotationData_ = ModFileScanData$AnnotationData;
    abstract class MultifaceBlock extends Internal.Block {
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
        static hasAnyFace(arg0: Internal.BlockState_): boolean;
        canConnectRedstone(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFriction(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): number;
        isFireSource(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        isStickyBlock(arg0: Internal.BlockState_): boolean;
        setLightEmission(v: number): void;
        static getFaceProperty(arg0: Internal.Direction_): Internal.BooleanProperty;
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
        isValidStateForPlacement(arg0: Internal.BlockGetter_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        canHarvestBlock(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Player_): boolean;
        isValidSpawn(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.SpawnPlacements$Type_, arg4: Internal.EntityType_<any>): boolean;
        getToolModifiedState(arg0: Internal.BlockState_, arg1: Internal.UseOnContext_, arg2: Internal.ToolAction_, arg3: boolean): Internal.BlockState;
        shouldCheckWeakPower(arg0: Internal.BlockState_, arg1: Internal.SignalGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getFlammability(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): number;
        arch$holder(): Internal.Holder<Internal.Block>;
        static hasFace(arg0: Internal.BlockState_, arg1: Internal.Direction_): boolean;
        static canAttachTo(arg0: Internal.BlockGetter_, arg1: Internal.Direction_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
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
        static pack(arg0: Internal.Collection_<Internal.Direction>): number;
        getBlockStates(): Internal.List<Internal.BlockState>;
        static availableFaces(arg0: Internal.BlockState_): Internal.Set<Internal.Direction>;
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
        abstract getSpreader(): Internal.MultifaceSpreader;
        canDropFromExplosion(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Explosion_): boolean;
        isConduitFrame(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): boolean;
        addRunningEffects(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Entity_): boolean;
        getEnchantPowerBonus(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_): number;
        isFaceSupported(arg0: Internal.Direction_): boolean;
        getStateForPlacement(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): Internal.BlockState;
        getSoundType(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.Entity_): SoundType;
        isBurning(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_): boolean;
        static unpack(arg0: number): Internal.Set<Internal.Direction>;
        set lightEmission(v: number)
        set destroySpeed(v: number)
        get blockStates(): Internal.List<Internal.BlockState>
        set requiresTool(v: boolean)
        get mod(): string
        get spreader(): Internal.MultifaceSpreader
        static readonly DIRECTIONS: Internal.Direction[];
    }
    type MultifaceBlock_ = MultifaceBlock;
    class ThornwoodBranchBlock extends Internal.Block implements Internal.SimpleWaterloggedBlock {
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
        static readonly FACING: Internal.DirectionProperty;
    }
    type ThornwoodBranchBlock_ = ThornwoodBranchBlock;
    class ScreenEvent$CharacterTyped extends Internal.ScreenEvent {
        constructor()
        constructor(arg0: Internal.Screen_, arg1: string, arg2: number)
        getModifiers(): number;
        getCodePoint(): string;
        get modifiers(): number
        get codePoint(): string
    }
    type ScreenEvent$CharacterTyped_ = ScreenEvent$CharacterTyped;
    class Explosion {
        constructor(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Explosion$BlockInteraction_)
        constructor(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Explosion$BlockInteraction_, arg8: Internal.List_<BlockPos>)
        constructor(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.List_<BlockPos>)
        constructor(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: DamageSource_, arg3: Internal.ExplosionDamageCalculator_, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: Internal.Explosion$BlockInteraction_)
        getDamageSource(): DamageSource;
        getIndirectSourceEntity(): Internal.LivingEntity;
        getPosition(): Vec3d;
        getDirectSourceEntity(): Internal.Entity;
        getExploder(): Internal.Entity;
        finalizeExplosion(arg0: boolean): void;
        explode(): void;
        interactsWithBlocks(): boolean;
        static getSeenPercent(arg0: Vec3d_, arg1: Internal.Entity_): number;
        getToBlow(): Internal.List<BlockPos>;
        clearToBlow(): void;
        static addBlockDrops(arg0: Internal.ObjectArrayList_<com.mojang.datafixers.util.Pair<Internal.ItemStack, BlockPos>>, arg1: Internal.ItemStack_, arg2: BlockPos_): void;
        getHitPlayers(): Internal.Map<Player, Vec3d>;
        get damageSource(): DamageSource
        get indirectSourceEntity(): Internal.LivingEntity
        get position(): Vec3d
        get directSourceEntity(): Internal.Entity
        get exploder(): Internal.Entity
        get toBlow(): Internal.List<BlockPos>
        get hitPlayers(): Internal.Map<Player, Vec3d>
        readonly z: number;
        readonly blockInteraction: Internal.Explosion$BlockInteraction;
        radius: number;
        readonly level: Internal.Level;
        source: Internal.Entity;
        damageSource: DamageSource;
        readonly damageCalculator: Internal.ExplosionDamageCalculator;
        readonly x: number;
        readonly y: number;
    }
    type Explosion_ = Explosion;
    interface LongConsumer {
        andThen(arg0: Internal.LongConsumer_): this;
        abstract accept(arg0: number): void;
        (arg0: number): void;
    }
    type LongConsumer_ = LongConsumer;
    abstract class Model {
        constructor(arg0: Internal.Function_<ResourceLocation, Internal.RenderType>)
        renderType(arg0: ResourceLocation_): Internal.RenderType;
        abstract renderToBuffer(arg0: Internal.PoseStack_, arg1: Internal.VertexConsumer_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        readonly renderType: Internal.Function<ResourceLocation, Internal.RenderType>;
    }
    type Model_ = Model;
    class ClientboundContainerSetContentPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number, arg1: number, arg2: Internal.NonNullList_<Internal.ItemStack>, arg3: Internal.ItemStack_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getStateId(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getCarriedItem(): Internal.ItemStack;
        getContainerId(): number;
        isSkippable(): boolean;
        getItems(): Internal.List<Internal.ItemStack>;
        get stateId(): number
        get carriedItem(): Internal.ItemStack
        get containerId(): number
        get skippable(): boolean
        get items(): Internal.List<Internal.ItemStack>
    }
    type ClientboundContainerSetContentPacket_ = ClientboundContainerSetContentPacket;
    class DamagePredicateBuilder {
        constructor()
        /**
         * Checks if the damage was successfully blocked.
        */
        isBlocked(arg0: boolean): void;
        /**
         * Checks the type of damage done.
        */
        setTypeByPredicate(arg0: Internal.DamageSourcePredicate_): void;
        /**
         * Checks the amount of incoming damage before damage reduction.
        */
        setDealtDamage(arg0: Bounds_): void;
        /**
         * Checks the type of damage done.
        */
        setType(arg0: Internal.Consumer_<Internal.DamageSourcePredicateBuilder>): void;
        /**
         * Checks the entity that was the source of the damage (for example: The skeleton that shot the arrow).
        */
        setSource(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>): void;
        /**
         * Checks the amount of incoming damage after damage reduction.
        */
        setTakenDamage(arg0: Bounds_): void;
        /**
         * Checks the entity that was the source of the damage (for example: The skeleton that shot the arrow).
        */
        SetSourceByPredicate(arg0: Internal.EntityPredicate_): void;
        /**
         * Checks the type of damage done.
        */
        set typeByPredicate(arg0: Internal.DamageSourcePredicate_)
        /**
         * Checks the amount of incoming damage before damage reduction.
        */
        set dealtDamage(arg0: Bounds_)
        /**
         * Checks the type of damage done.
        */
        set type(arg0: Internal.Consumer_<Internal.DamageSourcePredicateBuilder>)
        /**
         * Checks the entity that was the source of the damage (for example: The skeleton that shot the arrow).
        */
        set source(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>)
        /**
         * Checks the amount of incoming damage after damage reduction.
        */
        set takenDamage(arg0: Bounds_)
    }
    type DamagePredicateBuilder_ = DamagePredicateBuilder;
    class Class <T> implements Internal.Constable, Internal.Type, Internal.TypeDescriptor$OfField<typeof any>, Internal.Serializable, Internal.AnnotatedElement, Internal.GenericDeclaration {
        isPrimitive(): boolean;
        getTypeName(): string;
        isAnnotation(): boolean;
        getConstructors(): Internal.Constructor<any>[];
        isInstance(arg0: any): boolean;
        getModifiers(): number;
        static forName(arg0: Internal.Module_, arg1: string): typeof any;
        getDeclaredMethod(arg0: string, ...arg1: typeof any[]): Internal.Method;
        getEnumConstants(): T[];
        getAnnotation<A extends Internal.Annotation>(arg0: A): A;
        getAnnotatedSuperclass(): Internal.AnnotatedType;
        getRecordComponents(): any[];
        getDeclaredField(arg0: string): Internal.Field;
        getClassLoader(): Internal.ClassLoader;
        getPackageName(): string;
        static forName(arg0: string): typeof any;
        getAnnotatedInterfaces(): Internal.AnnotatedType[];
        getDeclaredFields(): Internal.Field[];
        asSubclass<U>(arg0: U): U;
        getResourceAsStream(arg0: string): Internal.InputStream;
        arrayType(): Internal.TypeDescriptor$OfField<any>;
        isLocalClass(): boolean;
        getDeclaredAnnotationsByType<A extends Internal.Annotation>(arg0: A): A[];
        getProtectionDomain(): Internal.ProtectionDomain;
        cast(arg0: any): T;
        getGenericSuperclass(): Internal.Type;
        isAnonymousClass(): boolean;
        getDeclaredConstructor(...arg0: typeof any[]): Internal.Constructor<T>;
        getMethods(): Internal.Method[];
        isNestmateOf(arg0: typeof any): boolean;
        isInterface(): boolean;
        getSuperclass(): this;
        getField(arg0: string): Internal.Field;
        getTypeParameters(): any[];
        getModule(): Internal.Module;
        toGenericString(): string;
        getFields(): Internal.Field[];
        isAssignableFrom(arg0: typeof any): boolean;
        getComponentType(): typeof any;
        componentType(): Internal.TypeDescriptor$OfField<any>;
        getGenericInterfaces(): Internal.Type[];
        getEnclosingMethod(): Internal.Method;
        getEnclosingConstructor(): Internal.Constructor<any>;
        getNestMembers(): typeof any[];
        descriptorString(): string;
        /**
         * @deprecated
        */
        newInstance(): T;
        isRecord(): boolean;
        isArray(): boolean;
        getName(): string;
        describeConstable(): Internal.Optional<Internal.ClassDesc>;
        isSealed(): boolean;
        getDeclaredAnnotations(): Internal.Annotation[];
        isAnnotationPresent(arg0: typeof Internal.Annotation): boolean;
        isMemberClass(): boolean;
        getDeclaredConstructors(): Internal.Constructor<any>[];
        getCanonicalName(): string;
        getClasses(): typeof any[];
        isHidden(): boolean;
        isSynthetic(): boolean;
        getEnclosingClass(): typeof any;
        getInterfaces(): typeof any[];
        getSimpleName(): string;
        getMethod(arg0: string, ...arg1: typeof any[]): Internal.Method;
        getDeclaringClass(): typeof any;
        desiredAssertionStatus(): boolean;
        getSigners(): any[];
        static forName(arg0: string, arg1: boolean, arg2: Internal.ClassLoader_): typeof any;
        getPackage(): Internal.Package;
        getDeclaredMethods(): Internal.Method[];
        getConstructor(...arg0: typeof any[]): Internal.Constructor<T>;
        isEnum(): boolean;
        getPermittedSubclasses(): typeof any[];
        getAnnotations(): Internal.Annotation[];
        getNestHost(): typeof any;
        getDeclaredAnnotation<A extends Internal.Annotation>(arg0: A): A;
        getResource(arg0: string): Internal.URL;
        getDeclaredClasses(): typeof any[];
        getAnnotationsByType<A extends Internal.Annotation>(arg0: A): A[];
        get primitive(): boolean
        get typeName(): string
        get annotation(): boolean
        get constructors(): Internal.Constructor<any>[]
        get modifiers(): number
        get enumConstants(): T[]
        get annotatedSuperclass(): Internal.AnnotatedType
        get recordComponents(): any[]
        get classLoader(): Internal.ClassLoader
        get packageName(): string
        get annotatedInterfaces(): Internal.AnnotatedType[]
        get declaredFields(): Internal.Field[]
        get localClass(): boolean
        get protectionDomain(): Internal.ProtectionDomain
        get genericSuperclass(): Internal.Type
        get anonymousClass(): boolean
        get methods(): Internal.Method[]
        get "interface"(): boolean
        get superclass(): T
        get typeParameters(): any[]
        get module(): Internal.Module
        get fields(): Internal.Field[]
        get componentType(): typeof any
        get genericInterfaces(): Internal.Type[]
        get enclosingMethod(): Internal.Method
        get enclosingConstructor(): Internal.Constructor<any>
        get nestMembers(): typeof any[]
        get record(): boolean
        get array(): boolean
        get name(): string
        get sealed(): boolean
        get declaredAnnotations(): Internal.Annotation[]
        get memberClass(): boolean
        get declaredConstructors(): Internal.Constructor<any>[]
        get canonicalName(): string
        get classes(): typeof any[]
        get hidden(): boolean
        get synthetic(): boolean
        get enclosingClass(): typeof any
        get interfaces(): typeof any[]
        get simpleName(): string
        get declaringClass(): typeof any
        get signers(): any[]
        get "package"(): Internal.Package
        get declaredMethods(): Internal.Method[]
        get enum(): boolean
        get permittedSubclasses(): typeof any[]
        get annotations(): Internal.Annotation[]
        get nestHost(): typeof any
        get declaredClasses(): typeof any[]
    }
    type Class_<T> = Class<T>;
    interface IVanillaRecipeFactory {
        /**
         * @deprecated
        */
        abstract createAnvilRecipe(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.ItemStack>, arg2: Internal.List_<Internal.ItemStack>): Internal.IJeiAnvilRecipe;
        abstract createBrewingRecipe(arg0: Internal.List_<Internal.ItemStack>, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_, arg3: ResourceLocation_): Internal.IJeiBrewingRecipe;
        abstract createAnvilRecipe(arg0: Internal.List_<Internal.ItemStack>, arg1: Internal.List_<Internal.ItemStack>, arg2: Internal.List_<Internal.ItemStack>, arg3: ResourceLocation_): Internal.IJeiAnvilRecipe;
        /**
         * @deprecated
        */
        abstract createBrewingRecipe(arg0: Internal.List_<Internal.ItemStack>, arg1: Internal.ItemStack_, arg2: Internal.ItemStack_): Internal.IJeiBrewingRecipe;
        /**
         * @deprecated
        */
        abstract createBrewingRecipe(arg0: Internal.List_<Internal.ItemStack>, arg1: Internal.List_<Internal.ItemStack>, arg2: Internal.ItemStack_): Internal.IJeiBrewingRecipe;
        abstract createAnvilRecipe(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.ItemStack>, arg2: Internal.List_<Internal.ItemStack>, arg3: ResourceLocation_): Internal.IJeiAnvilRecipe;
        abstract createBrewingRecipe(arg0: Internal.List_<Internal.ItemStack>, arg1: Internal.List_<Internal.ItemStack>, arg2: Internal.ItemStack_, arg3: ResourceLocation_): Internal.IJeiBrewingRecipe;
        /**
         * @deprecated
        */
        abstract createAnvilRecipe(arg0: Internal.List_<Internal.ItemStack>, arg1: Internal.List_<Internal.ItemStack>, arg2: Internal.List_<Internal.ItemStack>): Internal.IJeiAnvilRecipe;
    }
    type IVanillaRecipeFactory_ = IVanillaRecipeFactory;
    class HeightRangePlacement extends Internal.PlacementModifier {
        static uniform(arg0: Internal.VerticalAnchor_, arg1: Internal.VerticalAnchor_): Internal.HeightRangePlacement;
        static triangle(arg0: Internal.VerticalAnchor_, arg1: Internal.VerticalAnchor_): Internal.HeightRangePlacement;
        static of(arg0: Internal.HeightProvider_): Internal.HeightRangePlacement;
        static readonly CODEC: Internal.Codec<Internal.HeightRangePlacement>;
    }
    type HeightRangePlacement_ = HeightRangePlacement;
    class LightLevelCondition extends Internal.BlockCondition<any> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type LightLevelCondition_ = LightLevelCondition;
    class ServerboundCommandSuggestionPacket implements Internal.Packet<Internal.ServerGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: number, arg1: string)
        handle(arg0: Internal.PacketListener_): void;
        getCommand(): string;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ServerGamePacketListener_): void;
        isSkippable(): boolean;
        getId(): number;
        get command(): string
        get skippable(): boolean
        get id(): number
    }
    type ServerboundCommandSuggestionPacket_ = ServerboundCommandSuggestionPacket;
    class StructureVoidBlock extends Internal.Block {
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
    type StructureVoidBlock_ = StructureVoidBlock;
    interface Shapes$DoubleLineConsumer {
        abstract consume(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        (arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
    }
    type Shapes$DoubleLineConsumer_ = Shapes$DoubleLineConsumer;
    class ScreenEvent$Closing extends Internal.ScreenEvent {
        constructor()
        constructor(arg0: Internal.Screen_)
    }
    type ScreenEvent$Closing_ = ScreenEvent$Closing;
    class KubeJSIngredientSerializer <T extends Internal.KubeJSIngredient> extends Internal.Record implements Internal.IIngredientSerializer<T> {
        constructor(fromJson: Internal.Function_<Internal.JsonObject, T>, fromNet: Internal.Function_<Internal.FriendlyByteBuf, T>)
        fromNet(): Internal.Function<Internal.FriendlyByteBuf, T>;
        fromJson(): Internal.Function<Internal.JsonObject, T>;
        parse(arg0: Internal.JsonObject_): Internal.Ingredient;
        parse(buf: Internal.FriendlyByteBuf_): T;
        write(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Ingredient_): void;
        write(buf: Internal.FriendlyByteBuf_, ingredient: T): void;
    }
    type KubeJSIngredientSerializer_<T extends Internal.KubeJSIngredient> = KubeJSIngredientSerializer<T>;
    abstract class Team {
        constructor()
        abstract getDeathMessageVisibility(): Internal.Team$Visibility;
        abstract isAllowFriendlyFire(): boolean;
        abstract getFormattedName(arg0: Internal.Component_): Internal.MutableComponent;
        abstract getName(): string;
        isAlliedTo(arg0: Internal.Team_): boolean;
        abstract getColor(): Internal.ChatFormatting;
        abstract getNameTagVisibility(): Internal.Team$Visibility;
        abstract getCollisionRule(): Internal.Team$CollisionRule;
        abstract canSeeFriendlyInvisibles(): boolean;
        abstract getPlayers(): Internal.Collection<string>;
        get deathMessageVisibility(): Internal.Team$Visibility
        get allowFriendlyFire(): boolean
        get name(): string
        get color(): Internal.ChatFormatting
        get nameTagVisibility(): Internal.Team$Visibility
        get collisionRule(): Internal.Team$CollisionRule
        get players(): Internal.Collection<string>
    }
    type Team_ = Team;
    class NormalNoise {
        parameters(): Internal.NormalNoise$NoiseParameters;
        getValue(arg0: number, arg1: number, arg2: number): number;
        static create(arg0: Internal.RandomSource_, arg1: Internal.NormalNoise$NoiseParameters_): Internal.NormalNoise;
        maxValue(): number;
        /**
         * @deprecated
        */
        static createLegacyNetherBiome(arg0: Internal.RandomSource_, arg1: Internal.NormalNoise$NoiseParameters_): Internal.NormalNoise;
        static create(arg0: Internal.RandomSource_, arg1: number, ...arg2: number[]): Internal.NormalNoise;
        parityConfigString(arg0: Internal.StringBuilder_): void;
    }
    type NormalNoise_ = NormalNoise;
    class CommentedFileConfigBuilder extends Internal.GenericBuilder<Internal.CommentedConfig, Internal.CommentedFileConfig> {
    }
    type CommentedFileConfigBuilder_ = CommentedFileConfigBuilder;
    interface IActiveCooldownPowerConfiguration extends Internal.ICooldownPowerConfiguration {
        isConfigurationValid(): boolean;
        abstract hudRender(): Internal.HudRender;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        abstract duration(): number;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        getMissingBinds(): Internal.List<string>;
        holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        abstract key(): Internal.IActivePower$Key;
        populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
    }
    type IActiveCooldownPowerConfiguration_ = IActiveCooldownPowerConfiguration;
    interface FormattedText$ContentConsumer <T> {
        abstract accept(arg0: string): Internal.Optional<T>;
        (arg0: string): Internal.Optional_<T>;
    }
    type FormattedText$ContentConsumer_<T> = FormattedText$ContentConsumer<T>;
    interface Serializer$Struct extends Internal.Endable {
        abstract end(): void;
        close(): void;
        abstract field<F>(arg0: string, arg1: io.wispforest.endec.SerializationContext_, arg2: Internal.Endec_<F>, arg3: F): this;
    }
    type Serializer$Struct_ = Serializer$Struct;
    abstract class AbstractClientPlayer extends Player implements Internal.PlayerAttackAnimatable, Internal.ClientPlayerKJS {
        constructor(arg0: Internal.ClientLevel_, arg1: Internal.GameProfile_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        getStats(): Internal.PlayerStatsJS;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        isCapeLoaded(): boolean;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        getEntityReach(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        setY(y: number): void;
        handler$dlm000$irons_spellbooks$isCapeLoaded(arg0: Internal.CallbackInfoReturnable_<any>): void;
        sdl$isDynamicLightEnabled(): boolean;
        setSelectedSlot(index: number): void;
        jumpInFluid(arg0: Internal.FluidType_): void;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        isSkinLoaded(): boolean;
        getCustomName(): Internal.Component;
        damageHeldItem(): void;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setMotionZ(z: number): void;
        attack(hp: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAnimation(): Internal.AnimationApplier;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        static registerSkinTexture(arg0: ResourceLocation_, arg1: string): void;
        getFoodLevel(): number;
        setMaxHealth(hp: number): void;
        getFacing(): Internal.Direction;
        setSaturation(saturation: number): void;
        setMainHandItem(item: Internal.ItemStack_): void;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        getXp(): number;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        canReachRaw(arg0: BlockPos_, arg1: number): boolean;
        swing(hand: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        isMiningBlock(): boolean;
        getModelName(): string;
        handler$dlm000$irons_spellbooks$getCloakTextureLocation(arg0: Internal.CallbackInfoReturnable_<any>): void;
        isUndead(): boolean;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        isAmbientCreature(): boolean;
        getStepHeight(): number;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        updateAnimationsOnTick(): void;
        getFieldOfViewModifier(): number;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        setEquipment(slot: Internal.EquipmentSlot_, item: Internal.ItemStack_): void;
        isCloseEnough(arg0: Internal.Entity_, arg1: number): boolean;
        getName(): Internal.Component;
        boostElytraFlight(): void;
        setMouseItem(item: Internal.ItemStack_): void;
        setTotalMovementSpeedMultiplier(speed: number): void;
        sendData(channel: string, data: Internal.CompoundTag_): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        give(item: Internal.ItemStack_): void;
        isInFluid(fluidProp: Internal.FluidProperties_): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        setOffHandItem(item: Internal.ItemStack_): void;
        setDefaultMovementSpeed(speed: number): void;
        spawn(): void;
        getMainHandItem(): Internal.ItemStack;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getPlayerInfo(): Internal.PlayerInfo;
        canEntityBeSeen(entity: Internal.LivingEntity_): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        getScriptType(): Internal.ScriptType;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        getHeadArmorItem(): Internal.ItemStack;
        setFeetArmorItem(item: Internal.ItemStack_): void;
        isSelf(): boolean;
        getParts(): Internal.PartEntity<any>[];
        hasCustomOutlineRendering(arg0: Player_): boolean;
        canReach(arg0: Vec3d_, arg1: number): boolean;
        deserializeNBT(arg0: Internal.Tag_): void;
        static get(arg0: any): Internal.LivingEntityAccess;
        setStatusMessage(message: Internal.Component_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getSaturation(): number;
        getAttributeBaseValue(attribute: Internal.Attribute_): number;
        canDrownInFluidType(arg0: Internal.FluidType_): boolean;
        isFake(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        static getSkinLocation(arg0: string): ResourceLocation;
        addFood(f: number, m: number): void;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        swing(): void;
        canStartSwimming(): boolean;
        getXpLevel(): number;
        canReach(arg0: BlockPos_, arg1: number): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        hasCustomName(): boolean;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        stopAttackAnimation(length: number): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        paint(tag: Internal.CompoundTag_): void;
        isInFluid(fluidState: Internal.FluidState_): boolean;
        getBlockReach(): number;
        getDeltaMovementLerped(arg0: number): Vec3d;
        getDisplayName(): Internal.Component;
        setPosition(block: Internal.BlockContainerJS_): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        isElytraLoaded(): boolean;
        notify(title: Internal.Component_, text: Internal.Component_): void;
        getTeamId(): string;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        setXpLevel(l: number): void;
        canRiderInteract(): boolean;
        setFoodLevel(foodLevel: number): void;
        addXPLevels(l: number): void;
        shouldRiderSit(): boolean;
        getLegsArmorItem(): Internal.ItemStack;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        canReach(arg0: Internal.Entity_, arg1: number): boolean;
        getReachDistance(): number;
        getMotionX(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        isWaterCreature(): boolean;
        sendData(channel: string): void;
        getSelectedSlot(): number;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        getOpenInventory(): Internal.AbstractContainerMenu;
        isFrame(): boolean;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        self(): Internal.LivingEntity;
        setXp(xp: number): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getDefaultMovementSpeed(): number;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        setRotation(yaw: number, pitch: number): void;
        notify(notification: Notification_): void;
        isMonster(): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        getMotionY(): number;
        addExhaustion(exhaustion: number): void;
        getPassengers(): Internal.EntityArrayList;
        giveInHand(item: Internal.ItemStack_): void;
        addXP(xp: number): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        canReachRaw(arg0: Internal.Entity_, arg1: number): boolean;
        getFeetArmorItem(): Internal.ItemStack;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        getCloakTextureLocation(): ResourceLocation;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        setMovementSpeedAddition(speed: number): void;
        localvar$don000$unionlib$call_inject6(f: number): number;
        modifyAttribute(attribute: Internal.Attribute_, identifier: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        sendInventoryUpdate(): void;
        playAttackAnimation(name: string, animatedHand: Internal.AnimatedHand_, length: number, upswing: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getChestArmorItem(): Internal.ItemStack;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number): void;
        getMotionZ(): number;
        isLeftHanded(): boolean;
        tell(message: Internal.Component_): void;
        getMouseItem(): Internal.ItemStack;
        setZ(z: number): void;
        getSkinTextureLocation(): ResourceLocation;
        getElytraTextureLocation(): ResourceLocation;
        getDistanceSq(pos: BlockPos_): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getProfile(): Internal.GameProfile;
        setHeadArmorItem(item: Internal.ItemStack_): void;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        addItemCooldown(item: Internal.Item_, ticks: number): void;
        gatherDamagePowers(arg0: Internal.Entity_, arg1: DamageSource_, arg2: number): void;
        get stats(): Internal.PlayerStatsJS
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get capeLoaded(): boolean
        get entityReach(): number
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        set selectedSlot(index: number)
        get totalMovementSpeed(): number
        get skinLoaded(): boolean
        get customName(): Internal.Component
        set motionZ(z: number)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get animation(): Internal.AnimationApplier
        get foodLevel(): number
        set maxHealth(hp: number)
        get facing(): Internal.Direction
        set saturation(saturation: number)
        set mainHandItem(item: Internal.ItemStack_)
        get item(): Internal.ItemStack
        set x(x: number)
        get xp(): number
        get miningBlock(): boolean
        get modelName(): string
        get undead(): boolean
        get ambientCreature(): boolean
        get stepHeight(): number
        get fieldOfViewModifier(): number
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get name(): Internal.Component
        set mouseItem(item: Internal.ItemStack_)
        set totalMovementSpeedMultiplier(speed: number)
        set offHandItem(item: Internal.ItemStack_)
        set defaultMovementSpeed(speed: number)
        get mainHandItem(): Internal.ItemStack
        get playerInfo(): Internal.PlayerInfo
        get scriptType(): Internal.ScriptType
        get multipartEntity(): boolean
        get headArmorItem(): Internal.ItemStack
        set feetArmorItem(item: Internal.ItemStack_)
        get self(): boolean
        get parts(): Internal.PartEntity<any>[]
        set statusMessage(message: Internal.Component_)
        get saturation(): number
        get fake(): boolean
        get xpLevel(): number
        get living(): boolean
        get blockReach(): number
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        get elytraLoaded(): boolean
        get teamId(): string
        set xpLevel(l: number)
        set foodLevel(foodLevel: number)
        get legsArmorItem(): Internal.ItemStack
        get reachDistance(): number
        get motionX(): number
        get waterCreature(): boolean
        get selectedSlot(): number
        get potionEffects(): Internal.EntityPotionEffectsJS
        get openInventory(): Internal.AbstractContainerMenu
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        set xp(xp: number)
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        get monster(): boolean
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get motionY(): number
        get passengers(): Internal.EntityArrayList
        get feetArmorItem(): Internal.ItemStack
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        get cloakTextureLocation(): ResourceLocation
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        set movementSpeedAddition(speed: number)
        get chestArmorItem(): Internal.ItemStack
        get motionZ(): number
        get leftHanded(): boolean
        get mouseItem(): Internal.ItemStack
        set z(z: number)
        get skinTextureLocation(): ResourceLocation
        get elytraTextureLocation(): ResourceLocation
        get profile(): Internal.GameProfile
        set headArmorItem(item: Internal.ItemStack_)
        elytraRotX: number;
        elytraRotY: number;
        elytraRotZ: number;
        deltaMovementOnPreviousTick: Vec3d;
        readonly clientLevel: Internal.ClientLevel;
    }
    type AbstractClientPlayer_ = AbstractClientPlayer;
    interface BuilderFactory {
        abstract createBuilder(arg0: ResourceLocation_): Internal.BuilderBase<any>;
        (arg0: ResourceLocation): Internal.BuilderBase_<any>;
    }
    type BuilderFactory_ = BuilderFactory;
    class ZoneOffsetTransition implements Internal.Comparable<Internal.ZoneOffsetTransition>, Internal.Serializable {
        getOffsetAfter(): Internal.ZoneOffset;
        isValidOffset(arg0: Internal.ZoneOffset_): boolean;
        compareTo(arg0: Internal.ZoneOffsetTransition_): number;
        isGap(): boolean;
        compareTo(arg0: any): number;
        static of(arg0: Internal.LocalDateTime_, arg1: Internal.ZoneOffset_, arg2: Internal.ZoneOffset_): Internal.ZoneOffsetTransition;
        isOverlap(): boolean;
        getDateTimeAfter(): Internal.LocalDateTime;
        getOffsetBefore(): Internal.ZoneOffset;
        getDuration(): Duration;
        toEpochSecond(): number;
        getDateTimeBefore(): Internal.LocalDateTime;
        getInstant(): Internal.Instant;
        get offsetAfter(): Internal.ZoneOffset
        get gap(): boolean
        get overlap(): boolean
        get dateTimeAfter(): Internal.LocalDateTime
        get offsetBefore(): Internal.ZoneOffset
        get duration(): Duration
        get dateTimeBefore(): Internal.LocalDateTime
        get instant(): Internal.Instant
    }
    type ZoneOffsetTransition_ = ZoneOffsetTransition;
    /**
     * Invoked when a player opens a chest.
     * 
     * Same as `PlayerEvents.inventoryOpened`, but only for chests.
    */
    class ChestEventJS extends Internal.InventoryEventJS {
        constructor(player: Player_, menu: Internal.AbstractContainerMenu_)
        /**
         * Gets the chest inventory.
        */
        getInventory(): Internal.Container;
        /**
         * Gets the player that opened or closed the container.
        */
        getEntity(): Internal.LivingEntity;
        /**
         * Gets the chest block.
        */
        getBlock(): Internal.BlockContainerJS;
        /**
         * Gets the chest inventory.
        */
        get inventory(): Internal.Container
        /**
         * Gets the player that opened or closed the container.
        */
        get entity(): Internal.LivingEntity
        /**
         * Gets the chest block.
        */
        get block(): Internal.BlockContainerJS
    }
    type ChestEventJS_ = ChestEventJS;
    interface SecureJar$ModuleDataProvider {
        abstract name(): string;
        abstract uri(): Internal.URI;
        abstract verifyAndGetSigners(arg0: string, arg1: number[]): any[];
        abstract descriptor(): Internal.ModuleDescriptor;
        abstract open(arg0: string): Internal.Optional<Internal.InputStream>;
        abstract findFile(arg0: string): Internal.Optional<Internal.URI>;
        abstract getManifest(): Internal.Manifest;
        get manifest(): Internal.Manifest
    }
    type SecureJar$ModuleDataProvider_ = SecureJar$ModuleDataProvider;
    class Giant extends Internal.Monster {
        constructor(arg0: Internal.EntityType_<Internal.Giant>, arg1: Internal.Level_)
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
    type Giant_ = Giant;
    interface ConfigFormat <C extends Internal.Config> {
        abstract createConfig(arg0: Internal.Supplier_<Internal.Map<string, any>>): C;
        abstract supportsComments(): boolean;
        createConcurrentConfig(): C;
        initEmptyFile(arg0: Internal.File_): void;
        abstract createWriter(): Internal.ConfigWriter;
        initEmptyFile(arg0: Internal.Path_): void;
        createConfig(): C;
        isInMemory(): boolean;
        abstract createParser(): Internal.ConfigParser<C>;
        supportsType(arg0: typeof any): boolean;
        initEmptyFile(arg0: Internal.WriterSupplier_): void;
        get inMemory(): boolean
    }
    type ConfigFormat_<C extends Internal.Config> = ConfigFormat<C>;
    class FluidContainerList implements Internal.Iterable<Internal.FluidContainerList$Category> {
        constructor()
        constructor(categoryList: Internal.List_<Internal.FluidContainerList$Category>)
        getCategoryFromFilled(filledContainer: Internal.Item_): Internal.Optional<Internal.FluidContainerList$Category>;
        getCategoryFromEmpty(emptyContainer: Internal.Item_): Internal.Optional<Internal.FluidContainerList$Category>;
        getPossibleFilled(): Internal.Collection<Internal.Item>;
        getCategories(): Internal.Collection<Internal.FluidContainerList$Category>;
        getEmpty(filledContainer: Internal.Item_): Internal.Optional<Internal.Item>;
        getPossibleEmpty(): Internal.Collection<Internal.Item>;
        getFilled(emptyContainer: Internal.Item_): Internal.Optional<Internal.Item>;
        iterator(): Internal.Iterator<Internal.FluidContainerList$Category>;
        spliterator(): Internal.Spliterator<Internal.FluidContainerList$Category>;
        forEach(arg0: Internal.Consumer_<Internal.FluidContainerList$Category>): void;
        get possibleFilled(): Internal.Collection<Internal.Item>
        get categories(): Internal.Collection<Internal.FluidContainerList$Category>
        get possibleEmpty(): Internal.Collection<Internal.Item>
    }
    type FluidContainerList_ = FluidContainerList;
    class TridentItemBuilder extends Internal.ProjectileItemBuilder {
        constructor(i: ResourceLocation_, parent: Internal.BuilderBase_<any>)
        createObject(): any;
        /**
         * Sets the sound event for the riptide level 2
        */
        setRiptide2Sound(riptide2Sound: Internal.SoundEvent_): void;
        /**
         * Sets the sound event for throwing the item
        */
        setThrowSound(throwSound: Internal.SoundEvent_): void;
        /**
         * Sets the sound event for the riptide level 3
        */
        setRiptide3Sound(riptide3Sound: Internal.SoundEvent_): void;
        /**
         * Sets the sound event for the riptide level 1
        */
        setRiptide1Sound(riptide1Sound: Internal.SoundEvent_): void;
        /**
         * Sets the sound event for the riptide level 2
        */
        set riptide2Sound(riptide2Sound: Internal.SoundEvent_)
        /**
         * Sets the sound event for throwing the item
        */
        set throwSound(throwSound: Internal.SoundEvent_)
        /**
         * Sets the sound event for the riptide level 3
        */
        set riptide3Sound(riptide3Sound: Internal.SoundEvent_)
        /**
         * Sets the sound event for the riptide level 1
        */
        set riptide1Sound(riptide1Sound: Internal.SoundEvent_)
    }
    type TridentItemBuilder_ = TridentItemBuilder;
    interface ObjLongConsumer <T> {
        abstract accept(arg0: T, arg1: number): void;
        (arg0: T, arg1: number): void;
    }
    type ObjLongConsumer_<T> = ObjLongConsumer<T>;
    class BossEventTrigger$Builder extends Internal.BaseTriggerInstanceBuilder {
        constructor()
        wrapEntity(arg0: Internal.EntityPredicate_): Internal.ContextAwarePredicate;
        /**
         * Check play boss music.
        */
        setPlayBossMusic(arg0: boolean): void;
        /**
         * Match 'translation key' or 'literal text' of boss bar.
         * 
         * If set to "", it will not check. Defaults to "".
        */
        setKey(arg0: string): void;
        toEntity(arg0: Internal.EntityType_<any>): Internal.EntityPredicate;
        wrapEntity(arg0: Internal.EntityType_<any>): Internal.ContextAwarePredicate;
        wrapEntity(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): Internal.ContextAwarePredicate;
        /**
         * Check darken screen.
        */
        setDarkenScreen(arg0: boolean): void;
        /**
         * Check create world fog.
        */
        setCreateWorldFog(arg0: boolean): void;
        /**
         * Check play boss music.
        */
        set playBossMusic(arg0: boolean)
        /**
         * Match 'translation key' or 'literal text' of boss bar.
         * 
         * If set to "", it will not check. Defaults to "".
        */
        set key(arg0: string)
        /**
         * Check darken screen.
        */
        set darkenScreen(arg0: boolean)
        /**
         * Check create world fog.
        */
        set createWorldFog(arg0: boolean)
    }
    type BossEventTrigger$Builder_ = BossEventTrigger$Builder;
    class CharStream {
        constructor(c: string[])
        nextIf(match: string): boolean;
        peek(): string;
        next(): string;
        peek(ahead: number): string;
        position: number;
        skipWhitespace: boolean;
        readonly chars: string[];
    }
    type CharStream_ = CharStream;
    class ItemStack extends Internal.CapabilityProvider<Internal.ItemStack> implements Internal.ItemStackExtensions, Internal.ItemStackKJS, Internal.ItemStackNBTWeaponAttributes, Internal.AccessoryStack, Internal.FabricItemStack, Internal.CachedObject$CachedObjectSource, Internal.IForgeItemStack {
        constructor(arg0: Internal.Holder_<Internal.Item>)
        constructor(arg0: Internal.Holder_<Internal.Item>, arg1: number)
        constructor(arg0: Internal.ItemLike_)
        constructor(arg0: Internal.ItemLike_, arg1: number, arg2: Internal.CompoundTag_)
        constructor(arg0: Internal.ItemLike_, arg1: number)
        getTags(): Internal.Collection<ResourceLocation>;
        getDrinkingSound(): Internal.SoundEvent;
        self(): this;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_): boolean;
        getBaseRepairCost(): number;
        elytraFlightTick(arg0: Internal.LivingEntity_, arg1: number): boolean;
        getFrame(): Internal.ItemFrame;
        getEnchantments(): Internal.Map<string, number>;
        static appendEnchantmentNames(arg0: Internal.List_<Internal.Component>, arg1: Internal.ListTag_): void;
        static matches(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        hasAdventureModeBreakTagForBlock(arg0: Internal.Registry_<Internal.Block>, arg1: Internal.BlockInWorld_): boolean;
        handler$dlh000$irons_spellbooks$init(arg0: Internal.ItemLike_, arg1: number, arg2: Internal.CompoundTag_, arg3: Internal.CallbackInfo_): void;
        makesPiglinsNeutral(arg0: Internal.LivingEntity_): boolean;
        hurtEnemy(arg0: Internal.LivingEntity_, arg1: Player_): void;
        getRarity(): Internal.Rarity;
        finishUsingItem(arg0: Internal.Level_, arg1: Internal.LivingEntity_): this;
        canPerformAction(arg0: Internal.ToolAction_): boolean;
        getTypeData(): Internal.CompoundTag;
        handler$doa000$unionlib$collectCurrentModifier(pPlayer: Player_, pIsAdvanced: Internal.TooltipFlag_, cir: Internal.CallbackInfoReturnable_<any>, list: Internal.List_<any>, mutablecomponent: Internal.MutableComponent_, j: number, var6: Internal.EquipmentSlot_[], var7: number, var8: number, equipmentslot: Internal.EquipmentSlot_, multimap: Internal.Multimap_<any, any>, var11: Internal.Iterator_<any>, entry: Internal.Map$Entry_<any, any>, attributemodifier: Internal.AttributeModifier_): void;
        isNotReplaceableByPickAction(arg0: Player_, arg1: number): boolean;
        canEquip(arg0: Internal.EquipmentSlot_, arg1: Internal.Entity_): boolean;
        getItem(): Internal.Item;
        inventoryTick(arg0: Internal.Level_, arg1: Internal.Entity_, arg2: number, arg3: boolean): void;
        grow(arg0: number): void;
        hasCraftingRemainingItem(): boolean;
        asIngredient(): Internal.Ingredient;
        onItemUseFirst(arg0: Internal.UseOnContext_): InteractionResult;
        hasCustomHoverName(): boolean;
        isBarVisible(): boolean;
        static isSameItem(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        doesSneakBypassUse(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Player_): boolean;
        removeTagKey(arg0: string): void;
        getEnchantmentLevel(arg0: Internal.Enchantment_): number;
        hasEnchantment(enchantment: Internal.Enchantment_, level: number): boolean;
        isEdible(): boolean;
        isFramed(): boolean;
        use(arg0: Internal.Level_, arg1: Player_, arg2: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        enchantStack(arg0: Internal.Enchantment_, arg1: number): void;
        getBurnTime(arg0: Internal.RecipeType_<any>): number;
        onEntityItemUpdate(arg0: Internal.ItemEntity_): boolean;
        equalsIgnoringCount(stack: Internal.ItemStack_): boolean;
        copyWithCount(arg0: number): this;
        onBlockStartBreak(arg0: BlockPos_, arg1: Player_): boolean;
        getAttributeModifiers(group: Internal.AccessorySlot$Group_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getTags(): Internal.Stream<Internal.TagKey<Internal.Item>>;
        getItemHolder(): Internal.Holder<Internal.Item>;
        getBarWidth(): number;
        setPopTime(arg0: number): void;
        getWeaponAttributes(): Internal.WeaponAttributes;
        save(arg0: Internal.CompoundTag_): Internal.CompoundTag;
        isEnderMask(arg0: Player_, arg1: Internal.EnderMan_): boolean;
        getHarvestSpeed(block: Internal.BlockContainerJS_): number;
        weakNBT(): Internal.Ingredient;
        getCraftingRemainingItem(): this;
        handler$cbe000$attributeslib$apoth_tooltipMarker2(arg0: Player_, arg1: Internal.TooltipFlag_, arg2: Internal.CallbackInfoReturnable_<any>, arg3: Internal.List_<any>): void;
        isPiglinCurrency(): boolean;
        getFoodProperties(arg0: Internal.LivingEntity_): Internal.FoodProperties;
        getXpRepairRatio(): number;
        withLore(text: Internal.Component_[]): this;
        getNbt(): Internal.CompoundTag;
        isDamageableItem(): boolean;
        hasTag(tag: ResourceLocation_): boolean;
        hurtAndBreak<T extends Internal.LivingEntity>(arg0: number, arg1: T, arg2: Internal.Consumer_<T>): void;
        copy(): this;
        hasNBT(): boolean;
        equals(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        overrideStackedOnOther(arg0: Internal.Slot_, arg1: Internal.ClickAction_, arg2: Player_): boolean;
        isBookEnchantable(arg0: Internal.ItemStack_): boolean;
        getEntityLifespan(arg0: Internal.Level_): number;
        isEmpty(): boolean;
        setRepairCost(arg0: number): void;
        onUseTick(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: number): void;
        getUseDuration(): number;
        setInvalidAttributes(invalid: boolean): void;
        serializeNBT(): Internal.Tag;
        areItemsEqual(other: Internal.ItemStack_): boolean;
        getIdLocation(): ResourceLocation;
        isDamaged(): boolean;
        mineBlock(arg0: Internal.Level_, arg1: Internal.BlockState_, arg2: BlockPos_, arg3: Player_): void;
        canGrindstoneRepair(): boolean;
        getEnchantmentTags(): Internal.ListTag;
        getUseAnimation(): Internal.UseAnim;
        deserializeNBT(arg0: Internal.Tag_): void;
        connector_useOn(arg0: Internal.UseOnContext_): InteractionResult;
        withNBT(nbt: Internal.CompoundTag_): this;
        readShareTag(arg0: Internal.CompoundTag_): void;
        useOnRelease(): boolean;
        canApplyAtEnchantingTable(arg0: Internal.Enchantment_): boolean;
        canElytraFly(arg0: Internal.LivingEntity_): boolean;
        addTooltipLines(pPlayer: Player_, list: Internal.List_<Internal.Component>): void;
        isEnchanted(): boolean;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        getHoverName(): Internal.Component;
        onStopUsing(arg0: Internal.LivingEntity_, arg1: number): void;
        enchant(enchantment: Internal.Enchantment_, level: number): this;
        isItemEnabled(arg0: Internal.FeatureFlagSet_): boolean;
        toJson(): Internal.JsonElement;
        /**
         * @deprecated
        */
        onDestroyed(arg0: Internal.ItemEntity_): void;
        enchant(enchantments: Internal.Map_<any, any>): this;
        getPopTime(): number;
        getDescriptionId(): string;
        areShareTagsEqual(arg0: Internal.ItemStack_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.LivingEntity_): boolean;
        getHighlightTip(arg0: Internal.Component_): Internal.Component;
        getAllEnchantments(): Internal.Map<Internal.Enchantment, number>;
        handler$zem000$placebo$itemUseHook(arg0: Internal.UseOnContext_, arg1: Internal.CallbackInfoReturnable_<any>): void;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        addAttributeModifier(arg0: Internal.Attribute_, arg1: Internal.AttributeModifier_, arg2: Internal.EquipmentSlot_): void;
        is(arg0: Internal.Predicate_<Internal.Holder<Internal.Item>>): boolean;
        hasAdventureModePlaceTagForBlock(arg0: Internal.Registry_<Internal.Block>, arg1: Internal.BlockInWorld_): boolean;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        removeTag(): void;
        onInventoryTick(arg0: Internal.Level_, arg1: Player_, arg2: number, arg3: number): void;
        is(arg0: Internal.TagKey_<Internal.Item>): boolean;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        getOrCreateTagElement(arg0: string): Internal.CompoundTag;
        hideTooltipPart(arg0: Internal.ItemStack$TooltipPart_): void;
        getOrCreate<T>(arg0: ResourceLocation_, arg1: Internal.Function_<Internal.ItemStack, T>): T;
        handler$zck000$apoli$forgeItem(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_, arg4: Internal.SlotAccess_, arg5: Internal.CallbackInfoReturnable_<any>): void;
        getAttributeModifiers(arg0: Internal.EquipmentSlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        getMaxDamage(): number;
        getHarvestSpeed(): number;
        getDisplayName(): Internal.Component;
        getCount(): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.Level_, arg1: Player_): void;
        useOn(arg0: Internal.UseOnContext_): InteractionResult;
        getShareTag(): Internal.CompoundTag;
        onCraftedBy(arg0: Internal.Level_, arg1: Player_, arg2: number): void;
        hasInvalidAttributes(): boolean;
        getEquipmentSlot(): Internal.EquipmentSlot;
        getEnchantmentValue(): number;
        isRepairable(): boolean;
        setCount(arg0: number): void;
        getId(): string;
        getSweepHitBox(arg0: Player_, arg1: Internal.Entity_): Internal.AABB;
        is(arg0: Internal.Item_): boolean;
        setDamageValue(arg0: number): void;
        getOrCreateTag(): Internal.CompoundTag;
        getTagElement(arg0: string): Internal.CompoundTag;
        withCount(c: number): this;
        toNBT(): Internal.Tag;
        setHoverName(arg0: Internal.Component_): this;
        getOrCreate(arg0: ResourceLocation_, arg1: Internal.Function_<any, any>, arg2: Internal.ToIntFunction_<any>): any;
        localvar$doa000$unionlib$getTooltipLines_modifyvariable2(d0: number): number;
        handler$doa000$unionlib$getTooltipLines_inject1(pPlayer: Player_, pIsAdvanced: Internal.TooltipFlag_, cir: Internal.CallbackInfoReturnable_<any>, list: Internal.List_<any>): void;
        setEntityRepresentation(arg0: Internal.Entity_): void;
        hasFoil(): boolean;
        split(arg0: number): this;
        strongNBT(): Internal.Ingredient;
        isBlock(): boolean;
        getTooltipImage(): Internal.Optional<Internal.TooltipComponent>;
        shrink(arg0: number): void;
        copyAndClear(): this;
        withName(displayName: Internal.Component_): this;
        overrideOtherStackedOnMe(arg0: Internal.ItemStack_, arg1: Internal.Slot_, arg2: Internal.ClickAction_, arg3: Player_, arg4: Internal.SlotAccess_): boolean;
        is(arg0: Internal.Holder_<Internal.Item>): boolean;
        isEnchantable(): boolean;
        getTooltipLines(arg0: Player_, arg1: Internal.TooltipFlag_): Internal.List<Internal.Component>;
        getMaxStackSize(): number;
        handler$cbe000$attributeslib$apoth_tooltipMarker(arg0: Player_, arg1: Internal.TooltipFlag_, arg2: Internal.CallbackInfoReturnable_<any>, arg3: Internal.List_<any>): void;
        specialEquals(o: any, shallow: boolean): boolean;
        getNbtString(): string;
        getDestroySpeed(arg0: Internal.BlockState_): number;
        static getOrCreate<T>(arg0: Internal.ItemStack_, arg1: ResourceLocation_, arg2: Internal.Function_<Internal.ItemStack, T>, arg3: Internal.ToIntFunction_<Internal.ItemStack>): T;
        isStackable(): boolean;
        isCorrectToolForDrops(arg0: Internal.BlockState_): boolean;
        getAccessory(): Internal.AccessoryItem;
        static getOrCreate<T>(arg0: Internal.ItemStack_, arg1: ResourceLocation_, arg2: Internal.Function_<Internal.ItemStack, T>): T;
        getRecipeRemainder(): this;
        static of(arg0: Internal.CompoundTag_): Internal.ItemStack;
        getEatingSound(): Internal.SoundEvent;
        getEntityRepresentation(): Internal.Entity;
        static isSameItemSameTags(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        setWeaponAttributes(weaponAttributes: Internal.WeaponAttributes_): void;
        setNbt(arg0: Internal.CompoundTag_): void;
        resetHoverName(): void;
        withChance(chance: number): OutputItem;
        hurt(arg0: number, arg1: Internal.RandomSource_, arg2: Internal.ServerPlayer_): boolean;
        getMod(): string;
        localvar$doa000$unionlib$getTooltipLines_modifyvariable1(flag: boolean): boolean;
        getDamageValue(): number;
        getAttributeModifiers(slot: Internal.AccessorySlot_): Internal.Multimap<Internal.Attribute, Internal.AttributeModifier>;
        toItemString(): string;
        interactLivingEntity(arg0: Player_, arg1: Internal.LivingEntity_, arg2: Internal.InteractionHand_): InteractionResult;
        addTagElement(arg0: string, arg1: Internal.Tag_): void;
        isNBTEqual(other: Internal.ItemStack_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        onDroppedByPlayer(arg0: Player_): boolean;
        /**
         * @deprecated
        */
        ignoreNBT(): Internal.Ingredient;
        releaseUsing(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: number): void;
        getBarColor(): number;
        onEntitySwing(arg0: Internal.LivingEntity_): boolean;
        onHorseArmorTick(arg0: Internal.Level_, arg1: Internal.Mob_): void;
        get tags(): Internal.Collection<ResourceLocation>
        get drinkingSound(): Internal.SoundEvent
        get baseRepairCost(): number
        get frame(): Internal.ItemFrame
        get enchantments(): Internal.Map<string, number>
        get rarity(): Internal.Rarity
        get typeData(): Internal.CompoundTag
        get item(): Internal.Item
        get barVisible(): boolean
        get edible(): boolean
        get framed(): boolean
        get tags(): Internal.Stream<Internal.TagKey<Internal.Item>>
        get itemHolder(): Internal.Holder<Internal.Item>
        get barWidth(): number
        set popTime(arg0: number)
        get weaponAttributes(): Internal.WeaponAttributes
        get craftingRemainingItem(): Internal.ItemStack
        get piglinCurrency(): boolean
        get xpRepairRatio(): number
        get nbt(): Internal.CompoundTag
        get damageableItem(): boolean
        get empty(): boolean
        set repairCost(arg0: number)
        get useDuration(): number
        set invalidAttributes(invalid: boolean)
        get idLocation(): ResourceLocation
        get damaged(): boolean
        get enchantmentTags(): Internal.ListTag
        get useAnimation(): Internal.UseAnim
        get enchanted(): boolean
        get hoverName(): Internal.Component
        get popTime(): number
        get descriptionId(): string
        get allEnchantments(): Internal.Map<Internal.Enchantment, number>
        get maxDamage(): number
        get harvestSpeed(): number
        get displayName(): Internal.Component
        get count(): number
        get shareTag(): Internal.CompoundTag
        get equipmentSlot(): Internal.EquipmentSlot
        get enchantmentValue(): number
        get repairable(): boolean
        set count(arg0: number)
        get id(): string
        set damageValue(arg0: number)
        get orCreateTag(): Internal.CompoundTag
        set hoverName(arg0: Internal.Component_)
        set entityRepresentation(arg0: Internal.Entity_)
        get block(): boolean
        get tooltipImage(): Internal.Optional<Internal.TooltipComponent>
        get enchantable(): boolean
        get maxStackSize(): number
        get nbtString(): string
        get stackable(): boolean
        get accessory(): Internal.AccessoryItem
        get recipeRemainder(): Internal.ItemStack
        get eatingSound(): Internal.SoundEvent
        get entityRepresentation(): Internal.Entity
        set weaponAttributes(weaponAttributes: Internal.WeaponAttributes_)
        set nbt(arg0: Internal.CompoundTag_)
        get mod(): string
        get damageValue(): number
        get barColor(): number
        mod: Internal.AttributeModifier;
        static readonly TAG_DISPLAY_NAME: "Name";
        static readonly TAG_LORE: "Lore";
        static readonly TAG_ENCH: "Enchantments";
        static readonly ATTRIBUTE_MODIFIER_FORMAT: Internal.DecimalFormat;
        static readonly TAG_DAMAGE: "Damage";
        static readonly CODEC: Internal.Codec<Internal.ItemStack>;
        draw_speed: number;
        static readonly TAG_DISPLAY: "display";
        static readonly TAG_COLOR: "color";
        static readonly EMPTY: Internal.ItemStack;
    }
    type ItemStack_ = RegExp | Internal.Item_ | {count?: number, nbt?: Internal.CompoundTag_, item: Internal.Item_} | ItemStack | {count?: number, nbt?: Internal.CompoundTag_, maxRolls?: number, item: Internal.Item_, minRolls?: number, chance?: number};
    interface TypeAdapterFactory {
        abstract create<T>(arg0: Internal.Gson_, arg1: com.google.gson.reflect.TypeToken_<T>): Internal.TypeAdapter<T>;
        (arg0: Internal.Gson, arg1: com.google.gson.reflect.TypeToken<T>): Internal.TypeAdapter_<T>;
    }
    type TypeAdapterFactory_ = TypeAdapterFactory;
    class IsInsideStructureTracker$IsInside {
        constructor(insideStructure: boolean, insideStructurePiece: boolean)
        isInsideStructure(): boolean;
        setInsideStructurePiece(insideStructurePiece: boolean): this;
        setInsideStructure(insideStructure: boolean): this;
        isInsideStructurePiece(): boolean;
        get insideStructure(): boolean
        set insideStructurePiece(insideStructurePiece: boolean)
        set insideStructure(insideStructure: boolean)
        get insideStructurePiece(): boolean
        static readonly CODEC: Internal.Codec<Internal.IsInsideStructureTracker$IsInside>;
    }
    type IsInsideStructureTracker$IsInside_ = IsInsideStructureTracker$IsInside;
    class Condition {
        constructor()
        /**
         * Checks the block and its block states.
        */
        blockStateProperty(arg0: Internal.Block_): Internal.StatePropertyCondition;
        /**
         * Checks tool used to mine the block.
        */
        matchTool(arg0: Internal.Consumer_<Internal.ItemPredicateBuilder>): Internal.MatchToolCondition;
        /**
         * Checks properties of an entity.
        */
        entityProperty(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>): Internal.EntityPropertyCondition;
        /**
         * Checks the current location against location criteria.
        */
        locationCheck(): Internal.LocationCheckCondition;
        /**
         * Evaluates a list of predicates and passes if all of them pass.
        */
        allOf(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): Internal.ConditionCollect;
        /**
         * Checks properties of an entity.
        */
        entityPropertyByPredicate(arg0: Internal.EntityPredicate_): Internal.EntityPropertyCondition;
        /**
         * Evaluates a list of predicates and passes if any one of them passes.
        */
        anyOf(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): Internal.ConditionCollect;
    }
    type Condition_ = Condition;
    class EndCityStructure extends Internal.Structure {
        constructor(arg0: Internal.Structure$StructureSettings_)
        static readonly CODEC: Internal.Codec<Internal.EndCityStructure>;
    }
    type EndCityStructure_ = EndCityStructure;
    class VerticalAnchor$AboveBottom extends Internal.Record implements Internal.VerticalAnchor {
        constructor(arg0: number)
        static aboveBottom(arg0: number): Internal.VerticalAnchor;
        static absolute(arg0: number): Internal.VerticalAnchor;
        static belowTop(arg0: number): Internal.VerticalAnchor;
        static bottom(): Internal.VerticalAnchor;
        static top(): Internal.VerticalAnchor;
        resolveY(arg0: Internal.WorldGenerationContext_): number;
        offset(): number;
        static readonly CODEC: Internal.Codec<Internal.VerticalAnchor$AboveBottom>;
    }
    type VerticalAnchor$AboveBottom_ = VerticalAnchor$AboveBottom;
    abstract class SingleItemRecipe implements Internal.Recipe<Internal.Container> {
        constructor(arg0: Internal.RecipeType_<any>, arg1: Internal.RecipeSerializer_<any>, arg2: ResourceLocation_, arg3: string, arg4: Internal.Ingredient_, arg5: Internal.ItemStack_)
        getIngredients(): Internal.NonNullList<Internal.Ingredient>;
        isSpecial(): boolean;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getResultItem(arg0: Internal.RegistryAccess_): Internal.ItemStack;
        getSchema(): Internal.RecipeSchema;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        assemble(arg0: Internal.Container_, arg1: Internal.RegistryAccess_): Internal.ItemStack;
        getSerializer(): Internal.RecipeSerializer<any>;
        getId(): ResourceLocation;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        abstract matches(arg0: Internal.Container_, arg1: Internal.Level_): boolean;
        getMod(): string;
        getRemainingItems(arg0: Internal.Container_): Internal.NonNullList<Internal.ItemStack>;
        get ingredients(): Internal.NonNullList<Internal.Ingredient>
        get special(): boolean
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get type(): ResourceLocation
        set group(group: string)
        get serializer(): Internal.RecipeSerializer<any>
        get id(): ResourceLocation
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        get mod(): string
        readonly ingredient: Internal.Ingredient;
        readonly result: Internal.ItemStack;
        readonly group: string;
        readonly id: ResourceLocation;
    }
    type SingleItemRecipe_ = SingleItemRecipe;
    abstract class PointFree <T> {
        constructor()
        abstract "eval"(): Internal.Function<Internal.DynamicOps<any>, T>;
        static indent(arg0: number): string;
        abstract type(): com.mojang.datafixers.types.Type<T>;
        evalCached(): Internal.Function<Internal.DynamicOps<any>, T>;
        abstract toString(arg0: number): string;
    }
    type PointFree_<T> = PointFree<T>;
    class ZapParticleOption implements Internal.ParticleOptions {
        constructor(arg0: Vec3d_)
        writeToString(): string;
        writeToNetwork(arg0: Internal.FriendlyByteBuf_): void;
        getType(): Internal.ParticleType<Internal.ZapParticleOption>;
        getDestination(): Vec3d;
        get type(): Internal.ParticleType<Internal.ZapParticleOption>
        get destination(): Vec3d
        static readonly DESERIALIZER: Internal.ParticleOptions$Deserializer<Internal.ZapParticleOption>;
        static readonly CODEC: Internal.Codec<Internal.ZapParticleOption>;
    }
    type ZapParticleOption_ = ZapParticleOption;
    interface TogglePowerConfiguration extends Internal.IDynamicFeatureConfiguration {
        isConfigurationValid(): boolean;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        abstract retainState(): boolean;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        abstract defaultState(): boolean;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        getMissingBinds(): Internal.List<string>;
        holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        abstract key(): Internal.IActivePower$Key;
        populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        readonly MAP_CODEC: Internal.MapCodec<Internal.TogglePowerConfiguration>;
        readonly CODEC: Internal.Codec<Internal.TogglePowerConfiguration>;
        readonly INACTIVE_MAP_CODEC: Internal.MapCodec<Internal.TogglePowerConfiguration>;
        readonly INACTIVE_CODEC: Internal.Codec<Internal.TogglePowerConfiguration>;
    }
    type TogglePowerConfiguration_ = TogglePowerConfiguration;
    interface FileNameMap {
        abstract getContentTypeFor(arg0: string): string;
        (arg0: string): string;
    }
    type FileNameMap_ = FileNameMap;
    class StructureTemplatePool implements Internal.StructureTemplatePoolAccessor {
        constructor(arg0: Internal.Holder_<Internal.StructureTemplatePool>, arg1: Internal.List_<com.mojang.datafixers.util.Pair<Internal.StructurePoolElement, number>>)
        constructor(arg0: Internal.Holder_<Internal.StructureTemplatePool>, arg1: Internal.List_<com.mojang.datafixers.util.Pair<Internal.Function<Internal.StructureTemplatePool$Projection, Internal.StructurePoolElement>, number>>, arg2: Internal.StructureTemplatePool$Projection_)
        getRandomTemplate(arg0: Internal.RandomSource_): Internal.StructurePoolElement;
        getFallback(): Internal.Holder<Internal.StructureTemplatePool>;
        size(): number;
        getShuffledTemplates(arg0: Internal.RandomSource_): Internal.List<Internal.StructurePoolElement>;
        getMaxSize(arg0: Internal.StructureTemplateManager_): number;
        getRawTemplates(): Internal.List<any>;
        get fallback(): Internal.Holder<Internal.StructureTemplatePool>
        get rawTemplates(): Internal.List<any>
        static readonly DIRECT_CODEC: Internal.Codec<Internal.StructureTemplatePool>;
        rawTemplates: Internal.List<com.mojang.datafixers.util.Pair<Internal.StructurePoolElement, number>>;
        templates: Internal.ObjectArrayList<Internal.StructurePoolElement>;
        static readonly CODEC: Internal.Codec<Internal.Holder<Internal.StructureTemplatePool>>;
    }
    type StructureTemplatePool_ = StructureTemplatePool | Special.TemplatePool;
    class NameCondition extends Internal.DamageCondition<Internal.FieldConfiguration<string>> {
        constructor()
        check(arg0: Internal.FieldConfiguration_<string>, arg1: DamageSource_, arg2: number): boolean;
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        check(arg0: Internal.IDynamicFeatureConfiguration_, arg1: DamageSource_, arg2: number): boolean;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type NameCondition_ = NameCondition;
    interface AttributeInstanceAccessor {
        abstract getCachedValue(): number;
        get cachedValue(): number
        (): number;
    }
    type AttributeInstanceAccessor_ = AttributeInstanceAccessor;
    class SlotContext extends Internal.Record {
        constructor(identifier: string, entity: Internal.LivingEntity_, index: number, cosmetic: boolean, visible: boolean)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getIdentifier(): string;
        visible(): boolean;
        identifier(): string;
        entity(): Internal.LivingEntity;
        index(): number;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getWearer(): Internal.LivingEntity;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getIndex(): number;
        cosmetic(): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get identifier(): string
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get wearer(): Internal.LivingEntity
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        get index(): number
    }
    type SlotContext_ = SlotContext;
    interface IFluidHandler {
        abstract getFluidInTank(arg0: number): Internal.FluidStack;
        abstract drain(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        abstract getTanks(): number;
        abstract isFluidValid(arg0: number, arg1: Internal.FluidStack_): boolean;
        abstract getTankCapacity(arg0: number): number;
        abstract fill(arg0: Internal.FluidStack_, arg1: Internal.IFluidHandler$FluidAction_): number;
        abstract drain(arg0: number, arg1: Internal.IFluidHandler$FluidAction_): Internal.FluidStack;
        get tanks(): number
    }
    type IFluidHandler_ = IFluidHandler;
    interface ScriptTypePredicate extends Internal.Predicate<Internal.ScriptType> {
        getValidTypes(): Internal.List<Internal.ScriptType>;
        test(arg0: any): boolean;
        negate(): Internal.Predicate<Internal.ScriptType>;
        and(arg0: Internal.Predicate_<Internal.ScriptType>): Internal.Predicate<Internal.ScriptType>;
        not<T>(arg0: Internal.Predicate_<T>): Internal.Predicate<T>;
        abstract test(arg0: Internal.ScriptType_): boolean;
        or(arg0: Internal.Predicate_<Internal.ScriptType>): Internal.Predicate<Internal.ScriptType>;
        isEqual<T>(arg0: any): Internal.Predicate<T>;
        get validTypes(): Internal.List<Internal.ScriptType>
        (arg0: Internal.ScriptType): boolean;
        readonly COMMON: Internal.ScriptTypePredicate;
        readonly STARTUP_OR_CLIENT: Internal.ScriptTypePredicate;
        readonly STARTUP_OR_SERVER: Internal.ScriptTypePredicate;
        readonly ALL: Internal.ScriptTypePredicate;
    }
    type ScriptTypePredicate_ = ScriptTypePredicate;
    interface LevelTickAccess <T> extends Internal.TickAccess<T> {
        abstract count(): number;
        abstract schedule(arg0: Internal.ScheduledTick_<T>): void;
        abstract willTickThisTick(arg0: BlockPos_, arg1: T): boolean;
        abstract hasScheduledTick(arg0: BlockPos_, arg1: T): boolean;
    }
    type LevelTickAccess_<T> = LevelTickAccess<T>;
    class CustomMapDecoration {
        constructor(type: Internal.MapDecorationType_<any, any>, buffer: Internal.FriendlyByteBuf_)
        constructor(type: Internal.MapDecorationType_<any, any>, x: number, y: number, rot: number, displayName: Internal.Component_)
        getDisplayName(): Internal.Component;
        getX(): number;
        getRot(): number;
        setDisplayName(displayName: Internal.Component_): void;
        getType(): Internal.MapDecorationType<any, any>;
        setRot(rot: number): void;
        setX(x: number): void;
        saveToBuffer(buffer: Internal.FriendlyByteBuf_): void;
        setY(y: number): void;
        getY(): number;
        get displayName(): Internal.Component
        get x(): number
        get rot(): number
        set displayName(displayName: Internal.Component_)
        get type(): Internal.MapDecorationType<any, any>
        set rot(rot: number)
        set x(x: number)
        set y(y: number)
        get y(): number
    }
    type CustomMapDecoration_ = CustomMapDecoration;
    class RenderStateShard$LightmapStateShard extends Internal.RenderStateShard$BooleanStateShard {
        constructor(arg0: boolean)
        static getTranslucentTransparency(): Internal.RenderStateShard$TransparencyStateShard;
        static getGLINT_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        static getCRUMBLING_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        static getNO_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard;
        get translucentTransparency(): Internal.RenderStateShard$TransparencyStateShard
        get GLINT_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
        get CRUMBLING_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
        get NO_TRANSPARENCY(): Internal.RenderStateShard$TransparencyStateShard
    }
    type RenderStateShard$LightmapStateShard_ = RenderStateShard$LightmapStateShard;
    class PointerBuffer extends Internal.CustomBuffer<Internal.PointerBuffer> implements Internal.Comparable<Internal.PointerBuffer> {
        put(arg0: number, arg1: number): this;
        put(arg0: Internal.DoubleBuffer_): this;
        put(arg0: Internal.LongBuffer_): this;
        getPointerBuffer(arg0: number): this;
        getPointerBuffer(arg0: number, arg1: number): this;
        put(arg0: number[], arg1: number, arg2: number): this;
        put(arg0: number, arg1: Internal.DoubleBuffer_): this;
        getByteBuffer(arg0: number, arg1: number): Internal.ByteBuffer;
        getStringUTF8(): string;
        compareTo(arg0: any): number;
        getShortBuffer(arg0: number, arg1: number): Internal.ShortBuffer;
        getShortBuffer(arg0: number): Internal.ShortBuffer;
        putAddressOf(arg0: number, arg1: Internal.CustomBuffer_<any>): this;
        static put(arg0: Internal.ByteBuffer_, arg1: number): void;
        static get(arg0: Internal.ByteBuffer_, arg1: number): number;
        put(arg0: number, arg1: Internal.FloatBuffer_): this;
        static get(arg0: Internal.ByteBuffer_): number;
        get(arg0: number[], arg1: number, arg2: number): this;
        getStringUTF16(): string;
        put(arg0: number, arg1: Internal.LongBuffer_): this;
        getStringASCII(arg0: number): string;
        compareTo(arg0: Internal.PointerBuffer_): number;
        put(arg0: Internal.FloatBuffer_): this;
        put(arg0: number[]): this;
        static allocateDirect(arg0: number): Internal.PointerBuffer;
        get(arg0: number): number;
        static create(arg0: number, arg1: number): Internal.PointerBuffer;
        getStringUTF16(arg0: number): string;
        put(arg0: number, arg1: Internal.ByteBuffer_): this;
        static create(arg0: Internal.ByteBuffer_): Internal.PointerBuffer;
        put(arg0: number, arg1: Internal.ShortBuffer_): this;
        put(arg0: Internal.IntBuffer_): this;
        get(arg0: number[]): this;
        put(arg0: number, arg1: Internal.Pointer_): this;
        put(arg0: Internal.ByteBuffer_): this;
        put(arg0: Internal.Pointer_): this;
        put(arg0: Internal.ShortBuffer_): this;
        put(arg0: number, arg1: Internal.IntBuffer_): this;
        getStringASCII(): string;
        putAddressOf(arg0: Internal.CustomBuffer_<any>): this;
        get(): number;
        getFloatBuffer(arg0: number): Internal.FloatBuffer;
        getStringUTF8(arg0: number): string;
        getIntBuffer(arg0: number): Internal.IntBuffer;
        put(arg0: number): this;
        static put(arg0: Internal.ByteBuffer_, arg1: number, arg2: number): void;
        getFloatBuffer(arg0: number, arg1: number): Internal.FloatBuffer;
        getLongBuffer(arg0: number): Internal.LongBuffer;
        getDoubleBuffer(arg0: number): Internal.DoubleBuffer;
        getDoubleBuffer(arg0: number, arg1: number): Internal.DoubleBuffer;
        getByteBuffer(arg0: number): Internal.ByteBuffer;
        getLongBuffer(arg0: number, arg1: number): Internal.LongBuffer;
        getIntBuffer(arg0: number, arg1: number): Internal.IntBuffer;
        get stringUTF8(): string
        get stringUTF16(): string
        get stringASCII(): string
    }
    type PointerBuffer_ = PointerBuffer;
    abstract class AbstractCriterionTriggerInstance implements Internal.CriterionTriggerInstance {
        constructor(arg0: ResourceLocation_, arg1: Internal.ContextAwarePredicate_)
        serializeToJson(arg0: Internal.SerializationContext_): Internal.JsonObject;
        getPlayerPredicate(): Internal.ContextAwarePredicate;
        getCriterion(): ResourceLocation;
        get playerPredicate(): Internal.ContextAwarePredicate
        get criterion(): ResourceLocation
    }
    type AbstractCriterionTriggerInstance_ = AbstractCriterionTriggerInstance;
    class GameEventListenerRenderer implements Internal.DebugRenderer$SimpleDebugRenderer {
        constructor(arg0: Internal.Minecraft_)
        trackGameEvent(arg0: Internal.GameEvent_, arg1: Vec3d_): void;
        render(arg0: Internal.PoseStack_, arg1: Internal.MultiBufferSource_, arg2: number, arg3: number, arg4: number): void;
        clear(): void;
        trackListener(arg0: Internal.PositionSource_, arg1: number): void;
    }
    type GameEventListenerRenderer_ = GameEventListenerRenderer;
    class DesertWellFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type DesertWellFeature_ = DesertWellFeature;
    class PistonMovingBlockEntity extends Internal.BlockEntity implements Internal.IExtendedPistonTile, Internal.IBlockHolder {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_, arg2: Internal.BlockState_, arg3: Internal.Direction_, arg4: boolean, arg5: boolean)
        getMovementDirection(): Internal.Direction;
        isSourcePiston(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        getHeldBlock(): Internal.BlockState;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        getMovedState(): Internal.BlockState;
        getLastTicked(): number;
        getProgress(arg0: number): number;
        tickMovedBlock(level: Internal.Level_, pos: BlockPos_): void;
        serializeNBT(): Internal.Tag;
        onLoad(): void;
        getZOff(arg0: number): number;
        handler$dgh000$moonlight$onFinishedShortPulse(ci: Internal.CallbackInfo_): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        isExtending(): boolean;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        static tick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.PistonMovingBlockEntity_): void;
        getXOff(arg0: number): number;
        deserializeNBT(arg0: Internal.Tag_): void;
        setHeldBlock(state: Internal.BlockState_): boolean;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        abstract getHeldBlock(arg0: number): Internal.BlockState;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        getCollisionShape(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.VoxelShape;
        getYOff(arg0: number): number;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        abstract setHeldBlock(arg0: Internal.BlockState_, arg1: number): boolean;
        getModelData(): Internal.ModelData;
        finalTick(): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getDirection(): Internal.Direction;
        getRenderBoundingBox(): Internal.AABB;
        get movementDirection(): Internal.Direction
        get sourcePiston(): boolean
        get heldBlock(): Internal.BlockState
        get movedState(): Internal.BlockState
        get lastTicked(): number
        get extending(): boolean
        set heldBlock(state: Internal.BlockState_)
        get modelData(): Internal.ModelData
        get direction(): Internal.Direction
        get renderBoundingBox(): Internal.AABB
        static readonly TICK_MOVEMENT: 0.51;
    }
    type PistonMovingBlockEntity_ = PistonMovingBlockEntity;
    class WhisperwindSwordItem extends Internal.UniqueSwordItem {
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
    type WhisperwindSwordItem_ = WhisperwindSwordItem;
    class BufferedReader extends Internal.Reader {
        constructor(arg0: Internal.Reader_, arg1: number)
        constructor(arg0: Internal.Reader_)
        readLine(): string;
        lines(): Internal.Stream<string>;
    }
    type BufferedReader_ = BufferedReader;
    class BookItem extends Internal.Item {
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
    type BookItem_ = BookItem;
}
