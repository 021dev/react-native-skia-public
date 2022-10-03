#pragma once

#include <memory>

#include <fbjni/fbjni.h>
#include <jni.h>
#include <jsi/jsi.h>

#include <RNSkJsView.h>
#include <RNSkAndroidView.h>
#include <JniSkiaBaseView.h>
#include <JniSkiaManager.h>

#include <android/native_window.h>
#include <android/native_window_jni.h>
#include <fbjni/detail/Hybrid.h>

namespace RNSkia {
    using namespace facebook;
    using namespace jni;

    class JniSkiaDrawView
            : public HybridClass<JniSkiaDrawView>, public JniSkiaBaseView {
    public:
        static auto constexpr kJavaDescriptor = "Lcom/shopify/reactnative/skia/SkiaDrawView;";

        static jni::local_ref<jhybriddata>
        initHybrid(jni::alias_ref<jhybridobject> jThis,
                   jni::alias_ref<JniSkiaManager::javaobject> skiaManager) {
          return makeCxxInstance(jThis, skiaManager);
        }

        static void registerNatives() {
          registerHybrid({
                                 makeNativeMethod("initHybrid", JniSkiaDrawView::initHybrid),
                                 makeNativeMethod("surfaceAvailable",
                                                  JniSkiaDrawView::surfaceAvailable),
                                 makeNativeMethod("surfaceDestroyed",
                                                  JniSkiaDrawView::surfaceDestroyed),
                                 makeNativeMethod("surfaceSizeChanged",
                                                  JniSkiaDrawView::surfaceSizeChanged),
                                 makeNativeMethod("setMode", JniSkiaDrawView::setMode),
                                 makeNativeMethod("setDebugMode", JniSkiaDrawView::setDebugMode),
                                 makeNativeMethod("updateTouchPoints",
                                                  JniSkiaDrawView::updateTouchPoints),
                                 makeNativeMethod("registerView", JniSkiaDrawView::registerView),
                                 makeNativeMethod("unregisterView", JniSkiaDrawView::unregisterView)
                         });
        }

    protected:
        void updateTouchPoints(jni::JArrayDouble touches) override {
          JniSkiaBaseView::updateTouchPoints(touches);
        }

        void surfaceAvailable(jobject surface, int width, int height) override {
          JniSkiaBaseView::surfaceAvailable(surface, width, height);
        }

        void surfaceSizeChanged(int width, int height) override {
          JniSkiaBaseView::surfaceSizeChanged(width, height);
        }

        void surfaceDestroyed() override { JniSkiaBaseView::surfaceDestroyed(); }

        void setMode(std::string mode) override {
          JniSkiaBaseView::setMode(mode);
        }

        void setDebugMode(bool show) override {
          JniSkiaBaseView::setDebugMode(show);
        }

        void registerView(int nativeId) override {
          JniSkiaBaseView::registerView(nativeId);
        }

        void unregisterView() override {
          JniSkiaBaseView::unregisterView();
        }

    private:
        friend HybridBase;

        explicit JniSkiaDrawView(jni::alias_ref<jhybridobject> jThis,
                                 jni::alias_ref<JniSkiaManager::javaobject> skiaManager) :
                JniSkiaBaseView(skiaManager,
                                std::make_shared<RNSkAndroidView<RNSkia::RNSkJsView>>(
                                        skiaManager->cthis()->getPlatformContext())) {
        }

        jni::global_ref<javaobject> javaPart_;
    };

} // namespace RNSkia
