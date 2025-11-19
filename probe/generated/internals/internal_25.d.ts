/// <reference path="./internal_*.d.ts" />
declare namespace net.minecraft.world.level.levelgen.placement {
    class BiomeFilter extends Internal.PlacementFilter {
        static biome(): net.minecraft.world.level.levelgen.placement.BiomeFilter;
        static CODEC: Internal.Codec<net.minecraft.world.level.levelgen.placement.BiomeFilter>;
    }
    type BiomeFilter_ = BiomeFilter;
}
declare namespace Internal {
    /**
     * Invoked when a player left clicks on a block.
    */
    class BlockLeftClickedEventJS extends Internal.PlayerEventJS {
        constructor(player: Player_, hand: Internal.InteractionHand_, pos: BlockPos_, direction: Internal.Direction_)
        /**
         * The face of the block that was left clicked.
        */
        getFacing(): Internal.Direction;
        /**
         * The player that left clicked the block.
        */
        getEntity(): Internal.LivingEntity;
        /**
         * The item that was used to left click the block.
        */
        getItem(): Internal.ItemStack;
        /**
         * The block that was left clicked.
        */
        getBlock(): Internal.BlockContainerJS;
        /**
         * The face of the block that was left clicked.
        */
        get facing(): Internal.Direction
        /**
         * The player that left clicked the block.
        */
        get entity(): Internal.LivingEntity
        /**
         * The item that was used to left click the block.
        */
        get item(): Internal.ItemStack
        /**
         * The block that was left clicked.
        */
        get block(): Internal.BlockContainerJS
    }
    type BlockLeftClickedEventJS_ = BlockLeftClickedEventJS;
    class ToolPanel extends WidgetGroup {
        constructor(editor: Internal.Editor_)
        getTabContainer(): TabContainer;
        static deserializeNBT(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): void;
        getTranslateKey(): string;
        /**
         * @deprecated
        */
        addNewToolBox(name: string, texture: ResourceTexture_, toolBox: WidgetGroup_): void;
        getEditor(): Internal.Editor;
        show(): void;
        handleDragging(dragging: any): boolean;
        getToolBoxes(): Internal.List<Widget>;
        hide(): void;
        hide(animate: boolean): void;
        getChatComponent(): Internal.Component;
        static deserializeWrapper(tag: Internal.CompoundTag_): Internal.IConfigurableWidget;
        show(animate: boolean): void;
        isLDLRegister(): boolean;
        serializeWrapper(): Internal.CompoundTag;
        canDragIn(dragging: any): boolean;
        setClientSideWidget(): Widget;
        static serializeNBT(widget: Internal.IConfigurableWidget_, resources: Internal.Resources_, isProject: boolean): Internal.CompoundTag;
        widget(): Widget;
        name(): string;
        static serializeNBT(widget: Internal.IConfigurableWidget_, resources: com.lowdragmc.lowdraglib.gui.editor.data.resource.Resource_<Internal.IGuiTexture>, isProject: boolean): Internal.CompoundTag;
        setTitle(title: string): void;
        getRegisterUI(): Internal.LDLRegister;
        addNewToolBox(name: string, texture: ResourceTexture_, toolBoxSupplier: Internal.Function_<GuiSize, WidgetGroup>): void;
        static deserializeNBT(widget: Internal.IConfigurableWidget_, tag: Internal.CompoundTag_, resources: Internal.Resources_, isProject: boolean): void;
        group(): string;
        isShow(): boolean;
        get tabContainer(): TabContainer
        get translateKey(): string
        get editor(): Internal.Editor
        get toolBoxes(): Internal.List<Widget>
        get chatComponent(): Internal.Component
        get LDLRegister(): boolean
        set title(title: string)
        get registerUI(): Internal.LDLRegister
        get show(): boolean
        /**
         * @deprecated
        */
        static readonly WIDTH: 100;
    }
    type ToolPanel_ = ToolPanel;
    interface LootContextUser {
        getReferencedContextParams(): Internal.Set<Internal.LootContextParam<any>>;
        validate(arg0: Internal.ValidationContext_): void;
        get referencedContextParams(): Internal.Set<Internal.LootContextParam<any>>
    }
    type LootContextUser_ = LootContextUser;
    class LevelEvent$Load extends Internal.LevelEvent {
        constructor()
        constructor(arg0: Internal.LevelAccessor_)
    }
    type LevelEvent$Load_ = LevelEvent$Load;
    class DistanceTrigger$TriggerInstance extends Internal.AbstractCriterionTriggerInstance {
        constructor(arg0: ResourceLocation_, arg1: Internal.ContextAwarePredicate_, arg2: Internal.LocationPredicate_, arg3: Internal.DistancePredicate_)
        static fallFromHeight(arg0: Internal.EntityPredicate$Builder_, arg1: Internal.DistancePredicate_, arg2: Internal.LocationPredicate_): Internal.DistanceTrigger$TriggerInstance;
        static travelledThroughNether(arg0: Internal.DistancePredicate_): Internal.DistanceTrigger$TriggerInstance;
        matches(arg0: Internal.ServerLevel_, arg1: Vec3d_, arg2: Vec3d_): boolean;
        static rideEntityInLava(arg0: Internal.EntityPredicate$Builder_, arg1: Internal.DistancePredicate_): Internal.DistanceTrigger$TriggerInstance;
    }
    type DistanceTrigger$TriggerInstance_ = DistanceTrigger$TriggerInstance;
    class ContextUtils$EntityAnimalContext {
        constructor(animal: Internal.Animal_, otherAnimal: Internal.Animal_)
        /**
         * The main animal entity
        */
        readonly animal: Internal.Animal;
        /**
         * The other animal entity
        */
        readonly otherAnimal: Internal.Animal;
    }
    type ContextUtils$EntityAnimalContext_ = ContextUtils$EntityAnimalContext;
    class ScheduleBuilder {
        constructor(arg0: Internal.Schedule_)
        changeActivityAt(arg0: number, arg1: Internal.Activity_): this;
        build(): Internal.Schedule;
    }
    type ScheduleBuilder_ = ScheduleBuilder;
    class ConfectionOvenBlock extends Internal.BaseEntityBlock {
        constructor()
        isFlammable(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Direction_): boolean;
        getRespawnPosition(arg0: Internal.BlockState_, arg1: Internal.EntityType_<any>, arg2: Internal.LevelReader_, arg3: BlockPos_, arg4: number, arg5: Internal.LivingEntity_): Internal.Optional<Vec3d>;
        updateState(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Internal.Block_): void;
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
        static getDispensePosition(arg0: BlockPos_, arg1: Internal.Direction_): Vec3d;
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
        static readonly COOKSTATE: Internal.IntegerProperty;
        static readonly FACING: Internal.DirectionProperty;
        static readonly POWERED: Internal.BooleanProperty;
    }
    type ConfectionOvenBlock_ = ConfectionOvenBlock;
    class CodecSet <T> extends Internal.Record {
        constructor(holder: Internal.Codec_<Internal.Holder<T>>, holderRef: Internal.Codec_<Internal.Holder<T>>, directTag: Internal.Codec_<Internal.TagKey<T>>, hashedTag: Internal.Codec_<Internal.TagKey<T>>, directSet: Internal.Codec_<Internal.HolderSet<T>>, hashedSet: Internal.Codec_<Internal.HolderSet<T>>, set: Internal.Codec_<Internal.List<Internal.HolderSet<T>>>)
        hashedTag(): Internal.Codec<Internal.TagKey<T>>;
        hashedSet(): Internal.Codec<Internal.HolderSet<T>>;
        holderRef(): Internal.Codec<Internal.Holder<T>>;
        set(): Internal.Codec<Internal.List<Internal.HolderSet<T>>>;
        holder(): Internal.Codec<Internal.Holder<T>>;
        directTag(): Internal.Codec<Internal.TagKey<T>>;
        directSet(): Internal.Codec<Internal.HolderSet<T>>;
    }
    type CodecSet_<T> = CodecSet<T>;
    class ClickedInfoBadgeEventJS extends Internal.ClientEventJS {
        constructor(arg0: Internal.ILycheeRecipe_<any>, arg1: number)
        getEntity(): Internal.LivingEntity;
        get entity(): Internal.LivingEntity
        readonly button: number;
        readonly recipe: Internal.ILycheeRecipe<any>;
    }
    type ClickedInfoBadgeEventJS_ = ClickedInfoBadgeEventJS;
    interface EventExceptionHandler {
        abstract handle(arg0: Internal.EventJS_, arg1: Internal.EventHandlerContainer_, arg2: Internal.Throwable_): Internal.Throwable;
        (arg0: Internal.EventJS, arg1: Internal.EventHandlerContainer, arg2: Internal.Throwable): Internal.Throwable_;
    }
    type EventExceptionHandler_ = EventExceptionHandler;
    class MultiNoiseBiomeSourceParameterList$Preset extends Internal.Record {
        constructor(arg0: ResourceLocation_, arg1: Internal.MultiNoiseBiomeSourceParameterList$Preset$SourceProvider_)
        usedBiomes(): Internal.Stream<Internal.ResourceKey<Internal.Biome>>;
        provider(): Internal.MultiNoiseBiomeSourceParameterList$Preset$SourceProvider;
        static generateOverworldBiomes<T>(arg0: Internal.Function_<Internal.ResourceKey<Internal.Biome>, T>): Internal.Climate$ParameterList<T>;
        id(): ResourceLocation;
        static readonly NETHER: Internal.MultiNoiseBiomeSourceParameterList$Preset;
        static readonly OVERWORLD: Internal.MultiNoiseBiomeSourceParameterList$Preset;
        static readonly CODEC: Internal.Codec<Internal.MultiNoiseBiomeSourceParameterList$Preset>;
        static readonly BY_NAME: {[key: ResourceLocation]: Internal.MultiNoiseBiomeSourceParameterList$Preset, [key: ResourceLocation]: Internal.MultiNoiseBiomeSourceParameterList$Preset};
    }
    type MultiNoiseBiomeSourceParameterList$Preset_ = MultiNoiseBiomeSourceParameterList$Preset;
    abstract class ItemCombinerMenu extends Internal.AbstractContainerMenu {
        constructor(arg0: Internal.MenuType_<any>, arg1: number, arg2: Internal.Inventory_, arg3: Internal.ContainerLevelAccess_)
        abstract onTake(arg0: Player_, arg1: Internal.ItemStack_): void;
        abstract isValidBlock(arg0: Internal.BlockState_): boolean;
        getResultSlot(): number;
        getSlotToQuickMoveTo(arg0: Internal.ItemStack_): number;
        abstract mayPickup(arg0: Player_, arg1: boolean): boolean;
        abstract createInputSlotDefinitions(): Internal.ItemCombinerMenuSlotDefinition;
        abstract createResult(): void;
        canMoveIntoInputSlots(arg0: Internal.ItemStack_): boolean;
        get resultSlot(): number
        readonly resultSlots: Internal.ResultContainer;
        readonly player: Player;
        readonly inputSlots: Internal.Container;
        readonly access: Internal.ContainerLevelAccess;
    }
    type ItemCombinerMenu_ = ItemCombinerMenu;
    class SleepingTimeCheckEvent extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Player_, arg1: Internal.Optional_<BlockPos>)
        getSleepingLocation(): Internal.Optional<BlockPos>;
        getEntity(): Internal.LivingEntity;
        get sleepingLocation(): Internal.Optional<BlockPos>
        get entity(): Internal.LivingEntity
    }
    type SleepingTimeCheckEvent_ = SleepingTimeCheckEvent;
    class CaveSpider extends Internal.Spider {
        constructor(arg0: Internal.EntityType_<Internal.CaveSpider>, arg1: Internal.Level_)
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
        static createCaveSpider(): Internal.AttributeSupplier$Builder;
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
    type CaveSpider_ = CaveSpider;
    class FloatComparingEntityCondition extends Internal.EntityCondition<Internal.FloatComparisonConfiguration> {
        constructor(arg0: Internal.Function_<Internal.Entity, number>)
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        check(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.Entity_): boolean;
        check(arg0: Internal.FloatComparisonConfiguration_, arg1: Internal.Entity_): boolean;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type FloatComparingEntityCondition_ = FloatComparingEntityCondition;
    interface PackResources extends Internal.IForgePackResources, Internal.AutoCloseable {
        abstract getRootResource(...arg0: string[]): Internal.IoSupplier<Internal.InputStream>;
        abstract getResource(arg0: Internal.PackType_, arg1: ResourceLocation_): Internal.IoSupplier<Internal.InputStream>;
        abstract packId(): string;
        abstract listResources(arg0: Internal.PackType_, arg1: string, arg2: string, arg3: Internal.PackResources$ResourceOutput_): void;
        abstract getNamespaces(arg0: Internal.PackType_): Internal.Set<string>;
        abstract close(): void;
        isHidden(): boolean;
        getChildren(): Internal.Collection<Internal.PackResources>;
        abstract getMetadataSection<T>(arg0: Internal.MetadataSectionSerializer_<T>): T;
        isBuiltin(): boolean;
        get hidden(): boolean
        get children(): Internal.Collection<Internal.PackResources>
        get builtin(): boolean
        readonly METADATA_EXTENSION: ".mcmeta";
        readonly PACK_META: "pack.mcmeta";
    }
    type PackResources_ = PackResources;
    class InformationJEIEventJS extends Internal.EventJS {
        constructor(reg: any_)
        addItem(item: Internal.Ingredient_, s: Internal.Component_[]): void;
        addFluid(fluid: any, s: Internal.Component_[]): void;
        addForType<T>(type: Internal.IIngredientType_<T>, o: any, s: Internal.Component_[]): void;
    }
    type InformationJEIEventJS_ = InformationJEIEventJS;
    class MushroomCow$MushroomType extends Internal.Enum<Internal.MushroomCow$MushroomType> implements Internal.StringRepresentable {
        static valueOf(arg0: string): Internal.MushroomCow$MushroomType;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getBlockState(): Internal.BlockState;
        getSerializedName(): string;
        static values(): Internal.MushroomCow$MushroomType[];
        static byType(arg0: string): Internal.MushroomCow$MushroomType;
        get blockState(): Internal.BlockState
        get serializedName(): string
        readonly type: string;
        static readonly RED: Internal.MushroomCow$MushroomType;
        static readonly BROWN: Internal.MushroomCow$MushroomType;
        static readonly CODEC: Internal.StringRepresentable$EnumCodec<Internal.MushroomCow$MushroomType>;
        readonly blockState: Internal.BlockState;
    }
    type MushroomCow$MushroomType_ = MushroomCow$MushroomType | "red" | "brown";
    interface BakedModelManagerAccessor {
        abstract getModels(): Internal.Map<ResourceLocation, Internal.BakedModel>;
        get models(): Internal.Map<ResourceLocation, Internal.BakedModel>
        (): Internal.Map_<ResourceLocation, Internal.BakedModel>;
    }
    type BakedModelManagerAccessor_ = BakedModelManagerAccessor;
    class Origin {
        constructor(arg0: Internal.Collection_<Internal.HolderSet<Internal.ConfiguredPower<any, any>>>, arg1: Internal.ItemStack_, arg2: boolean, arg3: number, arg4: Internal.Impact_, arg5: Internal.Component_, arg6: Internal.Component_, arg7: Internal.Set_<Internal.OriginUpgrade>, arg8: boolean)
        constructor(arg0: Internal.Collection_<Internal.HolderSet<Internal.ConfiguredPower<any, any>>>, arg1: Internal.ItemStack_, arg2: boolean, arg3: number, arg4: Internal.Impact_, arg5: Internal.Component_, arg6: Internal.Component_, arg7: Internal.Set_<Internal.OriginUpgrade>)
        isSpecial(): boolean;
        getName(): Internal.Component;
        cleanup(arg0: Internal.ICalioDynamicRegistryManager_): this;
        getIcon(): Internal.ItemStack;
        getPowerAmount(): number;
        static optional(arg0: string): Internal.MapCodec<Internal.Holder<Internal.Origin>>;
        getImpact(): Internal.Impact;
        getValidPowers(): Internal.Stream<Internal.Holder<Internal.ConfiguredPower<any, any>>>;
        isChoosable(): boolean;
        getPowers(): Internal.List<Internal.HolderSet<Internal.ConfiguredPower<any, any>>>;
        findUpgrade(arg0: ResourceLocation_): Internal.Optional<Internal.OriginUpgrade>;
        isUnchoosable(): boolean;
        getOrder(): number;
        getUpgrades(): Internal.Set<Internal.OriginUpgrade>;
        getDescription(): Internal.Component;
        get special(): boolean
        get name(): Internal.Component
        get icon(): Internal.ItemStack
        get powerAmount(): number
        get impact(): Internal.Impact
        get validPowers(): Internal.Stream<Internal.Holder<Internal.ConfiguredPower<any, any>>>
        get choosable(): boolean
        get powers(): Internal.List<Internal.HolderSet<Internal.ConfiguredPower<any, any>>>
        get unchoosable(): boolean
        get order(): number
        get upgrades(): Internal.Set<Internal.OriginUpgrade>
        get description(): Internal.Component
        static readonly HOLDER_REFERENCE: Internal.Codec<Internal.Holder<Internal.Origin>>;
        static EMPTY: Internal.Origin;
        static readonly CODEC: Internal.Codec<Internal.Origin>;
        static readonly CODEC_SET: Internal.CodecSet<Internal.Origin>;
    }
    type Origin_ = Origin;
    class ForgeFeature$Bound extends Internal.Record {
        constructor(featureName: string, featureBound: string, modInfo: Internal.IModInfo_)
        featureBound(): string;
        modInfo(): Internal.IModInfo;
        featureName(): string;
        bound<T>(): T;
    }
    type ForgeFeature$Bound_ = ForgeFeature$Bound;
    class ClientboundPlayerInfoUpdatePacket$EntryBuilder {
        constructor(arg0: Internal.UUID_)
        build(): Internal.ClientboundPlayerInfoUpdatePacket$Entry;
        latency: number;
        displayName: Internal.Component;
        readonly profileId: Internal.UUID;
        chatSession: Internal.RemoteChatSession$Data;
        gameMode: Internal.GameType;
        profile: Internal.GameProfile;
        listed: boolean;
    }
    type ClientboundPlayerInfoUpdatePacket$EntryBuilder_ = ClientboundPlayerInfoUpdatePacket$EntryBuilder;
    abstract class Clock implements Internal.InstantSource {
        static offset(arg0: Internal.Clock_, arg1: Duration_): Internal.Clock;
        static offset(arg0: Internal.InstantSource_, arg1: Duration_): Internal.InstantSource;
        static tickSeconds(arg0: Internal.ZoneId_): Internal.Clock;
        static tickMinutes(arg0: Internal.ZoneId_): Internal.Clock;
        static fixed(arg0: Internal.Instant_, arg1: Internal.ZoneId_): Internal.Clock;
        abstract withZone(arg0: Internal.ZoneId_): this;
        static systemDefaultZone(): Internal.Clock;
        static systemUTC(): Internal.Clock;
        millis(): number;
        static tick(arg0: Internal.Clock_, arg1: Duration_): Internal.Clock;
        static tick(arg0: Internal.InstantSource_, arg1: Duration_): Internal.InstantSource;
        abstract getZone(): Internal.ZoneId;
        static fixed(arg0: Internal.Instant_): Internal.InstantSource;
        static tickMillis(arg0: Internal.ZoneId_): Internal.Clock;
        static system(arg0: Internal.ZoneId_): Internal.Clock;
        abstract instant(): Internal.Instant;
        static system(): Internal.InstantSource;
        get zone(): Internal.ZoneId
    }
    type Clock_ = Clock;
    interface Enumeration <E> {
        abstract nextElement(): E;
        asIterator(): Internal.Iterator<E>;
        abstract hasMoreElements(): boolean;
    }
    type Enumeration_<E> = Enumeration<E>;
    class ExemptionMechanism {
        init(arg0: Internal.Key_, arg1: Internal.AlgorithmParameterSpec_): void;
        genExemptionBlob(): number[];
        static getInstance(arg0: string, arg1: Internal.Provider_): Internal.ExemptionMechanism;
        genExemptionBlob(arg0: number[], arg1: number): number;
        static getInstance(arg0: string, arg1: string): Internal.ExemptionMechanism;
        isCryptoAllowed(arg0: Internal.Key_): boolean;
        init(arg0: Internal.Key_): void;
        getProvider(): Internal.Provider;
        genExemptionBlob(arg0: number[]): number;
        getOutputSize(arg0: number): number;
        init(arg0: Internal.Key_, arg1: Internal.AlgorithmParameters_): void;
        getName(): string;
        static getInstance(arg0: string): Internal.ExemptionMechanism;
        get provider(): Internal.Provider
        get name(): string
    }
    type ExemptionMechanism_ = ExemptionMechanism;
    class WeaponAttributes$HitBoxShape extends Internal.Enum<Internal.WeaponAttributes$HitBoxShape> {
        static valueOf(name: string): Internal.WeaponAttributes$HitBoxShape;
        static values(): Internal.WeaponAttributes$HitBoxShape[];
        static readonly VERTICAL_PLANE: Internal.WeaponAttributes$HitBoxShape;
        static readonly HORIZONTAL_PLANE: Internal.WeaponAttributes$HitBoxShape;
        static readonly FORWARD_BOX: Internal.WeaponAttributes$HitBoxShape;
    }
    type WeaponAttributes$HitBoxShape_ = "forward_box" | "horizontal_plane" | WeaponAttributes$HitBoxShape | "vertical_plane";
    class Matrix3x2d implements Internal.Cloneable, Internal.Externalizable, Internal.Matrix3x2dc {
        constructor()
        constructor(arg0: Internal.Matrix2fc_)
        constructor(arg0: Internal.DoubleBuffer_)
        constructor(arg0: Internal.Matrix2dc_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
        constructor(arg0: Internal.Matrix3x2dc_)
        translateLocal(arg0: Internal.Vector2dc_): this;
        scale(arg0: number): this;
        translateLocal(arg0: number, arg1: number): this;
        get4x4(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        transformPosition(arg0: number, arg1: number, arg2: Internal.Vector2d_): Internal.Vector2d;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        viewArea(arg0: number[]): number[];
        view(arg0: number, arg1: number, arg2: number, arg3: number): this;
        transformDirection(arg0: number, arg1: number, arg2: Internal.Vector2d_): Internal.Vector2d;
        m01(): number;
        positiveY(arg0: Internal.Vector2d_): Internal.Vector2d;
        m20(): number;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number): this;
        scaleLocal(arg0: number): this;
        rotate(arg0: number): this;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3x2d_): this;
        rotateLocal(arg0: number): this;
        rotateLocal(arg0: number, arg1: Internal.Matrix3x2d_): this;
        scale(arg0: Internal.Vector2dc_): this;
        toString(arg0: Internal.NumberFormat_): string;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix3x2d_): this;
        transform(arg0: Internal.Vector3d_): Internal.Vector3d;
        get3x3(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        translateLocal(arg0: number, arg1: number, arg2: Internal.Matrix3x2d_): this;
        clone(): any;
        transformPosition(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): Internal.Vector2d;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        set(arg0: Internal.Matrix3x2dc_): this;
        set(arg0: number[]): this;
        normalizedPositiveX(arg0: Internal.Vector2d_): Internal.Vector2d;
        translate(arg0: Internal.Vector2dc_, arg1: Internal.Matrix3x2d_): this;
        set(arg0: Internal.Matrix2fc_): this;
        view(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix3x2d_): this;
        translateLocal(arg0: Internal.Vector2dc_, arg1: Internal.Matrix3x2d_): this;
        getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        get4x4(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        get3x3(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        m00(): number;
        testPoint(arg0: number, arg1: number): boolean;
        scale(arg0: number, arg1: Internal.Matrix3x2d_): this;
        equals(arg0: Internal.Matrix3x2dc_, arg1: number): boolean;
        zero(): this;
        get(arg0: number[]): number[];
        determinant(): number;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        translation(arg0: Internal.Vector2dc_): this;
        scale(arg0: number, arg1: number, arg2: Internal.Matrix3x2d_): this;
        setTranslation(arg0: Internal.Vector2dc_): this;
        setTranslation(arg0: number, arg1: number): this;
        getToAddress(arg0: number): Internal.Matrix3x2dc;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number): this;
        testCircle(arg0: number, arg1: number, arg2: number): boolean;
        getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        scaleLocal(arg0: number, arg1: number): this;
        getTransposedFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        translation(arg0: number, arg1: number): this;
        scaling(arg0: number): this;
        set(arg0: Internal.DoubleBuffer_): this;
        getTransposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        scaling(arg0: number, arg1: number): this;
        m11(): number;
        get4x4(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        unprojectInv(arg0: number, arg1: number, arg2: number[], arg3: Internal.Vector2d_): Internal.Vector2d;
        translate(arg0: number, arg1: number): this;
        get4x4(arg0: number[]): number[];
        translate(arg0: number, arg1: number, arg2: Internal.Matrix3x2d_): this;
        normalizedPositiveY(arg0: Internal.Vector2d_): Internal.Vector2d;
        translate(arg0: Internal.Vector2dc_): this;
        transformPosition(arg0: Internal.Vector2d_): Internal.Vector2d;
        get(arg0: Internal.Matrix3x2d_): this;
        get3x3(arg0: number[]): number[];
        isFinite(): boolean;
        getTransposedFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        transformDirection(arg0: Internal.Vector2d_): Internal.Vector2d;
        mulLocal(arg0: Internal.Matrix3x2dc_, arg1: Internal.Matrix3x2d_): this;
        scaleAround(arg0: number, arg1: number, arg2: number): this;
        get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        get3x3(arg0: number[], arg1: number): number[];
        testAar(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        rotateAbout(arg0: number, arg1: number, arg2: number): this;
        scale(arg0: Internal.Vector2fc_): this;
        rotate(arg0: number, arg1: Internal.Matrix3x2d_): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3x2d_): this;
        invert(): this;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix3x2d_): this;
        m10(): number;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        scale(arg0: Internal.Vector2fc_, arg1: Internal.Matrix3x2d_): this;
        setView(arg0: number, arg1: number, arg2: number, arg3: number): this;
        invert(arg0: Internal.Matrix3x2d_): this;
        getTransposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        span(arg0: Internal.Vector2d_, arg1: Internal.Vector2d_, arg2: Internal.Vector2d_): this;
        set(arg0: Internal.ByteBuffer_): this;
        setFromAddress(arg0: number): this;
        rotateTo(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_, arg2: Internal.Matrix3x2d_): this;
        mulLocal(arg0: Internal.Matrix3x2dc_): this;
        get(arg0: number[], arg1: number): number[];
        get3x3(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        set(arg0: Internal.Matrix2dc_): this;
        identity(): this;
        m21(): number;
        positiveX(arg0: Internal.Vector2d_): Internal.Vector2d;
        transformDirection(arg0: Internal.Vector2dc_, arg1: Internal.Vector2d_): Internal.Vector2d;
        transform(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        scaleLocal(arg0: number, arg1: Internal.Matrix3x2d_): this;
        getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        get4x4(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        get3x3(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        scale(arg0: number, arg1: number): this;
        rotateAbout(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3x2d_): this;
        rotateTo(arg0: Internal.Vector2dc_, arg1: Internal.Vector2dc_): this;
        transform(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        mul(arg0: Internal.Matrix3x2dc_, arg1: Internal.Matrix3x2d_): this;
        get4x4(arg0: number[], arg1: number): number[];
        scaleLocal(arg0: number, arg1: number, arg2: Internal.Matrix3x2d_): this;
        mul(arg0: Internal.Matrix3x2dc_): this;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        scale(arg0: Internal.Vector2dc_, arg1: Internal.Matrix3x2d_): this;
        unproject(arg0: number, arg1: number, arg2: number[], arg3: Internal.Vector2d_): Internal.Vector2d;
        rotation(arg0: number): this;
        origin(arg0: Internal.Vector2d_): Internal.Vector2d;
        set(arg0: number, arg1: Internal.DoubleBuffer_): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        set translation(arg0: Internal.Vector2dc_)
        get finite(): boolean
        set fromAddress(arg0: number)
        m01: number;
        m10: number;
        m21: number;
        m00: number;
        m11: number;
        m20: number;
    }
    type Matrix3x2d_ = Matrix3x2d;
    class WitherSkull extends Internal.AbstractHurtingProjectile {
        constructor(arg0: Internal.EntityType_<Internal.WitherSkull>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: Internal.LivingEntity_, arg2: number, arg3: number, arg4: number)
        getDistance(pos: BlockPos_): number;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
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
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
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
        isDangerous(): boolean;
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
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        setDangerous(arg0: boolean): void;
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
        set motionY(y: number)
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
        get dangerous(): boolean
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        set dangerous(arg0: boolean)
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get motionZ(): number
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
    }
    type WitherSkull_ = WitherSkull;
    interface Matrix4dc {
        abstract unproject(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract mapZXY(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract unprojectInv(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        abstract invertOrtho(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract determinant3x3(): number;
        abstract rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): Internal.Matrix4d;
        abstract lookAt(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: Internal.Matrix4d_): Internal.Matrix4d;
        abstract get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract arcball(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): Internal.Matrix4d;
        abstract get(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract rotateTranslation(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract projectedGridRange(arg0: Internal.Matrix4dc_, arg1: number, arg2: number, arg3: Internal.Matrix4d_): Internal.Matrix4d;
        abstract lookAlong(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): Internal.Matrix4d;
        abstract transform(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract m20(): number;
        abstract getUnnormalizedRotation(arg0: Quaternionf_): Quaternionf;
        abstract origin(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract normal(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapnZnXnY(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapnXZnY(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract unproject(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        abstract pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: Internal.Matrix4d_): Internal.Matrix4d;
        abstract orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): Internal.Matrix4d;
        abstract perspectiveNear(): number;
        abstract ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): Internal.Matrix4d;
        abstract unprojectInv(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract perspectiveFov(): number;
        abstract get3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        abstract transformDirection(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract perspectiveOrigin(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract normalize3x3(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract reflect(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): Internal.Matrix4d;
        abstract getNormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract mul(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract positiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract get4x3Transposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract negateX(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract m31(): number;
        abstract invertFrustum(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract rotateAround(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): Internal.Matrix4d;
        abstract testSphere(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        abstract unprojectInvRay(arg0: Internal.Vector2dc_, arg1: number[], arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): Internal.Matrix4d;
        abstract rotateAroundAffine(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): Internal.Matrix4d;
        abstract getTranslation(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract normal(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        abstract rotate(arg0: Internal.AxisAngle4d_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract scaleLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): Internal.Matrix4d;
        abstract perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mul4x3ComponentWise(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract sub(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapZnXnY(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mul(arg0: Internal.Matrix3x2dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract transformAffine(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract unprojectInv(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        abstract normalize3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        abstract scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapnXnZnY(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract obliqueZ(arg0: number, arg1: number, arg2: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapnZnYnX(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract translate(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract sub4x3(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract lookAtPerspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapnYXZ(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapnXnZY(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): Internal.Matrix4d;
        abstract rotateAffine(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapXZnY(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract ortho2DLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): Internal.Matrix4d;
        abstract perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): Internal.Matrix4d;
        abstract transform(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract mapnZXY(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract rotate(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapnYXnZ(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract unprojectInv(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        abstract translateLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): Internal.Matrix4d;
        abstract transformAab(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): Internal.Matrix4d;
        abstract mapYXnZ(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract rotate(arg0: number, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): Internal.Matrix4d;
        abstract translate(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mulOrthoAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract rotateAffineYXZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): Internal.Matrix4d;
        abstract translateLocal(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapZnYnX(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapYXZ(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapXnZnY(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract m30(): number;
        abstract positiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract project(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector4d_): Internal.Vector4d;
        abstract invertPerspectiveView(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract negateY(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): Internal.Matrix4d;
        abstract testAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        abstract perspectiveFrustumSlice(arg0: number, arg1: number, arg2: Internal.Matrix4d_): Internal.Matrix4d;
        abstract frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): Internal.Matrix4d;
        abstract getRowColumn(arg0: number, arg1: number): number;
        abstract transpose3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        abstract rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): Internal.Matrix4d;
        abstract shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Internal.Matrix4d_): Internal.Matrix4d;
        abstract getColumn(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract perspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): Internal.Matrix4d;
        abstract m03(): number;
        abstract transformTranspose(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract isFinite(): boolean;
        abstract reflect(arg0: Internal.Quaterniondc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): Internal.Matrix4d;
        abstract project(arg0: Internal.Vector3dc_, arg1: number[], arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract shadow(arg0: Internal.Vector4dc_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapnYZX(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapZYX(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapYnZX(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract rotateLocal(arg0: Internal.Quaternionfc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract invertAffine(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract perspectiveInvOrigin(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract transformTranspose(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): Internal.Matrix4d;
        abstract rotateLocalX(arg0: number, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapnYnXZ(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract scale(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract transformDirection(arg0: Vector3f_): Vector3f;
        abstract get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract translateLocal(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract negateZ(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract rotateTowards(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Matrix4d_): Internal.Matrix4d;
        abstract get4x3Transposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract mulPerspectiveAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapnZYnX(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract transformProject(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract add4x3(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract rotate(arg0: Internal.AxisAngle4f_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract unprojectRay(arg0: number, arg1: number, arg2: number[], arg3: Internal.Vector3d_, arg4: Internal.Vector3d_): Internal.Matrix4d;
        abstract perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): Internal.Matrix4d;
        abstract get(arg0: number[], arg1: number): number[];
        abstract transformAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Vector3d_, arg7: Internal.Vector3d_): Internal.Matrix4d;
        abstract transformPosition(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract mulTranslationAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract fma4x3(arg0: Internal.Matrix4dc_, arg1: number, arg2: Internal.Matrix4d_): Internal.Matrix4d;
        abstract rotateAroundLocal(arg0: Internal.Quaterniondc_, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): Internal.Matrix4d;
        abstract m02(): number;
        abstract withLookAtUp(arg0: Internal.Vector3dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapnXZY(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract get4x3(arg0: Internal.Matrix4x3d_): Internal.Matrix4x3d;
        abstract invertPerspective(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract rotateAffineZYX(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): Internal.Matrix4d;
        abstract lookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): Internal.Matrix4d;
        abstract rotateLocalY(arg0: number, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract transformPosition(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract getNormalizedRotation(arg0: Quaternionf_): Quaternionf;
        abstract transformAffine(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract m13(): number;
        abstract shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4dc_, arg5: Internal.Matrix4d_): Internal.Matrix4d;
        abstract orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): Internal.Matrix4d;
        abstract transformProject(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): Internal.Matrix4d;
        abstract invertPerspectiveView(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract add4x3(arg0: Internal.Matrix4fc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract invert(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract isAffine(): boolean;
        abstract mul(arg0: Internal.Matrix3x2fc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapYZnX(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract get4x3Transposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mulComponentWise(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract translate(arg0: Internal.Vector3fc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract m01(): number;
        abstract mapnZXnY(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract rotateTranslation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): Internal.Matrix4d;
        abstract transformProject(arg0: Internal.Vector4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): Internal.Matrix4d;
        abstract rotateAffine(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapYnZnX(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract scale(arg0: number, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract rotateLocalZ(arg0: number, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract transformProject(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract get(arg0: number[]): number[];
        abstract transformDirection(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        abstract rotate(arg0: number, arg1: Internal.Vector3fc_, arg2: Internal.Matrix4d_): Internal.Matrix4d;
        abstract scaleLocal(arg0: number, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mul3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): Internal.Matrix4d;
        abstract m12(): number;
        abstract mapnZnXY(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract add(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapZnYX(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract get(arg0: number[], arg1: number): number[];
        abstract rotateZ(arg0: number, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract getToAddress(arg0: number): this;
        abstract mapnXnYZ(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract perspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapXnYnZ(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract rotateAffineXYZ(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mulPerspectiveAffine(arg0: Internal.Matrix4x3dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): Internal.Matrix4d;
        abstract rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): Internal.Matrix4d;
        abstract orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): Internal.Matrix4d;
        abstract frustumRayDir(arg0: number, arg1: number, arg2: Internal.Vector3d_): Internal.Vector3d;
        abstract getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract m23(): number;
        abstract lookAtLH(arg0: Internal.Vector3dc_, arg1: Internal.Vector3dc_, arg2: Internal.Vector3dc_, arg3: Internal.Matrix4d_): Internal.Matrix4d;
        abstract m00(): number;
        abstract mul0(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract get(arg0: number[]): number[];
        abstract determinant(): number;
        abstract properties(): number;
        abstract shadow(arg0: Internal.Vector4dc_, arg1: Internal.Matrix4dc_, arg2: Internal.Matrix4d_): Internal.Matrix4d;
        abstract rotateLocal(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mulLocalAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapYnXZ(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract transpose3x3(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract normalizedPositiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract mul(arg0: Internal.Matrix4fc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract getTransposedFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract getEulerAnglesZYX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract lerp(arg0: Internal.Matrix4dc_, arg1: number, arg2: Internal.Matrix4d_): Internal.Matrix4d;
        abstract getColumn(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateAffine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): Internal.Matrix4d;
        abstract getFloats(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract transformTranspose(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        abstract getTransposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract transformDirection(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract m11(): number;
        abstract transpose(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract transformProject(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract determinantAffine(): number;
        abstract transformDirection(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        abstract mapZYnX(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract originAffine(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): Internal.Matrix4d;
        abstract cofactor3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        abstract mapnZYX(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapnYnXnZ(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapYZX(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract transformProject(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector3d_): Internal.Vector3d;
        abstract orthoCrop(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract withLookAtUp(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): Internal.Matrix4d;
        abstract scaleXY(arg0: number, arg1: number, arg2: Internal.Matrix4d_): Internal.Matrix4d;
        abstract getRow(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract mapXnZY(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapnXYnZ(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract getTransposedFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract m22(): number;
        abstract mapZnXY(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract get4x3Transposed(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract unprojectRay(arg0: Internal.Vector2dc_, arg1: number[], arg2: Internal.Vector3d_, arg3: Internal.Vector3d_): Internal.Matrix4d;
        abstract mapnXnYnZ(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapnZnYX(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): Internal.Matrix4d;
        abstract frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): Internal.Matrix4d;
        abstract normalizedPositiveY(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract mul(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract rotateTowardsXY(arg0: number, arg1: number, arg2: Internal.Matrix4d_): Internal.Matrix4d;
        abstract project(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        abstract unproject(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        abstract getRow(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract getScale(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateX(arg0: number, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract m10(): number;
        abstract m33(): number;
        abstract get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract mapYnXnZ(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract transformDirection(arg0: number, arg1: number, arg2: number, arg3: Internal.Vector3d_): Internal.Vector3d;
        abstract unprojectInvRay(arg0: number, arg1: number, arg2: number[], arg3: Internal.Vector3d_, arg4: Internal.Vector3d_): Internal.Matrix4d;
        abstract getTransposed(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Internal.Matrix4d_): Internal.Matrix4d;
        abstract testPoint(arg0: number, arg1: number, arg2: number): boolean;
        abstract getEulerAnglesXYZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract project(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector4d_): Internal.Vector4d;
        abstract equals(arg0: Internal.Matrix4dc_, arg1: number): boolean;
        abstract mapnYZnX(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mul(arg0: Internal.Matrix4x3fc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract rotateTranslation(arg0: Internal.Quaterniondc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract lookAtPerspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Internal.Matrix4d_): Internal.Matrix4d;
        abstract unproject(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Internal.Vector3d_): Internal.Vector3d;
        abstract scale(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix4d_): Internal.Matrix4d;
        abstract perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): Internal.Matrix4d;
        abstract lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): Internal.Matrix4d;
        abstract tile(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): Internal.Matrix4d;
        abstract arcball(arg0: number, arg1: Internal.Vector3dc_, arg2: number, arg3: number, arg4: Internal.Matrix4d_): Internal.Matrix4d;
        abstract m21(): number;
        abstract transformAffine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        abstract perspectiveFar(): number;
        abstract mul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: Internal.Matrix4d_): Internal.Matrix4d;
        abstract frustumPlane(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract getUnnormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapXZY(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract mulAffineR(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapnYnZX(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract getFloats(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract frustumCorner(arg0: number, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract normalizedPositiveZ(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract cofactor3x3(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract get(arg0: number, arg1: number): number;
        abstract transformProject(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): Internal.Matrix4d;
        abstract frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mapnYnZnX(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): Internal.Matrix4d;
        abstract transformProject(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        abstract mulAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract transformPosition(arg0: Internal.Vector3dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Internal.Matrix4d_): Internal.Matrix4d;
        abstract m32(): number;
        abstract positiveX(arg0: Internal.Vector3d_): Internal.Vector3d;
        abstract rotateY(arg0: number, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract ortho2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4d_): Internal.Matrix4d;
        abstract mulLocal(arg0: Internal.Matrix4dc_, arg1: Internal.Matrix4d_): Internal.Matrix4d;
        abstract transform(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        abstract mapZXnY(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        get finite(): boolean
        get affine(): boolean
        readonly PLANE_PX: 1;
        readonly CORNER_PXNYPZ: 4;
        readonly PLANE_NY: 2;
        readonly PLANE_NZ: 4;
        readonly PLANE_PY: 3;
        readonly PLANE_NX: 0;
        readonly PLANE_PZ: 5;
        readonly PROPERTY_TRANSLATION: 8;
        readonly CORNER_PXNYNZ: 1;
        readonly CORNER_PXPYPZ: 7;
        readonly PROPERTY_IDENTITY: 4;
        readonly CORNER_PXPYNZ: 2;
        readonly PROPERTY_PERSPECTIVE: 1;
        readonly PROPERTY_ORTHONORMAL: 16;
        readonly CORNER_NXPYPZ: 6;
        readonly PROPERTY_AFFINE: 2;
        readonly CORNER_NXNYNZ: 0;
        readonly CORNER_NXNYPZ: 5;
        readonly CORNER_NXPYNZ: 3;
    }
    type Matrix4dc_ = Matrix4dc;
    interface GeoItem extends Internal.SingletonGeoAnimatable {
        registerSyncedAnimatable(arg0: Internal.GeoAnimatable_): void;
        triggerAnim<D>(arg0: number, arg1: string, arg2: string, arg3: Internal.PacketDistributor$PacketTarget_): void;
        getId(arg0: Internal.ItemStack_): number;
        animatableCacheOverride(): Internal.AnimatableInstanceCache;
        stopTriggeredArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        syncAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>, arg2: D, arg3: Internal.PacketDistributor$PacketTarget_): void;
        getBoneResetTime(): number;
        triggerArmorAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        getTick(arg0: any): number;
        getOrAssignId(arg0: Internal.ItemStack_, arg1: Internal.ServerLevel_): number;
        abstract getAnimatableInstanceCache(): Internal.AnimatableInstanceCache;
        getAnimData<D>(arg0: number, arg1: Internal.SerializableDataTicket_<D>): D;
        isPerspectiveAware(): boolean;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string, arg4: Internal.PacketDistributor$PacketTarget_): void;
        triggerAnim<D>(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        setAnimData<D>(arg0: Internal.Entity_, arg1: number, arg2: Internal.SerializableDataTicket_<D>, arg3: D): void;
        stopTriggeredAnim(arg0: Internal.Entity_, arg1: number, arg2: string, arg3: string): void;
        abstract registerControllers(arg0: Internal.AnimatableManager$ControllerRegistrar_): void;
        shouldPlayAnimsWhileGamePaused(): boolean;
        get boneResetTime(): number
        get animatableInstanceCache(): Internal.AnimatableInstanceCache
        get perspectiveAware(): boolean
        readonly ID_NBT_KEY: "GeckoLibID";
    }
    type GeoItem_ = GeoItem;
    class Matrix3x2f implements Internal.Cloneable, Internal.Matrix3x2fc, Internal.Externalizable {
        constructor()
        constructor(arg0: Internal.FloatBuffer_)
        constructor(arg0: Internal.Matrix2fc_)
        constructor(arg0: Internal.Matrix3x2fc_)
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
        m00(): number;
        get4x4(arg0: number[]): number[];
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix3x2f_): this;
        scaleLocal(arg0: number, arg1: Internal.Matrix3x2f_): this;
        normalizedPositiveX(arg0: Internal.Vector2f_): Internal.Vector2f;
        translate(arg0: Internal.Vector2fc_): this;
        get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        shearX(arg0: number): this;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number): this;
        testCircle(arg0: number, arg1: number, arg2: number): boolean;
        translation(arg0: number, arg1: number): this;
        translate(arg0: number, arg1: number, arg2: Internal.Matrix3x2f_): this;
        view(arg0: number, arg1: number, arg2: number, arg3: number): this;
        get(arg0: number[]): number[];
        set(arg0: number[]): this;
        rotateLocal(arg0: number, arg1: Internal.Matrix3x2f_): this;
        rotateTo(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_, arg2: Internal.Matrix3x2f_): this;
        get4x4(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        rotateTo(arg0: Internal.Vector2fc_, arg1: Internal.Vector2fc_): this;
        toString(arg0: Internal.NumberFormat_): string;
        get(arg0: number[], arg1: number): number[];
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3x2f_): this;
        scaleLocal(arg0: number, arg1: number): this;
        scale(arg0: number, arg1: number): this;
        m01(): number;
        translateLocal(arg0: Internal.Vector2fc_, arg1: Internal.Matrix3x2f_): this;
        clone(): any;
        testAar(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        writeExternal(arg0: Internal.ObjectOutput_): void;
        rotate(arg0: number): this;
        translate(arg0: Internal.Vector2fc_, arg1: Internal.Matrix3x2f_): this;
        span(arg0: Internal.Vector2f_, arg1: Internal.Vector2f_, arg2: Internal.Vector2f_): this;
        normalizedPositiveY(arg0: Internal.Vector2f_): Internal.Vector2f;
        mulLocal(arg0: Internal.Matrix3x2fc_): this;
        set(arg0: Internal.Matrix2fc_): this;
        shearY(arg0: number): this;
        m20(): number;
        transformPosition(arg0: Internal.Vector2f_): Internal.Vector2f;
        transform(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        get3x3(arg0: number[]): number[];
        get4x4(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        get3x3(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        get4x4(arg0: number[], arg1: number): number[];
        zero(): this;
        set(arg0: number, arg1: Internal.ByteBuffer_): this;
        scaling(arg0: number): this;
        viewArea(arg0: number[]): number[];
        setView(arg0: number, arg1: number, arg2: number, arg3: number): this;
        unproject(arg0: number, arg1: number, arg2: number[], arg3: Internal.Vector2f_): Internal.Vector2f;
        rotateAbout(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3x2f_): this;
        translateLocal(arg0: number, arg1: number): this;
        set(arg0: Internal.FloatBuffer_): this;
        setTranslation(arg0: Internal.Vector2f_): this;
        mul(arg0: Internal.Matrix3x2fc_): this;
        equals(arg0: Internal.Matrix3x2fc_, arg1: number): boolean;
        transform(arg0: Vector3f_): Vector3f;
        translateLocal(arg0: number, arg1: number, arg2: Internal.Matrix3x2f_): this;
        shearY(arg0: number, arg1: Internal.Matrix3x2f_): this;
        testPoint(arg0: number, arg1: number): boolean;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number): this;
        transformPosition(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): Internal.Vector2f;
        rotate(arg0: number, arg1: Internal.Matrix3x2f_): this;
        get3x3(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        setTranslation(arg0: number, arg1: number): this;
        unprojectInv(arg0: number, arg1: number, arg2: number[], arg3: Internal.Vector2f_): Internal.Vector2f;
        translateLocal(arg0: Internal.Vector2fc_): this;
        scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix3x2f_): this;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        set(arg0: number, arg1: Internal.FloatBuffer_): this;
        m21(): number;
        scaling(arg0: number, arg1: number): this;
        isFinite(): boolean;
        positiveX(arg0: Internal.Vector2f_): Internal.Vector2f;
        get4x4(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        rotateLocal(arg0: number): this;
        mulLocal(arg0: Internal.Matrix3x2fc_, arg1: Internal.Matrix3x2f_): this;
        transformDirection(arg0: number, arg1: number, arg2: Internal.Vector2f_): Internal.Vector2f;
        m10(): number;
        translation(arg0: Internal.Vector2fc_): this;
        getToAddress(arg0: number): Internal.Matrix3x2fc;
        scale(arg0: number): this;
        translate(arg0: number, arg1: number): this;
        scale(arg0: Internal.Vector2fc_): this;
        readExternal(arg0: Internal.ObjectInput_): void;
        scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: Internal.Matrix3x2f_): this;
        scaleAround(arg0: number, arg1: number, arg2: number): this;
        scaleLocal(arg0: number): this;
        transformPosition(arg0: number, arg1: number, arg2: Internal.Vector2f_): Internal.Vector2f;
        scaleLocal(arg0: number, arg1: number, arg2: Internal.Matrix3x2f_): this;
        get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        shearX(arg0: number, arg1: Internal.Matrix3x2f_): this;
        invert(): this;
        view(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix3x2f_): this;
        get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        determinant(): number;
        scale(arg0: number, arg1: number, arg2: Internal.Matrix3x2f_): this;
        origin(arg0: Internal.Vector2f_): Internal.Vector2f;
        set(arg0: Internal.Matrix3x2fc_): this;
        set(arg0: Internal.ByteBuffer_): this;
        setFromAddress(arg0: number): this;
        get3x3(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        transform(arg0: Vector3f_, arg1: Vector3f_): Vector3f;
        get(arg0: Internal.Matrix3x2f_): this;
        positiveY(arg0: Internal.Vector2f_): Internal.Vector2f;
        transformDirection(arg0: Internal.Vector2f_): Internal.Vector2f;
        identity(): this;
        transformDirection(arg0: Internal.Vector2fc_, arg1: Internal.Vector2f_): Internal.Vector2f;
        m11(): number;
        get4x4(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        get3x3(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        rotation(arg0: number): this;
        set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): this;
        get3x3(arg0: number[], arg1: number): number[];
        mul(arg0: Internal.Matrix3x2fc_, arg1: Internal.Matrix3x2f_): this;
        rotateAbout(arg0: number, arg1: number, arg2: number): this;
        scale(arg0: number, arg1: Internal.Matrix3x2f_): this;
        scale(arg0: Internal.Vector2fc_, arg1: Internal.Matrix3x2f_): this;
        invert(arg0: Internal.Matrix3x2f_): this;
        set translation(arg0: Internal.Vector2f_)
        get finite(): boolean
        set fromAddress(arg0: number)
        m10: number;
        m21: number;
        m20: number;
        m01: number;
        m00: number;
        m11: number;
    }
    type Matrix3x2f_ = Matrix3x2f;
    class TagWrapper {
        constructor(e: Internal.TagEventJS_, i: ResourceLocation_, t: Internal.List_<Internal.TagLoader$EntryWithSource>)
        add(...filters: any[]): this;
        removeAll(): this;
        remove(...filters: any[]): this;
        getObjectIds(): Internal.List<ResourceLocation>;
        get objectIds(): Internal.List<ResourceLocation>
        readonly event: Internal.TagEventJS;
        readonly entries: Internal.List<Internal.TagLoader$EntryWithSource>;
        readonly id: ResourceLocation;
    }
    type TagWrapper_ = TagWrapper;
    class GsonBuilder {
        constructor()
        disableHtmlEscaping(): this;
        disableInnerClassSerialization(): this;
        generateNonExecutableJson(): this;
        setDateFormat(arg0: string): this;
        setVersion(arg0: number): this;
        create(): Internal.Gson;
        setPrettyPrinting(): this;
        excludeFieldsWithoutExposeAnnotation(): this;
        setLenient(): this;
        registerTypeHierarchyAdapter(arg0: typeof any, arg1: any): this;
        setLongSerializationPolicy(arg0: Internal.LongSerializationPolicy_): this;
        addReflectionAccessFilter(arg0: Internal.ReflectionAccessFilter_): this;
        addDeserializationExclusionStrategy(arg0: Internal.ExclusionStrategy_): this;
        setFieldNamingPolicy(arg0: Internal.FieldNamingPolicy_): this;
        setObjectToNumberStrategy(arg0: Internal.ToNumberStrategy_): this;
        setDateFormat(arg0: number, arg1: number): this;
        registerTypeAdapter(arg0: Internal.Type_, arg1: any): this;
        addSerializationExclusionStrategy(arg0: Internal.ExclusionStrategy_): this;
        disableJdkUnsafe(): this;
        enableComplexMapKeySerialization(): this;
        serializeSpecialFloatingPointValues(): this;
        setNumberToNumberStrategy(arg0: Internal.ToNumberStrategy_): this;
        setDateFormat(arg0: number): this;
        excludeFieldsWithModifiers(...arg0: number[]): this;
        setExclusionStrategies(...arg0: Internal.ExclusionStrategy_[]): this;
        setFieldNamingStrategy(arg0: Internal.FieldNamingStrategy_): this;
        serializeNulls(): this;
        registerTypeAdapterFactory(arg0: Internal.TypeAdapterFactory_): this;
        set dateFormat(arg0: string)
        set version(arg0: number)
        set longSerializationPolicy(arg0: Internal.LongSerializationPolicy_)
        set fieldNamingPolicy(arg0: Internal.FieldNamingPolicy_)
        set objectToNumberStrategy(arg0: Internal.ToNumberStrategy_)
        set numberToNumberStrategy(arg0: Internal.ToNumberStrategy_)
        set dateFormat(arg0: number)
        set exclusionStrategies(...arg0: Internal.ExclusionStrategy_[])
        set fieldNamingStrategy(arg0: Internal.FieldNamingStrategy_)
    }
    type GsonBuilder_ = GsonBuilder;
    class BlockAndItemGeoLayer <T extends Internal.GeoAnimatable> extends Internal.GeoRenderLayer<T> {
        constructor(arg0: Internal.GeoRenderer_<T>, arg1: Internal.BiFunction_<Internal.GeoBone, T, Internal.ItemStack>, arg2: Internal.BiFunction_<Internal.GeoBone, T, Internal.BlockState>)
        constructor(arg0: Internal.GeoRenderer_<T>)
    }
    type BlockAndItemGeoLayer_<T extends Internal.GeoAnimatable> = BlockAndItemGeoLayer<T>;
    class BaseLivingEntityBuilder$CustomInstructionKeyframeEventJS <E extends Internal.LivingEntity & Internal.IAnimatableJS> extends Internal.BaseLivingEntityBuilder$KeyFrameEventJS<E, Internal.CustomInstructionKeyframeData> {
        constructor(parent: Internal.CustomInstructionKeyframeEvent_<E>)
        /**
         * A list of all the custom instructions. In Blockbench, each line in the custom instruction box is a separate instruction.
        */
        readonly instructions: string;
    }
    type BaseLivingEntityBuilder$CustomInstructionKeyframeEventJS_<E extends Internal.LivingEntity & Internal.IAnimatableJS> = BaseLivingEntityBuilder$CustomInstructionKeyframeEventJS<E>;
    class BaseTriggerInstanceBuilder implements Internal.EntitySetter {
        constructor()
        wrapEntity(arg0: Internal.EntityPredicate_): Internal.ContextAwarePredicate;
        setPlayerByPredicate(arg0: Internal.PlayerPredicate_): void;
        setPlayer(arg0: Internal.Consumer_<Internal.PlayerPredicateBuilder>): void;
        toEntity(arg0: Internal.EntityType_<any>): Internal.EntityPredicate;
        setPlayerByCondition(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): void;
        wrapEntity(arg0: Internal.EntityType_<any>): Internal.ContextAwarePredicate;
        wrapEntity(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): Internal.ContextAwarePredicate;
        set playerByPredicate(arg0: Internal.PlayerPredicate_)
        set player(arg0: Internal.Consumer_<Internal.PlayerPredicateBuilder>)
        set playerByCondition(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[])
        player: Internal.ContextAwarePredicate;
    }
    type BaseTriggerInstanceBuilder_ = BaseTriggerInstanceBuilder;
    abstract class Pointer$Default implements Internal.Pointer {
        address(): number;
    }
    type Pointer$Default_ = Pointer$Default;
    class ClientboundRotateHeadPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.Entity_, arg1: number)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getEntity(arg0: Internal.Level_): Internal.Entity;
        getYHeadRot(): number;
        isSkippable(): boolean;
        get YHeadRot(): number
        get skippable(): boolean
    }
    type ClientboundRotateHeadPacket_ = ClientboundRotateHeadPacket;
    class AdvLockEventJS extends Internal.EventJS implements Internal.ItemSetter {
        constructor()
        /**
         * Deny player interact with specific block.
        */
        blockInteract(arg0: Internal.Block_, arg1: ResourceLocation_): void;
        /**
         * Pass player interact with specific type of entities, and send message to player.
        */
        entityInteract(arg0: Internal.EntityType_<any>, arg1: ResourceLocation_, arg2: Internal.Component_): void;
        /**
         * Pass item use or use on block, and send message to player.
        */
        itemUse(arg0: Internal.Item_, arg1: ResourceLocation_, arg2: Internal.Component_): void;
        wrapItem(arg0: Internal.Ingredient_): Internal.ItemPredicate;
        /**
         * Pass item use or use on block.
        */
        itemUse(arg0: Internal.Item_, arg1: ResourceLocation_): void;
        /**
         * Deny player take specific result. It only available in GUI.
        */
        result(arg0: Internal.Ingredient_, arg1: ResourceLocation_): void;
        /**
         * Pass player interact with specific type of entities.
        */
        entityInteract(arg0: Internal.EntityType_<any>, arg1: ResourceLocation_): void;
        /**
         * Deny player take specific result. It only available in GUI.
        */
        result(arg0: Internal.Consumer_<Internal.ItemPredicateBuilder>, arg1: ResourceLocation_): void;
        /**
         * Deny player interact with specific block, and send message to player.
        */
        blockInteract(arg0: Internal.Block_, arg1: ResourceLocation_, arg2: Internal.Component_): void;
    }
    type AdvLockEventJS_ = AdvLockEventJS;
    class SPacketUIWidgetUpdate implements Internal.IPacket {
        constructor()
        constructor(windowId: number, updateData: Internal.FriendlyByteBuf_)
        encode(buf: Internal.FriendlyByteBuf_): void;
        decode(buf: Internal.FriendlyByteBuf_): void;
        execute(handler: Internal.IHandlerContext_): void;
        updateData: Internal.FriendlyByteBuf;
        windowId: number;
    }
    type SPacketUIWidgetUpdate_ = SPacketUIWidgetUpdate;
    interface PreparableReloadListener {
        getName(): string;
        abstract reload(arg0: Internal.PreparableReloadListener$PreparationBarrier_, arg1: Internal.ResourceManager_, arg2: Internal.ProfilerFiller_, arg3: Internal.ProfilerFiller_, arg4: Internal.Executor_, arg5: Internal.Executor_): Internal.CompletableFuture<void>;
        get name(): string
        (arg0: Internal.PreparableReloadListener$PreparationBarrier, arg1: Internal.ResourceManager, arg2: Internal.ProfilerFiller, arg3: Internal.ProfilerFiller, arg4: Internal.Executor, arg5: Internal.Executor): Internal.CompletableFuture_<void>;
    }
    type PreparableReloadListener_ = PreparableReloadListener;
    class ConfiguredBiomeCondition <C extends Internal.IDynamicFeatureConfiguration, F extends io.github.edwinmindcraft.apoli.api.power.factory.BiomeCondition<C>> extends Internal.ConfiguredCondition<C, F, Internal.ConfiguredBiomeCondition<any, any>> {
        constructor(arg0: Internal.Supplier_<F>, arg1: C, arg2: Internal.ConditionData_)
        static check(arg0: Internal.Holder_<Internal.ConfiguredBiomeCondition<any, any>>, arg1: Internal.Holder_<Internal.Biome>): boolean;
        check(arg0: Internal.Holder_<Internal.Biome>): boolean;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        static optional(arg0: string): Internal.MapCodec<Internal.Holder<Internal.ConfiguredBiomeCondition<any, any>>>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getMissingBinds(): Internal.List<string>;
        static required(arg0: string): Internal.MapCodec<Internal.Holder<Internal.ConfiguredBiomeCondition<any, any>>>;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        static readonly CODEC_SET: Internal.CodecSet<Internal.ConfiguredBiomeCondition<any, any>>;
        static readonly HOLDER: Internal.Codec<Internal.Holder<Internal.ConfiguredBiomeCondition<any, any>>>;
        static readonly CODEC: Internal.Codec<Internal.ConfiguredBiomeCondition<any, any>>;
    }
    type ConfiguredBiomeCondition_<C extends Internal.IDynamicFeatureConfiguration, F extends io.github.edwinmindcraft.apoli.api.power.factory.BiomeCondition<C>> = Special.ConfiguredBiomeCondition | ConfiguredBiomeCondition<C, F>;
    interface FallingBlockEntityAccessor {
        abstract setBlockState(arg0: Internal.BlockState_): void;
        abstract hasFallBlocking(): boolean;
        abstract setFallBlockingTime(): void;
        set blockState(arg0: Internal.BlockState_)
    }
    type FallingBlockEntityAccessor_ = FallingBlockEntityAccessor;
    interface IScreenHelper {
        abstract getClickableIngredientUnderMouse(arg0: Internal.Screen_, arg1: number, arg2: number): Internal.Stream<Internal.IClickableIngredient<any>>;
        abstract getGhostIngredientHandlers<T extends Internal.Screen>(arg0: T): Internal.List<Internal.IGhostIngredientHandler<T>>;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getGhostIngredientHandler<T extends Internal.Screen>(arg0: T): Internal.Optional<Internal.IGhostIngredientHandler<T>>;
        abstract getGuiExclusionAreas(arg0: Internal.Screen_): Internal.Stream<Internal.Rect2i>;
        abstract getGuiProperties<T extends Internal.Screen>(arg0: T): Internal.Optional<Internal.IGuiProperties>;
        abstract getGuiClickableArea(arg0: Internal.AbstractContainerScreen_<any>, arg1: number, arg2: number): Internal.Stream<Internal.IGuiClickableArea>;
    }
    type IScreenHelper_ = IScreenHelper;
    abstract class ReentrantBlockableEventLoop <R extends Internal.Runnable> extends Internal.BlockableEventLoop<R> {
        constructor(arg0: string)
        askEither<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Internal.Either<Source, Internal.Exception>>, R>): Internal.CompletableFuture<Source>;
        static of<Msg>(arg0: string, arg1: Internal.Consumer_<Msg>): Internal.ProcessorHandle<Msg>;
        close(): void;
        runningTask(): boolean;
        ask<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Source>, R>): Internal.CompletableFuture<Source>;
    }
    type ReentrantBlockableEventLoop_<R extends Internal.Runnable> = ReentrantBlockableEventLoop<R>;
    class AnimationController <T extends Internal.GeoAnimatable> implements Internal.IAnimationControllerJS {
        constructor(arg0: T, arg1: number, arg2: Internal.AnimationController$AnimationStateHandler_<T>)
        constructor(arg0: T, arg1: string, arg2: Internal.AnimationController$AnimationStateHandler_<T>)
        constructor(arg0: T, arg1: Internal.AnimationController$AnimationStateHandler_<T>)
        constructor(arg0: T, arg1: string, arg2: number, arg3: Internal.AnimationController$AnimationStateHandler_<T>)
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        setTransitionLength(arg0: number): void;
        getCurrentAnimationTick(): number;
        setOverrideEasingTypeFunction(arg0: Internal.Function_<T, Internal.EasingType>): this;
        getStateHandler(): Internal.AnimationController$AnimationStateHandler<T>;
        process(arg0: Internal.CoreGeoModel_<T>, arg1: software.bernie.geckolib.core.animation.AnimationState_<T>, arg2: Internal.Map_<string, Internal.CoreGeoBone>, arg3: Internal.Map_<string, Internal.BoneSnapshot>, arg4: number, arg5: boolean): void;
        setCustomInstructionKeyframeHandler(arg0: Internal.AnimationController$CustomKeyframeHandler_<T>): this;
        getName(): string;
        hasAnimationFinished(): boolean;
        getAnimationSpeed(): number;
        isPlayingTriggeredAnimation(): boolean;
        tryTriggerAnimation(arg0: string): boolean;
        transitionLength(arg0: number): this;
        getCurrentRawAnimation(): Internal.RawAnimation;
        setParticleKeyframeHandler(arg0: Internal.AnimationController$ParticleKeyframeHandler_<T>): this;
        receiveTriggeredAnimations(): this;
        setOverrideEasingType(arg0: Internal.EasingType_): this;
        getCurrentAnimation(): Internal.AnimationProcessor$QueuedAnimation;
        getAnimationState(): Internal.AnimationController$State;
        setSoundKeyframeHandler(arg0: Internal.AnimationController$SoundKeyframeHandler_<T>): this;
        getBoneAnimationQueues(): Internal.Map<string, Internal.BoneAnimationQueue>;
        setAnimationSpeedHandler(arg0: Internal.Function_<T, number>): this;
        triggerableAnim(arg0: string, arg1: Internal.RawAnimation_): this;
        setAnimationSpeed(arg0: number): this;
        setAnimation(arg0: Internal.RawAnimation_): void;
        forceAnimationReset(): void;
        stop(): void;
        getTriggeredAnimation(): Internal.RawAnimation;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        set transitionLength(arg0: number)
        get currentAnimationTick(): number
        set overrideEasingTypeFunction(arg0: Internal.Function_<T, Internal.EasingType>)
        get stateHandler(): Internal.AnimationController$AnimationStateHandler<T>
        set customInstructionKeyframeHandler(arg0: Internal.AnimationController$CustomKeyframeHandler_<T>)
        get name(): string
        get animationSpeed(): number
        get playingTriggeredAnimation(): boolean
        get currentRawAnimation(): Internal.RawAnimation
        set particleKeyframeHandler(arg0: Internal.AnimationController$ParticleKeyframeHandler_<T>)
        set overrideEasingType(arg0: Internal.EasingType_)
        get currentAnimation(): Internal.AnimationProcessor$QueuedAnimation
        get animationState(): Internal.AnimationController$State
        set soundKeyframeHandler(arg0: Internal.AnimationController$SoundKeyframeHandler_<T>)
        get boneAnimationQueues(): Internal.Map<string, Internal.BoneAnimationQueue>
        set animationSpeedHandler(arg0: Internal.Function_<T, number>)
        set animationSpeed(arg0: number)
        set animation(arg0: Internal.RawAnimation_)
        get triggeredAnimation(): Internal.RawAnimation
    }
    type AnimationController_<T extends Internal.GeoAnimatable> = AnimationController<T>;
    class CooldownConfiguration extends Internal.Record implements Internal.ICooldownPowerConfiguration {
        constructor(duration: number, hudRender: Internal.HudRender_)
        isConfigurationValid(): boolean;
        hudRender(): Internal.HudRender;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        duration(): number;
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
        static readonly CODEC: Internal.Codec<Internal.CooldownConfiguration>;
    }
    type CooldownConfiguration_ = CooldownConfiguration;
    interface IModBusEvent {
    }
    type IModBusEvent_ = IModBusEvent;
    interface DoubleSpliterator extends Internal.Spliterator$OfDouble {
        forEachRemaining(arg0: any): void;
        forEachRemaining(arg0: it.unimi.dsi.fastutil.doubles.DoubleConsumer_): void;
        getComparator(): Internal.Comparator<any>;
        hasCharacteristics(arg0: number): boolean;
        tryAdvance(arg0: it.unimi.dsi.fastutil.doubles.DoubleConsumer_): boolean;
        skip(arg0: number): number;
        abstract estimateSize(): number;
        trySplit(): Internal.Spliterator$OfPrimitive<any, any, any>;
        /**
         * @deprecated
        */
        forEachRemaining(arg0: Internal.Consumer_<number>): void;
        getExactSizeIfKnown(): number;
        forEachRemaining(arg0: Internal.DoubleConsumer_): void;
        /**
         * @deprecated
        */
        tryAdvance(arg0: Internal.Consumer_<number>): boolean;
        tryAdvance(arg0: any): boolean;
        abstract characteristics(): number;
        abstract tryAdvance(arg0: Internal.DoubleConsumer_): boolean;
        get comparator(): Internal.Comparator<any>
        get exactSizeIfKnown(): number
    }
    type DoubleSpliterator_ = DoubleSpliterator;
    interface LevelChunk$PostLoadProcessor {
        abstract run(arg0: Internal.LevelChunk_): void;
        (arg0: Internal.LevelChunk): void;
    }
    type LevelChunk$PostLoadProcessor_ = LevelChunk$PostLoadProcessor;
    interface BakedQuadView extends Internal.ModelQuadView {
        abstract getTexU(arg0: number): number;
        abstract getFlags(): number;
        abstract getTexV(arg0: number): number;
        abstract getNormalFace(): Internal.ModelQuadFacing;
        abstract getSprite(): Internal.TextureAtlasSprite;
        hasAmbientOcclusion(): boolean;
        abstract getLight(arg0: number): number;
        abstract getComputedFaceNormal(): number;
        getModFaceNormal(): number;
        abstract getForgeNormal(arg0: number): number;
        abstract hasShade(): boolean;
        hasColor(): boolean;
        abstract getColor(arg0: number): number;
        abstract getLightFace(): Internal.Direction;
        abstract getZ(arg0: number): number;
        abstract getColorIndex(): number;
        abstract getX(arg0: number): number;
        abstract getY(arg0: number): number;
        abstract setFlags(arg0: number): void;
        get flags(): number
        get normalFace(): Internal.ModelQuadFacing
        get sprite(): Internal.TextureAtlasSprite
        get computedFaceNormal(): number
        get modFaceNormal(): number
        get lightFace(): Internal.Direction
        get colorIndex(): number
        set flags(arg0: number)
    }
    type BakedQuadView_ = BakedQuadView;
    class FishingLootEventJS extends Internal.LootEventJS {
        constructor(c: Internal.Map_<ResourceLocation, Internal.JsonElement>)
        addFishing(id: ResourceLocation_, b: Internal.Consumer_<Internal.LootBuilder>): void;
    }
    type FishingLootEventJS_ = FishingLootEventJS;
    abstract class ShoulderRidingEntity extends Internal.TamableAnimal {
        constructor(arg0: Internal.EntityType_<Internal.ShoulderRidingEntity>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getOwner(): Internal.LivingEntity;
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
        setEntityOnShoulder(arg0: Internal.ServerPlayer_): boolean;
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
        canSitOnShoulder(): boolean;
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
        get owner(): Internal.LivingEntity
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
        set entityOnShoulder(arg0: Internal.ServerPlayer_)
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
    type ShoulderRidingEntity_ = ShoulderRidingEntity;
    class BioluminescentWallTorch extends Internal.WallTorchBlock implements Internal.SimpleWaterloggedBlock {
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
        static readonly WATERLOGGED: Internal.BooleanProperty;
    }
    type BioluminescentWallTorch_ = BioluminescentWallTorch;
    interface Matrix4fc {
        abstract project(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Vec4f_): Vec4f;
        abstract getEulerAnglesXYZ(arg0: Vector3f_): Vector3f;
        abstract get4x3Transposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract mulComponentWise(arg0: Internal.Matrix4fc_, arg1: Matrix4f_): Matrix4f;
        abstract scaleXY(arg0: number, arg1: number, arg2: Matrix4f_): Matrix4f;
        abstract get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract reflect(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Matrix4f_): Matrix4f;
        abstract transformPosition(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        abstract unprojectInvRay(arg0: number, arg1: number, arg2: number[], arg3: Vector3f_, arg4: Vector3f_): Matrix4f;
        abstract scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix4f_): Matrix4f;
        abstract mul3x3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Matrix4f_): Matrix4f;
        abstract mapnZnYnX(arg0: Matrix4f_): Matrix4f;
        abstract get(arg0: Internal.Matrix4d_): Internal.Matrix4d;
        abstract pick(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: Matrix4f_): Matrix4f;
        abstract tile(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix4f_): Matrix4f;
        abstract rotateY(arg0: number, arg1: Matrix4f_): Matrix4f;
        abstract perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Matrix4f_): Matrix4f;
        abstract transformProject(arg0: Internal.Vector4fc_, arg1: Vector3f_): Vector3f;
        abstract mapnXZY(arg0: Matrix4f_): Matrix4f;
        abstract ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Matrix4f_): Matrix4f;
        abstract testSphere(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        abstract mapnXnZY(arg0: Matrix4f_): Matrix4f;
        abstract getUnnormalizedRotation(arg0: Quaternionf_): Quaternionf;
        abstract mapXZY(arg0: Matrix4f_): Matrix4f;
        abstract perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Matrix4f_): Matrix4f;
        abstract rotateAffine(arg0: Internal.Quaternionfc_, arg1: Matrix4f_): Matrix4f;
        abstract get4x3(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract mul(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: Matrix4f_): Matrix4f;
        abstract mapXZnY(arg0: Matrix4f_): Matrix4f;
        abstract rotateLocalX(arg0: number, arg1: Matrix4f_): Matrix4f;
        abstract mapnZXY(arg0: Matrix4f_): Matrix4f;
        abstract rotate(arg0: Internal.Quaternionfc_, arg1: Matrix4f_): Matrix4f;
        abstract mapnYXnZ(arg0: Matrix4f_): Matrix4f;
        abstract transform(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vec4f_): Vec4f;
        abstract get3x3(arg0: Internal.Matrix3d_): Internal.Matrix3d;
        abstract obliqueZ(arg0: number, arg1: number, arg2: Matrix4f_): Matrix4f;
        abstract add(arg0: Internal.Matrix4fc_, arg1: Matrix4f_): Matrix4f;
        abstract m31(): number;
        abstract mapYXnZ(arg0: Matrix4f_): Matrix4f;
        abstract getNormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract transformAffine(arg0: Vec4f_): Vec4f;
        abstract get4x3Transposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract mapZnYnX(arg0: Matrix4f_): Matrix4f;
        abstract getRowColumn(arg0: number, arg1: number): number;
        abstract positiveZ(arg0: Vector3f_): Vector3f;
        abstract transformDirection(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        abstract scaleAround(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Matrix4f_): Matrix4f;
        abstract negateY(arg0: Matrix4f_): Matrix4f;
        abstract mapZXY(arg0: Matrix4f_): Matrix4f;
        abstract cofactor3x3(arg0: Matrix3f_): Matrix3f;
        abstract lookAt(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_, arg3: Matrix4f_): Matrix4f;
        abstract mapnYnXnZ(arg0: Matrix4f_): Matrix4f;
        abstract m20(): number;
        abstract mapXnZY(arg0: Matrix4f_): Matrix4f;
        abstract get(arg0: Matrix4f_): Matrix4f;
        abstract orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Matrix4f_): Matrix4f;
        abstract transform(arg0: Vec4f_): Vec4f;
        abstract rotateX(arg0: number, arg1: Matrix4f_): Matrix4f;
        abstract lookAtLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Matrix4f_): Matrix4f;
        abstract perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Matrix4f_): Matrix4f;
        abstract mul0(arg0: Internal.Matrix4fc_, arg1: Matrix4f_): Matrix4f;
        abstract normal(arg0: Matrix4f_): Matrix4f;
        abstract rotateYXZ(arg0: number, arg1: number, arg2: number, arg3: Matrix4f_): Matrix4f;
        abstract rotateLocalY(arg0: number, arg1: Matrix4f_): Matrix4f;
        abstract rotateLocal(arg0: Internal.Quaternionfc_, arg1: Matrix4f_): Matrix4f;
        abstract invertAffine(arg0: Matrix4f_): Matrix4f;
        abstract shadow(arg0: Vec4f_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Matrix4f_): Matrix4f;
        abstract mulLocalAffine(arg0: Internal.Matrix4fc_, arg1: Matrix4f_): Matrix4f;
        abstract unprojectRay(arg0: number, arg1: number, arg2: number[], arg3: Vector3f_, arg4: Vector3f_): Matrix4f;
        abstract arcball(arg0: number, arg1: Internal.Vector3fc_, arg2: number, arg3: number, arg4: Matrix4f_): Matrix4f;
        abstract perspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix4f_): Matrix4f;
        abstract get3x3(arg0: Matrix3f_): Matrix3f;
        abstract getTransposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract normalize3x3(arg0: Matrix4f_): Matrix4f;
        abstract orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Matrix4f_): Matrix4f;
        abstract m32(): number;
        abstract getScale(arg0: Vector3f_): Vector3f;
        abstract unproject(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Vector3f_): Vector3f;
        abstract rotateAffineZYX(arg0: number, arg1: number, arg2: number, arg3: Matrix4f_): Matrix4f;
        abstract lookAlong(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Matrix4f_): Matrix4f;
        abstract invertFrustum(arg0: Matrix4f_): Matrix4f;
        abstract transformProject(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract mapYnXnZ(arg0: Matrix4f_): Matrix4f;
        abstract negateZ(arg0: Matrix4f_): Matrix4f;
        abstract normal(arg0: Matrix3f_): Matrix3f;
        abstract lookAtPerspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Matrix4f_): Matrix4f;
        abstract transformProject(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        abstract lerp(arg0: Internal.Matrix4fc_, arg1: number, arg2: Matrix4f_): Matrix4f;
        abstract getRotation(arg0: Internal.AxisAngle4d_): Internal.AxisAngle4d;
        abstract rotate(arg0: Internal.AxisAngle4f_, arg1: Matrix4f_): Matrix4f;
        abstract mapZnXnY(arg0: Matrix4f_): Matrix4f;
        abstract rotateAffineXYZ(arg0: number, arg1: number, arg2: number, arg3: Matrix4f_): Matrix4f;
        abstract orthoCrop(arg0: Internal.Matrix4fc_, arg1: Matrix4f_): Matrix4f;
        abstract m21(): number;
        abstract get3x4(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract isFinite(): boolean;
        abstract transformProject(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        abstract get4x3Transposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract get4x3(arg0: Internal.Matrix4x3f_): Internal.Matrix4x3f;
        abstract rotateTowards(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Matrix4f_): Matrix4f;
        abstract unprojectInvRay(arg0: Internal.Vector2fc_, arg1: number[], arg2: Vector3f_, arg3: Vector3f_): Matrix4f;
        abstract m10(): number;
        abstract shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: Matrix4f_): Matrix4f;
        abstract transpose3x3(arg0: Matrix4f_): Matrix4f;
        abstract mul(arg0: Internal.Matrix4fc_, arg1: Matrix4f_): Matrix4f;
        abstract lookAt(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Matrix4f_): Matrix4f;
        abstract transformPosition(arg0: Vector3f_): Vector3f;
        abstract m33(): number;
        abstract perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Matrix4f_): Matrix4f;
        abstract transformDirection(arg0: Vector3f_): Vector3f;
        abstract perspectiveFrustumSlice(arg0: number, arg1: number, arg2: Matrix4f_): Matrix4f;
        abstract determinant3x3(): number;
        abstract mapYXZ(arg0: Matrix4f_): Matrix4f;
        abstract transpose(arg0: Matrix4f_): Matrix4f;
        abstract get(arg0: number, arg1: number): number;
        abstract orthoSymmetricLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix4f_): Matrix4f;
        abstract get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract get3x4(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract mulPerspectiveAffine(arg0: Internal.Matrix4x3fc_, arg1: Matrix4f_): Matrix4f;
        abstract get4x3Transposed(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract transformTranspose(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vec4f_): Vec4f;
        abstract unprojectInv(arg0: Internal.Vector3fc_, arg1: number[], arg2: Vector3f_): Vector3f;
        abstract projectedGridRange(arg0: Internal.Matrix4fc_, arg1: number, arg2: number, arg3: Matrix4f_): Matrix4f;
        abstract transpose3x3(arg0: Matrix3f_): Matrix3f;
        abstract translate(arg0: number, arg1: number, arg2: number, arg3: Matrix4f_): Matrix4f;
        abstract m22(): number;
        abstract ortho2DLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix4f_): Matrix4f;
        abstract mulAffine(arg0: Internal.Matrix4fc_, arg1: Matrix4f_): Matrix4f;
        abstract perspectiveNear(): number;
        abstract rotateTranslation(arg0: Internal.Quaternionfc_, arg1: Matrix4f_): Matrix4f;
        abstract frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Matrix4f_): Matrix4f;
        abstract rotateLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix4f_): Matrix4f;
        abstract mapnYZX(arg0: Matrix4f_): Matrix4f;
        abstract rotateZ(arg0: number, arg1: Matrix4f_): Matrix4f;
        abstract mapZYX(arg0: Matrix4f_): Matrix4f;
        abstract mulAffineR(arg0: Internal.Matrix4fc_, arg1: Matrix4f_): Matrix4f;
        abstract rotateAround(arg0: Internal.Quaternionfc_, arg1: number, arg2: number, arg3: number, arg4: Matrix4f_): Matrix4f;
        abstract rotateTowards(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Matrix4f_): Matrix4f;
        abstract mapnZnXnY(arg0: Matrix4f_): Matrix4f;
        abstract shadow(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Matrix4fc_, arg5: Matrix4f_): Matrix4f;
        abstract m11(): number;
        abstract unprojectInv(arg0: Internal.Vector3fc_, arg1: number[], arg2: Vec4f_): Vec4f;
        abstract mapYnZX(arg0: Matrix4f_): Matrix4f;
        abstract project(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Vector3f_): Vector3f;
        abstract getTransposed(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract perspectiveInvOrigin(arg0: Vector3f_): Vector3f;
        abstract transformTranspose(arg0: Vec4f_): Vec4f;
        abstract perspectiveOrigin(arg0: Vector3f_): Vector3f;
        abstract frustumAabb(arg0: Vector3f_, arg1: Vector3f_): Matrix4f;
        abstract get4x3(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract getNormalizedRotation(arg0: Quaternionf_): Quaternionf;
        abstract mapnYnXZ(arg0: Matrix4f_): Matrix4f;
        abstract rotateTowardsXY(arg0: number, arg1: number, arg2: Matrix4f_): Matrix4f;
        abstract transformAab(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Vector3f_, arg3: Vector3f_): Matrix4f;
        abstract translateLocal(arg0: number, arg1: number, arg2: number, arg3: Matrix4f_): Matrix4f;
        abstract ortho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Matrix4f_): Matrix4f;
        abstract mapZnYX(arg0: Matrix4f_): Matrix4f;
        abstract mulLocal(arg0: Internal.Matrix4fc_, arg1: Matrix4f_): Matrix4f;
        abstract mapnXnYZ(arg0: Matrix4f_): Matrix4f;
        abstract getToAddress(arg0: number): this;
        abstract rotateAroundLocal(arg0: Internal.Quaternionfc_, arg1: number, arg2: number, arg3: number, arg4: Matrix4f_): Matrix4f;
        abstract mapXnYnZ(arg0: Matrix4f_): Matrix4f;
        abstract mapnZYnX(arg0: Matrix4f_): Matrix4f;
        abstract m00(): number;
        abstract transformProject(arg0: Vec4f_): Vec4f;
        abstract isAffine(): boolean;
        abstract get3x4(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract mul(arg0: Internal.Matrix4x3fc_, arg1: Matrix4f_): Matrix4f;
        abstract arcball(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Matrix4f_): Matrix4f;
        abstract m23(): number;
        abstract rotate(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix4f_): Matrix4f;
        abstract lookAtPerspectiveLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Matrix4f_): Matrix4f;
        abstract equals(arg0: Internal.Matrix4fc_, arg1: number): boolean;
        abstract lookAtLH(arg0: Internal.Vector3fc_, arg1: Internal.Vector3fc_, arg2: Internal.Vector3fc_, arg3: Matrix4f_): Matrix4f;
        abstract frustumPlane(arg0: number, arg1: Vec4f_): Vec4f;
        abstract transformPosition(arg0: number, arg1: number, arg2: number, arg3: Vector3f_): Vector3f;
        abstract m12(): number;
        abstract get3x4(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract invertPerspective(arg0: Matrix4f_): Matrix4f;
        abstract mapnYnZX(arg0: Matrix4f_): Matrix4f;
        abstract frustumCorner(arg0: number, arg1: Vector3f_): Vector3f;
        abstract normalizedPositiveX(arg0: Vector3f_): Vector3f;
        abstract get(arg0: number[]): number[];
        abstract shadow(arg0: Vec4f_, arg1: Internal.Matrix4fc_, arg2: Matrix4f_): Matrix4f;
        abstract orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix4f_): Matrix4f;
        abstract mapnYnZnX(arg0: Matrix4f_): Matrix4f;
        abstract transformDirection(arg0: Internal.Vector3fc_, arg1: Vector3f_): Vector3f;
        abstract getColumn(arg0: number, arg1: Vector3f_): Vector3f;
        abstract rotateAffine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix4f_): Matrix4f;
        abstract unprojectRay(arg0: Internal.Vector2fc_, arg1: number[], arg2: Vector3f_, arg3: Vector3f_): Matrix4f;
        abstract get(arg0: number[], arg1: number): number[];
        abstract orthoSymmetric(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Matrix4f_): Matrix4f;
        abstract frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Matrix4f_): Matrix4f;
        abstract transformProject(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector3f_): Vector3f;
        abstract mapZXnY(arg0: Matrix4f_): Matrix4f;
        abstract m01(): number;
        abstract rotateXYZ(arg0: number, arg1: number, arg2: number, arg3: Matrix4f_): Matrix4f;
        abstract mul4x3ComponentWise(arg0: Internal.Matrix4fc_, arg1: Matrix4f_): Matrix4f;
        abstract withLookAtUp(arg0: number, arg1: number, arg2: number, arg3: Matrix4f_): Matrix4f;
        abstract invert(arg0: Matrix4f_): Matrix4f;
        abstract mapnZYX(arg0: Matrix4f_): Matrix4f;
        abstract getRotation(arg0: Internal.AxisAngle4f_): Internal.AxisAngle4f;
        abstract mul(arg0: Internal.Matrix3x2fc_, arg1: Matrix4f_): Matrix4f;
        abstract sub(arg0: Internal.Matrix4fc_, arg1: Matrix4f_): Matrix4f;
        abstract perspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix4f_): Matrix4f;
        abstract frustumRayDir(arg0: number, arg1: number, arg2: Vector3f_): Vector3f;
        abstract mapYZnX(arg0: Matrix4f_): Matrix4f;
        abstract getRow(arg0: number, arg1: Vec4f_): Vec4f;
        abstract getColumn(arg0: number, arg1: Vec4f_): Vec4f;
        abstract getTransposed(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract translate(arg0: Internal.Vector3fc_, arg1: Matrix4f_): Matrix4f;
        abstract sub4x3(arg0: Internal.Matrix4fc_, arg1: Matrix4f_): Matrix4f;
        abstract mapnZXnY(arg0: Matrix4f_): Matrix4f;
        abstract get4x3(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract mapZnXY(arg0: Matrix4f_): Matrix4f;
        abstract transformProject(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vec4f_): Vec4f;
        abstract unproject(arg0: Internal.Vector3fc_, arg1: number[], arg2: Vector3f_): Vector3f;
        abstract transformAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Vector3f_, arg7: Vector3f_): Matrix4f;
        abstract properties(): number;
        abstract rotateAroundAffine(arg0: Internal.Quaternionfc_, arg1: number, arg2: number, arg3: number, arg4: Matrix4f_): Matrix4f;
        abstract rotateTranslation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix4f_): Matrix4f;
        abstract invertPerspectiveView(arg0: Internal.Matrix4x3fc_, arg1: Matrix4f_): Matrix4f;
        abstract frustumLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Matrix4f_): Matrix4f;
        abstract transformProject(arg0: Vector3f_): Vector3f;
        abstract normalizedPositiveY(arg0: Vector3f_): Vector3f;
        abstract transform(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract testAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        abstract getRow(arg0: number, arg1: Vector3f_): Vector3f;
        abstract m13(): number;
        abstract reflect(arg0: Internal.Quaternionfc_, arg1: Internal.Vector3fc_, arg2: Matrix4f_): Matrix4f;
        abstract mulOrthoAffine(arg0: Internal.Matrix4fc_, arg1: Matrix4f_): Matrix4f;
        abstract mapnZnXY(arg0: Matrix4f_): Matrix4f;
        abstract frustum(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Matrix4f_): Matrix4f;
        abstract transformAffine(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract perspectiveOffCenter(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Matrix4f_): Matrix4f;
        abstract translateLocal(arg0: Internal.Vector3fc_, arg1: Matrix4f_): Matrix4f;
        abstract unproject(arg0: Internal.Vector3fc_, arg1: number[], arg2: Vec4f_): Vec4f;
        abstract perspectiveFar(): number;
        abstract perspective(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: Matrix4f_): Matrix4f;
        abstract scaleLocal(arg0: number, arg1: number, arg2: number, arg3: Matrix4f_): Matrix4f;
        abstract normalize3x3(arg0: Matrix3f_): Matrix3f;
        abstract fma4x3(arg0: Internal.Matrix4fc_, arg1: number, arg2: Matrix4f_): Matrix4f;
        abstract transformAffine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vec4f_): Vec4f;
        abstract mapnYZnX(arg0: Matrix4f_): Matrix4f;
        abstract orthoLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Matrix4f_): Matrix4f;
        abstract m02(): number;
        abstract unproject(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Vec4f_): Vec4f;
        abstract mapnXnZnY(arg0: Matrix4f_): Matrix4f;
        abstract project(arg0: Internal.Vector3fc_, arg1: number[], arg2: Vec4f_): Vec4f;
        abstract get4x3(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract scaleLocal(arg0: number, arg1: Matrix4f_): Matrix4f;
        abstract transformTranspose(arg0: Internal.Vector4fc_, arg1: Vec4f_): Vec4f;
        abstract scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix4f_): Matrix4f;
        abstract mapnYXZ(arg0: Matrix4f_): Matrix4f;
        abstract rotateLocalZ(arg0: number, arg1: Matrix4f_): Matrix4f;
        abstract scale(arg0: number, arg1: Matrix4f_): Matrix4f;
        abstract normalizedPositiveZ(arg0: Vector3f_): Vector3f;
        abstract cofactor3x3(arg0: Matrix4f_): Matrix4f;
        abstract mapYnXZ(arg0: Matrix4f_): Matrix4f;
        abstract perspectiveRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix4f_): Matrix4f;
        abstract scale(arg0: number, arg1: number, arg2: number, arg3: Matrix4f_): Matrix4f;
        abstract getEulerAnglesZYX(arg0: Vector3f_): Vector3f;
        abstract ortho2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix4f_): Matrix4f;
        abstract scale(arg0: Internal.Vector3fc_, arg1: Matrix4f_): Matrix4f;
        abstract reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Matrix4f_): Matrix4f;
        abstract positiveX(arg0: Vector3f_): Vector3f;
        abstract get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract mapXnZnY(arg0: Matrix4f_): Matrix4f;
        abstract testPoint(arg0: number, arg1: number, arg2: number): boolean;
        abstract perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Matrix4f_): Matrix4f;
        abstract determinant(): number;
        abstract perspectiveFov(): number;
        abstract perspectiveOffCenterFovLH(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Matrix4f_): Matrix4f;
        abstract scaleAroundLocal(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Matrix4f_): Matrix4f;
        abstract mulPerspectiveAffine(arg0: Internal.Matrix4fc_, arg1: Matrix4f_): Matrix4f;
        abstract mapZYnX(arg0: Matrix4f_): Matrix4f;
        abstract add4x3(arg0: Internal.Matrix4fc_, arg1: Matrix4f_): Matrix4f;
        abstract originAffine(arg0: Vector3f_): Vector3f;
        abstract invertOrtho(arg0: Matrix4f_): Matrix4f;
        abstract mapYZX(arg0: Matrix4f_): Matrix4f;
        abstract m03(): number;
        abstract reflect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Matrix4f_): Matrix4f;
        abstract mapnXYnZ(arg0: Matrix4f_): Matrix4f;
        abstract unprojectInv(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Vector3f_): Vector3f;
        abstract mulTranslationAffine(arg0: Internal.Matrix4fc_, arg1: Matrix4f_): Matrix4f;
        abstract withLookAtUp(arg0: Internal.Vector3fc_, arg1: Matrix4f_): Matrix4f;
        abstract perspectiveOffCenterFov(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: Matrix4f_): Matrix4f;
        abstract getUnnormalizedRotation(arg0: Internal.Quaterniond_): Internal.Quaterniond;
        abstract mapYnZnX(arg0: Matrix4f_): Matrix4f;
        abstract mapnXnYnZ(arg0: Matrix4f_): Matrix4f;
        abstract mapnZnYX(arg0: Matrix4f_): Matrix4f;
        abstract origin(arg0: Vector3f_): Vector3f;
        abstract getTransposed(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract determinantAffine(): number;
        abstract mapnXZnY(arg0: Matrix4f_): Matrix4f;
        abstract rotateZYX(arg0: number, arg1: number, arg2: number, arg3: Matrix4f_): Matrix4f;
        abstract rotateAffineYXZ(arg0: number, arg1: number, arg2: number, arg3: Matrix4f_): Matrix4f;
        abstract m30(): number;
        abstract project(arg0: Internal.Vector3fc_, arg1: number[], arg2: Vector3f_): Vector3f;
        abstract positiveY(arg0: Vector3f_): Vector3f;
        abstract unprojectInv(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Vec4f_): Vec4f;
        abstract lookAlong(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Matrix4f_): Matrix4f;
        abstract negateX(arg0: Matrix4f_): Matrix4f;
        abstract rotate(arg0: number, arg1: Internal.Vector3fc_, arg2: Matrix4f_): Matrix4f;
        abstract getTranslation(arg0: Vector3f_): Vector3f;
        abstract invertPerspectiveView(arg0: Internal.Matrix4fc_, arg1: Matrix4f_): Matrix4f;
        get finite(): boolean
        get affine(): boolean
        readonly PLANE_PX: 1;
        readonly CORNER_PXNYPZ: 4;
        readonly PLANE_NY: 2;
        readonly PLANE_NZ: 4;
        readonly PLANE_PY: 3;
        readonly PLANE_NX: 0;
        readonly PLANE_PZ: 5;
        readonly PROPERTY_TRANSLATION: 8;
        readonly CORNER_PXNYNZ: 1;
        readonly CORNER_PXPYPZ: 7;
        readonly PROPERTY_IDENTITY: 4;
        readonly CORNER_PXPYNZ: 2;
        readonly PROPERTY_PERSPECTIVE: 1;
        readonly PROPERTY_ORTHONORMAL: 16;
        readonly CORNER_NXPYPZ: 6;
        readonly PROPERTY_AFFINE: 2;
        readonly CORNER_NXNYNZ: 0;
        readonly CORNER_NXNYPZ: 5;
        readonly CORNER_NXPYNZ: 3;
    }
    type Matrix4fc_ = Matrix4fc;
    class RealmsServer extends Internal.ValueObject {
        constructor()
        setDescription(arg0: string): void;
        getMinigameName(): string;
        getWorldName(arg0: number): string;
        toServerData(arg0: string): Internal.ServerData;
        setName(arg0: string): void;
        getName(): string;
        static parse(arg0: Internal.JsonObject_): Internal.RealmsServer;
        static parse(arg0: string): Internal.RealmsServer;
        getDescription(): string;
        cloneSlots(arg0: Internal.Map_<number, Internal.RealmsWorldOptions>): Internal.Map<number, Internal.RealmsWorldOptions>;
        updateServerPing(arg0: Internal.RealmsServerPlayerList_): void;
        clone(): this;
        set description(arg0: string)
        get minigameName(): string
        set name(arg0: string)
        get name(): string
        get description(): string
        name: string;
        remoteSubscriptionId: string;
        motd: string;
        players: Internal.List<com.mojang.realmsclient.dto.PlayerInfo>;
        activeSlot: number;
        minigameName: string;
        ownerUUID: string;
        daysLeft: number;
        minigameImage: string;
        slots: Internal.Map<number, Internal.RealmsWorldOptions>;
        minigameId: number;
        id: number;
        worldType: Internal.RealmsServer$WorldType;
        state: Internal.RealmsServer$State;
        expiredTrial: boolean;
        serverPing: Internal.RealmsServerPing;
        owner: string;
        expired: boolean;
    }
    type RealmsServer_ = RealmsServer;
    interface RedirectModifier <S> {
        abstract apply(arg0: Internal.CommandContext_<S>): Internal.Collection<S>;
        (arg0: Internal.CommandContext<S>): Internal.Collection_<S>;
    }
    type RedirectModifier_<S> = RedirectModifier<S>;
    interface DragonPhaseInstance {
        abstract doClientTick(): void;
        abstract onHurt(arg0: DamageSource_, arg1: number): number;
        abstract isSitting(): boolean;
        abstract end(): void;
        abstract getFlyTargetLocation(): Vec3d;
        abstract getFlySpeed(): number;
        abstract getTurnSpeed(): number;
        abstract getPhase(): Internal.EnderDragonPhase<Internal.DragonPhaseInstance>;
        abstract begin(): void;
        abstract onCrystalDestroyed(arg0: Internal.EndCrystal_, arg1: BlockPos_, arg2: DamageSource_, arg3: Player_): void;
        abstract doServerTick(): void;
        get sitting(): boolean
        get flyTargetLocation(): Vec3d
        get flySpeed(): number
        get turnSpeed(): number
        get phase(): Internal.EnderDragonPhase<Internal.DragonPhaseInstance>
    }
    type DragonPhaseInstance_ = DragonPhaseInstance;
    class PiglinArmPose extends Internal.Enum<Internal.PiglinArmPose> {
        static valueOf(arg0: string): Internal.PiglinArmPose;
        static values(): Internal.PiglinArmPose[];
        static readonly CROSSBOW_CHARGE: Internal.PiglinArmPose;
        static readonly DEFAULT: Internal.PiglinArmPose;
        static readonly ADMIRING_ITEM: Internal.PiglinArmPose;
        static readonly DANCING: Internal.PiglinArmPose;
        static readonly ATTACKING_WITH_MELEE_WEAPON: Internal.PiglinArmPose;
        static readonly CROSSBOW_HOLD: Internal.PiglinArmPose;
    }
    type PiglinArmPose_ = "admiring_item" | "dancing" | "crossbow_hold" | "crossbow_charge" | PiglinArmPose | "default" | "attacking_with_melee_weapon";
    class BuildCreativeModeTabContentsEvent extends Internal.Event implements Internal.CreativeModeTab$Output, Internal.IModBusEvent {
        constructor()
        constructor(arg0: Internal.CreativeModeTab_, arg1: Internal.ResourceKey_<Internal.CreativeModeTab>, arg2: Internal.CreativeModeTab$ItemDisplayParameters_, arg3: Internal.MutableHashedLinkedMap_<Internal.ItemStack, Internal.CreativeModeTab$TabVisibility>)
        getEntries(): Internal.MutableHashedLinkedMap<Internal.ItemStack, Internal.CreativeModeTab$TabVisibility>;
        accept(arg0: Internal.ItemStack_): void;
        getFlags(): Internal.FeatureFlagSet;
        hasPermissions(): boolean;
        accept(arg0: Internal.ItemStack_, arg1: Internal.CreativeModeTab$TabVisibility_): void;
        accept(arg0: Internal.ItemLike_, arg1: Internal.CreativeModeTab$TabVisibility_): void;
        getTabKey(): Internal.ResourceKey<Internal.CreativeModeTab>;
        getTab(): Internal.CreativeModeTab;
        accept(arg0: Internal.Supplier_<Internal.ItemLike>, arg1: Internal.CreativeModeTab$TabVisibility_): void;
        acceptAll(arg0: Internal.Collection_<Internal.ItemStack>, arg1: Internal.CreativeModeTab$TabVisibility_): void;
        accept(arg0: Internal.Supplier_<Internal.ItemLike>): void;
        getParameters(): Internal.CreativeModeTab$ItemDisplayParameters;
        acceptAll(arg0: Internal.Collection_<Internal.ItemStack>): void;
        accept(arg0: Internal.ItemLike_): void;
        get entries(): Internal.MutableHashedLinkedMap<Internal.ItemStack, Internal.CreativeModeTab$TabVisibility>
        get flags(): Internal.FeatureFlagSet
        get tabKey(): Internal.ResourceKey<Internal.CreativeModeTab>
        get tab(): Internal.CreativeModeTab
        get parameters(): Internal.CreativeModeTab$ItemDisplayParameters
    }
    type BuildCreativeModeTabContentsEvent_ = BuildCreativeModeTabContentsEvent;
    class OnDatapackSyncEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.PlayerList_, arg1: Internal.ServerPlayer_)
        getPlayers(): Internal.List<Internal.ServerPlayer>;
        getPlayerList(): Internal.PlayerList;
        getPlayer(): Internal.ServerPlayer;
        get players(): Internal.List<Internal.ServerPlayer>
        get playerList(): Internal.PlayerList
        get player(): Internal.ServerPlayer
    }
    type OnDatapackSyncEvent_ = OnDatapackSyncEvent;
    class InstrumentItem extends Internal.Item {
        constructor(arg0: Internal.Item$Properties_, arg1: Internal.TagKey_<Internal.Instrument>)
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
        static setRandom(arg0: Internal.ItemStack_, arg1: Internal.TagKey_<Internal.Instrument>, arg2: Internal.RandomSource_): void;
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
        static create(arg0: Internal.Item_, arg1: Internal.Holder_<Internal.Instrument>): Internal.ItemStack;
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
    type InstrumentItem_ = InstrumentItem;
    class EffectBlessing_Of_Amethyst extends Internal.MobEffect {
        constructor()
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type EffectBlessing_Of_Amethyst_ = EffectBlessing_Of_Amethyst;
    class ClientboundSoundPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.Holder_<Internal.SoundEvent>, arg1: Internal.SoundSource_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number)
        constructor(arg0: Internal.FriendlyByteBuf_)
        getX(): number;
        handle(arg0: Internal.PacketListener_): void;
        getY(): number;
        getVolume(): number;
        getZ(): number;
        getSound(): Internal.Holder<Internal.SoundEvent>;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getSource(): Internal.SoundSource;
        getPitch(): number;
        getSeed(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        isSkippable(): boolean;
        get x(): number
        get y(): number
        get volume(): number
        get z(): number
        get sound(): Internal.Holder<Internal.SoundEvent>
        get source(): Internal.SoundSource
        get pitch(): number
        get seed(): number
        get skippable(): boolean
        static readonly LOCATION_ACCURACY: 8.0;
    }
    type ClientboundSoundPacket_ = ClientboundSoundPacket;
    class InputEvent$MouseButton$Pre extends Internal.InputEvent$MouseButton {
        constructor()
        constructor(arg0: number, arg1: number, arg2: number)
    }
    type InputEvent$MouseButton$Pre_ = InputEvent$MouseButton$Pre;
    interface ArmorCapeProvider {
        abstract getCapeResourceLocation(): ResourceLocation;
        get capeResourceLocation(): ResourceLocation
        (): ResourceLocation_;
    }
    type ArmorCapeProvider_ = ArmorCapeProvider;
    class Display$BlockDisplay$BlockRenderState extends Internal.Record {
        constructor(arg0: Internal.BlockState_)
        blockState(): Internal.BlockState;
    }
    type Display$BlockDisplay$BlockRenderState_ = Display$BlockDisplay$BlockRenderState;
    class ContextUtils$ECollidingEntityContext {
        constructor(entity: Internal.Entity_, collidingEntity: Internal.Entity_)
        /**
         * The entity colliding
        */
        readonly collidingEntity: Internal.Entity;
        /**
         * The entity getting collided with
        */
        readonly entity: Internal.Entity;
    }
    type ContextUtils$ECollidingEntityContext_ = ContextUtils$ECollidingEntityContext;
    interface IForgeItemStack extends Internal.ICapabilitySerializable<Internal.CompoundTag> {
        abstract getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        isBookEnchantable(arg0: Internal.ItemStack_): boolean;
        getEntityLifespan(arg0: Internal.Level_): number;
        onStopUsing(arg0: Internal.LivingEntity_, arg1: number): void;
        onItemUseFirst(arg0: Internal.UseOnContext_): InteractionResult;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        onArmorTick(arg0: Internal.Level_, arg1: Player_): void;
        shouldCauseBlockBreakReset(arg0: Internal.ItemStack_): boolean;
        elytraFlightTick(arg0: Internal.LivingEntity_, arg1: number): boolean;
        isEnderMask(arg0: Player_, arg1: Internal.EnderMan_): boolean;
        doesSneakBypassUse(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Player_): boolean;
        serializeNBT(): Internal.Tag;
        getEnchantmentLevel(arg0: Internal.Enchantment_): number;
        getCraftingRemainingItem(): Internal.ItemStack;
        isPiglinCurrency(): boolean;
        getShareTag(): Internal.CompoundTag;
        getFoodProperties(arg0: Internal.LivingEntity_): Internal.FoodProperties;
        makesPiglinsNeutral(arg0: Internal.LivingEntity_): boolean;
        getXpRepairRatio(): number;
        areShareTagsEqual(arg0: Internal.ItemStack_): boolean;
        canGrindstoneRepair(): boolean;
        canWalkOnPowderedSnow(arg0: Internal.LivingEntity_): boolean;
        getEquipmentSlot(): Internal.EquipmentSlot;
        getBurnTime(arg0: Internal.RecipeType_<any>): number;
        onEntityItemUpdate(arg0: Internal.ItemEntity_): boolean;
        getHighlightTip(arg0: Internal.Component_): Internal.Component;
        getAllEnchantments(): Internal.Map<Internal.Enchantment, number>;
        getEnchantmentValue(): number;
        canPerformAction(arg0: Internal.ToolAction_): boolean;
        isRepairable(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        readShareTag(arg0: Internal.CompoundTag_): void;
        getSweepHitBox(arg0: Player_, arg1: Internal.Entity_): Internal.AABB;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: Internal.LivingEntity_): boolean;
        abstract deserializeNBT(arg0: Internal.CompoundTag_): void;
        onDroppedByPlayer(arg0: Player_): boolean;
        equals(arg0: Internal.ItemStack_, arg1: boolean): boolean;
        onInventoryTick(arg0: Internal.Level_, arg1: Player_, arg2: number, arg3: number): void;
        canApplyAtEnchantingTable(arg0: Internal.Enchantment_): boolean;
        isNotReplaceableByPickAction(arg0: Player_, arg1: number): boolean;
        canEquip(arg0: Internal.EquipmentSlot_, arg1: Internal.Entity_): boolean;
        onEntitySwing(arg0: Internal.LivingEntity_): boolean;
        onDestroyed(arg0: Internal.ItemEntity_, arg1: DamageSource_): void;
        onBlockStartBreak(arg0: BlockPos_, arg1: Player_): boolean;
        onHorseArmorTick(arg0: Internal.Level_, arg1: Internal.Mob_): void;
        canElytraFly(arg0: Internal.LivingEntity_): boolean;
        hasCraftingRemainingItem(): boolean;
        get craftingRemainingItem(): Internal.ItemStack
        get piglinCurrency(): boolean
        get shareTag(): Internal.CompoundTag
        get xpRepairRatio(): number
        get equipmentSlot(): Internal.EquipmentSlot
        get allEnchantments(): Internal.Map<Internal.Enchantment, number>
        get enchantmentValue(): number
        get repairable(): boolean
    }
    type IForgeItemStack_ = IForgeItemStack;
    class OverlayPower extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<any> {
        constructor()
    }
    type OverlayPower_ = OverlayPower;
    class ConcurrentHashMap$KeySetView <K, V> extends Internal.ConcurrentHashMap$CollectionView<K, V, K> implements Internal.Set<K>, Internal.Serializable {
        spliterator(): Internal.Spliterator<K>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Internal.Set<E>;
        getMap(): Internal.ConcurrentHashMap<any, any>;
        abstract toArray<T>(arg0: T[]): T[];
        removeIf(arg0: Internal.Predicate_<K>): boolean;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Internal.Set<E>;
        parallelStream(): Internal.Stream<K>;
        static of<E>(arg0: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Internal.Set<E>;
        static of<E>(...arg0: E[]): Internal.Set<E>;
        static of<E>(): Internal.Set<E>;
        toArray<T>(arg0: Internal.IntFunction_<T[]>): T[];
        iterator(): Internal.Iterator<K>;
        static of<E>(arg0: E, arg1: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E): Internal.Set<E>;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E): Internal.Set<E>;
        static copyOf<E>(arg0: Internal.Collection_<E>): Internal.Set<E>;
        getMappedValue(): V;
        static of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Internal.Set<E>;
        stream(): Internal.Stream<K>;
        get map(): Internal.ConcurrentHashMap<any, any>
        get mappedValue(): V
    }
    type ConcurrentHashMap$KeySetView_<K, V> = ConcurrentHashMap$KeySetView<K, V>;
    class PiglinSpecificSensor extends Internal.Sensor<Internal.LivingEntity> {
        constructor()
    }
    type PiglinSpecificSensor_ = PiglinSpecificSensor;
    class PBRType extends Internal.Enum<Internal.PBRType> {
        appendSuffix(path: string): string;
        static values(): Internal.PBRType[];
        static removeSuffix(path: string): string;
        static valueOf(name: string): Internal.PBRType;
        getDefaultValue(): number;
        getSuffix(): string;
        static fromFileLocation(location: string): Internal.PBRType;
        get defaultValue(): number
        get suffix(): string
        static readonly SPECULAR: Internal.PBRType;
        static readonly NORMAL: Internal.PBRType;
    }
    type PBRType_ = "normal" | PBRType | "specular";
    class FaceUV$Rotation extends Internal.Enum<Internal.FaceUV$Rotation> {
        static values(): Internal.FaceUV$Rotation[];
        static fromValue(arg0: number): Internal.FaceUV$Rotation;
        rotateUvs(arg0: number, arg1: number, arg2: number, arg3: number): number[];
        static valueOf(arg0: string): Internal.FaceUV$Rotation;
        static readonly NONE: Internal.FaceUV$Rotation;
        static readonly CLOCKWISE_270: Internal.FaceUV$Rotation;
        static readonly CLOCKWISE_90: Internal.FaceUV$Rotation;
        static readonly CLOCKWISE_180: Internal.FaceUV$Rotation;
    }
    type FaceUV$Rotation_ = "clockwise_90" | "clockwise_180" | "clockwise_270" | FaceUV$Rotation | "none";
    class SpawnData$CustomSpawnRules extends Internal.Record {
        constructor(arg0: Internal.InclusiveRange_<number>, arg1: Internal.InclusiveRange_<number>)
        skyLightLimit(): Internal.InclusiveRange<number>;
        blockLightLimit(): Internal.InclusiveRange<number>;
        static readonly CODEC: Internal.Codec<Internal.SpawnData$CustomSpawnRules>;
    }
    type SpawnData$CustomSpawnRules_ = SpawnData$CustomSpawnRules;
    class Aquifer$FluidStatus {
        constructor(arg0: number, arg1: Internal.BlockState_)
        at(arg0: number): Internal.BlockState;
        readonly fluidLevel: number;
        readonly fluidType: Internal.BlockState;
    }
    type Aquifer$FluidStatus_ = Aquifer$FluidStatus;
    class CustomTriggerBuilder {
        match(arg0: Internal.TriggerMatchCallback_): this;
    }
    type CustomTriggerBuilder_ = CustomTriggerBuilder;
    class PlayerEquipControl extends Internal.Enum<Internal.PlayerEquipControl> {
        static values(): Internal.PlayerEquipControl[];
        static valueOf(name: string): Internal.PlayerEquipControl;
        static readonly MUST_NOT_CROUCH: Internal.PlayerEquipControl;
        static readonly DISABLED: Internal.PlayerEquipControl;
        static readonly MUST_CROUCH: Internal.PlayerEquipControl;
    }
    type PlayerEquipControl_ = PlayerEquipControl | "disabled" | "must_crouch" | "must_not_crouch";
    class ClientboundEntityEventPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.Entity_, arg1: number)
        constructor(arg0: Internal.FriendlyByteBuf_)
        handle(arg0: Internal.PacketListener_): void;
        getEventId(): number;
        write(arg0: Internal.FriendlyByteBuf_): void;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getEntity(arg0: Internal.Level_): Internal.Entity;
        isSkippable(): boolean;
        get eventId(): number
        get skippable(): boolean
    }
    type ClientboundEntityEventPacket_ = ClientboundEntityEventPacket;
    class FoliagePlacerType <P extends Internal.FoliagePlacer> {
        constructor(arg0: Internal.Codec_<P>)
        codec(): Internal.Codec<P>;
        static readonly MEGA_JUNGLE_FOLIAGE_PLACER: Internal.FoliagePlacerType<Internal.MegaJungleFoliagePlacer>;
        static readonly FANCY_FOLIAGE_PLACER: Internal.FoliagePlacerType<Internal.FancyFoliagePlacer>;
        static readonly RANDOM_SPREAD_FOLIAGE_PLACER: Internal.FoliagePlacerType<Internal.RandomSpreadFoliagePlacer>;
        static readonly CHERRY_FOLIAGE_PLACER: Internal.FoliagePlacerType<Internal.CherryFoliagePlacer>;
        static readonly DARK_OAK_FOLIAGE_PLACER: Internal.FoliagePlacerType<Internal.DarkOakFoliagePlacer>;
        static readonly SPRUCE_FOLIAGE_PLACER: Internal.FoliagePlacerType<Internal.SpruceFoliagePlacer>;
        static readonly BLOB_FOLIAGE_PLACER: Internal.FoliagePlacerType<Internal.BlobFoliagePlacer>;
        static readonly PINE_FOLIAGE_PLACER: Internal.FoliagePlacerType<Internal.PineFoliagePlacer>;
        static readonly MEGA_PINE_FOLIAGE_PLACER: Internal.FoliagePlacerType<Internal.MegaPineFoliagePlacer>;
        static readonly ACACIA_FOLIAGE_PLACER: Internal.FoliagePlacerType<Internal.AcaciaFoliagePlacer>;
        static readonly BUSH_FOLIAGE_PLACER: Internal.FoliagePlacerType<Internal.BushFoliagePlacer>;
    }
    type FoliagePlacerType_<P extends Internal.FoliagePlacer> = FoliagePlacerType<P> | Special.FoliagePlacerType;
    class FogParticleOptions extends Internal.DustParticleOptionsBase {
        constructor(arg0: Vector3f_, arg1: number)
        getType(): Internal.ParticleType<Internal.FogParticleOptions>;
        get type(): Internal.ParticleType<Internal.FogParticleOptions>
        static readonly CODEC: Internal.Codec<Internal.FogParticleOptions>;
        static readonly DESERIALIZER: Internal.ParticleOptions$Deserializer<Internal.FogParticleOptions>;
    }
    type FogParticleOptions_ = FogParticleOptions;
    class GrantPowerAction extends Internal.EntityAction<Internal.PowerSourceConfiguration> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        execute(arg0: Internal.PowerSourceConfiguration_, arg1: Internal.Entity_): void;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type GrantPowerAction_ = GrantPowerAction;
    class StatePropertiesPredicateBuilder {
        constructor()
        /**
         * Match all block states.
         * 
         * Accept a string like 'state1=true,state2=15'.
        */
        matchAll(arg0: string): this;
        /**
         * Match one block state.
         * @param key Name of block state
         * @param value Value of block state
        */
        match(arg0: string, arg1: string): this;
    }
    type StatePropertiesPredicateBuilder_ = StatePropertiesPredicateBuilder;
    interface NarratableEntry extends Internal.NarrationSupplier, Internal.TabOrderedElement {
        abstract narrationPriority(): Internal.NarratableEntry$NarrationPriority;
        abstract updateNarration(arg0: Internal.NarrationElementOutput_): void;
        isActive(): boolean;
        getTabOrderGroup(): number;
        get active(): boolean
        get tabOrderGroup(): number
    }
    type NarratableEntry_ = NarratableEntry;
    class RecordItem extends Internal.Item {
        constructor(arg0: number, arg1: Internal.SoundEvent_, arg2: Internal.Item$Properties_, arg3: number)
        constructor(arg0: number, arg1: Internal.Supplier_<Internal.SoundEvent>, arg2: Internal.Item$Properties_, arg3: number)
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
        getSound(): Internal.SoundEvent;
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
        static getBySound(arg0: Internal.SoundEvent_): Internal.RecordItem;
        getLightEmission(player: Player_, stack: Internal.ItemStack_): number;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        setArmorToughness(armorToughness: number): void;
        getDisplayName(): Internal.MutableComponent;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        getLengthInTicks(): number;
        getAnalogOutput(): number;
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
        get sound(): Internal.SoundEvent
        set attackDamage(attackDamage: number)
        get mod(): string
        set armorProtection(armorProtection: number)
        set armorToughness(armorToughness: number)
        get displayName(): Internal.MutableComponent
        get lengthInTicks(): number
        get analogOutput(): number
        get digSpeed(): number
        set tier(c: Internal.Consumer_<Internal.MutableToolTier>)
        set foodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>)
        /**
         * @deprecated
        */
        static readonly BY_NAME: {[key: Internal.SoundEvent]: Internal.DNLRecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.DNLRecordItem, [key: Internal.SoundEvent]: Internal.DNLRecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem, [key: Internal.SoundEvent]: Internal.RecordItem};
    }
    type RecordItem_ = RecordItem;
    class JigsawBlockEntity extends Internal.BlockEntity {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        getJoint(): Internal.JigsawBlockEntity$JointType;
        getName(): ResourceLocation;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setPool(arg0: Internal.ResourceKey_<Internal.StructureTemplatePool>): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        generate(arg0: Internal.ServerLevel_, arg1: number, arg2: boolean): void;
        setTarget(arg0: ResourceLocation_): void;
        getUpdatePacket(): Internal.Packet<any>;
        getFinalState(): string;
        setJoint(arg0: Internal.JigsawBlockEntity$JointType_): void;
        serializeNBT(): Internal.Tag;
        onLoad(): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        getTarget(): ResourceLocation;
        deserializeNBT(arg0: Internal.Tag_): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        setName(arg0: ResourceLocation_): void;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        getPool(): Internal.ResourceKey<Internal.StructureTemplatePool>;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getModelData(): Internal.ModelData;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        setFinalState(arg0: string): void;
        getRenderBoundingBox(): Internal.AABB;
        get joint(): Internal.JigsawBlockEntity$JointType
        get name(): ResourceLocation
        set pool(arg0: Internal.ResourceKey_<Internal.StructureTemplatePool>)
        set target(arg0: ResourceLocation_)
        get updatePacket(): Internal.Packet<any>
        get finalState(): string
        set joint(arg0: Internal.JigsawBlockEntity$JointType_)
        get target(): ResourceLocation
        set name(arg0: ResourceLocation_)
        get pool(): Internal.ResourceKey<Internal.StructureTemplatePool>
        get modelData(): Internal.ModelData
        set finalState(arg0: string)
        get renderBoundingBox(): Internal.AABB
        static readonly NAME: "name";
        static readonly POOL: "pool";
        static readonly JOINT: "joint";
        static readonly TARGET: "target";
        static readonly FINAL_STATE: "final_state";
    }
    type JigsawBlockEntity_ = JigsawBlockEntity;
    interface HeadedModel {
        abstract getHead(): Internal.ModelPart;
        get head(): Internal.ModelPart
        (): Internal.ModelPart_;
    }
    type HeadedModel_ = HeadedModel;
    abstract class ImmutableCollection$Builder <E> {
        abstract build(): Internal.ImmutableCollection<E>;
        add(...arg0: E[]): this;
        addAll(arg0: Internal.Iterable_<E>): this;
        abstract add(arg0: E): this;
        addAll(arg0: Internal.Iterator_<E>): this;
    }
    type ImmutableCollection$Builder_<E> = ImmutableCollection$Builder<E>;
    abstract class BiEntityAction <T extends Internal.IDynamicFeatureConfiguration> implements Internal.IFactory<T, Internal.ConfiguredBiEntityAction<T, any>, Internal.BiEntityAction<T>> {
        getCodec(): Internal.Codec<Internal.ConfiguredBiEntityAction<T, any>>;
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        abstract execute(arg0: T, arg1: Internal.Entity_, arg2: Internal.Entity_): void;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
        get codec(): Internal.Codec<Internal.ConfiguredBiEntityAction<T, any>>
        static readonly CODEC: Internal.Codec<Internal.BiEntityAction<any>>;
    }
    type BiEntityAction_<T extends Internal.IDynamicFeatureConfiguration> = BiEntityAction<T> | Special.BientityAction;
    interface IIngredientHelper <V> {
        getAmount(arg0: V): number;
        abstract getErrorInfo(arg0: V): string;
        getTagKeyEquivalent(arg0: Internal.Collection_<V>): Internal.Optional<Internal.TagKey<any>>;
        abstract getDisplayName(arg0: V): string;
        normalizeIngredient(arg0: V): V;
        abstract getIngredientType(): Internal.IIngredientType<V>;
        abstract copyIngredient(arg0: V): V;
        isValidIngredient(arg0: V): boolean;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getTagEquivalent(arg0: Internal.Collection_<V>): Internal.Optional<ResourceLocation>;
        abstract getUniqueId(arg0: V, arg1: Internal.UidContext_): string;
        copyWithAmount(arg0: V, arg1: number): V;
        isIngredientOnServer(arg0: V): boolean;
        getTagStream(arg0: V): Internal.Stream<ResourceLocation>;
        hasSubtypes(arg0: V): boolean;
        isHiddenFromRecipeViewersByTags(arg0: V): boolean;
        abstract getResourceLocation(arg0: V): ResourceLocation;
        getDisplayModId(arg0: V): string;
        getCheatItemStack(arg0: V): Internal.ItemStack;
        getWildcardId(arg0: V): string;
        getColors(arg0: V): Internal.Iterable<number>;
        get ingredientType(): Internal.IIngredientType<V>
    }
    type IIngredientHelper_<V> = IIngredientHelper<V>;
    class Int2ObjectOpenHashMap <V> extends Internal.AbstractInt2ObjectMap<V> implements Internal.Cloneable, Internal.Hash, Internal.Serializable {
        constructor(arg0: Internal.Map_<number, V>)
        constructor()
        constructor(arg0: Internal.Int2ObjectMap_<V>)
        constructor(arg0: Internal.Int2ObjectMap_<V>, arg1: number)
        constructor(arg0: number[], arg1: V[])
        constructor(arg0: number)
        constructor(arg0: number, arg1: number)
        constructor(arg0: number[], arg1: V[], arg2: number)
        constructor(arg0: Internal.Map_<number, V>, arg1: number)
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        composeLong(arg0: Internal.Long2IntFunction_): Internal.Long2ObjectFunction<V>;
        put(arg0: number, arg1: V): V;
        compute(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        trim(arg0: number): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        putIfAbsent(arg0: number, arg1: V): V;
        andThenByte(arg0: Internal.Object2ByteFunction_<V>): Internal.Int2ByteFunction;
        replace(arg0: number, arg1: V): V;
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
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        values(): Internal.Collection<any>;
        compute(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        trim(): boolean;
        /**
         * @deprecated
        */
        entrySet(): Internal.Set<any>;
        merge(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        clone(): this;
        composeByte(arg0: Internal.Byte2IntFunction_): Internal.Byte2ObjectFunction<V>;
        andThenDouble(arg0: Internal.Object2DoubleFunction_<V>): Internal.Int2DoubleFunction;
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, V, V>): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        andThenInt(arg0: Internal.Object2IntFunction_<V>): Internal.Int2IntFunction;
        composeObject<T>(arg0: Internal.Object2IntFunction_<T>): Internal.Object2ObjectFunction<T, V>;
        remove(arg0: number): V;
        getOrDefault(arg0: number, arg1: V): V;
        andThenFloat(arg0: Internal.Object2FloatFunction_<V>): Internal.Int2FloatFunction;
        andThenObject<T>(arg0: Internal.Object2ObjectFunction_<V, T>): Internal.Int2ObjectFunction<T>;
        composeDouble(arg0: Internal.Double2IntFunction_): Internal.Double2ObjectFunction<V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        computeIfAbsent(arg0: number, arg1: Internal.Function_<number, V>): V;
        composeChar(arg0: Internal.Char2IntFunction_): Internal.Char2ObjectFunction<V>;
        abstract defaultReturnValue(): V;
        static identity<T>(): Internal.Function<T, T>;
        composeFloat(arg0: Internal.Float2IntFunction_): Internal.Float2ObjectFunction<V>;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        andThen<V>(arg0: Internal.Function_<V, V>): Internal.Function<number, V>;
        andThenChar(arg0: Internal.Object2CharFunction_<V>): Internal.Int2CharFunction;
        replace(arg0: number, arg1: V): V;
        static of<K, V>(): Internal.Map<K, V>;
        int2ObjectEntrySet(): Internal.ObjectSet<any>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: V): V;
        replace(arg0: number, arg1: V, arg2: V): boolean;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        computeIfAbsent(arg0: number, arg1: Internal.Int2ObjectFunction_<V>): V;
        composeReference<T>(arg0: Internal.Reference2IntFunction_<T>): Internal.Reference2ObjectFunction<T, V>;
        get(arg0: number): V;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: V): V;
        andThenReference<T>(arg0: Internal.Object2ReferenceFunction_<V, T>): Internal.Int2ReferenceFunction<T>;
        /**
         * @deprecated
        */
        remove(arg0: any): V;
        merge(arg0: number, arg1: V, arg2: Internal.BiFunction_<V, V, V>): V;
        computeIfAbsent(arg0: number, arg1: Internal.IntFunction_<V>): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        composeInt(arg0: Internal.Int2IntFunction_): Internal.Int2ObjectFunction<V>;
        putIfAbsent(arg0: number, arg1: V): V;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        remove(arg0: any, arg1: any): boolean;
        /**
         * @deprecated
        */
        computeIfAbsentPartial(arg0: number, arg1: Internal.Int2ObjectFunction_<V>): V;
        andThenShort(arg0: Internal.Object2ShortFunction_<V>): Internal.Int2ShortFunction;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        composeShort(arg0: Internal.Short2IntFunction_): Internal.Short2ObjectFunction<V>;
        andThenLong(arg0: Internal.Object2LongFunction_<V>): Internal.Int2LongFunction;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        forEach(arg0: Internal.BiConsumer_<number, V>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        replaceAll(arg0: Internal.BiFunction_<number, V, V>): void;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, V>;
    }
    type Int2ObjectOpenHashMap_<V> = Int2ObjectOpenHashMap<V>;
    class SpruceFoliagePlacer extends Internal.FoliagePlacer {
        constructor(arg0: Internal.IntProvider_, arg1: Internal.IntProvider_, arg2: Internal.IntProvider_)
        static readonly CODEC: Internal.Codec<Internal.SpruceFoliagePlacer>;
    }
    type SpruceFoliagePlacer_ = SpruceFoliagePlacer;
    class ScalableParticleType extends Internal.ParticleType<Internal.ScalableParticleType$ScalableParticleData> {
        constructor(arg0: boolean)
        codec(): Internal.Codec<Internal.ScalableParticleType$ScalableParticleData>;
        static readonly CODEC: Internal.Codec<Internal.ScalableParticleType$ScalableParticleData>;
    }
    type ScalableParticleType_ = ScalableParticleType;
    class SuspiciousStewItem extends Internal.Item {
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
        static saveMobEffect(arg0: Internal.ItemStack_, arg1: Internal.MobEffect_, arg2: number): void;
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
        static readonly EFFECTS_TAG: "Effects";
        static readonly EFFECT_DURATION_TAG: "EffectDuration";
        static readonly DEFAULT_DURATION: 160;
        static readonly EFFECT_ID_TAG: "EffectId";
    }
    type SuspiciousStewItem_ = SuspiciousStewItem;
    interface SpriteFinderImpl$SpriteFinderAccess {
        abstract fabric_spriteFinder(): Internal.SpriteFinderImpl;
        (): Internal.SpriteFinderImpl_;
    }
    type SpriteFinderImpl$SpriteFinderAccess_ = SpriteFinderImpl$SpriteFinderAccess;
    class Attributes implements Internal.Cloneable, Internal.Map<any, any> {
        constructor()
        constructor(arg0: Internal.Attributes_)
        constructor(arg0: number)
        clone(): any;
        containsValue(arg0: any): boolean;
        static of<K, V>(): Internal.Map<K, V>;
        getOrDefault(arg0: any, arg1: any): any;
        putAll(arg0: Internal.Map_<any, any>): void;
        isEmpty(): boolean;
        static entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        putValue(arg0: string, arg1: string): string;
        containsKey(arg0: any): boolean;
        keySet(): Internal.Set<any>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        replaceAll(arg0: Internal.BiFunction_<any, any, any>): void;
        replace(arg0: any, arg1: any, arg2: any): boolean;
        put(arg0: any, arg1: any): any;
        static copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        values(): Internal.Collection<any>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        computeIfAbsent(arg0: any, arg1: Internal.Function_<any, any>): any;
        remove(arg0: any, arg1: any): boolean;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        size(): number;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        forEach(arg0: Internal.BiConsumer_<any, any>): void;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        static ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        entrySet(): Internal.Set<Internal.Map$Entry<any, any>>;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        getValue(arg0: Internal.Attributes$Name_): string;
        replace(arg0: any, arg1: any): any;
        merge(arg0: any, arg1: any, arg2: Internal.BiFunction_<any, any, any>): any;
        remove(arg0: any): any;
        static of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        get(arg0: any): any;
        compute(arg0: any, arg1: Internal.BiFunction_<any, any, any>): any;
        computeIfPresent(arg0: any, arg1: Internal.BiFunction_<any, any, any>): any;
        getValue(arg0: string): string;
        static of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        putIfAbsent(arg0: any, arg1: any): any;
        get empty(): boolean
    }
    type Attributes_ = Attributes;
    class CowJSBuilder extends Internal.AnimalEntityBuilder<any> {
        constructor(i: ResourceLocation_)
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
        createObject(): any;
    }
    type CowJSBuilder_ = CowJSBuilder;
    interface ModelPart$Visitor {
        abstract visit(arg0: Internal.PoseStack$Pose_, arg1: string, arg2: number, arg3: Internal.ModelPart$Cube_): void;
        (arg0: Internal.PoseStack$Pose, arg1: string, arg2: number, arg3: Internal.ModelPart$Cube): void;
    }
    type ModelPart$Visitor_ = ModelPart$Visitor;
    class ClientboundTeleportEntityPacket implements Internal.Packet<Internal.ClientGamePacketListener> {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.Entity_)
        getX(): number;
        handle(arg0: Internal.PacketListener_): void;
        getY(): number;
        getZ(): number;
        write(arg0: Internal.FriendlyByteBuf_): void;
        getxRot(): number;
        handle(arg0: Internal.ClientGamePacketListener_): void;
        getyRot(): number;
        isOnGround(): boolean;
        isSkippable(): boolean;
        getId(): number;
        get x(): number
        get y(): number
        get z(): number
        get xRot(): number
        get yRot(): number
        get onGround(): boolean
        get skippable(): boolean
        get id(): number
    }
    type ClientboundTeleportEntityPacket_ = ClientboundTeleportEntityPacket;
    interface NonNullFunction <T, R> {
        abstract apply(arg0: T): R;
        (arg0: T): R;
    }
    type NonNullFunction_<T, R> = NonNullFunction<T, R>;
    class EventBasedSpawnModifier$BiomeSpawn extends Internal.Record {
        constructor(biomes: Internal.List_<Internal.Either<ResourceLocation, Internal.TagKey<Internal.Biome>>>, spawnerData: Internal.Supplier_<Internal.MobSpawnSettings$SpawnerData>)
        spawnerData(): Internal.Supplier<Internal.MobSpawnSettings$SpawnerData>;
        biomes(): Internal.List<Internal.Either<ResourceLocation, Internal.TagKey<Internal.Biome>>>;
    }
    type EventBasedSpawnModifier$BiomeSpawn_ = EventBasedSpawnModifier$BiomeSpawn;
    class CartographyTableMenu extends Internal.AbstractContainerMenu {
        constructor(arg0: number, arg1: Internal.Inventory_, arg2: Internal.ContainerLevelAccess_)
        constructor(arg0: number, arg1: Internal.Inventory_)
        static readonly RESULT_SLOT: 2;
        lastSoundTime: number;
        static readonly MAP_SLOT: 0;
        readonly container: Internal.Container;
        static readonly ADDITIONAL_SLOT: 1;
    }
    type CartographyTableMenu_ = CartographyTableMenu;
    interface ProcessorHandle <Msg> extends Internal.AutoCloseable {
        abstract name(): string;
        abstract tell(arg0: Msg): void;
        of<Msg>(arg0: string, arg1: Internal.Consumer_<Msg>): this;
        close(): void;
        ask<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Source>, Msg>): Internal.CompletableFuture<Source>;
        askEither<Source>(arg0: Internal.Function_<Internal.ProcessorHandle<Internal.Either<Source, Internal.Exception>>, Msg>): Internal.CompletableFuture<Source>;
    }
    type ProcessorHandle_<Msg> = ProcessorHandle<Msg>;
    class ElectromancerArmorItem extends Internal.ImbuableChestplateArmorItem implements Internal.ArmorCapeProvider {
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
        getCapeResourceLocation(): ResourceLocation;
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
        get capeResourceLocation(): ResourceLocation
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
    type ElectromancerArmorItem_ = ElectromancerArmorItem;
    class CraftingContext extends Internal.LycheeContext {
        stopOpen(arg0: Player_): void;
        count(ingredient: Internal.Ingredient_): number;
        static tryClear(arg0: any): void;
        count(): number;
        countItem(arg0: Internal.Item_): number;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        isEmpty(): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        startOpen(arg0: Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        setChanged(): void;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        getHeight(): number;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        countNonEmpty(): number;
        asContainer(): Internal.Container;
        kjs$self(): Internal.Container;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        getAllItems(): Internal.List<Internal.ItemStack>;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_): boolean;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        get empty(): boolean
        get slots(): number
        get height(): number
        get width(): number
        get maxStackSize(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get mutable(): boolean
        readonly mirror: boolean;
        readonly matchY: number;
        readonly matchX: number;
    }
    type CraftingContext_ = CraftingContext;
    interface RecipeKJS {
        setGroup(group: string): void;
        getGroup(): string;
        getOrCreateId(): ResourceLocation;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getSchema(): Internal.RecipeSchema;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        getMod(): string;
        getType(): ResourceLocation;
        set group(group: string)
        get group(): string
        get orCreateId(): ResourceLocation
        get schema(): Internal.RecipeSchema
        get mod(): string
        get type(): ResourceLocation
    }
    type RecipeKJS_ = RecipeKJS;
    interface BlockEntityTicker <T extends Internal.BlockEntity> {
        abstract tick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: T): void;
        (arg0: Internal.Level, arg1: BlockPos, arg2: Internal.BlockState, arg3: T): void;
    }
    type BlockEntityTicker_<T extends Internal.BlockEntity> = BlockEntityTicker<T>;
    class StoneNotchBlock extends Internal.Block {
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: any_)
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
    type StoneNotchBlock_ = StoneNotchBlock;
    class TriState extends Internal.Enum<Internal.TriState> {
        map<T>(mapper: Internal.BooleanFunction_<T>): Internal.Optional<T>;
        orElse(value: boolean): boolean;
        static of(bool: boolean): Internal.TriState;
        orElseThrow<X extends Internal.Throwable>(exceptionSupplier: Internal.Supplier_<X>): boolean;
        getBoxed(): boolean;
        static values(): Internal.TriState[];
        static of(bool: boolean): Internal.TriState;
        static valueOf(name: string): Internal.TriState;
        get(): boolean;
        orElseGet(supplier: Internal.BooleanSupplier_): boolean;
        get boxed(): boolean
        static readonly TRUE: Internal.TriState;
        static readonly FALSE: Internal.TriState;
        static readonly DEFAULT: Internal.TriState;
    }
    type TriState_ = "false" | TriState | "default" | "true";
    interface MethodTypeDesc extends Internal.ConstantDesc, Internal.TypeDescriptor$OfMethod<Internal.ClassDesc, Internal.MethodTypeDesc> {
        displayDescriptor(): string;
        parameterArray(): Internal.TypeDescriptor$OfField<any>[];
        descriptorString(): string;
        dropParameterTypes(arg0: number, arg1: number): Internal.TypeDescriptor$OfMethod<any, any>;
        abstract parameterCount(): number;
        abstract resolveConstantDesc(arg0: Internal.MethodHandles$Lookup_): any;
        abstract changeReturnType(arg0: Internal.ClassDesc_): this;
        of(arg0: Internal.ClassDesc_, ...arg1: Internal.ClassDesc_[]): this;
        insertParameterTypes(arg0: number, arg1: Internal.TypeDescriptor$OfField_<any>[]): Internal.TypeDescriptor$OfMethod<any, any>;
        abstract parameterList(): Internal.List<Internal.ClassDesc>;
        returnType(): Internal.TypeDescriptor$OfField<any>;
        changeParameterType(arg0: number, arg1: Internal.TypeDescriptor$OfField_<any>): Internal.TypeDescriptor$OfMethod<any, any>;
        abstract changeParameterType(arg0: number, arg1: Internal.ClassDesc_): this;
        parameterType(arg0: number): Internal.TypeDescriptor$OfField<any>;
        changeReturnType(arg0: Internal.TypeDescriptor$OfField_<any>): Internal.TypeDescriptor$OfMethod<any, any>;
        abstract equals(arg0: any): boolean;
        ofDescriptor(arg0: string): this;
        abstract insertParameterTypes(arg0: number, ...arg1: Internal.ClassDesc_[]): this;
    }
    type MethodTypeDesc_ = MethodTypeDesc;
    class Typed <A> {
        constructor(arg0: com.mojang.datafixers.types.Type_<A>, arg1: Internal.DynamicOps_<any>, arg2: A)
        updateTyped<FT, FR>(arg0: Internal.OpticFinder_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: Internal.Function_<Internal.Typed<any>, Internal.Typed<any>>): Internal.Typed<any>;
        getAllTyped<FT>(arg0: Internal.OpticFinder_<FT>): Internal.List<Internal.Typed<FT>>;
        getValue(): A;
        inj2<B>(arg0: com.mojang.datafixers.types.Type_<B>): Internal.Typed<Internal.Either<B, A>>;
        updateRecursive<FT>(arg0: Internal.OpticFinder_<FT>, arg1: Internal.Function_<FT, FT>): Internal.Typed<any>;
        getType(): com.mojang.datafixers.types.Type<A>;
        out(): this;
        getOrCreateTyped<FT>(arg0: Internal.OpticFinder_<FT>): Internal.Typed<FT>;
        getTyped<FT>(arg0: Internal.OpticFinder_<FT>): Internal.Typed<FT>;
        getAll<FT>(arg0: Internal.TypedOptic_<A, any, FT, any>): Internal.List<FT>;
        getOptional<FT>(arg0: Internal.OpticFinder_<FT>): Internal.Optional<FT>;
        getOptionalTyped<FT>(arg0: Internal.OpticFinder_<FT>): Internal.Optional<Internal.Typed<FT>>;
        update<FT>(arg0: Internal.OpticFinder_<FT>, arg1: Internal.Function_<FT, FT>): Internal.Typed<any>;
        updateRecursiveTyped<FT, FR>(arg0: Internal.OpticFinder_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: Internal.Function_<Internal.Typed<any>, Internal.Typed<any>>): Internal.Typed<any>;
        updateTyped<FT>(arg0: Internal.OpticFinder_<FT>, arg1: Internal.Function_<Internal.Typed<any>, Internal.Typed<any>>): Internal.Typed<any>;
        getOps(): Internal.DynamicOps<any>;
        inj1<B>(arg0: com.mojang.datafixers.types.Type_<B>): Internal.Typed<Internal.Either<A, B>>;
        updateRecursive<FT, FR>(arg0: Internal.OpticFinder_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: Internal.Function_<FT, FR>): Internal.Typed<any>;
        getOrCreate<FT>(arg0: Internal.OpticFinder_<FT>): FT;
        updateRecursiveTyped<FT>(arg0: Internal.OpticFinder_<FT>, arg1: Internal.Function_<Internal.Typed<any>, Internal.Typed<any>>): Internal.Typed<any>;
        set<FT, FR>(arg0: Internal.OpticFinder_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: FR): Internal.Typed<any>;
        write(): Internal.DataResult<Internal.Dynamic<any>>;
        static pair<A, B>(arg0: Internal.Typed_<A>, arg1: Internal.Typed_<B>): Internal.Typed<com.mojang.datafixers.util.Pair<A, B>>;
        getOrDefault<FT>(arg0: Internal.OpticFinder_<FT>, arg1: FT): FT;
        get<FT>(arg0: Internal.OpticFinder_<FT>): FT;
        update<FT, FR>(arg0: Internal.OpticFinder_<FT>, arg1: com.mojang.datafixers.types.Type_<FR>, arg2: Internal.Function_<FT, FR>): Internal.Typed<any>;
        set<FT>(arg0: Internal.OpticFinder_<FT>, arg1: FT): Internal.Typed<any>;
        set<FT, FR>(arg0: Internal.OpticFinder_<FT>, arg1: Internal.Typed_<FR>): Internal.Typed<any>;
        get value(): A
        get type(): com.mojang.datafixers.types.Type<A>
        get ops(): Internal.DynamicOps<any>
    }
    type Typed_<A> = Typed<A>;
    class AbuseReportRequest$ClientInfo {
        constructor(arg0: string, arg1: string)
        locale: string;
        clientVersion: string;
    }
    type AbuseReportRequest$ClientInfo_ = AbuseReportRequest$ClientInfo;
    class BannerItem extends Internal.StandingAndWallBlockItem {
        constructor(arg0: Internal.Block_, arg1: Internal.Block_, arg2: Internal.Item$Properties_)
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
        getColor(): Internal.DyeColor;
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
        static appendHoverTextFromBannerBlockEntityTag(arg0: Internal.ItemStack_, arg1: Internal.List_<Internal.Component>): void;
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
        get color(): Internal.DyeColor
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
    type BannerItem_ = BannerItem;
    class IronGolem$Crackiness extends Internal.Enum<Internal.IronGolem$Crackiness> {
        static valueOf(arg0: string): Internal.IronGolem$Crackiness;
        static values(): Internal.IronGolem$Crackiness[];
        static byFraction(arg0: number): Internal.IronGolem$Crackiness;
        static readonly NONE: Internal.IronGolem$Crackiness;
        static readonly LOW: Internal.IronGolem$Crackiness;
        static readonly HIGH: Internal.IronGolem$Crackiness;
        static readonly MEDIUM: Internal.IronGolem$Crackiness;
    }
    type IronGolem$Crackiness_ = "medium" | "high" | "low" | "none" | IronGolem$Crackiness;
    interface Int2LongMap extends Internal.Int2LongFunction, Internal.Map<number, number> {
        composeShort(arg0: Internal.Short2IntFunction_): Internal.Short2LongFunction;
        /**
         * @deprecated
        */
        compute(arg0: number, arg1: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        containsValue(arg0: any): boolean;
        getOrDefault(arg0: number, arg1: number): number;
        andThenReference<T>(arg0: Internal.Long2ReferenceFunction_<T>): Internal.Int2ReferenceFunction<T>;
        abstract containsKey(arg0: number): boolean;
        composeInt(arg0: Internal.Int2IntFunction_): Internal.Int2LongFunction;
        andThenFloat(arg0: Internal.Long2FloatFunction_): Internal.Int2FloatFunction;
        putIfAbsent(arg0: number, arg1: number): number;
        andThenDouble(arg0: Internal.Long2DoubleFunction_): Internal.Int2DoubleFunction;
        remove(arg0: number, arg1: number): boolean;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Internal.Map<K, V>;
        andThenLong(arg0: Internal.Long2LongFunction_): Internal.Int2LongFunction;
        /**
         * @deprecated
        */
        andThen<T>(arg0: Internal.Function_<number, T>): Internal.Function<number, T>;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any, arg2: any): boolean;
        /**
         * @deprecated
        */
        merge(arg0: number, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        computeIfAbsentPartial(arg0: number, arg1: Internal.Int2LongFunction_): number;
        /**
         * @deprecated
        */
        put(arg0: any, arg1: any): any;
        mergeLong(arg0: number, arg1: number, arg2: it.unimi.dsi.fastutil.longs.LongBinaryOperator_): number;
        copyOf<K, V>(arg0: Internal.Map_<K, V>): Internal.Map<K, V>;
        andThenShort(arg0: Internal.Long2ShortFunction_): Internal.Int2ShortFunction;
        /**
         * @deprecated
        */
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, number, number>): number;
        computeIfAbsent(arg0: number, arg1: Internal.IntToLongFunction_): number;
        /**
         * @deprecated
        */
        computeIfAbsent(arg0: any, arg1: Internal.Function_<any, any>): any;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Internal.Map<K, V>;
        abstract int2LongEntrySet(): Internal.ObjectSet<Internal.Int2LongMap$Entry>;
        andThenChar(arg0: Internal.Long2CharFunction_): Internal.Int2CharFunction;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: number): number;
        /**
         * @deprecated
        */
        replace(arg0: number, arg1: number, arg2: number): boolean;
        replace(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        put(arg0: number, arg1: number): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Internal.Map<K, V>;
        ofEntries<K, V>(...arg0: Internal.Map$Entry_<K, V>[]): Internal.Map<K, V>;
        applyAsLong(arg0: number): number;
        computeIfPresent(arg0: number, arg1: Internal.BiFunction_<number, number, number>): number;
        /**
         * @deprecated
        */
        remove(arg0: any): any;
        abstract get(arg0: number): number;
        composeObject<T>(arg0: Internal.Object2IntFunction_<T>): Internal.Object2LongFunction<T>;
        /**
         * @deprecated
        */
        compute(arg0: any, arg1: Internal.BiFunction_<any, any, any>): any;
        andThenObject<T>(arg0: Internal.Long2ObjectFunction_<T>): Internal.Int2ObjectFunction<T>;
        identity<T>(): Internal.Function<T, T>;
        /**
         * @deprecated
        */
        putIfAbsent(arg0: any, arg1: any): any;
        of<K, V>(arg0: K, arg1: V): Internal.Map<K, V>;
        merge(arg0: number, arg1: number, arg2: Internal.BiFunction_<number, number, number>): number;
        composeReference<T>(arg0: Internal.Reference2IntFunction_<T>): Internal.Reference2LongFunction<T>;
        /**
         * @deprecated
        */
        getOrDefault(arg0: any, arg1: any): any;
        of<K, V>(): Internal.Map<K, V>;
        abstract isEmpty(): boolean;
        entry<K, V>(arg0: K, arg1: V): Internal.Map$Entry<K, V>;
        abstract keySet(): Internal.IntSet;
        apply(arg0: number): number;
        abstract containsValue(arg0: number): boolean;
        /**
         * @deprecated
        */
        containsKey(arg0: any): boolean;
        /**
         * @deprecated
        */
        compose<T>(arg0: Internal.Function_<T, number>): Internal.Function<T, number>;
        /**
         * @deprecated
        */
        replace(arg0: number, arg1: number): number;
        replace(arg0: number, arg1: number, arg2: number): boolean;
        composeDouble(arg0: Internal.Double2IntFunction_): Internal.Double2LongFunction;
        remove(arg0: number): number;
        /**
         * @deprecated
        */
        entrySet(): Internal.ObjectSet<Internal.Map$Entry<number, number>>;
        abstract putAll(arg0: Internal.Map_<number, number>): void;
        composeChar(arg0: Internal.Char2IntFunction_): Internal.Char2LongFunction;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Internal.Map<K, V>;
        abstract defaultReturnValue(): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): Internal.Map<K, V>;
        /**
         * @deprecated
        */
        remove(arg0: any, arg1: any): boolean;
        replaceAll(arg0: Internal.BiFunction_<number, number, number>): void;
        andThenInt(arg0: Internal.Long2IntFunction_): Internal.Int2IntFunction;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Internal.Map<K, V>;
        abstract values(): Internal.LongCollection;
        abstract size(): number;
        abstract hashCode(): number;
        mergeLong(arg0: number, arg1: number, arg2: Internal.LongBinaryOperator_): number;
        composeByte(arg0: Internal.Byte2IntFunction_): Internal.Byte2LongFunction;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Internal.Map<K, V>;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Internal.Map<K, V>;
        clear(): void;
        composeLong(arg0: Internal.Long2IntFunction_): Internal.Long2LongFunction;
        /**
         * @deprecated
        */
        replace(arg0: any, arg1: any): any;
        /**
         * @deprecated
        */
        computeIfAbsent(arg0: number, arg1: Internal.Function_<number, number>): number;
        /**
         * @deprecated
        */
        merge(arg0: any, arg1: any, arg2: Internal.BiFunction_<any, any, any>): any;
        compute(arg0: number, arg1: Internal.BiFunction_<number, number, number>): number;
        computeIfAbsent(arg0: number, arg1: Internal.Int2LongFunction_): number;
        of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Internal.Map<K, V>;
        abstract equals(arg0: any): boolean;
        computeIfAbsentNullable(arg0: number, arg1: Internal.IntFunction_<number>): number;
        /**
         * @deprecated
        */
        get(arg0: any): any;
        forEach(arg0: Internal.BiConsumer_<number, number>): void;
        /**
         * @deprecated
        */
        computeIfPresent(arg0: any, arg1: Internal.BiFunction_<any, any, any>): any;
        abstract defaultReturnValue(arg0: number): void;
        andThenByte(arg0: Internal.Long2ByteFunction_): Internal.Int2ByteFunction;
        composeFloat(arg0: Internal.Float2IntFunction_): Internal.Float2LongFunction;
        get empty(): boolean
    }
    type Int2LongMap_ = Int2LongMap;
    class JsonPrimitive extends Internal.JsonElement {
        constructor(arg0: string)
        constructor(arg0: number)
        constructor(arg0: boolean)
        constructor(arg0: string)
        isString(): boolean;
        deepCopy(): this;
        isBoolean(): boolean;
        isNumber(): boolean;
        get string(): boolean
        get "boolean"(): boolean
        get number(): boolean
    }
    type JsonPrimitive_ = JsonPrimitive;
    class AbuseReportLimits extends Internal.Record {
        constructor(maxOpinionCommentsLength: number, maxReportedMessageCount: number, maxEvidenceMessageCount: number, leadingContextMessageCount: number, trailingContextMessageCount: number)
        maxReportedMessageCount(): number;
        maxEvidenceMessageCount(): number;
        leadingContextMessageCount(): number;
        trailingContextMessageCount(): number;
        maxOpinionCommentsLength(): number;
        static readonly DEFAULTS: Internal.AbuseReportLimits;
    }
    type AbuseReportLimits_ = AbuseReportLimits;
    class IntegerComparisonConfiguration extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(comparison: Internal.Comparison_, compareTo: number)
        isConfigurationValid(): boolean;
        compareTo(): number;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        check(arg0: number): boolean;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        static withDefaults(arg0: Internal.Comparison_, arg1: number): Internal.MapCodec<Internal.IntegerComparisonConfiguration>;
        comparison(): Internal.Comparison;
        getMissingBinds(): Internal.List<string>;
        getOptimalStoppingPoint(): number;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        inverse(): this;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        get optimalStoppingPoint(): number
        static readonly OPTIONAL_MAP_CODEC: Internal.MapCodec<Internal.Optional<Internal.IntegerComparisonConfiguration>>;
        static readonly MAP_CODEC: Internal.MapCodec<Internal.IntegerComparisonConfiguration>;
        static readonly CODEC: Internal.Codec<Internal.IntegerComparisonConfiguration>;
    }
    type IntegerComparisonConfiguration_ = IntegerComparisonConfiguration;
    class Month extends Internal.Enum<Internal.Month> implements Internal.TemporalAccessor, Internal.TemporalAdjuster {
        static of(arg0: number): Internal.Month;
        adjustInto(arg0: Internal.Temporal_): Internal.Temporal;
        static values(): Internal.Month[];
        minLength(): number;
        query<R>(arg0: Internal.TemporalQuery_<R>): R;
        getDisplayName(arg0: Internal.TextStyle_, arg1: Internal.Locale_): string;
        minus(arg0: number): this;
        range(arg0: Internal.TemporalField_): Internal.ValueRange;
        length(arg0: boolean): number;
        static from(arg0: Internal.TemporalAccessor_): Internal.Month;
        get(arg0: Internal.TemporalField_): number;
        plus(arg0: number): this;
        firstMonthOfQuarter(): this;
        getLong(arg0: Internal.TemporalField_): number;
        firstDayOfYear(arg0: boolean): number;
        maxLength(): number;
        getValue(): number;
        static valueOf(arg0: string): Internal.Month;
        isSupported(arg0: Internal.TemporalField_): boolean;
        get value(): number
        static readonly JANUARY: Internal.Month;
        static readonly JUNE: Internal.Month;
        static readonly FEBRUARY: Internal.Month;
        static readonly APRIL: Internal.Month;
        static readonly MAY: Internal.Month;
        static readonly MARCH: Internal.Month;
        static readonly AUGUST: Internal.Month;
        static readonly OCTOBER: Internal.Month;
        static readonly JULY: Internal.Month;
        static readonly SEPTEMBER: Internal.Month;
        static readonly NOVEMBER: Internal.Month;
        static readonly DECEMBER: Internal.Month;
    }
    type Month_ = "march" | "april" | "september" | "may" | "june" | "august" | Month | "december" | "january" | "july" | "october" | "february" | "november";
    class DataPackConfig {
        constructor(arg0: Internal.List_<string>, arg1: Internal.List_<string>)
        getEnabled(): Internal.List<string>;
        addModPacks(arg0: Internal.List_<string>): void;
        getDisabled(): Internal.List<string>;
        get enabled(): Internal.List<string>
        get disabled(): Internal.List<string>
        static readonly CODEC: Internal.Codec<Internal.DataPackConfig>;
        static readonly DEFAULT: Internal.DataPackConfig;
    }
    type DataPackConfig_ = DataPackConfig;
    interface Vector4dc {
        abstract get(arg0: number, arg1: Internal.Vector4i_): Internal.Vector4i;
        abstract distance(arg0: number, arg1: number, arg2: number, arg3: number): number;
        abstract get(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract normalize(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract negate(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract get(arg0: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        abstract z(): number;
        abstract isFinite(): boolean;
        abstract mul(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract sub(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract angleCos(arg0: Internal.Vector4dc_): number;
        abstract get(arg0: Vec4f_): Vec4f;
        abstract fma(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): Internal.Vector4d;
        abstract getToAddress(arg0: number): this;
        abstract equals(arg0: Internal.Vector4dc_, arg1: number): boolean;
        abstract get(arg0: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract ceil(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract x(): number;
        abstract div(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract min(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract add(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        abstract mul(arg0: Internal.Matrix4fc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract normalize(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract dot(arg0: number, arg1: number, arg2: number, arg3: number): number;
        abstract distanceSquared(arg0: Internal.Vector4dc_): number;
        abstract mulTranspose(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract mulAffine(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract mulAdd(arg0: number, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): Internal.Vector4d;
        abstract mul(arg0: Internal.Matrix4x3fc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract floor(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract rotateY(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract get(arg0: number, arg1: Internal.FloatBuffer_): Internal.FloatBuffer;
        abstract distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number): number;
        abstract length(): number;
        abstract get(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract mulProject(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract minComponent(): number;
        abstract add(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract normalize3(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract maxComponent(): number;
        abstract getf(arg0: number, arg1: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract smoothStep(arg0: Internal.Vector4dc_, arg1: number, arg2: Internal.Vector4d_): Internal.Vector4d;
        abstract distance(arg0: Internal.Vector4dc_): number;
        abstract max(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract sub(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        abstract mul(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract lerp(arg0: Internal.Vector4dc_, arg1: number, arg2: Internal.Vector4d_): Internal.Vector4d;
        abstract getf(arg0: Internal.ByteBuffer_): Internal.ByteBuffer;
        abstract fma(arg0: number, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): Internal.Vector4d;
        abstract angle(arg0: Internal.Vector4dc_): number;
        abstract get(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract mulProject(arg0: Internal.Matrix4dc_, arg1: Internal.Vector3d_): Internal.Vector3d;
        abstract mul(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract sub(arg0: Internal.Vector4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract div(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract w(): number;
        abstract get(arg0: number): number;
        abstract y(): number;
        abstract lengthSquared(): number;
        abstract mul(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract absolute(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract rotate(arg0: Internal.Quaterniondc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract mulAffineTranspose(arg0: Internal.Matrix4dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract get(arg0: number, arg1: Internal.DoubleBuffer_): Internal.DoubleBuffer;
        abstract dot(arg0: Internal.Vector4dc_): number;
        abstract mul(arg0: Internal.Matrix4x3dc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract round(arg0: Internal.Vector4d_): Internal.Vector4d;
        abstract rotateX(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract rotateZ(arg0: number, arg1: Internal.Vector4d_): Internal.Vector4d;
        abstract equals(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        abstract mulAdd(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_, arg2: Internal.Vector4d_): Internal.Vector4d;
        abstract hermite(arg0: Internal.Vector4dc_, arg1: Internal.Vector4dc_, arg2: Internal.Vector4dc_, arg3: number, arg4: Internal.Vector4d_): Internal.Vector4d;
        abstract add(arg0: Internal.Vector4fc_, arg1: Internal.Vector4d_): Internal.Vector4d;
        get finite(): boolean
    }
    type Vector4dc_ = Vector4dc;
    class DropExperienceBlock extends Internal.Block {
        constructor(arg0: Internal.BlockBehaviour$Properties_)
        constructor(arg0: Internal.BlockBehaviour$Properties_, arg1: Internal.IntProvider_)
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
    type DropExperienceBlock_ = DropExperienceBlock;
    class ClientboundChunksBiomesPacket$ChunkBiomeData extends Internal.Record {
        constructor(arg0: Internal.FriendlyByteBuf_)
        constructor(arg0: Internal.LevelChunk_)
        constructor(arg0: Internal.ChunkPos_, arg1: number[])
        write(arg0: Internal.FriendlyByteBuf_): void;
        buffer(): number[];
        getReadBuffer(): Internal.FriendlyByteBuf;
        static extractChunkData(arg0: Internal.FriendlyByteBuf_, arg1: Internal.LevelChunk_): void;
        pos(): Internal.ChunkPos;
        get readBuffer(): Internal.FriendlyByteBuf
    }
    type ClientboundChunksBiomesPacket$ChunkBiomeData_ = ClientboundChunksBiomesPacket$ChunkBiomeData;
}
declare namespace org.mesdag.advjs.trigger {
    class Trigger implements Internal.ItemSetter {
        wrapItem(arg0: Internal.Ingredient_): Internal.ItemPredicate;
        /**
         * Triggers after the player gets a status effect applied or taken from them.
        */
        effectChanged(arg0: Internal.Consumer_<Internal.EffectsChangedBuilder>): Internal.EffectsChangedTrigger$TriggerInstance;
        /**
         * Triggers after any changes happen to the player's inventory.
        */
        hasItems(arg0: Internal.Ingredient_): Internal.InventoryChangeTrigger$TriggerInstance;
        /**
         * Triggers after the player travels between two dimensions.
        */
        changedDimension(arg0: Internal.Consumer_<Internal.ChangeDimensionBuilder>): Internal.ChangeDimensionTrigger$TriggerInstance;
        /**
         * Triggers when the player interacts with an entity.
        */
        playerInteract(arg0: Internal.Consumer_<Internal.PlayerInteractBuilder>): Internal.PlayerInteractTrigger$TriggerInstance;
        /**
         * Custom trigger, triggers when the player breaks a block.
        */
        blockDestroyed(arg0: Internal.Consumer_<Internal.BlockDestroyedTrigger$Builder>): Internal.BlockDestroyedTrigger$TriggerInstance;
        /**
         * Triggers after any changes happen to the player's inventory.
        */
        inventoryChange(arg0: Internal.Consumer_<Internal.InventoryChangeBuilder>): Internal.InventoryChangeTrigger$TriggerInstance;
        /**
         * Triggers after a player is the source of a mob or player being killed within the range of a sculk catalyst.
        */
        playerKilledEntityNearSculkCatalyst(arg0: Internal.Consumer_<Internal.PlayerKillEntityBuilder>): Internal.KilledTrigger$TriggerInstance;
        /**
         * Your custom trigger, which will match player.
        */
        custom(arg0: ResourceLocation_, arg1: Internal.Consumer_<Internal.BaseTriggerInstanceBuilder>): Internal.CustomTriggerInstance;
        /**
         * Triggers when the player cures a zombie villager.
        */
        curedZombieVillager(arg0: Internal.Consumer_<Internal.CuredZombieVillagerBuilder>): Internal.CuredZombieVillagerTrigger$TriggerInstance;
        /**
         * Triggers when a player picks up an item thrown by another entity.
        */
        itemPickedUpByPlayer(arg0: Internal.Consumer_<Internal.ItemPickedUpByPlayerBuilder>): Internal.PickedUpItemTrigger$TriggerInstance;
        /**
         * Triggers when the player has the levitation status effect.
        */
        levitated(arg0: Internal.Consumer_<Internal.LevitationBuilder>): Internal.LevitationTrigger$TriggerInstance;
        /**
         * Triggers every 20 ticks (1 second).
        */
        location(arg0: Internal.Consumer_<Internal.PlayerPredicateBuilder>): Internal.PlayerTrigger$TriggerInstance;
        /**
         * Triggers after any item in the inventory has been damaged in any form.
        */
        itemDurability(arg0: Internal.Consumer_<Internal.ItemDurabilityBuilder>): Internal.ItemDurabilityTrigger$TriggerInstance;
        /**
         * Custom trigger, triggers when the player killed an entity. It will match the score that player increased.
        */
        increasedKillScore(arg0: Internal.Consumer_<Internal.IncreasedKillScoreTrigger$Builder>): Internal.IncreasedKillScoreTrigger$TriggerInstance;
        /**
         * Triggers when the player consumes an item.
         * @param The item that was consumed. The item that was consumed.
        */
        consumeItem(arg0: Internal.Consumer_<Internal.SingleItemBuilder>): Internal.ConsumeItemTrigger$TriggerInstance;
        /**
         * Triggers after a living entity kills a player.
        */
        entityKilledPlayer(arg0: Internal.Consumer_<Internal.EntityKillPlayerBuilder>): Internal.KilledTrigger$TriggerInstance;
        /**
         * Create new trigger by json.
        */
        fromJson(arg0: Internal.JsonObject_): Internal.CriterionTriggerInstance;
        /**
         * Triggers after the player unlocks a recipe (using a knowledge book for example).
        */
        recipeUnlocked(arg0: Internal.Consumer_<Internal.RecipeUnlockedBuilder>): Internal.RecipeUnlockedTrigger$TriggerInstance;
        /**
         * Triggers when the player crafts a recipe in a crafting table, stonecutter or smithing table.
         * @param recipeId The recipe that was crafted.
         * @param itemPredicates An array of item predicates for the recipe ingredients.

Each item can only match one predicate, and every predicate needs to pass for the criterion to be granted.

        */
        static craftedItem(arg0: ResourceLocation_, arg1: Internal.List_<Internal.ItemPredicate>): Internal.RecipeCraftedTrigger$TriggerInstance;
        /**
         * Triggers when the player crafts a recipe in a crafting table, stonecutter or smithing table.
        */
        recipeCrafted(arg0: Internal.Consumer_<Internal.RecipeCraftedBuilder>): Internal.RecipeCraftedTrigger$TriggerInstance;
        /**
         * Triggers when the player consumes an item.
        */
        usedItem(arg0: Internal.ItemStack_): Internal.ConsumeItemTrigger$TriggerInstance;
        /**
         * Triggers after the player breeds 2 animals.
        */
        bredAnimals(arg0: Internal.Consumer_<Internal.BredAnimalsBuilder>): Internal.BredAnimalsTrigger$TriggerInstance;
        /**
         * Triggers after the player hurts a mob or player.
        */
        playerHurtEntity(arg0: Internal.Consumer_<Internal.PlayerHurtEntityBuilder>): Internal.PlayerHurtEntityTrigger$TriggerInstance;
        /**
         * Triggers every tick (20 times a second).
        */
        tick(): Internal.PlayerTrigger$TriggerInstance;
        /**
         * Custom trigger, triggers when the player joins a boss fight.
        */
        bossEvent(arg0: Internal.Consumer_<Internal.BossEventTrigger$Builder>): Internal.BossEventTrigger$TriggerInstance;
        /**
         * Triggers when the player uses an eye of ender (in a world where strongholds generate).
        */
        usedEnderEye(arg0: Internal.Consumer_<Internal.UsedEnderEyeBuilder>): Internal.UsedEnderEyeTrigger$TriggerInstance;
        /**
         * Triggers when the player uses a totem.
         * 
         * @param item The item, only works with totem items.
        */
        usedTotem(arg0: Internal.Consumer_<Internal.SingleItemBuilder>): Internal.UsedTotemTrigger$TriggerInstance;
        /**
         * Triggers after the player fills a bucket.
         * 
         * @param item The item resulting from filling the bucket.
        */
        filledBucket(arg0: Internal.Ingredient_): Internal.FilledBucketTrigger$TriggerInstance;
        /**
         * Triggers when the player uses their hand or an item on a block.
        */
        itemUsedOnBlock(arg0: Internal.Consumer_<Internal.ItemUsedOnLocationBuilder>): Internal.ItemUsedOnLocationTrigger$TriggerInstance;
        /**
         * Triggers after the player fills a bucket.
         * 
         * @param item The item resulting from filling the bucket.
        */
        filledBucket(arg0: Internal.Consumer_<Internal.SingleItemBuilder>): Internal.FilledBucketTrigger$TriggerInstance;
        /**
         * Triggers when the player crafts a recipe in a crafting table, stonecutter or smithing table.
         * @param recipeId The recipe that was crafted.
        */
        static craftedItem(arg0: ResourceLocation_): Internal.RecipeCraftedTrigger$TriggerInstance;
        /**
         * Triggers after the player takes any item out of a brewing stand.
        */
        brewedPotion(arg0: Internal.Consumer_<Internal.BrewedPotionBuilder>): Internal.BrewedPotionTrigger$TriggerInstance;
        /**
         * Triggers when a lightning bolt disappears from the world, only for players within a 256 block radius of the lightning bolt.
        */
        lightningStrike(arg0: Internal.Consumer_<Internal.LightningStrikeBuilder>): Internal.LightningStrikeTrigger$TriggerInstance;
        /**
         * Triggers after an entity has been summoned.
         * 
         * Works with iron golem, snow golem, the ender dragon and the wither.
         * 
         * Using dispensers, commands, or pistons to place the wither skulls or pumpkins will still activate this trigger.
         * 
         * @param entity The summoned entity.
        */
        summonedEntity(arg0: Internal.Consumer_<Internal.SingleEntityBuilder>): Internal.SummonedEntityTrigger$TriggerInstance;
        /**
         * Triggers after the player successfully catches an item with a fishing rod or pulls an entity with a fishing rod.
        */
        fishingRodHooked(arg0: Internal.Consumer_<Internal.FishingRodHookedBuilder>): Internal.FishingRodHookedTrigger$TriggerInstance;
        /**
         * Triggers after the player kills a mob or player using a crossbow in ranged combat.
        */
        killedByCrossbow(arg0: Internal.Consumer_<Internal.KilledByCrossbowBuilder>): Internal.KilledByCrossbowTrigger$TriggerInstance;
        /**
         * Triggers after the player throws an item and another entity picks it up.
        */
        itemPickedUpByEntity(arg0: Internal.Consumer_<Internal.ItemPickedUpByEntityBuilder>): Internal.PickedUpItemTrigger$TriggerInstance;
        /**
         * Triggers when the player enters a bed.
        */
        sleptInBed(arg0: Internal.Consumer_<Internal.PlayerPredicateBuilder>): Internal.PlayerTrigger$TriggerInstance;
        /**
         * Triggers after the player trades with a villager or a wandering trader.
        */
        villagerTrade(arg0: Internal.Consumer_<Internal.TradeBuilder>): Internal.TradeTrigger$TriggerInstance;
        /**
         * Never triggers.
        */
        impossible(): Internal.ImpossibleTrigger$TriggerInstance;
        /**
         * Triggers when the player travels to the Nether and then returns to the Overworld.
        */
        travelledThroughNether(arg0: Internal.Consumer_<Internal.TraveledThroughNetherBuilder>): Internal.DistanceTrigger$TriggerInstance;
        /**
         * Triggers when the player starts riding a vehicle or an entity starts riding a vehicle currently ridden by the player.
        */
        startRiding(arg0: Internal.Consumer_<Internal.PlayerPredicateBuilder>): Internal.StartRidingTrigger$TriggerInstance;
        /**
         * Triggers when a raid ends in victory and the player has attacked at least one raider from that raid.
        */
        raidWon(arg0: Internal.Consumer_<Internal.PlayerPredicateBuilder>): Internal.PlayerTrigger$TriggerInstance;
        /**
         * Triggers when the player slides down a block.
         * @param blockId The block that the player slid on.
         * @param state A map of block property names to values. Errors if the block doesn't have these properties.
        */
        slideDownBlock(arg0: Internal.Consumer_<Internal.SingleBlockBuilder>): Internal.SlideDownBlockTrigger$TriggerInstance;
        /**
         * Triggers after a player is the source of a mob or player being killed.
        */
        playerKilledEntity(arg0: Internal.Consumer_<Internal.PlayerKillEntityBuilder>): Internal.KilledTrigger$TriggerInstance;
        /**
         * Triggers once for each block the player's hitbox is inside (up to 12 blocks, the maximum number of blocks the player can stand in),
         * 
         * twice per tick plus once more for every time the player moves or looks around during the same tick.
         * 
         * This results in the trigger activating tens of times per tick, and in extreme cases, even hundreds of times per tick.
         * 
         * @param blockId The block that the player is standing in.
         * 
         * @param state A map of block property names to values. Errors if the block doesn't have these properties.
        */
        entersBlock(arg0: Internal.Consumer_<Internal.SingleBlockBuilder>): Internal.EnterBlockTrigger$TriggerInstance;
        /**
         * Triggers when the player uses a totem.
         * 
         * @param item The item, only works with totem items.
        */
        usingItem(arg0: Internal.Consumer_<Internal.SingleItemBuilder>): Internal.UsingItemTrigger$TriggerInstance;
        /**
         * Triggers when an allay drops an item on a block.
        */
        allayDropItemOnBlock(arg0: Internal.Consumer_<Internal.ItemUsedOnLocationBuilder>): Internal.ItemUsedOnLocationTrigger$TriggerInstance;
        /**
         * Triggers when the player places a block.
        */
        placedBlock(arg0: Internal.Consumer_<Internal.ItemUsedOnLocationBuilder>): Internal.ItemUsedOnLocationTrigger$TriggerInstance;
        /**
         * Triggers every tick (20 times a second).
        */
        tick(arg0: Internal.Consumer_<Internal.PlayerPredicateBuilder>): Internal.PlayerTrigger$TriggerInstance;
        /**
         * Triggers when the player generates the contents of a container with a loot table set.
        */
        lootTableUsed(arg0: ResourceLocation_): Internal.LootTableTrigger$TriggerInstance;
        /**
         * Triggers after a player gets hurt (even when it's not caused by an entity).
        */
        entityHurtPlayer(arg0: Internal.Consumer_<Internal.EntityHurtPlayerBuilder>): Internal.EntityHurtPlayerTrigger$TriggerInstance;
        /**
         * Custom trigger, triggers when the player touch an entity.
        */
        playerTouch(arg0: Internal.Consumer_<Internal.SingleEntityBuilder>): Internal.PlayerTouchTrigger$TriggerInstance;
        /**
         * Triggers when a player lands after falling.
        */
        fallFromHeight(arg0: Internal.Consumer_<Internal.FallFromHeightBuilder>): Internal.DistanceTrigger$TriggerInstance;
        /**
         * Triggers after the player changes the structure of a beacon. (When the beacon updates itself).
        */
        constructedBeacon(arg0: Internal.Consumer_<Internal.ConstructBeaconBuilder>): Internal.ConstructBeaconTrigger$TriggerInstance;
        /**
         * Triggers when the player causes a raid.
        */
        badOmen(arg0: Internal.Consumer_<Internal.PlayerPredicateBuilder>): Internal.PlayerTrigger$TriggerInstance;
        /**
         * Triggers when the player shoots a crossbow.
         * @param item The crossbow that is used.
        */
        shotCrossbow(arg0: Internal.Consumer_<Internal.SingleItemBuilder>): Internal.ShotCrossbowTrigger$TriggerInstance;
        /**
         * Triggers after any changes happen to the player's inventory.
        */
        hasItems(...arg0: Internal.ItemPredicate_[]): Internal.InventoryChangeTrigger$TriggerInstance;
        /**
         * Triggers after the player tames an animal.
         * 
         * @param entity Checks the entity that was tamed.
        */
        tameAnimal(arg0: Internal.Consumer_<Internal.SingleEntityBuilder>): Internal.TameAnimalTrigger$TriggerInstance;
        /**
         * Triggers when the player breaks a bee nest or beehive.
        */
        beeNestDestroyed(arg0: Internal.Consumer_<Internal.BeeNestDestroyedBuilder>): Internal.BeeNestDestroyedTrigger$TriggerInstance;
        /**
         * Triggers when the player shoots a target block.
        */
        targetHit(arg0: Internal.Consumer_<Internal.TargetHitBuilder>): Internal.TargetBlockTrigger$TriggerInstance;
        /**
         * Triggers after the player successfully uses the Channeling enchantment on an entity or a lightning rod.
        */
        channeledLightning(arg0: Internal.Consumer_<Internal.ChanneledLightningBuilder>): Internal.ChanneledLightningTrigger$TriggerInstance;
        /**
         * Triggers when a player mounts an entity walking on lava and while the entity moves with them.
        */
        rideEntityInLava(arg0: Internal.Consumer_<Internal.RideEntityInLavaBuilder>): Internal.DistanceTrigger$TriggerInstance;
        /**
         * Your custom trigger, which not match player.
        */
        custom(arg0: ResourceLocation_): Internal.CustomTriggerInstance;
        /**
         * Triggers when the player generates the contents of a container with a loot table set.
        */
        lootTable(arg0: Internal.Consumer_<Internal.LootTableBuilder>): Internal.LootTableTrigger$TriggerInstance;
        /**
         * Triggers when a vibration event is ignored because the source player is crouching.
        */
        avoidVibration(arg0: Internal.Consumer_<Internal.PlayerPredicateBuilder>): Internal.PlayerTrigger$TriggerInstance;
        /**
         * Triggers after the player enchants an item through an enchanting table
         * 
         * (does not get triggered through an anvil, or through commands).
        */
        enchantedItem(arg0: Internal.Consumer_<Internal.EnchantedItemBuilder>): Internal.EnchantedItemTrigger$TriggerInstance;
    }
    type Trigger_ = Trigger;
}
declare namespace io.github.apace100.apoli.action.entity {
    class AreaOfEffectAction extends Internal.EntityAction<Internal.AreaOfEffectConfiguration<Internal.ConfiguredBiEntityAction<any, any>, Internal.ConfiguredBiEntityCondition<any, any>>> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        execute(arg0: Internal.AreaOfEffectConfiguration_<Internal.ConfiguredBiEntityAction<any, any>, Internal.ConfiguredBiEntityCondition<any, any>>, arg1: Internal.Entity_): void;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type AreaOfEffectAction_ = AreaOfEffectAction;
}
declare namespace it.unimi.dsi.fastutil.doubles {
    interface DoubleBinaryOperator extends Internal.DoubleBinaryOperator, Internal.BinaryOperator<number> {
        /**
         * @deprecated
        */
        apply(arg0: any, arg1: any): any;
        andThen<V>(arg0: Internal.Function_<number, V>): Internal.BiFunction<number, number, V>;
        /**
         * @deprecated
        */
        apply(arg0: number, arg1: number): number;
        /**
         * @deprecated
        */
        applyAsDouble(arg0: number, arg1: number): number;
        maxBy<T>(arg0: Internal.Comparator_<T>): Internal.BinaryOperator<T>;
        minBy<T>(arg0: Internal.Comparator_<T>): Internal.BinaryOperator<T>;
        abstract apply(arg0: number, arg1: number): number;
        (arg0: number, arg1: number): number;
    }
    type DoubleBinaryOperator_ = DoubleBinaryOperator;
}
