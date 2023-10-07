-- CreateTable
CREATE TABLE "ownerModel" (
    "id" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "token" TEXT,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "avatar" TEXT,
    "avatarID" TEXT,
    "role" TEXT,
    "roleID" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ownerModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "storeModel" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "cost" INTEGER NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "image" TEXT,
    "imageID" TEXT,
    "ownerID" TEXT NOT NULL,
    "rating" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "storeModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "theAdminModel" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "secretKey" TEXT NOT NULL,
    "role" TEXT,
    "roleID" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "theAdminModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "theDispatchRiderModel" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "token" TEXT,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "role" TEXT,
    "roleID" TEXT,
    "disID" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "theDispatchRiderModel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ownerModel_email_key" ON "ownerModel"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ownerModel_roleID_key" ON "ownerModel"("roleID");

-- CreateIndex
CREATE UNIQUE INDEX "theAdminModel_email_key" ON "theAdminModel"("email");

-- CreateIndex
CREATE UNIQUE INDEX "theAdminModel_roleID_key" ON "theAdminModel"("roleID");

-- CreateIndex
CREATE UNIQUE INDEX "theDispatchRiderModel_email_key" ON "theDispatchRiderModel"("email");

-- CreateIndex
CREATE UNIQUE INDEX "theDispatchRiderModel_roleID_key" ON "theDispatchRiderModel"("roleID");

-- CreateIndex
CREATE UNIQUE INDEX "theDispatchRiderModel_disID_key" ON "theDispatchRiderModel"("disID");

-- AddForeignKey
ALTER TABLE "storeModel" ADD CONSTRAINT "storeModel_ownerID_fkey" FOREIGN KEY ("ownerID") REFERENCES "ownerModel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
