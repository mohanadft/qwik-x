import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { FollowUnfollow } from "./follow";
import type { UserSuggestionType } from "~/types";

export const User = component$((props: UserSuggestionType) => {
  const { avatar, name, username, bio, isFollowing, id } = props;
  return (
    <div class="flex gap-4 rounded-none">
      <div class="flex-none">
        <div class="avatar flex-none">
          <div class="w-11 h-11 rounded-full">
            <img src={avatar.url} width={44} height={44} />
          </div>
        </div>
      </div>
      <div class="flex-1">
        <div class="flex justify-between">
          <div>
            <div class="font-bold">
              <Link href={`/${username}/`}>{name}</Link>
            </div>
            <div class="leading-4 text-sm opacity-60">@{username}</div>
          </div>
          <FollowUnfollow otherUserId={id} isFollowing={isFollowing} />
        </div>
        {bio && <p class="mt-2">{bio}</p>}
      </div>
    </div>
  );
});
