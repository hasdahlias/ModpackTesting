/// <reference path="./internal_*.d.ts" />
declare namespace Internal {
    class LongTag extends Internal.NumericTag {
        constructor(arg0: number)
        getAsString(): string;
        acceptAsRoot(arg0: Internal.StreamTagVisitor_): void;
        copy(): this;
        static checkSpecialEquality(o: any, o1: any, shallow: boolean): boolean;
        getType(): Internal.TagType<Internal.LongTag>;
        static valueOf(arg0: number): Internal.LongTag;
        get asString(): string
        get type(): Internal.TagType<Internal.LongTag>
        static readonly TYPE: Internal.TagType<Internal.LongTag>;
    }
    type LongTag_ = LongTag;
    interface ExtendedVertexFormat {
        abstract embeddium$getExtendedElements(): any[];
        (): any_[];
    }
    type ExtendedVertexFormat_ = ExtendedVertexFormat;
    class RemoteDetonatorItem extends Internal.Item {
        constructor()
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
        static getBombPosition(arg0: Internal.CompoundTag_): Internal.GlobalPos;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        static isActive(arg0: Internal.ItemStack_): boolean;
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
    type RemoteDetonatorItem_ = RemoteDetonatorItem;
    class RedstoneSide extends Internal.Enum<Internal.RedstoneSide> implements Internal.StringRepresentable {
        static valueOf(arg0: string): Internal.RedstoneSide;
        static fromEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>): Internal.StringRepresentable$EnumCodec<E>;
        static fromEnumWithMapping<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, string>): Internal.StringRepresentable$EnumCodec<E>;
        static keys(arg0: Internal.StringRepresentable_[]): Internal.Keyable;
        getSerializedName(): string;
        static values(): Internal.RedstoneSide[];
        isConnected(): boolean;
        get serializedName(): string
        get connected(): boolean
        static readonly UP: Internal.RedstoneSide;
        static readonly NONE: Internal.RedstoneSide;
        static readonly SIDE: Internal.RedstoneSide;
    }
    type RedstoneSide_ = "side" | "up" | RedstoneSide | "none";
    class ChestBoat extends Internal.Boat implements Internal.HasCustomInventoryScreen, Internal.ContainerEntity {
        constructor(arg0: Internal.EntityType_<Internal.Boat>, arg1: Internal.Level_)
        constructor(arg0: Internal.Level_, arg1: number, arg2: number, arg3: number)
        stopOpen(arg0: Player_): void;
        getDistance(pos: BlockPos_): number;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        addChestVehicleSaveData(arg0: Internal.CompoundTag_): void;
        isChestVehicleEmpty(): boolean;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        removeItem(arg0: number, arg1: number): Internal.ItemStack;
        setChanged(): void;
        isOnScoreboardTeam(teamId: string): boolean;
        isChestVehicleStillValid(arg0: Player_): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        getWidth(): number;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        canStartSwimming(): boolean;
        isPlayer(): boolean;
        isAnimal(): boolean;
        rayTrace(distance: number, fluids: boolean): Internal.RayTraceResultJS;
        shouldUpdateFluidWhileRiding(arg0: Internal.FluidState_, arg1: Internal.Entity_): boolean;
        setY(y: number): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        isLiving(): boolean;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        alwaysAccepts(): boolean;
        clearItemStacks(): void;
        canBoatInFluid(arg0: Internal.FluidState_): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        getItem(arg0: number): Internal.ItemStack;
        isInFluid(fluidState: Internal.FluidState_): boolean;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        chestVehicleDestroyed(arg0: DamageSource_, arg1: Internal.Level_, arg2: Internal.Entity_): void;
        getDisplayName(): Internal.Component;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        countItem(arg0: Internal.Item_): number;
        attack(hp: number): void;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        startOpen(arg0: Player_): void;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        createMenu(arg0: number, arg1: Internal.Inventory_, arg2: Player_): Internal.AbstractContainerMenu;
        getItemStacks(): Internal.NonNullList<Internal.ItemStack>;
        getTeamId(): string;
        removeChestVehicleItem(arg0: number, arg1: number): Internal.ItemStack;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        getChestVehicleItem(arg0: number): Internal.ItemStack;
        canRiderInteract(): boolean;
        shouldCloseCurrentScreen(): boolean;
        shouldRiderSit(): boolean;
        getHeight(): number;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        getLootTableSeed(): number;
        removeChestVehicleItemNoUpdate(arg0: number): Internal.ItemStack;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        countNonEmpty(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        getItem(): Internal.ItemStack;
        setX(x: number): void;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        getLootTable(): ResourceLocation;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        unpackLootTable(arg0: Player_): void;
        isFrame(): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        playSound(id: Internal.SoundEvent_): void;
        clear(): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        self(): Internal.Container;
        clearContent(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        static tryClear(arg0: any): void;
        isPeacefulCreature(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        setRotation(yaw: number, pitch: number): void;
        setLootTableSeed(arg0: number): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        getStepHeight(): number;
        isAmbientCreature(): boolean;
        getSoundFromFluidType(arg0: Internal.FluidType_, arg1: Internal.SoundAction_): Internal.SoundEvent;
        isMonster(): boolean;
        getSlots(): number;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        getType(): string;
        getContainerSize(): number;
        setItem(arg0: number, arg1: Internal.ItemStack_): void;
        interactWithContainerVehicle(arg0: Player_): InteractionResult;
        canBoatInFluid(arg0: Internal.FluidType_): boolean;
        getBlock(): Internal.BlockContainerJS;
        getNbt(): Internal.CompoundTag;
        getMotionY(): number;
        getName(): Internal.Component;
        getPassengers(): Internal.EntityArrayList;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        removeItemNoUpdate(arg0: number): Internal.ItemStack;
        clearChestVehicleContent(): void;
        getFluidFallDistanceModifier(arg0: Internal.FluidType_): number;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_): boolean;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        setLootTable(arg0: ResourceLocation_): void;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        isInFluid(fluidProp: Internal.FluidProperties_): boolean;
        unpackChestVehicleLootTable(arg0: Player_): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        getChestVehicleSlot(arg0: number): Internal.SlotAccess;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        count(ingredient: Internal.Ingredient_): number;
        setMotionX(x: number): void;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        count(): number;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        teleportTo(dimension: ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): void;
        openCustomInventoryScreen(arg0: Player_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        isEmpty(): boolean;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        isMultipartEntity(): boolean;
        serializeNBT(): Internal.Tag;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        readChestVehicleSaveData(arg0: Internal.CompoundTag_): void;
        getStackInSlot(slot: number): Internal.ItemStack;
        getParts(): Internal.PartEntity<any>[];
        setPositionAndRotation(x: number, y: number, z: number, yaw: number, pitch: number): void;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        asContainer(): Internal.Container;
        deserializeNBT(arg0: Internal.Tag_): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getEyeHeightForge(arg0: Internal.Pose_, arg1: Internal.EntityDimensions_): number;
        getMotionZ(): number;
        getAllItems(): Internal.List<Internal.ItemStack>;
        tell(message: Internal.Component_): void;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        setZ(z: number): void;
        stillValid(arg0: Player_): boolean;
        setChestVehicleItem(arg0: number, arg1: Internal.ItemStack_): void;
        setStatusMessage(message: Internal.Component_): void;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        isEyeInFluidType(arg0: Internal.FluidType_): boolean;
        getDistanceSq(pos: BlockPos_): number;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getProfile(): Internal.GameProfile;
        isMutable(): boolean;
        find(ingredient: Internal.Ingredient_): number;
        getClassification(arg0: boolean): Internal.MobCategory;
        runCommand(command: string): number;
        get chestVehicleEmpty(): boolean
        get width(): number
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get itemStacks(): Internal.NonNullList<Internal.ItemStack>
        get teamId(): string
        get facing(): Internal.Direction
        get height(): number
        get lootTableSeed(): number
        get motionX(): number
        get waterCreature(): boolean
        get item(): Internal.ItemStack
        set x(x: number)
        get lootTable(): ResourceLocation
        get frame(): boolean
        set motionY(y: number)
        get peacefulCreature(): boolean
        set lootTableSeed(arg0: number)
        get stepHeight(): number
        get ambientCreature(): boolean
        get monster(): boolean
        get slots(): number
        get type(): string
        get containerSize(): number
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        get maxStackSize(): number
        set lootTable(arg0: ResourceLocation_)
        get server(): Internal.MinecraftServer
        set motionX(x: number)
        get empty(): boolean
        set nbt(nbt: Internal.CompoundTag_)
        get level(): Internal.Level
        get scriptType(): Internal.ScriptType
        get multipartEntity(): boolean
        get parts(): Internal.PartEntity<any>[]
        get motionZ(): number
        get allItems(): Internal.List<Internal.ItemStack>
        set z(z: number)
        set statusMessage(message: Internal.Component_)
        get profile(): Internal.GameProfile
        get mutable(): boolean
    }
    type ChestBoat_ = ChestBoat;
    abstract class PathfinderMob extends Internal.Mob implements Internal.IMagicEntity {
        constructor(arg0: Internal.EntityType_<Internal.PathfinderMob>, arg1: Internal.Level_)
        handler$dkj000$entityjs$getWalkTargetValue(pPos: BlockPos_, pLevel: Internal.LevelReader_, cir: Internal.CallbackInfoReturnable_<any>): void;
        getDistance(pos: BlockPos_): number;
        isCasting(): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        onLeashDistance(arg0: number): void;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        handler$bdm000$irons_spells_js$init(entityType: Internal.EntityType_<any>, level: Internal.Level_, ci: Internal.CallbackInfo_): void;
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
        setSyncedSpellData(syncedSpellData: Internal.SyncedSpellData_): void;
        isLiving(): boolean;
        damageEquipment(slot: Internal.EquipmentSlot_): void;
        getWalkTargetValue(arg0: BlockPos_): number;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        rayTrace(): Internal.RayTraceResultJS;
        getTotalMovementSpeed(): number;
        alwaysAccepts(): boolean;
        moveInFluid(arg0: Internal.FluidState_, arg1: Vec3d_, arg2: number): boolean;
        isInFluidType(arg0: Internal.FluidState_): boolean;
        isInFluid(fluidState: Internal.FluidState_, check: Internal.Function_<Internal.FluidProperties, boolean>): boolean;
        isInFluid(fluidState: Internal.FluidState_): boolean;
        setDrinkingPotion(drinkingPotion: boolean): void;
        damageHeldItem(): void;
        getDisplayName(): Internal.Component;
        shouldUpdateFluidWhileBoating(arg0: Internal.FluidState_, arg1: Internal.Boat_): boolean;
        setPosition(block: Internal.BlockContainerJS_): void;
        setMotionZ(z: number): void;
        getMagicData(): Internal.MagicData;
        mergeNbt(tag: Internal.CompoundTag_): Internal.Entity;
        attack(hp: number): void;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        getAnimation(): Internal.AnimationApplier;
        canSwimInFluidType(arg0: Internal.FluidType_): boolean;
        startDrinkingPotion(): void;
        getTeamId(): string;
        setMaxHealth(hp: number): void;
        canBeRiddenUnderFluidType(arg0: Internal.FluidType_, arg1: Internal.Entity_): boolean;
        getFacing(): Internal.Direction;
        canRiderInteract(): boolean;
        initiateCastSpell(spell: Internal.AbstractSpell_, spellLevel: number): void;
        bettermobcombat$startUpswing(arg0: Internal.WeaponAttributes_): void;
        followLeashSpeed(): number;
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
        castComplete(): void;
        handler$dkj000$entityjs$followLeashSpeed(cir: Internal.CallbackInfoReturnable_<any>): void;
        setAttributeBaseValue(attribute: Internal.Attribute_, value: number): void;
        getHasUsedSingleAttack(): boolean;
        getPotionEffects(): Internal.EntityPotionEffectsJS;
        abstract getItemBySlot(arg0: Internal.EquipmentSlot_): Internal.ItemStack;
        isFrame(): boolean;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        setLegsArmorItem(item: Internal.ItemStack_): void;
        playSound(id: Internal.SoundEvent_): void;
        foodEaten(is: Internal.ItemStack_): void;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getDefaultMovementSpeed(): number;
        notifyDangerousProjectile(projectile: Internal.Projectile_): void;
        swing(hand: Internal.InteractionHand_): void;
        getHeldItem(hand: Internal.InteractionHand_): Internal.ItemStack;
        getDistance(x: number, y: number, z: number): number;
        setMotionY(y: number): void;
        getAttributeTotalValue(attribute: Internal.Attribute_): number;
        isPeacefulCreature(): boolean;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        setTeleportLocationBehindTarget(distance: number): boolean;
        isUndead(): boolean;
        setRotation(yaw: number, pitch: number): void;
        setHasUsedSingleAttack(hasUsedSingleAttack: boolean): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        isPathFinding(): boolean;
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
        handler$dkj000$entityjs$shouldStayCloseToLeashHolder(cir: Internal.CallbackInfoReturnable_<any>): void;
        isInFluidType(arg0: Internal.BiPredicate_<Internal.FluidType, number>): boolean;
        getWalkTargetValue(arg0: BlockPos_, arg1: Internal.LevelReader_): number;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        setHeldItem(hand: Internal.InteractionHand_, item: Internal.ItemStack_): void;
        isDrinkingPotion(): boolean;
        canFluidExtinguish(arg0: Internal.FluidType_): boolean;
        isInFluid(fluidProp: Internal.FluidProperties_): boolean;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        isPushedByFluid(arg0: Internal.FluidType_): boolean;
        cancelCast(): void;
        getFeetArmorItem(): Internal.ItemStack;
        setOffHandItem(item: Internal.ItemStack_): void;
        setDefaultMovementSpeed(speed: number): void;
        sinkInFluid(arg0: Internal.FluidType_): void;
        getMainHandItem(): Internal.ItemStack;
        spawn(): void;
        getServer(): Internal.MinecraftServer;
        setMotionX(x: number): void;
        shouldStayCloseToLeashHolder(): boolean;
        isInFluidOr(fluidState: Internal.FluidState_, or: boolean): boolean;
        setBurningDashDirectionData(): void;
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
        get casting(): boolean
        set defaultMovementSpeedMultiplier(speed: number)
        get offHandItem(): Internal.ItemStack
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        set syncedSpellData(syncedSpellData: Internal.SyncedSpellData_)
        get living(): boolean
        get totalMovementSpeed(): number
        set drinkingPotion(drinkingPotion: boolean)
        get displayName(): Internal.Component
        set position(block: Internal.BlockContainerJS_)
        set motionZ(z: number)
        get magicData(): Internal.MagicData
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
        get hasUsedSingleAttack(): boolean
        get potionEffects(): Internal.EntityPotionEffectsJS
        get frame(): boolean
        set legsArmorItem(item: Internal.ItemStack_)
        get defaultMovementSpeed(): number
        set motionY(y: number)
        get peacefulCreature(): boolean
        set teleportLocationBehindTarget(distance: number)
        get undead(): boolean
        set hasUsedSingleAttack(hasUsedSingleAttack: boolean)
        get pathFinding(): boolean
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
        drinkTime: number;
        static readonly DEFAULT_WALK_TARGET_VALUE: 0.0;
        hasUsedSingleAttack: boolean;
        entityJs$builder: any;
        readonly spells: Internal.HashMap<any, any>;
        castingSpell: SpellData;
    }
    type PathfinderMob_ = PathfinderMob;
    class FireworkRocketItem$Shape extends Internal.Enum<Internal.FireworkRocketItem$Shape> implements Internal.IExtensibleEnum {
        /**
         * @deprecated
        */
        static byId(arg0: number): Internal.FireworkRocketItem$Shape;
        static values(): Internal.FireworkRocketItem$Shape[];
        static createCodecForExtensibleEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, E>): Internal.Codec<E>;
        /**
         * @deprecated
        */
        init(): void;
        getName(): string;
        static getShape(arg0: Internal.CompoundTag_): Internal.FireworkRocketItem$Shape;
        static valueOf(arg0: string): Internal.FireworkRocketItem$Shape;
        static create(arg0: string, arg1: number, arg2: string): Internal.FireworkRocketItem$Shape;
        save(arg0: Internal.CompoundTag_): void;
        getId(): number;
        get name(): string
        get id(): number
        static readonly SMALL_BALL: Internal.FireworkRocketItem$Shape;
        static readonly BURST: Internal.FireworkRocketItem$Shape;
        static readonly STAR: Internal.FireworkRocketItem$Shape;
        static readonly CREEPER: Internal.FireworkRocketItem$Shape;
        static readonly LARGE_BALL: Internal.FireworkRocketItem$Shape;
    }
    type FireworkRocketItem$Shape_ = FireworkRocketItem$Shape | "star" | "burst" | "large_ball" | "creeper" | "small_ball";
    class CustomGameRuleCategory {
        constructor(id: ResourceLocation_, name: Internal.Component_)
        getName(): Internal.Component;
        getId(): ResourceLocation;
        static getCategory<T extends Internal.GameRules$Value<T>>(key: Internal.GameRules$Key_<T>): Internal.Optional<Internal.CustomGameRuleCategory>;
        get name(): Internal.Component
        get id(): ResourceLocation
    }
    type CustomGameRuleCategory_ = CustomGameRuleCategory;
    abstract class RenderPlayerEvent extends Internal.PlayerEvent {
        constructor()
        getRenderer(): Internal.PlayerRenderer;
        getPoseStack(): Internal.PoseStack;
        getPartialTick(): number;
        getEntity(): Internal.LivingEntity;
        getPackedLight(): number;
        getMultiBufferSource(): Internal.MultiBufferSource;
        get renderer(): Internal.PlayerRenderer
        get poseStack(): Internal.PoseStack
        get partialTick(): number
        get entity(): Internal.LivingEntity
        get packedLight(): number
        get multiBufferSource(): Internal.MultiBufferSource
    }
    type RenderPlayerEvent_ = RenderPlayerEvent;
    interface CollisionContext {
        empty(): this;
        abstract isHoldingItem(arg0: Internal.Item_): boolean;
        abstract isDescending(): boolean;
        abstract isAbove(arg0: Internal.VoxelShape_, arg1: BlockPos_, arg2: boolean): boolean;
        abstract canStandOnFluid(arg0: Internal.FluidState_, arg1: Internal.FluidState_): boolean;
        of(arg0: Internal.Entity_): this;
        get descending(): boolean
    }
    type CollisionContext_ = CollisionContext;
    abstract class GenericBuilder <Base extends Internal.Config, Result extends Internal.FileConfig> {
        parsingMode(arg0: Internal.ParsingMode_): this;
        autosave(): this;
        backingMapCreator(arg0: Internal.Supplier_<Internal.Map<string, any>>): this;
        defaultData(arg0: Internal.Path_): this;
        charset(arg0: Internal.Charset_): this;
        defaultData(arg0: Internal.File_): this;
        defaultData(arg0: Internal.URL_): this;
        sync(): this;
        concurrent(): this;
        preserveInsertionOrder(): this;
        writingMode(arg0: Internal.WritingMode_): this;
        autoreload(): this;
        build(): Result;
        onFileNotFound(arg0: Internal.FileNotFoundAction_): this;
        defaultResource(arg0: string): this;
    }
    type GenericBuilder_<Base extends Internal.Config, Result extends Internal.FileConfig> = GenericBuilder<Base, Result>;
    class HumanoidArm extends Internal.Enum<Internal.HumanoidArm> implements Internal.OptionEnum {
        getKey(): string;
        static valueOf(arg0: string): Internal.HumanoidArm;
        getCaption(): Internal.Component;
        getOpposite(): this;
        static values(): Internal.HumanoidArm[];
        getId(): number;
        get key(): string
        get caption(): Internal.Component
        get opposite(): Internal.HumanoidArm
        get id(): number
        static readonly LEFT: Internal.HumanoidArm;
        static readonly RIGHT: Internal.HumanoidArm;
    }
    type HumanoidArm_ = HumanoidArm | "right" | "left";
    interface UpgradeType {
        registerUpgrade(arg0: Internal.UpgradeType_): void;
        abstract getId(): ResourceLocation;
        getUpgrade(arg0: ResourceLocation_): Internal.Optional<Internal.UpgradeType>;
        abstract getContainerItem(): Internal.Optional<Internal.Supplier<Internal.Item>>;
        abstract getOperation(): Internal.AttributeModifier$Operation;
        abstract getAmountPerUpgrade(): number;
        abstract getAttribute(): Internal.Attribute;
        get id(): ResourceLocation
        get containerItem(): Internal.Optional<Internal.Supplier<Internal.Item>>
        get operation(): Internal.AttributeModifier$Operation
        get amountPerUpgrade(): number
        get attribute(): Internal.Attribute
        readonly UPGRADE_REGISTRY: {[key: ResourceLocation]: any, [key: ResourceLocation]: any, [key: ResourceLocation]: any, [key: ResourceLocation]: any, [key: ResourceLocation]: any, [key: ResourceLocation]: any, [key: ResourceLocation]: any, [key: ResourceLocation]: any, [key: ResourceLocation]: any, [key: ResourceLocation]: any, [key: ResourceLocation]: any, [key: ResourceLocation]: any, [key: ResourceLocation]: any, [key: ResourceLocation]: any};
    }
    type UpgradeType_ = UpgradeType;
    class HalfTransparentBlock extends Internal.Block {
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
    type HalfTransparentBlock_ = HalfTransparentBlock;
    interface ModifyPlayerSpawnCache {
        abstract removeActiveSpawnPower(): void;
        abstract getActiveSpawnPower(): Internal.ResourceKey<Internal.ConfiguredPower<any, any>>;
        abstract setActiveSpawnPower(arg0: Internal.ResourceKey_<Internal.ConfiguredPower<any, any>>): void;
        get activeSpawnPower(): Internal.ResourceKey<Internal.ConfiguredPower<any, any>>
        set activeSpawnPower(arg0: Internal.ResourceKey_<Internal.ConfiguredPower<any, any>>)
    }
    type ModifyPlayerSpawnCache_ = ModifyPlayerSpawnCache;
    class MobEffects$1 extends Internal.MobEffect {
        constructor(arg0: Internal.MobEffectCategory_, arg1: number)
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type MobEffects$1_ = MobEffects$1;
    class IngredientCondition extends Internal.ItemCondition<Internal.FieldConfiguration<Internal.Ingredient>> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        check(arg0: Internal.FieldConfiguration_<Internal.Ingredient>, arg1: Internal.Level_, arg2: Internal.ItemStack_): boolean;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        check(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.Level_, arg2: Internal.ItemStack_): boolean;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type IngredientCondition_ = IngredientCondition;
    interface MouseExtensions {
        abstract getHorizontalScroll(): number;
        get horizontalScroll(): number
        (): number;
    }
    type MouseExtensions_ = MouseExtensions;
    class TickEvent$Phase extends Internal.Enum<Internal.TickEvent$Phase> {
        static values(): Internal.TickEvent$Phase[];
        static valueOf(arg0: string): Internal.TickEvent$Phase;
        static readonly START: Internal.TickEvent$Phase;
        static readonly END: Internal.TickEvent$Phase;
    }
    type TickEvent$Phase_ = "start" | "end" | TickEvent$Phase;
    class GeoBone implements Internal.CoreGeoBone {
        constructor(arg0: Internal.GeoBone_, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean)
        saveSnapshot(): Internal.BoneSnapshot;
        getModelPosition(): Internal.Vector3d;
        updatePosition(arg0: number, arg1: number, arg2: number): void;
        getModelSpaceMatrix(): Matrix4f;
        setPivotY(arg0: number): void;
        setLocalSpaceMatrix(arg0: Matrix4f_): void;
        getPivotZ(): number;
        setRotZ(arg0: number): void;
        setRotX(arg0: number): void;
        getPivotX(): number;
        getRotY(): number;
        isTrackingMatrices(): boolean;
        updatePivot(arg0: number, arg1: number, arg2: number): void;
        getModelRotationMatrix(): Matrix4f;
        setScaleX(arg0: number): void;
        resetStateChanges(): void;
        setModelSpaceMatrix(arg0: Matrix4f_): void;
        addRotationOffsetFromBone(arg0: Internal.GeoBone_): void;
        setScaleZ(arg0: number): void;
        getInitialSnapshot(): Internal.BoneSnapshot;
        setWorldSpaceMatrix(arg0: Matrix4f_): void;
        setPosZ(arg0: number): void;
        getLocalPosition(): Internal.Vector3d;
        getPosX(): number;
        getPosZ(): number;
        getCubes(): Internal.List<Internal.GeoCube>;
        hasScaleChanged(): boolean;
        getWorldSpaceMatrix(): Matrix4f;
        saveInitialSnapshot(): void;
        getRotationVector(): Internal.Vector3d;
        getScaleZ(): number;
        getLocalSpaceMatrix(): Matrix4f;
        getScaleX(): number;
        setHidden(arg0: boolean): void;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        getScaleVector(): Internal.Vector3d;
        getWorldPosition(): Internal.Vector3d;
        getPivotY(): number;
        setPivotZ(arg0: number): void;
        setRotY(arg0: number): void;
        setPivotX(arg0: number): void;
        getWorldSpaceNormal(): Matrix3f;
        getRotZ(): number;
        setModelPosition(arg0: Internal.Vector3d_): void;
        getRotX(): number;
        hasRotationChanged(): boolean;
        setPosX(arg0: number): void;
        getName(): string;
        shouldNeverRender(): boolean;
        setScaleY(arg0: number): void;
        getMirror(): boolean;
        hasPositionChanged(): boolean;
        getInflate(): number;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        setChildrenHidden(arg0: boolean): void;
        setPosY(arg0: number): void;
        isHidden(): boolean;
        getParent(): Internal.CoreGeoBone;
        getPosY(): number;
        markPositionAsChanged(): void;
        getPositionVector(): Internal.Vector3d;
        getReset(): boolean;
        markRotationAsChanged(): void;
        isHidingChildren(): boolean;
        markScaleAsChanged(): void;
        getChildBones(): Internal.List<Internal.GeoBone>;
        setWorldSpaceNormal(arg0: Matrix3f_): void;
        getScaleY(): number;
        setTrackingMatrices(arg0: boolean): void;
        get modelPosition(): Internal.Vector3d
        get modelSpaceMatrix(): Matrix4f
        set pivotY(arg0: number)
        set localSpaceMatrix(arg0: Matrix4f_)
        get pivotZ(): number
        set rotZ(arg0: number)
        set rotX(arg0: number)
        get pivotX(): number
        get rotY(): number
        get trackingMatrices(): boolean
        get modelRotationMatrix(): Matrix4f
        set scaleX(arg0: number)
        set modelSpaceMatrix(arg0: Matrix4f_)
        set scaleZ(arg0: number)
        get initialSnapshot(): Internal.BoneSnapshot
        set worldSpaceMatrix(arg0: Matrix4f_)
        set posZ(arg0: number)
        get localPosition(): Internal.Vector3d
        get posX(): number
        get posZ(): number
        get cubes(): Internal.List<Internal.GeoCube>
        get worldSpaceMatrix(): Matrix4f
        get rotationVector(): Internal.Vector3d
        get scaleZ(): number
        get localSpaceMatrix(): Matrix4f
        get scaleX(): number
        set hidden(arg0: boolean)
        get scaleVector(): Internal.Vector3d
        get worldPosition(): Internal.Vector3d
        get pivotY(): number
        set pivotZ(arg0: number)
        set rotY(arg0: number)
        set pivotX(arg0: number)
        get worldSpaceNormal(): Matrix3f
        get rotZ(): number
        set modelPosition(arg0: Internal.Vector3d_)
        get rotX(): number
        set posX(arg0: number)
        get name(): string
        set scaleY(arg0: number)
        get mirror(): boolean
        get inflate(): number
        set childrenHidden(arg0: boolean)
        set posY(arg0: number)
        get hidden(): boolean
        get parent(): Internal.CoreGeoBone
        get posY(): number
        get positionVector(): Internal.Vector3d
        get reset(): boolean
        get hidingChildren(): boolean
        get childBones(): Internal.List<Internal.GeoBone>
        set worldSpaceNormal(arg0: Matrix3f_)
        get scaleY(): number
        set trackingMatrices(arg0: boolean)
    }
    type GeoBone_ = GeoBone;
    class SimpleWeightedRandomList <E> extends Internal.WeightedRandomList<Internal.WeightedEntry$Wrapper<E>> {
        constructor(arg0: Internal.List_<Internal.WeightedEntry$Wrapper<E>>)
        static builder<E>(): Internal.SimpleWeightedRandomList$Builder<E>;
        static wrappedCodecAllowingEmpty<E>(arg0: Internal.Codec_<E>): Internal.Codec<Internal.SimpleWeightedRandomList<E>>;
        getRandomValue(arg0: Internal.RandomSource_): Internal.Optional<E>;
        static wrappedCodec<E>(arg0: Internal.Codec_<E>): Internal.Codec<Internal.SimpleWeightedRandomList<E>>;
        static empty<E>(): Internal.SimpleWeightedRandomList<E>;
        static single<E>(arg0: E): Internal.SimpleWeightedRandomList<E>;
    }
    type SimpleWeightedRandomList_<E> = SimpleWeightedRandomList<E>;
    class SunderingEffect extends Internal.MobEffect {
        constructor()
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type SunderingEffect_ = SunderingEffect;
    class CropBlockBuilder$ShapeBuilder {
        constructor(age: number)
        /**
         * Describe the shape of the crop at a specific age.
         * 
         * min/max coordinates are double values between 0 and 16.
        */
        shape(age: number, minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number): this;
        getShapes(): Internal.List<Internal.VoxelShape>;
        get shapes(): Internal.List<Internal.VoxelShape>
    }
    type CropBlockBuilder$ShapeBuilder_ = CropBlockBuilder$ShapeBuilder;
    interface ICapabilitySerializable <T extends Internal.Tag> extends Internal.ICapabilityProvider, Internal.INBTSerializable<T> {
        abstract getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        abstract serializeNBT(): T;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        abstract deserializeNBT(arg0: T): void;
    }
    type ICapabilitySerializable_<T extends Internal.Tag> = ICapabilitySerializable<T>;
    interface FunctionUserBuilder <T extends Internal.FunctionUserBuilder<T>> {
        abstract apply(arg0: Internal.LootItemFunction$Builder_): T;
        apply<E>(arg0: E[], arg1: Internal.Function_<E, Internal.LootItemFunction$Builder>): T;
        abstract unwrap(): T;
        apply<E>(arg0: Internal.Iterable_<E>, arg1: Internal.Function_<E, Internal.LootItemFunction$Builder>): T;
    }
    type FunctionUserBuilder_<T extends Internal.FunctionUserBuilder<T>> = FunctionUserBuilder<T>;
    class ModifyStatAction extends Internal.EntityAction<Internal.ModifyStatConfiguration> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        execute(arg0: Internal.ModifyStatConfiguration_, arg1: Internal.Entity_): void;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type ModifyStatAction_ = ModifyStatAction;
    class LevelChunkTicks <T> implements Internal.TickContainerAccess<T>, Internal.SerializableTickContainer<T> {
        constructor()
        constructor(arg0: Internal.List_<any>)
        static load<T>(arg0: Internal.ListTag_, arg1: Internal.Function_<string, Internal.Optional<T>>, arg2: Internal.ChunkPos_): Internal.LevelChunkTicks<T>;
        count(): number;
        unpack(arg0: number): void;
        schedule(arg0: Internal.ScheduledTick_<T>): void;
        removeIf(arg0: Internal.Predicate_<Internal.ScheduledTick<T>>): void;
        save(arg0: number, arg1: Internal.Function_<any, any>): Internal.Tag;
        peek(): Internal.ScheduledTick<T>;
        getAll(): Internal.Stream<Internal.ScheduledTick<T>>;
        hasScheduledTick(arg0: BlockPos_, arg1: T): boolean;
        setOnTickAdded(arg0: Internal.BiConsumer_<Internal.LevelChunkTicks<T>, Internal.ScheduledTick<T>>): void;
        poll(): Internal.ScheduledTick<T>;
        get all(): Internal.Stream<Internal.ScheduledTick<T>>
        set onTickAdded(arg0: Internal.BiConsumer_<Internal.LevelChunkTicks<T>, Internal.ScheduledTick<T>>)
    }
    type LevelChunkTicks_<T> = LevelChunkTicks<T>;
    interface Vanishable {
    }
    type Vanishable_ = Vanishable;
    interface Comparable <T> {
        abstract compareTo(arg0: T): number;
        (arg0: T): number;
    }
    type Comparable_<T> = Comparable<T>;
    interface WatcherPossessionAccessor {
        abstract setPossessedByWatcher(arg0: boolean): void;
        abstract isPossessedByWatcher(): boolean;
        set possessedByWatcher(arg0: boolean)
        get possessedByWatcher(): boolean
    }
    type WatcherPossessionAccessor_ = WatcherPossessionAccessor;
    class Climate$Parameter extends Internal.Record {
        constructor(arg0: number, arg1: number)
        span(arg0: Internal.Climate$Parameter_): this;
        distance(arg0: number): number;
        distance(arg0: Internal.Climate$Parameter_): number;
        static point(arg0: number): Internal.Climate$Parameter;
        static span(arg0: Internal.Climate$Parameter_, arg1: Internal.Climate$Parameter_): Internal.Climate$Parameter;
        max(): number;
        static span(arg0: number, arg1: number): Internal.Climate$Parameter;
        min(): number;
        static readonly CODEC: Internal.Codec<Internal.Climate$Parameter>;
    }
    type Climate$Parameter_ = Climate$Parameter;
    class KilledByCrossbowBuilder extends Internal.BaseTriggerInstanceBuilder {
        constructor()
        /**
         * A list of victims. All of the entries must be matched, and one killed entity may match only one entry.
        */
        addVictimByPredicate(arg0: Internal.EntityPredicate_): void;
        wrapEntity(arg0: Internal.EntityPredicate_): Internal.ContextAwarePredicate;
        /**
         * A list of victims. All of the entries must be matched, and one killed entity may match only one entry.
        */
        addVictimByType(arg0: Internal.EntityType_<any>): void;
        /**
         * A list of victims. All of the entries must be matched, and one killed entity may match only one entry.
        */
        addVictimByCondition(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): void;
        /**
         * A list of victims. All of the entries must be matched, and one killed entity may match only one entry.
        */
        addVictim(arg0: Internal.Consumer_<Internal.EntityPredicateBuilder>): void;
        toEntity(arg0: Internal.EntityType_<any>): Internal.EntityPredicate;
        /**
         * The exact count of types of entities killed.
        */
        setUniqueEntityTypes(arg0: Bounds_): void;
        wrapEntity(arg0: Internal.EntityType_<any>): Internal.ContextAwarePredicate;
        wrapEntity(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): Internal.ContextAwarePredicate;
        /**
         * The exact count of types of entities killed.
        */
        set uniqueEntityTypes(arg0: Bounds_)
    }
    type KilledByCrossbowBuilder_ = KilledByCrossbowBuilder;
    interface OptionInstance$ValueSet <T> {
        abstract validateValue(arg0: T): Internal.Optional<T>;
        abstract codec(): Internal.Codec<T>;
        abstract createButton(arg0: Internal.OptionInstance$TooltipSupplier_<T>, arg1: Internal.Options_, arg2: number, arg3: number, arg4: number, arg5: Internal.Consumer_<T>): Internal.Function<Internal.OptionInstance<T>, Internal.AbstractWidget>;
    }
    type OptionInstance$ValueSet_<T> = OptionInstance$ValueSet<T>;
    class DimensionSpecialEffects$SkyType extends Internal.Enum<Internal.DimensionSpecialEffects$SkyType> {
        static values(): Internal.DimensionSpecialEffects$SkyType[];
        static valueOf(arg0: string): Internal.DimensionSpecialEffects$SkyType;
        static readonly NORMAL: Internal.DimensionSpecialEffects$SkyType;
        static readonly END: Internal.DimensionSpecialEffects$SkyType;
        static readonly NONE: Internal.DimensionSpecialEffects$SkyType;
    }
    type DimensionSpecialEffects$SkyType_ = "normal" | DimensionSpecialEffects$SkyType | "end" | "none";
    interface ScreenEvents$AfterRender {
        abstract afterRender(arg0: Internal.Screen_, arg1: Internal.GuiGraphics_, arg2: number, arg3: number, arg4: number): void;
        (arg0: Internal.Screen, arg1: Internal.GuiGraphics, arg2: number, arg3: number, arg4: number): void;
    }
    type ScreenEvents$AfterRender_ = ScreenEvents$AfterRender;
    class SpawnPlacements$Type extends Internal.Enum<Internal.SpawnPlacements$Type> implements Internal.IExtensibleEnum {
        static values(): Internal.SpawnPlacements$Type[];
        static create(arg0: string, arg1: Internal.TriPredicate_<Internal.LevelReader, BlockPos, Internal.EntityType<Internal.Mob>>): Internal.SpawnPlacements$Type;
        static createCodecForExtensibleEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, E>): Internal.Codec<E>;
        /**
         * @deprecated
        */
        init(): void;
        static valueOf(arg0: string): Internal.SpawnPlacements$Type;
        canSpawnAt(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.EntityType_<any>): boolean;
        static readonly ON_GROUND: Internal.SpawnPlacements$Type;
        static readonly NO_RESTRICTIONS: Internal.SpawnPlacements$Type;
        static readonly IN_WATER: Internal.SpawnPlacements$Type;
        static readonly IN_LAVA: Internal.SpawnPlacements$Type;
    }
    type SpawnPlacements$Type_ = "in_lava" | "on_ground" | "in_water" | "no_restrictions" | "in_soda" | SpawnPlacements$Type | "in_acid";
    abstract class AbstractHugeMushroomFeature extends Internal.Feature<Internal.HugeMushroomFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.HugeMushroomFeatureConfiguration>)
        getTreeHeight(arg0: Internal.RandomSource_): number;
        abstract makeCap(arg0: Internal.LevelAccessor_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: number, arg4: Internal.BlockPos$MutableBlockPos_, arg5: Internal.HugeMushroomFeatureConfiguration_): void;
        placeTrunk(arg0: Internal.LevelAccessor_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.HugeMushroomFeatureConfiguration_, arg4: number, arg5: Internal.BlockPos$MutableBlockPos_): void;
        abstract getTreeRadiusForHeight(arg0: number, arg1: number, arg2: number, arg3: number): number;
        isValidPosition(arg0: Internal.LevelAccessor_, arg1: BlockPos_, arg2: number, arg3: Internal.BlockPos$MutableBlockPos_, arg4: Internal.HugeMushroomFeatureConfiguration_): boolean;
    }
    type AbstractHugeMushroomFeature_ = AbstractHugeMushroomFeature;
    class TargetingConditions {
        range(arg0: number): this;
        static forCombat(): Internal.TargetingConditions;
        static forNonCombat(): Internal.TargetingConditions;
        copy(): this;
        test(arg0: Internal.LivingEntity_, arg1: Internal.LivingEntity_): boolean;
        selector(arg0: Internal.Predicate_<Internal.LivingEntity>): this;
        ignoreLineOfSight(): this;
        ignoreInvisibilityTesting(): this;
        static readonly DEFAULT: Internal.TargetingConditions;
    }
    type TargetingConditions_ = TargetingConditions;
    class SimpleLevelEventJS extends Internal.LevelEventJS {
        constructor(l: Internal.Level_)
    }
    type SimpleLevelEventJS_ = SimpleLevelEventJS;
    abstract class Unit {
        constructor()
        lerp(a: Internal.Unit_, b: Internal.Unit_): this;
        boolNot(): this;
        log10(): this;
        add(value: number): this;
        or(other: Internal.Unit_): this;
        deg(): this;
        modSet(unit: Internal.Unit_): this;
        lte(other: Internal.Unit_): this;
        tan(): this;
        clamp(a: Internal.Unit_, b: Internal.Unit_): this;
        add(other: Internal.Unit_): this;
        pow(other: Internal.Unit_): this;
        set(unit: Internal.Unit_): this;
        bitOr(other: Internal.Unit_): this;
        lsh(other: Internal.Unit_): this;
        lt(other: Internal.Unit_): this;
        getFloat(variables: Internal.UnitVariables_): number;
        mod(value: number): this;
        sin(): this;
        rsh(other: Internal.Unit_): this;
        floor(): this;
        bitNot(): this;
        mul(other: Internal.Unit_): this;
        abs(): this;
        smoothstep(): this;
        mulSet(unit: Internal.Unit_): this;
        and(other: Internal.Unit_): this;
        isFixed(): boolean;
        positive(): this;
        toString(builder: Internal.StringBuilder_): void;
        bool(): this;
        max(other: Internal.Unit_): this;
        log1p(): this;
        ceil(): this;
        negate(): this;
        log(): this;
        withAlpha(a: Internal.Unit_): this;
        subSet(unit: Internal.Unit_): this;
        bitAnd(other: Internal.Unit_): this;
        div(other: Internal.Unit_): this;
        min(other: Internal.Unit_): this;
        div(value: number): this;
        cos(): this;
        addSet(unit: Internal.Unit_): this;
        mul(value: number): this;
        sq(): this;
        gte(other: Internal.Unit_): this;
        sqrt(): this;
        getInt(variables: Internal.UnitVariables_): number;
        mod(other: Internal.Unit_): this;
        xor(other: Internal.Unit_): this;
        sub(value: number): this;
        abstract get(arg0: Internal.UnitVariables_): number;
        neq(other: Internal.Unit_): this;
        gt(other: Internal.Unit_): this;
        rad(): this;
        getBoolean(variables: Internal.UnitVariables_): boolean;
        sub(other: Internal.Unit_): this;
        eq(other: Internal.Unit_): this;
        atan(): this;
        atan2(other: Internal.Unit_): this;
        divSet(unit: Internal.Unit_): this;
        get fixed(): boolean
        static EMPTY_ARRAY: Internal.Unit[];
    }
    type Unit_ = Unit;
    class BiomeModificationImpl$FabricBiomeModifier extends Internal.Record implements Internal.BiomeModifier {
        constructor(modifiers: Internal.List_<Internal.BiomeModificationImpl$ModifierRecord>)
        codec(): Internal.Codec<Internal.BiomeModifier>;
        modifiers(): Internal.List<Internal.BiomeModificationImpl$ModifierRecord>;
        modify(biome: Internal.Holder_<Internal.Biome>, phase: Internal.BiomeModifier$Phase_, builder: Internal.ModifiableBiomeInfo$BiomeInfo$Builder_): void;
    }
    type BiomeModificationImpl$FabricBiomeModifier_ = BiomeModificationImpl$FabricBiomeModifier;
    class SectionPos extends Vec3i {
        constructor(arg0: number, arg1: number, arg2: number)
        static aroundChunk(arg0: Internal.ChunkPos_, arg1: number, arg2: number, arg3: number): Internal.Stream<Internal.SectionPos>;
        static of(arg0: number): Internal.SectionPos;
        z(): number;
        static x(arg0: number): number;
        static blockToSectionCoord(arg0: number): number;
        x(): number;
        static z(arg0: number): number;
        minBlockZ(): number;
        minBlockX(): number;
        static sectionRelative(arg0: number): number;
        static aroundAndAtBlockPos(arg0: BlockPos_, arg1: it.unimi.dsi.fastutil.longs.LongConsumer_): void;
        asLong(): number;
        static offset(arg0: number, arg1: number, arg2: number, arg3: number): number;
        relativeToBlockY(arg0: number): number;
        static sectionRelativeY(arg0: number): number;
        static getZeroNode(arg0: number): number;
        blocksInside(): Internal.Stream<BlockPos>;
        origin(): BlockPos;
        static of(arg0: Internal.ChunkPos_, arg1: number): Internal.SectionPos;
        static offset(arg0: number, arg1: Internal.Direction_): number;
        static of(arg0: Internal.Position_): Internal.SectionPos;
        static bottomOf(arg0: Internal.ChunkAccess_): Internal.SectionPos;
        maxBlockZ(): number;
        maxBlockX(): number;
        static y(arg0: number): number;
        y(): number;
        static sectionToBlockCoord(arg0: number, arg1: number): number;
        minBlockY(): number;
        static posToSectionCoord(arg0: number): number;
        static of(arg0: Internal.EntityAccess_): Internal.SectionPos;
        static cube(arg0: Internal.SectionPos_, arg1: number): Internal.Stream<Internal.SectionPos>;
        static sectionToBlockCoord(arg0: number): number;
        center(): BlockPos;
        static sectionRelativePos(arg0: BlockPos_): number;
        relativeToBlockX(arg0: number): number;
        static sectionRelativeZ(arg0: number): number;
        relativeToBlockZ(arg0: number): number;
        static getZeroNode(arg0: number, arg1: number): number;
        static sectionRelativeX(arg0: number): number;
        static betweenClosedStream(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): Internal.Stream<Internal.SectionPos>;
        static asLong(arg0: number, arg1: number, arg2: number): number;
        relativeToBlockPos(arg0: number): BlockPos;
        static of(arg0: BlockPos_): Internal.SectionPos;
        static blockToSection(arg0: number): number;
        static aroundAndAtBlockPos(arg0: number, arg1: number, arg2: number, arg3: it.unimi.dsi.fastutil.longs.LongConsumer_): void;
        static aroundAndAtBlockPos(arg0: number, arg1: it.unimi.dsi.fastutil.longs.LongConsumer_): void;
        static asLong(arg0: BlockPos_): number;
        static blockToSectionCoord(arg0: number): number;
        offset(arg0: number, arg1: number, arg2: number): this;
        static of(arg0: number, arg1: number, arg2: number): Internal.SectionPos;
        maxBlockY(): number;
        chunk(): Internal.ChunkPos;
        static readonly SECTION_BITS: 4;
        static readonly SECTION_MASK: 15;
        static readonly SECTION_HALF_SIZE: 8;
        static readonly SECTION_MAX_INDEX: 15;
        static readonly SECTION_SIZE: 16;
    }
    type SectionPos_ = SectionPos;
    class Viewport {
        constructor(arg0: any_, arg1: Internal.Vector3d_)
        isBoxVisible(arg0: Internal.AABB_): boolean;
        isBoxVisible(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        isBoxVisible(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        getBlockCoord(): BlockPos;
        getChunkCoord(): Internal.SectionPos;
        getTransform(): Internal.CameraTransform;
        get blockCoord(): BlockPos
        get chunkCoord(): Internal.SectionPos
        get transform(): Internal.CameraTransform
    }
    type Viewport_ = Viewport;
    class CaxtonFontOptions extends Internal.Record {
        constructor(fontTech: Internal.FontTech_, shrinkage: number, margin: number, range: number, invert: Internal.CaxtonFontOptions$Invert_)
        constructor(json: Internal.JsonObject_)
        fontTech(): Internal.FontTech;
        range(): number;
        margin(): number;
        invert(): Internal.CaxtonFontOptions$Invert;
        shrinkage(): number;
    }
    type CaxtonFontOptions_ = CaxtonFontOptions;
    class GpuWarnlistManager$Preparations {
        constructor(arg0: Internal.List_<Internal.Pattern>, arg1: Internal.List_<Internal.Pattern>, arg2: Internal.List_<Internal.Pattern>)
        apply(): Internal.ImmutableMap<string, string>;
    }
    type GpuWarnlistManager$Preparations_ = GpuWarnlistManager$Preparations;
    class PlayerDeathEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.Death_, arg1: Internal.ServerPlayer_, arg2: DamageSource_)
        removeDrops(): void;
        getDeath(): Internal.Death;
        storeDeath(): void;
        getSource(): DamageSource;
        getPlayer(): Internal.ServerPlayer;
        get death(): Internal.Death
        get source(): DamageSource
        get player(): Internal.ServerPlayer
    }
    type PlayerDeathEvent_ = PlayerDeathEvent;
    class PlayerEvent$Clone extends Internal.PlayerEvent {
        constructor()
        constructor(arg0: Player_, arg1: Player_, arg2: boolean)
        getOriginal(): Player;
        isWasDeath(): boolean;
        getEntity(): Internal.LivingEntity;
        get original(): Player
        get wasDeath(): boolean
        get entity(): Internal.LivingEntity
    }
    type PlayerEvent$Clone_ = PlayerEvent$Clone;
    class SeaPickleBlock extends Internal.BushBlock implements Internal.SimpleWaterloggedBlock, Internal.BonemealableBlock {
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
        isBonemealSuccess(arg0: Internal.Level_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        performBonemeal(arg0: Internal.ServerLevel_, arg1: Internal.RandomSource_, arg2: BlockPos_, arg3: Internal.BlockState_): void;
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
        getPlantType(arg0: Internal.BlockGetter_, arg1: BlockPos_): Internal.PlantType;
        isLadder(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.LivingEntity_): boolean;
        getCloneItemStack(arg0: Internal.BlockState_, arg1: Internal.HitResult_, arg2: Internal.BlockGetter_, arg3: BlockPos_, arg4: Player_): Internal.ItemStack;
        makesOpenTrapdoorAboveClimbable(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Internal.BlockState_): boolean;
        onDestroyedByPlayer(arg0: Internal.BlockState_, arg1: Internal.Level_, arg2: BlockPos_, arg3: Player_, arg4: boolean, arg5: Internal.FluidState_): boolean;
        getBlockPathType(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: Internal.Mob_): Internal.BlockPathTypes;
        onNeighborChange(arg0: Internal.BlockState_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: BlockPos_): void;
        static isDead(arg0: Internal.BlockState_): boolean;
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
        isValidBonemealTarget(arg0: Internal.LevelReader_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: boolean): boolean;
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
        static readonly MAX_PICKLES: 4;
        static readonly WATERLOGGED: Internal.BooleanProperty;
        static readonly THREE_AABB: Internal.CubeVoxelShape;
        static readonly FOUR_AABB: Internal.ArrayVoxelShape;
        static readonly PICKLES: Internal.IntegerProperty;
        static readonly ONE_AABB: Internal.CubeVoxelShape;
        static readonly TWO_AABB: Internal.ArrayVoxelShape;
    }
    type SeaPickleBlock_ = SeaPickleBlock;
    class FeatureSorter$StepFeatureData extends Internal.Record {
        constructor(arg0: Internal.List_<Internal.PlacedFeature>)
        constructor(arg0: Internal.List_<Internal.PlacedFeature>, arg1: Internal.ToIntFunction_<Internal.PlacedFeature>)
        features(): Internal.List<Internal.PlacedFeature>;
        indexMapping(): Internal.ToIntFunction<Internal.PlacedFeature>;
    }
    type FeatureSorter$StepFeatureData_ = FeatureSorter$StepFeatureData;
    interface ITickTimer {
        abstract getMaxValue(): number;
        abstract getValue(): number;
        get maxValue(): number
        get value(): number
    }
    type ITickTimer_ = ITickTimer;
    interface SizeClassesMetric {
        abstract normalizeSize(arg0: number): number;
        abstract size2SizeIdx(arg0: number): number;
        abstract pageIdx2size(arg0: number): number;
        abstract sizeIdx2sizeCompute(arg0: number): number;
        abstract pageIdx2sizeCompute(arg0: number): number;
        abstract sizeIdx2size(arg0: number): number;
        abstract pages2pageIdx(arg0: number): number;
        abstract pages2pageIdxFloor(arg0: number): number;
    }
    type SizeClassesMetric_ = SizeClassesMetric;
    class SpilledIceCreamConeFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.NoneFeatureConfiguration>)
    }
    type SpilledIceCreamConeFeature_ = SpilledIceCreamConeFeature;
    class ConfiguredPower <C extends Internal.IDynamicFeatureConfiguration, F extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<C>> extends Internal.CapabilityProvider<Internal.ConfiguredPower<any, any>> implements Internal.IDynamicFeatureConfiguration, Internal.DynamicRegistryListener {
        constructor(arg0: Internal.Supplier_<F>, arg1: C, arg2: Internal.PowerData_)
        getChildrenKeys(): Internal.Set<Internal.ResourceKey<Internal.ConfiguredPower<any, any>>>;
        onLost(arg0: Internal.Entity_): void;
        getValue(arg0: Internal.Entity_): Internal.OptionalInt;
        whenAvailable(arg0: Internal.ICalioDynamicRegistryManager_): void;
        tick(arg0: Internal.Entity_, arg1: boolean): void;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        getPowerData<T>(arg0: Internal.IPowerContainer_, arg1: Internal.NonNullSupplier_<T>): T;
        static required(arg0: string): Internal.MapCodec<Internal.Holder<Internal.ConfiguredPower<any, any>>>;
        getFill(arg0: Internal.Entity_): Internal.Optional<number>;
        getUnbound(): Internal.List<string>;
        onAdded(arg0: Internal.Entity_): void;
        getPowerData<T>(arg0: Internal.Entity_, arg1: Internal.NonNullSupplier_<T>): T;
        increment(arg0: Internal.Entity_): Internal.OptionalInt;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        complete(arg0: ResourceLocation_): this;
        shouldRender(arg0: Internal.Entity_): Internal.Optional<boolean>;
        tick(arg0: Internal.Entity_): void;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getConfiguration(): C;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        onGained(arg0: Internal.Entity_): void;
        name(): string;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        getKey(arg0: Internal.Entity_): Internal.Optional<Internal.IActivePower$Key>;
        getData(): Internal.PowerData;
        decrement(arg0: Internal.Entity_): Internal.OptionalInt;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        getContainedPowers(): Internal.Map<string, Internal.Holder<Internal.ConfiguredPower<any, any>>>;
        getPowerType(): Internal.PowerType<any>;
        whenNamed(arg0: ResourceLocation_): void;
        change(arg0: Internal.Entity_, arg1: number): Internal.OptionalInt;
        asVariableIntPower(): Internal.Optional<Internal.IVariableIntPower<C>>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        asHudRendered(): Internal.Optional<Internal.IHudRenderedPower<C>>;
        deserialize(arg0: Internal.IPowerContainer_, arg1: Internal.CompoundTag_): void;
        onRemoved(arg0: Internal.Entity_): void;
        getMissingBinds(): Internal.List<string>;
        asActive(): Internal.Optional<Internal.IActivePower<C>>;
        getMinimum(arg0: Internal.Entity_): Internal.OptionalInt;
        assign(arg0: Internal.Entity_, arg1: number): Internal.OptionalInt;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        getMaximum(arg0: Internal.Entity_): Internal.OptionalInt;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        getRenderSettings(arg0: Internal.Entity_): Internal.Optional<Internal.HudRender>;
        isConfigurationValid(): boolean;
        onRespawn(arg0: Internal.Entity_): void;
        getChildren(): Internal.Set<Internal.Holder<Internal.ConfiguredPower<any, any>>>;
        getFactory(): F;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        isActive(arg0: Internal.Entity_): boolean;
        getContainedPowerKeys(): Internal.Set<Internal.ResourceKey<Internal.ConfiguredPower<any, any>>>;
        activate(arg0: Internal.Entity_): boolean;
        static optional(arg0: string): Internal.MapCodec<Internal.Optional<Internal.Holder<Internal.ConfiguredPower<any, any>>>>;
        serialize(arg0: Internal.IPowerContainer_): Internal.CompoundTag;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getRegistryName(): ResourceLocation;
        get childrenKeys(): Internal.Set<Internal.ResourceKey<Internal.ConfiguredPower<any, any>>>
        get unbound(): Internal.List<string>
        get configuration(): C
        get data(): Internal.PowerData
        get containedPowers(): Internal.Map<string, Internal.Holder<Internal.ConfiguredPower<any, any>>>
        get powerType(): Internal.PowerType<any>
        get missingBinds(): Internal.List<string>
        get configurationValid(): boolean
        get children(): Internal.Set<Internal.Holder<Internal.ConfiguredPower<any, any>>>
        get factory(): F
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get containedPowerKeys(): Internal.Set<Internal.ResourceKey<Internal.ConfiguredPower<any, any>>>
        get registryName(): ResourceLocation
        static readonly CODEC_SET: Internal.CodecSet<Internal.ConfiguredPower<any, any>>;
        static readonly HOLDER: Internal.Codec<Internal.Holder<Internal.ConfiguredPower<any, any>>>;
        static readonly CODEC: Internal.Codec<Internal.ConfiguredPower<any, any>>;
    }
    type ConfiguredPower_<C extends Internal.IDynamicFeatureConfiguration, F extends io.github.edwinmindcraft.apoli.api.power.factory.PowerFactory<C>> = ConfiguredPower<C, F>;
    class OrtholanceItem extends Internal.Item implements Internal.Vanishable {
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
    type OrtholanceItem_ = OrtholanceItem;
    interface ItemSetter {
    }
    type ItemSetter_ = ItemSetter;
    class RegistryAccess$RegistryEntry <T> extends Internal.Record {
        constructor(arg0: Internal.ResourceKey_<Internal.Registry<T>>, arg1: Internal.Registry_<T>)
        key(): Internal.ResourceKey<Internal.Registry<T>>;
        value(): Internal.Registry<T>;
    }
    type RegistryAccess$RegistryEntry_<T> = RegistryAccess$RegistryEntry<T>;
    class AccessoryItemAttributeModifiers$Builder {
        addForSlot(attribute: Internal.Attribute_, attributeModifier: Internal.AttributeModifier_, slotName: string, isStackable: boolean): this;
        addForAny(attribute: Internal.Attribute_, attributeModifier: Internal.AttributeModifier_, isStackable: boolean): this;
        showInTooltip(value: boolean): this;
        /**
         * @deprecated
         * This method is marked to be removed in future!
        */
        add(attribute: Internal.Attribute_, attributeModifier: Internal.AttributeModifier_, slotName: string, isStackable: boolean): this;
        build(): Internal.AccessoryItemAttributeModifiers;
        isEmpty(): boolean;
        get empty(): boolean
    }
    type AccessoryItemAttributeModifiers$Builder_ = AccessoryItemAttributeModifiers$Builder;
    class ContextUtils$DeathContext {
        constructor(entity: Internal.LivingEntity_, damageSource: DamageSource_)
        /**
         * The source of the damage causing the death
        */
        readonly damageSource: DamageSource;
        /**
         * The living entity that has died
        */
        readonly entity: Internal.LivingEntity;
    }
    type ContextUtils$DeathContext_ = ContextUtils$DeathContext;
    class LevelStorageSource {
        constructor(arg0: Internal.Path_, arg1: Internal.Path_, arg2: Internal.DirectoryValidator_, arg3: Internal.DataFixer_)
        getBaseDir(): Internal.Path;
        getWorldDirValidator(): Internal.DirectoryValidator;
        static createDefault(arg0: Internal.Path_): Internal.LevelStorageSource;
        createAccess(arg0: string): Internal.LevelStorageSource$LevelStorageAccess;
        validateAndCreateAccess(arg0: string): Internal.LevelStorageSource$LevelStorageAccess;
        isNewLevelIdAcceptable(arg0: string): boolean;
        static parseValidator(arg0: Internal.Path_): Internal.DirectoryValidator;
        readLevelData<T>(arg0: Internal.LevelStorageSource$LevelDirectory_, arg1: Internal.BiFunction_<Internal.Path, Internal.DataFixer, T>): T;
        findLevelCandidates(): Internal.LevelStorageSource$LevelCandidates;
        loadLevelSummaries(arg0: Internal.LevelStorageSource$LevelCandidates_): Internal.CompletableFuture<Internal.List<Internal.LevelSummary>>;
        static getLevelData(arg0: Internal.DynamicOps_<Internal.Tag>, arg1: Internal.WorldDataConfiguration_, arg2: Internal.Registry_<Internal.LevelStem>, arg3: Internal.Lifecycle_): Internal.BiFunction<Internal.Path, Internal.DataFixer, com.mojang.datafixers.util.Pair<Internal.WorldData, Internal.WorldDimensions$Complete>>;
        getBackupPath(): Internal.Path;
        getName(): string;
        levelSummaryReader(arg0: Internal.LevelStorageSource$LevelDirectory_, arg1: boolean): Internal.BiFunction<Internal.Path, Internal.DataFixer, Internal.LevelSummary>;
        levelExists(arg0: string): boolean;
        get baseDir(): Internal.Path
        get worldDirValidator(): Internal.DirectoryValidator
        get backupPath(): Internal.Path
        get name(): string
        static readonly ALLOWED_SYMLINKS_CONFIG_NAME: "allowed_symlinks.txt";
        readonly fixerUpper: Internal.DataFixer;
        static readonly FORMATTER: Internal.DateTimeFormatter;
        static readonly LOGGER: Internal.Log4jLogger;
    }
    type LevelStorageSource_ = LevelStorageSource;
    interface ConditionContainer {
        entityProperties(entity: Internal.LootContext$EntityTarget_, properties: Internal.JsonObject_): this;
        abstract addCondition(arg0: Internal.JsonObject_): this;
        randomChanceWithLooting(chance: number, multiplier: number): this;
        randomChance(chance: number): this;
        killedByPlayer(): this;
        entityScores(entity: Internal.LootContext$EntityTarget_, scores: Internal.Map_<string, any>): this;
        survivesExplosion(): this;
        (arg0: Internal.JsonObject): this;
    }
    type ConditionContainer_ = ConditionContainer;
    class CustomizeGuiOverlayEvent$BossEventProgress extends Internal.CustomizeGuiOverlayEvent {
        constructor()
        constructor(arg0: Internal.Window_, arg1: Internal.GuiGraphics_, arg2: number, arg3: Internal.LerpingBossEvent_, arg4: number, arg5: number, arg6: number)
        getX(): number;
        setIncrement(arg0: number): void;
        getY(): number;
        getBossEvent(): Internal.LerpingBossEvent;
        getIncrement(): number;
        get x(): number
        set increment(arg0: number)
        get y(): number
        get bossEvent(): Internal.LerpingBossEvent
        get increment(): number
    }
    type CustomizeGuiOverlayEvent$BossEventProgress_ = CustomizeGuiOverlayEvent$BossEventProgress;
    class SkeletonHorse extends Internal.AbstractHorse {
        constructor(arg0: Internal.EntityType_<Internal.SkeletonHorse>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        isTrap(): boolean;
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
        getSaddleSoundEvent(): Internal.SoundEvent;
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
        getJumpCooldown(): number;
        bettermobcombat$startUpswing(arg0: Internal.WeaponAttributes_): void;
        shouldRiderSit(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        setTrap(arg0: boolean): void;
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
        get trap(): boolean
        get offHandItem(): Internal.ItemStack
        get owner(): Internal.LivingEntity
        get player(): boolean
        get animal(): boolean
        set y(y: number)
        get living(): boolean
        get totalMovementSpeed(): number
        get saddleSoundEvent(): Internal.SoundEvent
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
        get jumpCooldown(): number
        set mainHandItem(item: Internal.ItemStack_)
        get legsArmorItem(): Internal.ItemStack
        set trap(arg0: boolean)
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
    type SkeletonHorse_ = SkeletonHorse;
    interface BlockBehaviour$StateArgumentPredicate <A> {
        abstract test(arg0: Internal.BlockState_, arg1: Internal.BlockGetter_, arg2: BlockPos_, arg3: A): boolean;
        (arg0: Internal.BlockState, arg1: Internal.BlockGetter, arg2: BlockPos, arg3: A): boolean;
    }
    type BlockBehaviour$StateArgumentPredicate_<A> = BlockBehaviour$StateArgumentPredicate<A>;
    class OreFeature extends Internal.Feature<Internal.OreConfiguration> {
        constructor(arg0: Internal.Codec_<Internal.OreConfiguration>)
        static canPlaceOre(arg0: Internal.BlockState_, arg1: Internal.Function_<BlockPos, Internal.BlockState>, arg2: Internal.RandomSource_, arg3: Internal.OreConfiguration_, arg4: Internal.OreConfiguration$TargetBlockState_, arg5: Internal.BlockPos$MutableBlockPos_): boolean;
        static shouldSkipAirCheck(arg0: Internal.RandomSource_, arg1: number): boolean;
        doPlace(arg0: Internal.WorldGenLevel_, arg1: Internal.RandomSource_, arg2: Internal.OreConfiguration_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): boolean;
    }
    type OreFeature_ = OreFeature;
    abstract class ScreenEvent$Render extends Internal.ScreenEvent {
        constructor()
        getGuiGraphics(): Internal.GuiGraphics;
        getPartialTick(): number;
        getMouseY(): number;
        getMouseX(): number;
        get guiGraphics(): Internal.GuiGraphics
        get partialTick(): number
        get mouseY(): number
        get mouseX(): number
    }
    type ScreenEvent$Render_ = ScreenEvent$Render;
    interface VertexSorting {
        abstract sort(arg0: Vector3f_[]): number[];
        byDistance(arg0: number, arg1: number, arg2: number): this;
        byDistance(arg0: Internal.VertexSorting$DistanceFunction_): this;
        byDistance(arg0: Vector3f_): this;
        (arg0: Vector3f[]): number[];
        readonly DISTANCE_TO_ORIGIN: Internal.VertexSorters$SortByDistance;
        readonly ORTHOGRAPHIC_Z: Internal.VertexSorting;
    }
    type VertexSorting_ = VertexSorting;
    class Dynamic3CommandExceptionType implements Internal.CommandExceptionType {
        constructor(arg0: any_)
        create(arg0: any, arg1: any, arg2: any): Internal.CommandSyntaxException;
        createWithContext(arg0: Internal.ImmutableStringReader_, arg1: any, arg2: any, arg3: any): Internal.CommandSyntaxException;
    }
    type Dynamic3CommandExceptionType_ = Dynamic3CommandExceptionType;
    class ShapelessKubeJSRecipe extends Internal.ShapelessRecipe implements Internal.KubeJSCraftingRecipe {
        constructor(original: Internal.ShapelessRecipe_, ingredientActions: Internal.List_<Internal.IngredientAction>, modifyResult: Internal.ModifyRecipeResultCallback_, stage: string)
        isSpecial(): boolean;
        getGroup(): string;
        getToastSymbol(): Internal.ItemStack;
        hasOutput(match: Internal.ReplacementMatch_): boolean;
        getSchema(): Internal.RecipeSchema;
        getRemainingItems(arg0: Internal.Container_): Internal.NonNullList<any>;
        kjs$getStage(): string;
        showNotification(): boolean;
        replaceInput(match: Internal.ReplacementMatch_, with_: Internal.InputReplacement_): boolean;
        kjs$getModifyResult(): Internal.ModifyRecipeResultCallback;
        getRemainingItems(container: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        getType(): ResourceLocation;
        setGroup(group: string): void;
        kjs$getRemainingItems(container: Internal.CraftingContainer_): Internal.NonNullList<Internal.ItemStack>;
        getOrCreateId(): ResourceLocation;
        hasInput(match: Internal.ReplacementMatch_): boolean;
        isIncomplete(): boolean;
        replaceOutput(match: Internal.ReplacementMatch_, with_: Internal.OutputReplacement_): boolean;
        kjs$assemble(container: Internal.CraftingContainer_, registryAccess: Internal.RegistryAccess_): Internal.ItemStack;
        getMod(): string;
        kjs$getIngredientActions(): Internal.List<Internal.IngredientAction>;
        get special(): boolean
        get group(): string
        get toastSymbol(): Internal.ItemStack
        get schema(): Internal.RecipeSchema
        get type(): ResourceLocation
        set group(group: string)
        get orCreateId(): ResourceLocation
        get incomplete(): boolean
        get mod(): string
    }
    type ShapelessKubeJSRecipe_ = ShapelessKubeJSRecipe;
    class ResistorShieldItem extends Internal.ShieldItem {
        constructor()
        getMaxDamage(arg0: Internal.ItemStack_): number;
        elytraFlightTick(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): boolean;
        static setSwitchTime(arg0: Internal.ItemStack_, arg1: number): void;
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
        static isScarlet(arg0: Internal.ItemStack_): boolean;
        static getUseTime(arg0: Internal.ItemStack_): number;
        isPiglinCurrency(arg0: Internal.ItemStack_): boolean;
        isCorrectToolForDrops(arg0: Internal.ItemStack_, arg1: Internal.BlockState_): boolean;
        getEnchantmentValue(arg0: Internal.ItemStack_): number;
        canDisableShield(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_, arg2: Internal.LivingEntity_, arg3: Internal.LivingEntity_): boolean;
        setAttackSpeed(attackSpeed: number): void;
        canApplyAtEnchantingTable(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): boolean;
        canWalkOnPowderedSnow(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        static getLerpedUseTime(arg0: Internal.ItemStack_, arg1: number): number;
        onStopUsing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_, arg2: number): void;
        getEquipSound(): Internal.SoundEvent;
        isNotReplaceableByPickAction(arg0: Internal.ItemStack_, arg1: Player_, arg2: number): boolean;
        getXpRepairRatio(arg0: Internal.ItemStack_): number;
        isBookEnchantable(arg0: Internal.ItemStack_, arg1: Internal.ItemStack_): boolean;
        getCreativeTab(): string;
        initCapabilities(arg0: Internal.ItemStack_, arg1: Internal.CompoundTag_): Internal.ICapabilityProvider;
        onDroppedByPlayer(arg0: Internal.ItemStack_, arg1: Player_): boolean;
        isDamaged(arg0: Internal.ItemStack_): boolean;
        static getSwitchTime(arg0: Internal.ItemStack_): number;
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
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
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
        static setUseTime(arg0: Internal.ItemStack_, arg1: number): void;
        getEntityLifespan(arg0: Internal.ItemStack_, arg1: Internal.Level_): number;
        onEntitySwing(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
        setArmorToughness(armorToughness: number): void;
        allowNbtUpdateAnimation(player: Player_, hand: Internal.InteractionHand_, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): boolean;
        setDamage(arg0: Internal.ItemStack_, arg1: number): void;
        hasCraftingRemainingItem(arg0: Internal.ItemStack_): boolean;
        getMaxStackSize(arg0: Internal.ItemStack_): number;
        static getLerpedSwitchTime(arg0: Internal.ItemStack_, arg1: number): number;
        getSweepHitBox(arg0: Internal.ItemStack_, arg1: Player_, arg2: Internal.Entity_): Internal.AABB;
        doesSneakBypassUse(arg0: Internal.ItemStack_, arg1: Internal.LevelReader_, arg2: BlockPos_, arg3: Player_): boolean;
        getEnchantmentLevel(arg0: Internal.ItemStack_, arg1: Internal.Enchantment_): number;
        onHorseArmorTick(arg0: Internal.ItemStack_, arg1: Internal.Level_, arg2: Internal.Mob_): void;
        getAllEnchantments(arg0: Internal.ItemStack_): Internal.Map<Internal.Enchantment, number>;
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
        addAttribute(attribute: Internal.Attribute_, uuid: Internal.UUID_, name: string, d: number, operation: Internal.AttributeModifier$Operation_): void;
        static setPolarity(arg0: Internal.ItemStack_, arg1: boolean): void;
        isSuitableFor(stack: Internal.ItemStack_, state: Internal.BlockState_): boolean;
        getDigSpeed(): number;
        setTier(c: Internal.Consumer_<Internal.MutableToolTier>): void;
        setFoodProperties(consumer: Internal.Consumer_<Internal.FoodBuilder>): void;
        onBlockStartBreak(arg0: Internal.ItemStack_, arg1: BlockPos_, arg2: Player_): boolean;
        set digSpeed(speed: number)
        set attackSpeed(attackSpeed: number)
        get equipSound(): Internal.SoundEvent
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
    type ResistorShieldItem_ = ResistorShieldItem;
    class CustomEntityJSBuilder$CustomInstructionKeyframeEventJS <E extends Internal.Entity & Internal.IAnimatableJSCustom> {
        constructor(parent: Internal.CustomInstructionKeyframeEvent_<E>)
        /**
         * A list of all the custom instructions. In blockbench, each line in the custom instruction box is a separate instruction.
        */
        readonly instructions: string;
    }
    type CustomEntityJSBuilder$CustomInstructionKeyframeEventJS_<E extends Internal.Entity & Internal.IAnimatableJSCustom> = CustomEntityJSBuilder$CustomInstructionKeyframeEventJS<E>;
    class StackingStatusEffectConfiguration extends Internal.Record implements Internal.IDynamicFeatureConfiguration {
        constructor(arg0: Internal.ListConfiguration_<Internal.MobEffectInstance>, arg1: number, arg2: number, arg3: number)
        constructor(effects: Internal.ListConfiguration_<Internal.MobEffectInstance>, min: number, max: number, duration: number, tickRate: number)
        isConfigurationValid(): boolean;
        copyErrorsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getChildrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>;
        duration(): number;
        forChildren(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>): void;
        tickRate(): number;
        min(): number;
        copyWarningsFrom(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ICalioDynamicRegistryManager_, arg2: string, ...arg3: string[]): Internal.List<string>;
        getErrors(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        effects(): Internal.ListConfiguration<Internal.MobEffectInstance>;
        name(): string;
        checkPower(arg0: Internal.ICalioDynamicRegistryManager_, ...arg1: ResourceLocation_[]): Internal.List<ResourceLocation>;
        getUnbound(): Internal.List<string>;
        getWarnings(arg0: Internal.ICalioDynamicRegistryManager_): Internal.List<string>;
        getMissingBinds(): Internal.List<string>;
        static holderAsString(arg0: string, arg1: Internal.Holder_<any>): string;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Iterable_<any>, arg2: string): void;
        fieldName(arg0: string, ...arg1: string[]): Internal.UnaryOperator<string>;
        static populate(arg0: Internal.BiConsumer_<string, Internal.IDynamicFeatureConfiguration>, arg1: Internal.Map_<any, any>, arg2: string): void;
        max(): number;
        get configurationValid(): boolean
        get childrenComponent(): Internal.Map<string, Internal.IDynamicFeatureConfiguration>
        get unbound(): Internal.List<string>
        get missingBinds(): Internal.List<string>
        static readonly CODEC: Internal.Codec<Internal.StackingStatusEffectConfiguration>;
    }
    type StackingStatusEffectConfiguration_ = StackingStatusEffectConfiguration;
    interface ShortConsumer extends Internal.Consumer<number>, Internal.IntConsumer {
        abstract accept(arg0: number): void;
        andThen(arg0: Internal.IntConsumer_): this;
        /**
         * @deprecated
        */
        andThen(arg0: Internal.Consumer_<number>): Internal.Consumer<number>;
        andThen(arg0: Internal.ShortConsumer_): this;
        /**
         * @deprecated
        */
        accept(arg0: any): void;
        /**
         * @deprecated
        */
        accept(arg0: number): void;
        /**
         * @deprecated
        */
        accept(arg0: number): void;
        (arg0: number): void;
    }
    type ShortConsumer_ = ShortConsumer;
    interface StructurePieceType {
        abstract load(arg0: Internal.StructurePieceSerializationContext_, arg1: Internal.CompoundTag_): Internal.StructurePiece;
        (arg0: Internal.StructurePieceSerializationContext, arg1: Internal.CompoundTag): Internal.StructurePiece_;
        readonly STRONGHOLD_ROOM_CROSSING: Internal.StructurePieceType;
        readonly STRONGHOLD_FILLER_CORRIDOR: Internal.StructurePieceType;
        readonly STRONGHOLD_PORTAL_ROOM: Internal.StructurePieceType;
        readonly END_CITY_PIECE: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_BRIDGE_END_FILLER: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_CASTLE_CORRIDOR_STAIRS: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_SIMPLE_ROOM: Internal.StructurePieceType;
        readonly STRONGHOLD_LEFT_TURN: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_WING_ROOM: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_CASTLE_STALK_ROOM: Internal.StructurePieceType;
        readonly MINE_SHAFT_ROOM: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_CASTLE_CORRIDOR_T_BALCONY: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_SIMPLE_TOP_ROOM: Internal.StructurePieceType;
        readonly MINE_SHAFT_CORRIDOR: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_DOUBLE_Y_ROOM: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_BUILDING: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_PENTHOUSE: Internal.StructurePieceType;
        readonly JUNGLE_PYRAMID_PIECE: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_BRIDGE_CROSSING: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_MONSTER_THRONE: Internal.StructurePieceType;
        readonly JIGSAW: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_RIGHT_TURN: Internal.StructurePieceType;
        readonly STRONGHOLD_START: Internal.StructurePieceType;
        readonly STRONGHOLD_PRISON_HALL: Internal.StructurePieceType;
        readonly RUINED_PORTAL: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_START: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_DOUBLE_YZ_ROOM: Internal.StructurePieceType;
        readonly SHIPWRECK_PIECE: Internal.StructurePieceType;
        readonly SWAMPLAND_HUT: Internal.StructurePieceType;
        readonly STRONGHOLD_STRAIGHT: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_DOUBLE_X_ROOM: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_ENTRY_ROOM: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_CORE_ROOM: Internal.StructurePieceType;
        readonly STRONGHOLD_CHEST_CORRIDOR: Internal.StructurePieceType;
        readonly STRONGHOLD_LIBRARY: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_DOUBLE_XY_ROOM: Internal.StructurePieceType;
        readonly OCEAN_MONUMENT_DOUBLE_Z_ROOM: Internal.StructurePieceType;
        readonly WOODLAND_MANSION_PIECE: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_CROSSING: Internal.StructurePieceType;
        readonly OCEAN_RUIN: Internal.StructurePieceType;
        readonly MINE_SHAFT_CROSSING: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_STAIRS_ROOM: Internal.StructurePieceType;
        readonly STRONGHOLD_RIGHT_TURN: Internal.StructurePieceType;
        readonly STRONGHOLD_STAIRS_DOWN: Internal.StructurePieceType;
        readonly NETHER_FOSSIL: Internal.StructurePieceType;
        readonly STRONGHOLD_STRAIGHT_STAIRS_DOWN: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_ROOM_CROSSING: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_BRIDGE_STRAIGHT: Internal.StructurePieceType;
        readonly IGLOO: Internal.StructurePieceType;
        readonly STRONGHOLD_FIVE_CROSSING: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_CASTLE_ENTRANCE: Internal.StructurePieceType;
        readonly DESERT_PYRAMID_PIECE: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR: Internal.StructurePieceType;
        readonly MINE_SHAFT_STAIRS: Internal.StructurePieceType;
        readonly NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_LEFT_TURN: Internal.StructurePieceType;
        readonly BURIED_TREASURE_PIECE: Internal.StructurePieceType;
    }
    type StructurePieceType_ = Special.StructurePiece | StructurePieceType;
    class NetworkEvent extends Internal.Event {
        constructor()
        constructor(arg0: Internal.Supplier_<Internal.NetworkEvent$Context>)
        getLoginIndex(): number;
        getPayload(): Internal.FriendlyByteBuf;
        getSource(): Internal.Supplier<Internal.NetworkEvent$Context>;
        get loginIndex(): number
        get payload(): Internal.FriendlyByteBuf
        get source(): Internal.Supplier<Internal.NetworkEvent$Context>
    }
    type NetworkEvent_ = NetworkEvent;
    class EnderChestBlockEntity extends Internal.BlockEntity implements Internal.LidBlockEntity {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        stopOpen(arg0: Player_): void;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        getOpenNess(arg0: number): number;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        static lidAnimateTick(arg0: Internal.Level_, arg1: BlockPos_, arg2: Internal.BlockState_, arg3: Internal.EnderChestBlockEntity_): void;
        startOpen(arg0: Player_): void;
        serializeNBT(): Internal.Tag;
        onLoad(): void;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        sdl$isDynamicLightEnabled(): boolean;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        stillValid(arg0: Player_): boolean;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        recheckOpen(): void;
        getModelData(): Internal.ModelData;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        getRenderBoundingBox(): Internal.AABB;
        get modelData(): Internal.ModelData
        get renderBoundingBox(): Internal.AABB
    }
    type EnderChestBlockEntity_ = EnderChestBlockEntity;
    interface RecipeBookCategoriesAccessor {
        setAGGREGATE_CATEGORIES(arg0: Internal.Map_<Internal.RecipeBookCategories, Internal.List<Internal.RecipeBookCategories>>): void;
        set AGGREGATE_CATEGORIES(arg0: Internal.Map_<Internal.RecipeBookCategories, Internal.List<Internal.RecipeBookCategories>>)
    }
    type RecipeBookCategoriesAccessor_ = RecipeBookCategoriesAccessor;
    interface IPersistedSerializable extends Internal.ITagSerializable<Internal.CompoundTag> {
        deserializeNBT(tag: Internal.CompoundTag_): void;
        deserializeNBT(arg0: Internal.Tag_): void;
        serializeNBT(): Internal.Tag;
    }
    type IPersistedSerializable_ = IPersistedSerializable;
    class ItemDurabilityBuilder extends Internal.BaseTriggerInstanceBuilder implements Internal.ItemSetter {
        constructor()
        /**
         * The change in durability (negative numbers are used to indicate a decrease in durability).
        */
        setDelta(arg0: Bounds_): void;
        wrapEntity(arg0: Internal.EntityPredicate_): Internal.ContextAwarePredicate;
        /**
         * The item before it was damaged, allows you to check the durability before the item was damaged.
        */
        setItem(arg0: Internal.Ingredient_): void;
        wrapItem(arg0: Internal.Ingredient_): Internal.ItemPredicate;
        /**
         * The remaining durability of the item.
        */
        setDurability(arg0: Bounds_): void;
        /**
         * The item before it was damaged, allows you to check the durability before the item was damaged.
        */
        setItem(arg0: Internal.Consumer_<Internal.ItemPredicateBuilder>): void;
        toEntity(arg0: Internal.EntityType_<any>): Internal.EntityPredicate;
        wrapEntity(arg0: Internal.EntityType_<any>): Internal.ContextAwarePredicate;
        wrapEntity(...arg0: org.mesdag.advjs.predicate.condition.ICondition_[]): Internal.ContextAwarePredicate;
        /**
         * The item before it was damaged, allows you to check the durability before the item was damaged.
        */
        setItem(arg0: Internal.ItemPredicate_): void;
        /**
         * The change in durability (negative numbers are used to indicate a decrease in durability).
        */
        set delta(arg0: Bounds_)
        /**
         * The item before it was damaged, allows you to check the durability before the item was damaged.
        */
        set item(arg0: Internal.Ingredient_)
        /**
         * The remaining durability of the item.
        */
        set durability(arg0: Bounds_)
        /**
         * The item before it was damaged, allows you to check the durability before the item was damaged.
        */
        set item(arg0: Internal.Consumer_<Internal.ItemPredicateBuilder>)
        /**
         * The item before it was damaged, allows you to check the durability before the item was damaged.
        */
        set item(arg0: Internal.ItemPredicate_)
    }
    type ItemDurabilityBuilder_ = ItemDurabilityBuilder;
    class ItemPredicate$Builder {
        of(arg0: Internal.TagKey_<Internal.Item>): this;
        of(...arg0: Internal.ItemLike_[]): this;
        isPotion(arg0: Internal.Potion_): this;
        static item(): Internal.ItemPredicate$Builder;
        hasNbt(arg0: Internal.CompoundTag_): this;
        hasEnchantment(arg0: Internal.EnchantmentPredicate_): this;
        withCount(arg0: Internal.MinMaxBounds$Ints_): this;
        hasStoredEnchantment(arg0: Internal.EnchantmentPredicate_): this;
        hasDurability(arg0: Internal.MinMaxBounds$Ints_): this;
        build(): Internal.ItemPredicate;
    }
    type ItemPredicate$Builder_ = ItemPredicate$Builder;
    interface RollMouse {
        abstract doABarrelRoll$updateMouse(arg0: Internal.LocalPlayer_, arg1: number, arg2: number, arg3: number): boolean;
        abstract doABarrelRoll$getMouseTurnVec(): Internal.Vector2d;
    }
    type RollMouse_ = RollMouse;
    interface FunctionFactory$FuncSupplier {
        abstract create(arg0: Internal.Unit_[]): Internal.Unit;
        (arg0: Internal.Unit[]): Internal.Unit_;
    }
    type FunctionFactory$FuncSupplier_ = FunctionFactory$FuncSupplier;
    class MobSpawnSettings {
        constructor(arg0: number, arg1: Internal.Map_<Internal.MobCategory, Internal.WeightedRandomList<Internal.MobSpawnSettings$SpawnerData>>, arg2: Internal.Map_<Internal.EntityType<any>, Internal.MobSpawnSettings$MobSpawnCost>)
        getCreatureProbability(): number;
        getMobs(arg0: Internal.MobCategory_): Internal.WeightedRandomList<Internal.MobSpawnSettings$SpawnerData>;
        getEntityTypes(): Internal.Set<Internal.EntityType<any>>;
        getSpawnerTypes(): Internal.Set<Internal.MobCategory>;
        getMobSpawnCost(arg0: Internal.EntityType_<any>): Internal.MobSpawnSettings$MobSpawnCost;
        get creatureProbability(): number
        get entityTypes(): Internal.Set<Internal.EntityType<any>>
        get spawnerTypes(): Internal.Set<Internal.MobCategory>
        static readonly EMPTY_MOB_LIST: Internal.WeightedRandomList<Internal.MobSpawnSettings$SpawnerData>;
        mobSpawnCosts: Internal.Map<Internal.EntityType<any>, Internal.MobSpawnSettings$MobSpawnCost>;
        static readonly EMPTY: Internal.MobSpawnSettings;
        creatureGenerationProbability: number;
        spawners: Internal.Map<Internal.MobCategory, Internal.WeightedRandomList<Internal.MobSpawnSettings$SpawnerData>>;
        static readonly CODEC: Internal.MapCodec<Internal.MobSpawnSettings>;
    }
    type MobSpawnSettings_ = MobSpawnSettings;
    class DepthGlassBlock extends Internal.AbstractGlassBlock {
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
        static readonly NORTH: Internal.BooleanProperty;
        static readonly UP: Internal.BooleanProperty;
        static readonly SOUTH: Internal.BooleanProperty;
        static readonly DOWN: Internal.BooleanProperty;
        static readonly WEST: Internal.BooleanProperty;
        static readonly EAST: Internal.BooleanProperty;
    }
    type DepthGlassBlock_ = DepthGlassBlock;
    interface ScreenMouseEvents$AllowMouseClick {
        abstract allowMouseClick(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number): boolean;
        (arg0: Internal.Screen, arg1: number, arg2: number, arg3: number): boolean;
    }
    type ScreenMouseEvents$AllowMouseClick_ = ScreenMouseEvents$AllowMouseClick;
    abstract class LootEventJS extends Internal.EventJS {
        constructor(c: Internal.Map_<ResourceLocation, Internal.JsonElement>)
        removeAll(): void;
        modify(id: ResourceLocation_, b: Internal.Consumer_<Internal.LootBuilder>): void;
        addJson(id: ResourceLocation_, json: Internal.JsonObject_): void;
        abstract getType(): string;
        abstract getDirectory(): string;
        get type(): string
        get directory(): string
    }
    type LootEventJS_ = LootEventJS;
    interface BlockSource extends Internal.Position {
        abstract z(): number;
        abstract getPos(): BlockPos;
        abstract getLevel(): Internal.ServerLevel;
        abstract getEntity<T extends Internal.BlockEntity>(): T;
        abstract getBlockState(): Internal.BlockState;
        abstract y(): number;
        abstract x(): number;
        get pos(): BlockPos
        get level(): Internal.ServerLevel
        get entity(): T
        get blockState(): Internal.BlockState
    }
    type BlockSource_ = BlockSource;
    interface ModelLoaderHooks {
        abstract fabric_putModelDirectly(arg0: ResourceLocation_, arg1: Internal.UnbakedModel_): void;
        abstract fabric_getDispatcher(): Internal.ModelLoadingEventDispatcher;
        abstract fabric_queueModelDependencies(arg0: Internal.UnbakedModel_): void;
        abstract fabric_loadModelFromJson(arg0: ResourceLocation_): Internal.BlockModel;
        abstract fabric_putModel(arg0: ResourceLocation_, arg1: Internal.UnbakedModel_): void;
        abstract fabric_getMissingModel(): Internal.UnbakedModel;
        abstract fabric_getOrLoadModel(arg0: ResourceLocation_): Internal.UnbakedModel;
    }
    type ModelLoaderHooks_ = ModelLoaderHooks;
    class MultipartBlockStateGenerator$Part {
        constructor()
        model(s: string): Internal.VariantBlockStateGenerator$Model;
        toJson(): Internal.JsonObject;
    }
    type MultipartBlockStateGenerator$Part_ = MultipartBlockStateGenerator$Part;
    class ThreadedLevelLightEngine extends Internal.LevelLightEngine implements Internal.AutoCloseable {
        constructor(arg0: Internal.LightChunkGetter_, arg1: any_, arg2: boolean, arg3: any_<Internal.Runnable>, arg4: Internal.ProcessorHandle_<any>)
        lightChunk(arg0: Internal.ChunkAccess_, arg1: boolean): Internal.CompletableFuture<Internal.ChunkAccess>;
        close(): void;
        initializeLight(arg0: Internal.ChunkAccess_, arg1: boolean): Internal.CompletableFuture<Internal.ChunkAccess>;
        updateSectionStatus(arg0: BlockPos_, arg1: boolean): void;
        updateChunkStatus(arg0: Internal.ChunkPos_): void;
        tryScheduleUpdate(): void;
        static readonly DEFAULT_BATCH_SIZE: 1000;
    }
    type ThreadedLevelLightEngine_ = ThreadedLevelLightEngine;
    interface SecureRandomParameters {
    }
    type SecureRandomParameters_ = SecureRandomParameters;
    class Phantom extends Internal.FlyingMob implements Internal.Enemy {
        constructor(arg0: Internal.EntityType_<Internal.Phantom>, arg1: Internal.Level_)
        getDistance(pos: BlockPos_): number;
        damageHeldItem(hand: Internal.InteractionHand_, amount: number): void;
        removeAttribute(attribute: Internal.Attribute_, identifier: string): void;
        playSound(id: Internal.SoundEvent_, volume: number, pitch: number): void;
        static m_219049_(arg0: Internal.Phantom_): Internal.RandomSource;
        damageEquipment(slot: Internal.EquipmentSlot_, amount: number, onBroken: Internal.Consumer_<Internal.ItemStack>): void;
        setDefaultMovementSpeedMultiplier(speed: number): void;
        getOffHandItem(): Internal.ItemStack;
        isOnScoreboardTeam(teamId: string): boolean;
        static m_219041_(arg0: Internal.Phantom_): Internal.RandomSource;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getEquipment(slot: Internal.EquipmentSlot_): Internal.ItemStack;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        swing(): void;
        getPickedResult(arg0: Internal.HitResult_): Internal.ItemStack;
        setPosition(x: number, y: number, z: number): void;
        runCommandSilent(command: string): number;
        static m_219037_(arg0: Internal.Phantom_): Internal.RandomSource;
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
        static m_219043_(arg0: Internal.Phantom_): Internal.RandomSource;
        bettermobcombat$startUpswing(arg0: Internal.WeaponAttributes_): void;
        shouldRiderSit(): boolean;
        setMainHandItem(item: Internal.ItemStack_): void;
        getLegsArmorItem(): Internal.ItemStack;
        isHoldingInAnyHand(i: Internal.Ingredient_): boolean;
        rayTrace(distance: number): Internal.RayTraceResultJS;
        isInFluidType(arg0: Internal.FluidType_): boolean;
        getPhantomSize(): number;
        getReachDistance(): number;
        getFluidMotionScale(arg0: Internal.FluidType_): number;
        getMotionX(): number;
        isWaterCreature(): boolean;
        static m_219035_(arg0: Internal.Phantom_): Internal.RandomSource;
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
        setPhantomSize(arg0: number): void;
        static m_219045_(arg0: Internal.Phantom_): Internal.RandomSource;
        isWeaponSwingInProgress(): boolean;
        canHydrateInFluidType(arg0: Internal.FluidType_): boolean;
        static m_219051_(arg0: Internal.Phantom_): Internal.RandomSource;
        getType(): string;
        setChestArmorItem(item: Internal.ItemStack_): void;
        self(): Internal.Entity;
        getBlock(): Internal.BlockContainerJS;
        static m_219033_(arg0: Internal.Phantom_): Internal.RandomSource;
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
        getUniqueFlapTickOffset(): number;
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
        static m_219053_(arg0: Internal.Phantom_): Internal.RandomSource;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        setNbt(nbt: Internal.CompoundTag_): void;
        getLevel(): Internal.Level;
        getScriptType(): Internal.ScriptType;
        static m_219047_(arg0: Internal.Phantom_): Internal.RandomSource;
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
        static m_219031_(arg0: Internal.Phantom_): Internal.RandomSource;
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
        static m_219039_(arg0: Internal.Phantom_): Internal.RandomSource;
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
        get phantomSize(): number
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
        set phantomSize(arg0: number)
        get weaponSwingInProgress(): boolean
        get type(): string
        set chestArmorItem(item: Internal.ItemStack_)
        get block(): Internal.BlockContainerJS
        get nbt(): Internal.CompoundTag
        get motionY(): number
        get name(): Internal.Component
        get passengers(): Internal.EntityArrayList
        set totalMovementSpeedMultiplier(speed: number)
        get uniqueFlapTickOffset(): number
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
        attackPhase: Internal.Phantom$AttackPhase;
        moveTargetPoint: Vec3d;
        static readonly TICKS_PER_FLAP: 25;
        static readonly FLAP_DEGREES_PER_TICK: 7.448451;
        anchorPoint: BlockPos;
    }
    type Phantom_ = Phantom;
    class DataFetcher$Task <T> {
        reset(): void;
    }
    type DataFetcher$Task_<T> = DataFetcher$Task<T>;
    interface DynamicRecipeComponent$Factory {
        abstract create(arg0: Internal.Context_, arg1: Internal.Scriptable_, arg2: Internal.Map_<string, any>): Internal.RecipeComponent<any>;
        (arg0: Internal.Context, arg1: Internal.Scriptable, arg2: Internal.Map<string, any>): Internal.RecipeComponent_<any>;
    }
    type DynamicRecipeComponent$Factory_ = DynamicRecipeComponent$Factory;
    class WalkTarget {
        constructor(arg0: Internal.Entity_, arg1: number, arg2: number)
        constructor(arg0: Internal.PositionTracker_, arg1: number, arg2: number)
        constructor(arg0: BlockPos_, arg1: number, arg2: number)
        constructor(arg0: Vec3d_, arg1: number, arg2: number)
        getCloseEnoughDist(): number;
        getSpeedModifier(): number;
        getTarget(): Internal.PositionTracker;
        get closeEnoughDist(): number
        get speedModifier(): number
        get target(): Internal.PositionTracker
    }
    type WalkTarget_ = WalkTarget;
    interface IExtensibleEnum {
        createCodecForExtensibleEnum<E extends Internal.Enum<E> & Internal.StringRepresentable>(arg0: Internal.Supplier_<E[]>, arg1: Internal.Function_<string, E>): Internal.Codec<E>;
        /**
         * @deprecated
        */
        init(): void;
    }
    type IExtensibleEnum_ = IExtensibleEnum;
    interface CompletionStage <T> {
        abstract runAfterEitherAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_): Internal.CompletionStage<void>;
        abstract thenCombineAsync<U, V>(arg0: Internal.CompletionStage_<U>, arg1: Internal.BiFunction_<T, U, V>): Internal.CompletionStage<V>;
        abstract whenCompleteAsync(arg0: Internal.BiConsumer_<T, Internal.Throwable>, arg1: Internal.Executor_): this;
        abstract thenAcceptBothAsync<U>(arg0: Internal.CompletionStage_<U>, arg1: Internal.BiConsumer_<T, U>, arg2: Internal.Executor_): Internal.CompletionStage<void>;
        abstract whenCompleteAsync(arg0: Internal.BiConsumer_<T, Internal.Throwable>): this;
        abstract thenAcceptBoth<U>(arg0: Internal.CompletionStage_<U>, arg1: Internal.BiConsumer_<T, U>): Internal.CompletionStage<void>;
        abstract thenComposeAsync<U>(arg0: Internal.Function_<T, Internal.CompletionStage<U>>): Internal.CompletionStage<U>;
        abstract thenRunAsync(arg0: Internal.Runnable_, arg1: Internal.Executor_): Internal.CompletionStage<void>;
        abstract handleAsync<U>(arg0: Internal.BiFunction_<T, Internal.Throwable, U>, arg1: Internal.Executor_): Internal.CompletionStage<U>;
        abstract whenComplete(arg0: Internal.BiConsumer_<T, Internal.Throwable>): this;
        abstract applyToEitherAsync<U>(arg0: Internal.CompletionStage_<T>, arg1: Internal.Function_<T, U>, arg2: Internal.Executor_): Internal.CompletionStage<U>;
        abstract thenCombine<U, V>(arg0: Internal.CompletionStage_<U>, arg1: Internal.BiFunction_<T, U, V>): Internal.CompletionStage<V>;
        abstract runAfterBoth(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_): Internal.CompletionStage<void>;
        abstract thenCombineAsync<U, V>(arg0: Internal.CompletionStage_<U>, arg1: Internal.BiFunction_<T, U, V>, arg2: Internal.Executor_): Internal.CompletionStage<V>;
        abstract runAfterBothAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_): Internal.CompletionStage<void>;
        abstract thenApply<U>(arg0: Internal.Function_<T, U>): Internal.CompletionStage<U>;
        abstract applyToEitherAsync<U>(arg0: Internal.CompletionStage_<T>, arg1: Internal.Function_<T, U>): Internal.CompletionStage<U>;
        exceptionallyComposeAsync(arg0: Internal.Function_<Internal.Throwable, Internal.CompletionStage<T>>, arg1: Internal.Executor_): this;
        exceptionallyCompose(arg0: Internal.Function_<Internal.Throwable, Internal.CompletionStage<T>>): this;
        abstract thenApplyAsync<U>(arg0: Internal.Function_<T, U>, arg1: Internal.Executor_): Internal.CompletionStage<U>;
        abstract thenRunAsync(arg0: Internal.Runnable_): Internal.CompletionStage<void>;
        abstract acceptEitherAsync(arg0: Internal.CompletionStage_<T>, arg1: Internal.Consumer_<T>, arg2: Internal.Executor_): Internal.CompletionStage<void>;
        abstract runAfterEither(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_): Internal.CompletionStage<void>;
        exceptionallyComposeAsync(arg0: Internal.Function_<Internal.Throwable, Internal.CompletionStage<T>>): this;
        abstract runAfterEitherAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_, arg2: Internal.Executor_): Internal.CompletionStage<void>;
        abstract acceptEitherAsync(arg0: Internal.CompletionStage_<T>, arg1: Internal.Consumer_<T>): Internal.CompletionStage<void>;
        abstract runAfterBothAsync(arg0: Internal.CompletionStage_<any>, arg1: Internal.Runnable_, arg2: Internal.Executor_): Internal.CompletionStage<void>;
        abstract toCompletableFuture(): Internal.CompletableFuture<T>;
        abstract thenAcceptAsync(arg0: Internal.Consumer_<T>): Internal.CompletionStage<void>;
        abstract thenComposeAsync<U>(arg0: Internal.Function_<T, Internal.CompletionStage<U>>, arg1: Internal.Executor_): Internal.CompletionStage<U>;
        abstract thenRun(arg0: Internal.Runnable_): Internal.CompletionStage<void>;
        abstract handleAsync<U>(arg0: Internal.BiFunction_<T, Internal.Throwable, U>): Internal.CompletionStage<U>;
        abstract thenAccept(arg0: Internal.Consumer_<T>): Internal.CompletionStage<void>;
        abstract thenCompose<U>(arg0: Internal.Function_<T, Internal.CompletionStage<U>>): Internal.CompletionStage<U>;
        abstract exceptionally(arg0: Internal.Function_<Internal.Throwable, T>): this;
        abstract thenApplyAsync<U>(arg0: Internal.Function_<T, U>): Internal.CompletionStage<U>;
        exceptionallyAsync(arg0: Internal.Function_<Internal.Throwable, T>, arg1: Internal.Executor_): this;
        exceptionallyAsync(arg0: Internal.Function_<Internal.Throwable, T>): this;
        abstract applyToEither<U>(arg0: Internal.CompletionStage_<T>, arg1: Internal.Function_<T, U>): Internal.CompletionStage<U>;
        abstract thenAcceptAsync(arg0: Internal.Consumer_<T>, arg1: Internal.Executor_): Internal.CompletionStage<void>;
        abstract handle<U>(arg0: Internal.BiFunction_<T, Internal.Throwable, U>): Internal.CompletionStage<U>;
        abstract thenAcceptBothAsync<U>(arg0: Internal.CompletionStage_<U>, arg1: Internal.BiConsumer_<T, U>): Internal.CompletionStage<void>;
        abstract acceptEither(arg0: Internal.CompletionStage_<T>, arg1: Internal.Consumer_<T>): Internal.CompletionStage<void>;
    }
    type CompletionStage_<T> = CompletionStage<T>;
    class ChiseledBookShelfBlockEntity extends Internal.BlockEntity implements Internal.Container, Internal.SpecialLogicInventory {
        constructor(arg0: BlockPos_, arg1: Internal.BlockState_)
        stopOpen(arg0: Player_): void;
        static tryClear(arg0: any): void;
        getLastInteractedSlot(): number;
        sdl$setDynamicLightEnabled(enabled: boolean): void;
        requestModelDataUpdate(): void;
        handleUpdateTag(arg0: Internal.CompoundTag_): void;
        fabric_setSuppress(suppress: boolean): void;
        modifyAttached<A>(type: Internal.AttachmentType_<A>, modifier: Internal.UnaryOperator_<A>): A;
        setStackInSlot(slot: number, stack: Internal.ItemStack_): void;
        clear(ingredient: Internal.Ingredient_): void;
        find(): number;
        hasAnyOf(arg0: Internal.Set_<Internal.Item>): boolean;
        removeItem(arg0: number, arg1: number): Internal.ItemStack;
        getSlots(): number;
        setChanged(): void;
        onLoad(): void;
        fabric_onFinalCommit(slot: number, oldStack: Internal.ItemStack_, newStack: Internal.ItemStack_): void;
        getContainerSize(): number;
        getAttachedOrSet<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        setItem(arg0: number, arg1: Internal.ItemStack_): void;
        removeAttached<A>(type: Internal.AttachmentType_<A>): A;
        hasAnyMatching(arg0: Internal.Predicate_<Internal.ItemStack>): boolean;
        kjs$self(): Internal.Container;
        getWidth(): number;
        getSlotLimit(slot: number): number;
        getMaxStackSize(): number;
        sdl$isDynamicLightEnabled(): boolean;
        removeItemNoUpdate(arg0: number): Internal.ItemStack;
        getCapability<T>(arg0: Internal.Capability_<T>): Internal.LazyOptional<T>;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_): boolean;
        getAttachedOrGet<A>(type: Internal.AttachmentType_<A>, defaultValue: Internal.Supplier_<A>): A;
        static transfer(original: Internal.AttachmentTarget_, target: Internal.AttachmentTarget_, isDeath: boolean): void;
        fabric_onTransfer(slot: number, transaction: Internal.TransactionContext_): void;
        getItem(arg0: number): Internal.ItemStack;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        isItemValid(slot: number, stack: Internal.ItemStack_): boolean;
        getRenderBoundingBox(): Internal.AABB;
        count(ingredient: Internal.Ingredient_): number;
        getCapability<T>(arg0: Internal.Capability_<T>, arg1: Internal.Direction_): Internal.LazyOptional<T>;
        count(): number;
        createUnSidedHandler(): Internal.IItemHandler;
        countItem(arg0: Internal.Item_): number;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>): A;
        isEmpty(): boolean;
        canPlaceItem(arg0: number, arg1: Internal.ItemStack_): boolean;
        startOpen(arg0: Player_): void;
        extractItem(slot: number, amount: number, simulate: boolean): Internal.ItemStack;
        getBlock(level: Internal.Level_): Internal.BlockContainerJS;
        serializeNBT(): Internal.Tag;
        static stillValidBlockEntity(arg0: Internal.BlockEntity_, arg1: Player_, arg2: number): boolean;
        getStackInSlot(slot: number): Internal.ItemStack;
        getHeight(): number;
        hasCustomOutlineRendering(arg0: Player_): boolean;
        onDataPacket(arg0: Internal.Connection_, arg1: Internal.ClientboundBlockEntityDataPacket_): void;
        countNonEmpty(): number;
        handler$cij000$fabric_transfer_api_v1$setStackBypass(slot: number, stack: Internal.ItemStack_, ci: Internal.CallbackInfo_): void;
        asContainer(): Internal.Container;
        deserializeNBT(arg0: Internal.Tag_): void;
        getAllItems(): Internal.List<Internal.ItemStack>;
        canTakeItem(arg0: Internal.Container_, arg1: number, arg2: Internal.ItemStack_): boolean;
        insertItem(stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        stillValid(arg0: Player_): boolean;
        insertItem(slot: number, stack: Internal.ItemStack_, simulate: boolean): Internal.ItemStack;
        deserializeNBT(arg0: Internal.CompoundTag_): void;
        getAttachedOrCreate<A>(type: Internal.AttachmentType_<A>, initializer: Internal.Supplier_<A>): A;
        getAttachedOrElse<A>(type: Internal.AttachmentType_<A>, defaultValue: A): A;
        getModelData(): Internal.ModelData;
        isMutable(): boolean;
        clear(): void;
        find(ingredient: Internal.Ingredient_): number;
        getAttachedOrThrow<A>(type: Internal.AttachmentType_<A>): A;
        clearContent(): void;
        countNonEmpty(ingredient: Internal.Ingredient_): number;
        get lastInteractedSlot(): number
        get slots(): number
        get containerSize(): number
        get width(): number
        get maxStackSize(): number
        get renderBoundingBox(): Internal.AABB
        get empty(): boolean
        get height(): number
        get allItems(): Internal.List<Internal.ItemStack>
        get modelData(): Internal.ModelData
        get mutable(): boolean
        static readonly MAX_BOOKS_IN_STORAGE: 6;
    }
    type ChiseledBookShelfBlockEntity_ = ChiseledBookShelfBlockEntity;
    class ConnectionProtocol extends Internal.Enum<Internal.ConnectionProtocol> implements Internal.BundlerInfo$Provider {
        getBundlerInfo(arg0: Internal.PacketFlow_): Internal.BundlerInfo;
        static getProtocolForPacket(arg0: Internal.Packet_<any>): Internal.ConnectionProtocol;
        static values(): Internal.ConnectionProtocol[];
        getPacketId(arg0: Internal.PacketFlow_, arg1: Internal.Packet_<any>): number;
        getPacketsByIds(arg0: Internal.PacketFlow_): Internal.Int2ObjectMap<Internal.Packet<any>>;
        createPacket(arg0: Internal.PacketFlow_, arg1: number, arg2: Internal.FriendlyByteBuf_): Internal.Packet<any>;
        static valueOf(arg0: string): Internal.ConnectionProtocol;
        getId(): number;
        static getById(arg0: number): Internal.ConnectionProtocol;
        get id(): number
        static readonly NOT_REGISTERED: -1;
        static readonly STATUS: Internal.ConnectionProtocol;
        static readonly HANDSHAKING: Internal.ConnectionProtocol;
        static readonly LOGIN: Internal.ConnectionProtocol;
        static readonly PLAY: Internal.ConnectionProtocol;
    }
    type ConnectionProtocol_ = "login" | ConnectionProtocol | "status" | "play" | "handshaking";
    class EffectWetness extends Internal.MobEffect {
        constructor()
        getCurativeItems(): Internal.List<Internal.ItemStack>;
        getSortOrder(arg0: Internal.MobEffectInstance_): number;
        get curativeItems(): Internal.List<Internal.ItemStack>
    }
    type EffectWetness_ = EffectWetness;
    class BlockIDPredicate$PropertyObject extends Internal.Record {
        constructor(property: Internal.Property_<any>, value: any)
        value(): any;
        property(): Internal.Property<any>;
    }
    type BlockIDPredicate$PropertyObject_ = BlockIDPredicate$PropertyObject;
    class ElytraFlightPossibleCondition extends Internal.EntityCondition<Internal.ElytraFlightPossibleConfiguration> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        check(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.Entity_): boolean;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        check(arg0: Internal.ElytraFlightPossibleConfiguration_, arg1: Internal.Entity_): boolean;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type ElytraFlightPossibleCondition_ = ElytraFlightPossibleCondition;
    interface ScreenKeyboardEvents$AllowKeyPress {
        abstract allowKeyPress(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number): boolean;
        (arg0: Internal.Screen, arg1: number, arg2: number, arg3: number): boolean;
    }
    type ScreenKeyboardEvents$AllowKeyPress_ = ScreenKeyboardEvents$AllowKeyPress;
    abstract class Dimension2D implements Internal.Cloneable {
        abstract getHeight(): number;
        clone(): any;
        abstract getWidth(): number;
        abstract setSize(arg0: number, arg1: number): void;
        setSize(arg0: Internal.Dimension2D_): void;
        get height(): number
        get width(): number
        set size(arg0: Internal.Dimension2D_)
    }
    type Dimension2D_ = Dimension2D;
    interface NamedScreenHandlerFactoryMixin extends Internal.FabricScreenHandlerFactory {
        shouldCloseCurrentScreen(): boolean;
    }
    type NamedScreenHandlerFactoryMixin_ = NamedScreenHandlerFactoryMixin;
    interface ScreenMouseEvents$BeforeMouseScroll {
        abstract beforeMouseScroll(arg0: Internal.Screen_, arg1: number, arg2: number, arg3: number, arg4: number): void;
        (arg0: Internal.Screen, arg1: number, arg2: number, arg3: number, arg4: number): void;
    }
    type ScreenMouseEvents$BeforeMouseScroll_ = ScreenMouseEvents$BeforeMouseScroll;
    class ProtectionEnchantment$Type extends Internal.Enum<Internal.ProtectionEnchantment$Type> {
        getLevelCost(): number;
        static values(): Internal.ProtectionEnchantment$Type[];
        getMinCost(): number;
        static valueOf(arg0: string): Internal.ProtectionEnchantment$Type;
        get levelCost(): number
        get minCost(): number
        static readonly FIRE: Internal.ProtectionEnchantment$Type;
        static readonly EXPLOSION: Internal.ProtectionEnchantment$Type;
        static readonly ALL: Internal.ProtectionEnchantment$Type;
        static readonly PROJECTILE: Internal.ProtectionEnchantment$Type;
        static readonly FALL: Internal.ProtectionEnchantment$Type;
    }
    type ProtectionEnchantment$Type_ = ProtectionEnchantment$Type | "fire" | "fall" | "projectile" | "explosion" | "all";
    class EventResult$Type extends Internal.Enum<Internal.EventResult$Type> {
        static values(): Internal.EventResult$Type[];
        static valueOf(name: string): Internal.EventResult$Type;
        exit(value: any): Internal.EventExit;
        static readonly INTERRUPT_TRUE: Internal.EventResult$Type;
        static readonly PASS: Internal.EventResult$Type;
        readonly defaultResult: Internal.EventResult;
        readonly defaultExit: Internal.EventExit;
        static readonly ERROR: Internal.EventResult$Type;
        static readonly INTERRUPT_DEFAULT: Internal.EventResult$Type;
        readonly defaultArchResult: dev.architectury.event.EventResult;
        static readonly INTERRUPT_FALSE: Internal.EventResult$Type;
    }
    type EventResult$Type_ = "interrupt_default" | "pass" | "error" | "interrupt_true" | "interrupt_false" | EventResult$Type;
    class Constructor <T> extends Internal.Executable {
        getTypeParameters(): any[];
        newInstance(...arg0: any[]): T;
        getDeclaringClass(): T;
        getAnnotation<T extends Internal.Annotation>(arg0: T): T;
        get typeParameters(): any[]
        get declaringClass(): T
    }
    type Constructor_<T> = Constructor<T>;
    class OptionalLong {
        ifPresentOrElse(arg0: Internal.LongConsumer_, arg1: Internal.Runnable_): void;
        static of(arg0: number): Internal.OptionalLong;
        getAsLong(): number;
        orElseGet(arg0: Internal.LongSupplier_): number;
        static empty(): Internal.OptionalLong;
        orElseThrow<X extends Internal.Throwable>(arg0: Internal.Supplier_<X>): number;
        orElseThrow(): number;
        isPresent(): boolean;
        orElse(arg0: number): number;
        isEmpty(): boolean;
        ifPresent(arg0: Internal.LongConsumer_): void;
        stream(): Internal.LongStream;
        get asLong(): number
        get present(): boolean
        get empty(): boolean
    }
    type OptionalLong_ = OptionalLong;
    interface CaxtonGlyphResult {
        abstract getCaxtonFont(): Internal.ConfiguredCaxtonFont;
        get caxtonFont(): Internal.ConfiguredCaxtonFont
        (): Internal.ConfiguredCaxtonFont_;
    }
    type CaxtonGlyphResult_ = CaxtonGlyphResult;
    class ToolAction {
        name(): string;
        static get(arg0: string): Internal.ToolAction;
        static getActions(): Internal.Collection<Internal.ToolAction>;
        get actions(): Internal.Collection<Internal.ToolAction>
    }
    type ToolAction_ = ToolAction;
    class InTagBlockCondition extends Internal.BlockCondition<Internal.TagConfiguration<Internal.Block>> {
        constructor()
        static asMap<T>(arg0: Internal.Codec_<T>): Internal.MapCodec<T>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_, arg1: Internal.ConditionData_): Internal.ConfiguredCondition<any, any, any>;
        configure(arg0: Internal.IDynamicFeatureConfiguration_): Internal.ConfiguredFactory<any, any, any>;
        static unionCodec<T, V, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.MapCodec_<V>, arg2: Internal.BiFunction_<T, V, R>, arg3: Internal.Function_<R, T>, arg4: Internal.Function_<R, V>): Internal.Codec<R>;
        static conditionCodec<T extends Internal.IDynamicFeatureConfiguration, C extends Internal.ConfiguredCondition<T, any, any>, F extends Internal.IConditionFactory<T, C, F>>(arg0: Internal.Codec_<T>, arg1: F): Internal.Codec<C>;
        static singleCodec<T, R>(arg0: Internal.MapCodec_<T>, arg1: Internal.Function_<T, R>, arg2: Internal.Function_<R, T>): Internal.Codec<R>;
    }
    type InTagBlockCondition_ = InTagBlockCondition;
    class GravityProcessor extends Internal.StructureProcessor {
        constructor(arg0: Internal.Heightmap$Types_, arg1: number)
        static readonly CODEC: Internal.Codec<Internal.GravityProcessor>;
    }
    type GravityProcessor_ = GravityProcessor;
    class SkeletonWithWeakPunchBowFeature extends Internal.Feature<Internal.NoneFeatureConfiguration> {
        constructor()
    }
    type SkeletonWithWeakPunchBowFeature_ = SkeletonWithWeakPunchBowFeature;
    class AltarOfAmethystRecipe$Serializer implements Internal.RecipeSerializer<Internal.AltarOfAmethystRecipe> {
        constructor()
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.AltarOfAmethystRecipe;
        static register<S extends Internal.RecipeSerializer<T>, T extends Internal.Recipe<any>>(arg0: string, arg1: S): S;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.Recipe<any>;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_, arg2: Internal.ICondition$IContext_): Internal.AltarOfAmethystRecipe;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.AltarOfAmethystRecipe_): void;
        toNetwork(arg0: Internal.FriendlyByteBuf_, arg1: Internal.Recipe_<any>): void;
        fromJson(arg0: ResourceLocation_, arg1: Internal.JsonObject_): Internal.AltarOfAmethystRecipe;
        fromNetwork(arg0: ResourceLocation_, arg1: Internal.FriendlyByteBuf_): Internal.Recipe<any>;
    }
    type AltarOfAmethystRecipe$Serializer_ = AltarOfAmethystRecipe$Serializer;
    class Goal$Flag extends Internal.Enum<Internal.Goal$Flag> {
        static values(): Internal.Goal$Flag[];
        static valueOf(arg0: string): Internal.Goal$Flag;
        static readonly TARGET: Internal.Goal$Flag;
        static readonly JUMP: Internal.Goal$Flag;
        static readonly MOVE: Internal.Goal$Flag;
        static readonly LOOK: Internal.Goal$Flag;
    }
    type Goal$Flag_ = "jump" | "move" | "target" | "look" | Goal$Flag;
    class LongArgumentType implements Internal.ArgumentType<number> {
        getMinimum(): number;
        getExamples(): Internal.Collection<string>;
        static getLong(arg0: Internal.CommandContext_<any>, arg1: string): number;
        getMaximum(): number;
        static longArg(): Internal.LongArgumentType;
        parse(arg0: Internal.StringReader_): number;
        listSuggestions<S>(arg0: Internal.CommandContext_<S>, arg1: Internal.SuggestionsBuilder_): Internal.CompletableFuture<Internal.Suggestions>;
        static longArg(arg0: number): Internal.LongArgumentType;
        static longArg(arg0: number, arg1: number): Internal.LongArgumentType;
        get minimum(): number
        get examples(): Internal.Collection<string>
        get maximum(): number
    }
    type LongArgumentType_ = LongArgumentType;
    class Dim2i extends Internal.Record implements Internal.Point2i {
        constructor(x: number, y: number, width: number, height: number)
        withHeight(arg0: number): this;
        y(): number;
        getLimitY(): number;
        overlapsWith(arg0: Internal.Dim2i_): boolean;
        x(): number;
        withY(arg0: number): this;
        withX(arg0: number): this;
        height(): number;
        containsCursor(arg0: number, arg1: number): boolean;
        canFitDimension(arg0: Internal.Dim2i_): boolean;
        withWidth(arg0: number): this;
        getLimitX(): number;
        getCenterX(): number;
        width(): number;
        getCenterY(): number;
        withParentOffset(arg0: Internal.Point2i_): this;
        get limitY(): number
        get limitX(): number
        get centerX(): number
        get centerY(): number
    }
    type Dim2i_ = Dim2i;
    interface NarrationElementOutput {
        add(arg0: Internal.NarratedElementType_, ...arg1: Internal.Component_[]): void;
        add(arg0: Internal.NarratedElementType_, arg1: Internal.Component_): void;
        add(arg0: Internal.NarratedElementType_, arg1: string): void;
        abstract nest(): this;
        abstract add(arg0: Internal.NarratedElementType_, arg1: Internal.NarrationThunk_<any>): void;
    }
    type NarrationElementOutput_ = NarrationElementOutput;
    class BossEvent$BossBarOverlay extends Internal.Enum<Internal.BossEvent$BossBarOverlay> {
        static valueOf(arg0: string): Internal.BossEvent$BossBarOverlay;
        getName(): string;
        static values(): Internal.BossEvent$BossBarOverlay[];
        static byName(name: string): Internal.BossEvent$BossBarOverlay;
        get name(): string
        static readonly NOTCHED_12: Internal.BossEvent$BossBarOverlay;
        static readonly NOTCHED_10: Internal.BossEvent$BossBarOverlay;
        static readonly PROGRESS: Internal.BossEvent$BossBarOverlay;
        static readonly NOTCHED_6: Internal.BossEvent$BossBarOverlay;
        static readonly NOTCHED_20: Internal.BossEvent$BossBarOverlay;
    }
    type BossEvent$BossBarOverlay_ = "notched_20" | "notched_10" | "progress" | "notched_6" | "notched_12" | BossEvent$BossBarOverlay;
    class AnimalTameEvent extends Internal.LivingEvent {
        constructor()
        constructor(arg0: Internal.Animal_, arg1: Player_)
        getTamer(): Player;
        getEntity(): Internal.Entity;
        getAnimal(): Internal.Animal;
        get tamer(): Player
        get entity(): Internal.Entity
        get animal(): Internal.Animal
    }
    type AnimalTameEvent_ = AnimalTameEvent;
    interface ModelQuadView {
        abstract getTexU(arg0: number): number;
        abstract getFlags(): number;
        abstract getTexV(arg0: number): number;
        abstract getSprite(): Internal.TextureAtlasSprite;
        hasAmbientOcclusion(): boolean;
        abstract getLight(arg0: number): number;
        abstract getComputedFaceNormal(): number;
        getModFaceNormal(): number;
        abstract getForgeNormal(arg0: number): number;
        hasColor(): boolean;
        abstract getColor(arg0: number): number;
        abstract getLightFace(): Internal.Direction;
        abstract getZ(arg0: number): number;
        abstract getColorIndex(): number;
        abstract getX(arg0: number): number;
        abstract getY(arg0: number): number;
        get flags(): number
        get sprite(): Internal.TextureAtlasSprite
        get computedFaceNormal(): number
        get modFaceNormal(): number
        get lightFace(): Internal.Direction
        get colorIndex(): number
    }
    type ModelQuadView_ = ModelQuadView;
    class GingerbreadArmorItem extends Internal.ArmorItem {
        constructor(arg0: Internal.ArmorMaterial_, arg1: Internal.ArmorItem$Type_)
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
        static get(arg0: Internal.ItemStack_): Internal.Equipable;
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
        arch$holder(): Internal.Holder<Internal.Item>;
        getMod(): string;
        canElytraFly(arg0: Internal.ItemStack_, arg1: Internal.LivingEntity_): boolean;
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
        swapWithEquipmentSlot(arg0: Internal.Item_, arg1: Internal.Level_, arg2: Player_, arg3: Internal.InteractionHand_): Internal.InteractionResultHolder<Internal.ItemStack>;
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
    type GingerbreadArmorItem_ = GingerbreadArmorItem;
    class TutorialSteps extends Internal.Enum<Internal.TutorialSteps> {
        static getByName(name: string): Internal.TutorialSteps;
        create(arg0: Internal.Tutorial_): Internal.TutorialStepInstance;
        getName(): string;
        static valueOf(arg0: string): Internal.TutorialSteps;
        static values(): Internal.TutorialSteps[];
        get name(): string
        static readonly OPEN_INVENTORY: Internal.TutorialSteps;
        static readonly CRAFT_PLANKS: Internal.TutorialSteps;
        static readonly NONE: Internal.TutorialSteps;
        static readonly FIND_TREE: Internal.TutorialSteps;
        static readonly MOVEMENT: Internal.TutorialSteps;
        static readonly PUNCH_TREE: Internal.TutorialSteps;
    }
    type TutorialSteps_ = TutorialSteps | "craft_planks" | "find_tree" | "open_inventory" | "punch_tree" | "none" | "movement";
    class VibrationSelector {
        constructor()
        constructor(arg0: Internal.Optional_<Internal.VibrationInfo>, arg1: number)
        chosenCandidate(arg0: number): Internal.Optional<Internal.VibrationInfo>;
        startOver(): void;
        addCandidate(arg0: Internal.VibrationInfo_, arg1: number): void;
        static readonly CODEC: Internal.Codec<Internal.VibrationSelector>;
    }
    type VibrationSelector_ = VibrationSelector;
    class ImpossibleTrigger$TriggerInstance implements Internal.CriterionTriggerInstance {
        constructor()
        serializeToJson(arg0: Internal.SerializationContext_): Internal.JsonObject;
        getCriterion(): ResourceLocation;
        get criterion(): ResourceLocation
    }
    type ImpossibleTrigger$TriggerInstance_ = ImpossibleTrigger$TriggerInstance;
}
declare namespace toni.sodiumoptionsapi.api {
    class OptionIdentifier <T> {
        constructor(modId: string, path: string, clz: T)
        matches(other: toni.sodiumoptionsapi.api.OptionIdentifier_<any>): boolean;
        static create<T>(modId: string, path: string, clz: T): toni.sodiumoptionsapi.api.OptionIdentifier<T>;
        getType(): T;
        static create(modId: string, path: string): toni.sodiumoptionsapi.api.OptionIdentifier<void>;
        static isPresent(id: toni.sodiumoptionsapi.api.OptionIdentifier_<any>): boolean;
        getModId(): string;
        matches(other: ResourceLocation_): boolean;
        getPath(): string;
        static create(location: ResourceLocation_): toni.sodiumoptionsapi.api.OptionIdentifier<void>;
        static create<T>(location: ResourceLocation_, clz: T): toni.sodiumoptionsapi.api.OptionIdentifier<T>;
        get type(): T
        get modId(): string
        get path(): string
        static readonly EMPTY: toni.sodiumoptionsapi.api.OptionIdentifier<void>;
    }
    type OptionIdentifier_<T> = OptionIdentifier<T>;
}
declare namespace it.unimi.dsi.fastutil.doubles {
    interface DoubleUnaryOperator extends Internal.DoubleUnaryOperator, Internal.UnaryOperator<number> {
        compose(arg0: Internal.DoubleUnaryOperator_): Internal.DoubleUnaryOperator;
        negation(): this;
        andThen(arg0: Internal.DoubleUnaryOperator_): Internal.DoubleUnaryOperator;
        abstract apply(arg0: number): number;
        /**
         * @deprecated
        */
        apply(arg0: any): any;
        identity(): this;
        andThen<V>(arg0: Internal.Function_<number, V>): Internal.Function<number, V>;
        compose<V>(arg0: Internal.Function_<V, number>): Internal.Function<V, number>;
        /**
         * @deprecated
        */
        apply(arg0: number): number;
        /**
         * @deprecated
        */
        applyAsDouble(arg0: number): number;
        (arg0: number): number;
    }
    type DoubleUnaryOperator_ = DoubleUnaryOperator;
}
